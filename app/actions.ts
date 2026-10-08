"use server";

export type EnquiryState = { status: "idle" | "ok" | "error"; message: string };

/**
 * Enquiry handler. Set ENQUIRY_WEBHOOK_URL (e.g. a Zapier/Make hook or your own endpoint)
 * to deliver enquiries. Until then the form says plainly that it isn't connected, rather
 * than pretending to send.
 */
export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  if (formData.get("company")) return { status: "ok", message: "Thanks." }; // honeypot

  const get = (k: string) => String(formData.get(k) ?? "").trim();
  const data = {
    name: get("name"), phone: get("phone"), email: get("email"), postcode: get("postcode"),
    service: get("service"), urgency: get("urgency"), message: get("message"),
  };
  if (!data.name || !data.phone || !data.message) {
    return { status: "error", message: "Please add your name, phone number and a few words about the problem." };
  }

  const hook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!hook) {
    return { status: "error", message: "Online enquiries aren’t switched on yet. Please call us instead." };
  }
  try {
    const res = await fetch(hook, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) });
    if (!res.ok) throw new Error(String(res.status));
    return { status: "ok", message: "Thanks. We’ve got your details and will be in touch." };
  } catch {
    return { status: "error", message: "Something went wrong sending that. Please call us instead." };
  }
}
