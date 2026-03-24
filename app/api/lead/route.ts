import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export async function POST(req: NextRequest) {
  try {
    const { name, phone, message, type, source } = await req.json();

    if (!phone) {
      return NextResponse.json({ error: "Phone required" }, { status: 400 });
    }

    const lines: string[] = ["🔔 *Yangi so'rov — SEM Travel*", ""];
    if (type) lines.push(`📋 *Xizmat:* ${type}`);
    lines.push(`👤 *Ism:* ${name || "Ko'rsatilmagan"}`);
    lines.push(`📞 *Telefon:* ${phone}`);
    if (message) lines.push(`💬 *Xabar:* ${message}`);
    lines.push("");
    lines.push(`🌐 *Manba:* ${source || "semtraveluz.vercel.app"}`);

    const text = lines.join("\n");

    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("Telegram error:", err);
      return NextResponse.json({ error: "Telegram error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
