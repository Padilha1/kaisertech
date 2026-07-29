const markdownAcceptPattern = /(?:^|,\s*)text\/markdown(?:\s*;|,|$)/i;
const fileExtensionPattern = /\.[a-z0-9]{2,8}$/i;

const discoveryLinks = (markdownPath) =>
  [
    `</.well-known/agent-discovery.json>; rel="service-desc"; type="application/json"`,
    `</llms.txt>; rel="service-doc"; type="text/plain"`,
    `</sitemap.xml>; rel="sitemap"; type="application/xml"`,
    `<${markdownPath}>; rel="alternate"; type="text/markdown"`,
  ].join(", ");

const markdownPathForRequest = (url) => {
  const pathname = url.pathname;
  const normalizedPathname = pathname === "/" ? "/pt-BR/" : pathname;
  const cleanPathname = normalizedPathname.endsWith("/") ? normalizedPathname.slice(0, -1) : normalizedPathname;
  const markdownPath = cleanPathname || "/pt-BR";
  const lastSegment = markdownPath.split("/").at(-1) ?? "";

  if (fileExtensionPattern.test(lastSegment)) return null;

  return `${markdownPath}.md`;
};

export default async (request, context) => {
  const url = new URL(request.url);
  const markdownPath = markdownPathForRequest(url);

  if (!markdownPath) return context.next();

  const acceptsMarkdown = markdownAcceptPattern.test(request.headers.get("accept") ?? "");

  if (request.method === "GET" && acceptsMarkdown) {
    const markdownResponse = await fetch(new URL(markdownPath, url));

    if (markdownResponse.ok) {
      const headers = new Headers(markdownResponse.headers);
      headers.set("content-type", "text/markdown; charset=UTF-8");
      headers.set("link", discoveryLinks(markdownPath));
      headers.append("vary", "Accept");

      return new Response(markdownResponse.body, {
        status: 200,
        headers,
      });
    }
  }

  const response = await context.next();
  response.headers.set("link", discoveryLinks(markdownPath));
  response.headers.append("vary", "Accept");
  return response;
};

export const config = {
  path: "/*",
  excludedPath: [
    "/assets/*",
    "/fonts/*",
    "/tshirt/*",
    "/*.css",
    "/*.js",
    "/*.map",
    "/*.png",
    "/*.webp",
    "/*.jpg",
    "/*.jpeg",
    "/*.ico",
    "/*.xml",
    "/*.txt",
    "/*.md",
  ],
};
