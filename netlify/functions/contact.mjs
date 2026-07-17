const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return json(200, { ok: true });
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  if (!process.env.RESEND_API_KEY) {
    return json(500, { error: "Missing Resend configuration" });
  }

  let payload;

  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid payload" });
  }

  if (payload.website) {
    return json(200, { ok: true });
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const company = String(payload.company || "").trim();
  const painType = String(payload.painType || "").trim();
  const pain = String(payload.pain || "").trim();

  if (!name || !emailRegex.test(email) || !pain) {
    return json(400, { error: "Missing required fields" });
  }

  const to = process.env.CONTACT_TO_EMAIL || "contato@kaisertec.com.br";
  const from = process.env.RESEND_FROM_EMAIL || "Kaiser Tech <onboarding@resend.dev>";
  const subject = `Nova dor enviada pelo site${company ? ` - ${company}` : ""}`;
  const text = [
    "Novo lead pelo site Kaiser Tech",
    "",
    `Nome: ${name}`,
    `Email: ${email}`,
    `Empresa: ${company || "Nao informado"}`,
    `Tipo de dor: ${painType || "Nao informado"}`,
    "",
    "Dor:",
    pain,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #15131c; line-height: 1.6;">
      <h1 style="margin: 0 0 16px;">Novo lead pelo site Kaiser Tech</h1>
      <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(company || "Nao informado")}</p>
      <p><strong>Tipo de dor:</strong> ${escapeHtml(painType || "Nao informado")}</p>
      <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />
      <p style="white-space: pre-line;"><strong>Dor:</strong><br />${escapeHtml(pain)}</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Resend error", error);
    return json(502, { error: "Email provider failed" });
  }

  return json(200, { ok: true });
}
