"use client";

import { useState, useRef, useEffect } from "react";
import { useLang } from "@/lib/language-context";

const WHATSAPP = "998946642222";
const TELEGRAM = "https://t.me/semtravel";

type Message = { from: "bot" | "user"; text: string };

const quickRepliesUz = ["Turlar narxi?", "Viza yordam?", "Dubai touri?", "Turkiya touri?"];
const quickRepliesRu = ["Цены на туры?", "Помощь с визой?", "Тур в Дубай?", "Тур в Турцию?"];

const botRepliesUz: Record<string, string> = {
  "Turlar narxi?": "Narxlar yo'nalish va sanaga qarab farq qiladi. Aniq narx uchun WhatsApp yoki Telegram orqali bog'laning — 15 daqiqada javob beramiz! 🤝",
  "Viza yordam?": "Ha, biz 40+ mamlakat uchun viza olishda yordam beramiz. Hujjatlar tayyorlash, ariza topshirish — hammasini biz hal qilamiz. Bog'laning! ✅",
  "Dubai touri?": "Dubai turlari: 5 tun, 2 kishi — $680 dan boshlab. Barcha narsalar kiradi: parvoz, mehmonxona, transfer. Bron qilaylikmi? 🌆",
  "Turkiya touri?": "Antalya, Kemer, Bodrum — Toshkentdan charter parvozlar! 7 tun, All Inclusive — $450 dan. Sanangizni ayting, joy bron qilamiz! 🏖️",
};

const botRepliesRu: Record<string, string> = {
  "Цены на туры?": "Цены зависят от направления и даты. Для точной цены напишите нам в WhatsApp или Telegram — ответим за 15 минут! 🤝",
  "Помощь с визой?": "Да, помогаем с визами в 40+ стран. Подготовка документов, подача заявки — всё берём на себя. Свяжитесь с нами! ✅",
  "Тур в Дубай?": "Туры в Дубай: 5 ночей, 2 человека — от $680. Включено: перелёт, отель, трансфер. Оформим? 🌆",
  "Тур в Турцию?": "Анталья, Кемер, Бодрум — чартеры из Ташкента! 7 ночей, All Inclusive — от $450. Скажите дату, забронируем! 🏖️",
};

export default function AiChat() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = lang === "uz" ? quickRepliesUz : quickRepliesRu;
  const botReplies = lang === "uz" ? botRepliesUz : botRepliesRu;

  const greeting = lang === "uz"
    ? "Salom! 👋 Men SEM Travel AI konsultantiman. Qanday yordam bera olaman?"
    : "Здравствуйте! 👋 Я AI-консультант SEM Travel. Чем могу помочь?";

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: "bot", text: greeting }]);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function sendMessage(text: string) {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = botReplies[text] || (lang === "uz"
        ? "Savolingiz uchun rahmat! Mutaxassisimiz tez orada siz bilan bog'lanadi. WhatsApp yoki Telegram orqali ham yozishingiz mumkin! 😊"
        : "Спасибо за вопрос! Наш специалист свяжется с вами. Также можете написать в WhatsApp или Telegram! 😊");
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 900);
  }

  const waMsg = lang === "uz"
    ? "Salom! SEM Travel AI konsultant orqali murojaat qildim."
    : "Здравствуйте! Обращаюсь через AI-консультант SEM Travel.";

  return (
    <>
      {/* Chat bubble */}
      {open && (
        <div className="fixed z-50 bottom-[148px] right-4 md:bottom-[170px] md:right-4"
          style={{ width: 300, maxHeight: "65vh", display: "flex", flexDirection: "column",
            boxShadow: "0 8px 40px rgba(0,0,0,0.18)", borderRadius: "18px 18px 4px 18px" }}>
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3" style={{ background: "linear-gradient(135deg, #0057A8, #003F7A)" }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.18)" }}>🤖</div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm">SEM Travel AI</p>
              <p className="text-xs font-medium" style={{ color: "#4ADE80" }}>
                {lang === "uz" ? "● Onlayn" : "● Онлайн"}
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white text-xl leading-none">×</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-white" style={{ minHeight: 180, maxHeight: 280 }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className="px-3 py-2 rounded-xl text-sm leading-relaxed max-w-[85%]"
                  style={m.from === "user"
                    ? { background: "#0057A8", color: "#fff", borderRadius: "12px 12px 4px 12px" }
                    : { background: "#F3F4F6", color: "#111827", borderRadius: "12px 12px 12px 4px" }}>
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-xl text-sm" style={{ background: "#F3F4F6", color: "#6B7280" }}>
                  <span className="animate-pulse">●●●</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="px-3 pt-2 flex flex-wrap gap-1.5 bg-white">
            {quickReplies.map((q) => (
              <button key={q} onClick={() => sendMessage(q)}
                className="text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors hover:opacity-80"
                style={{ background: "#EFF6FF", color: "#0057A8" }}>
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2 p-3 bg-white border-t border-gray-100">
            <input value={input} onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder={lang === "uz" ? "Savol yozing..." : "Напишите вопрос..."}
              className="flex-1 text-sm px-3 py-2 rounded-lg outline-none"
              style={{ background: "#F3F4F6", border: "none" }} />
            <button onClick={() => sendMessage(input)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white flex-shrink-0"
              style={{ background: "#0057A8" }}>➤</button>
          </div>

          {/* Contact buttons */}
          <div className="flex gap-2 px-3 pb-3 bg-white">
            <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMsg)}`}
              target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-xs font-bold py-2 rounded-lg text-white"
              style={{ background: "#25D366" }}>
              💬 WhatsApp
            </a>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-xs font-bold py-2 rounded-lg text-white"
              style={{ background: "#229ED9" }}>
              ✈️ Telegram
            </a>
          </div>
        </div>
      )}

      {/* FAB button */}
      <button onClick={() => setOpen(!open)}
        className="fixed z-50 flex items-center justify-center rounded-full text-white transition-transform active:scale-90 hover:scale-105 bottom-20 right-[76px] md:right-4 md:bottom-[104px]"
        style={{ width: 58, height: 58,
          background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)",
          boxShadow: "0 4px 20px rgba(0,87,168,0.5)" }}
        aria-label="AI Konsultant">
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
        <span className="text-2xl">{open ? "×" : "🤖"}</span>
      </button>
    </>
  );
}
