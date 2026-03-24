export async function sendLead(data: {
  name?: string;
  phone: string;
  message?: string;
  type?: string;
  source?: string;
}): Promise<boolean> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch {
    return false;
  }
}
