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

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Nao informado");
  const safePainType = escapeHtml(painType || "Nao informado");
  const safePain = escapeHtml(pain).replaceAll("\n", "<br />");
  const replySubject = encodeURIComponent(`Re: ${subject}`);

  const html = `
    <div style="margin: 0; padding: 0; background: #f7f5f2;">
      <div style="padding: 32px 16px; font-family: Arial, Helvetica, sans-serif; color: #23212c;">
        <div style="max-width: 640px; margin: 0 auto; overflow: hidden; border: 1px solid rgba(35, 33, 44, 0.14); border-radius: 24px; background: #ffffff; box-shadow: 0 24px 70px rgba(35, 33, 44, 0.12);">
          <div style="padding: 28px 28px 30px; background: #23212c;">
            <div style="display: inline-block; margin: 0 0 18px; padding: 7px 10px; border-radius: 999px; background: rgba(252, 65, 3, 0.14); color: #fc4103; font-size: 11px; font-weight: 800; letter-spacing: 1.4px; text-transform: uppercase;">
              Kaiser Tech
            </div>
            <h1 style="margin: 0; color: #f7f5f2; font-size: 30px; line-height: 1.15; font-weight: 700; letter-spacing: -0.4px;">
              Nova dor enviada pelo site
            </h1>
            <p style="margin: 12px 0 0; color: rgba(247, 245, 242, 0.74); font-size: 15px; line-height: 1.55;">
              Um lead pediu contato para avaliar uma oportunidade.
            </p>
          </div>

          <div style="padding: 28px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
              <tr>
                <td style="padding: 0 0 12px;">
                  <div style="padding: 16px; border: 1px solid rgba(35, 33, 44, 0.1); border-radius: 16px; background: #fbfaf8;">
                    <p style="margin: 0 0 5px; color: rgba(35, 33, 44, 0.52); font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">Nome</p>
                    <p style="margin: 0; color: #23212c; font-size: 17px; line-height: 1.4; font-weight: 700;">${safeName}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding: 0 0 12px;">
                  <div style="padding: 16px; border: 1px solid rgba(35, 33, 44, 0.1); border-radius: 16px; background: #fbfaf8;">
                    <p style="margin: 0 0 5px; color: rgba(35, 33, 44, 0.52); font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">Email</p>
                    <p style="margin: 0; color: #23212c; font-size: 16px; line-height: 1.4; font-weight: 700;">
                      <a href="mailto:${safeEmail}?subject=${replySubject}" style="color: #fc4103; text-decoration: none;">${safeEmail}</a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding: 0 0 12px;">
                  <div style="padding: 16px; border: 1px solid rgba(35, 33, 44, 0.1); border-radius: 16px; background: #fbfaf8;">
                    <p style="margin: 0 0 5px; color: rgba(35, 33, 44, 0.52); font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">Empresa</p>
                    <p style="margin: 0; color: #23212c; font-size: 16px; line-height: 1.4; font-weight: 700;">${safeCompany}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding: 0;">
                  <div style="padding: 16px; border: 1px solid rgba(35, 33, 44, 0.1); border-radius: 16px; background: #fbfaf8;">
                    <p style="margin: 0 0 5px; color: rgba(35, 33, 44, 0.52); font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">Tipo de dor</p>
                    <p style="margin: 0; color: #23212c; font-size: 16px; line-height: 1.4; font-weight: 700;">${safePainType}</p>
                  </div>
                </td>
              </tr>
            </table>

            <div style="margin: 22px 0 0; padding: 20px; border: 1px solid rgba(252, 65, 3, 0.26); border-left: 5px solid #fc4103; border-radius: 18px; background: #fff4ef;">
              <p style="margin: 0 0 8px; color: #36255c; font-size: 12px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">Dor relatada</p>
              <p style="margin: 0; color: #23212c; font-size: 17px; line-height: 1.65;">${safePain}</p>
            </div>

            <div style="margin: 24px 0 0;">
              <a href="mailto:${safeEmail}?subject=${replySubject}" style="display: inline-block; padding: 14px 18px; border-radius: 999px; background: #fc4103; color: #15131c; font-size: 14px; font-weight: 800; text-decoration: none;">
                Responder lead
              </a>
            </div>
          </div>

          <div style="padding: 18px 28px; border-top: 1px solid rgba(35, 33, 44, 0.1); background: #f7f5f2;">
            <p style="margin: 0; color: rgba(35, 33, 44, 0.58); font-size: 12px; line-height: 1.5;">
              Enviado pelo formulario da Kaiser Tech em kaisertec.com.br.
            </p>
          </div>
        </div>
      </div>
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
