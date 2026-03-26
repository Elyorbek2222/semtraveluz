"use client";

import { useState } from "react";
import { sendLead } from "@/lib/send-lead";

interface Props {
  isUz: boolean;
  title: string;
  type: string;
  source: string;
  onClose: () => void;
}

export default function LeadModal({ isUz, title, type, source, onClose }: Props) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.phone) return;
    setLoading(true);
    await sendLead({ name: form.name, phone: form.phone, email: form.email, type, source });
    setLoading(false);
    setSent(true);
    setForm({ name: "", phone: "", email: "" });
    setTimeout(() => { setSent(false); onClose(); }, 3000);
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl overflow-y-auto" style={{ maxHeight: "90vh" }}>
        {sent ? (
          <div className="text-center py-6">
            <div className="text-5xl mb-3">✅</div>
            <p className="font-extrabold text-gray-900 text-lg mb-1">
              {isUz ? "So'rovingiz qabul qilindi!" : "Заявка принята!"}
            </p>
            <p className="text-sm text-gray-500">
              {isUz ? "Menejerimiz tez orada siz bilan bog'lanadi." : "Менеджер свяжется с вами в ближайшее время."}
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-extrabold text-gray-900 text-lg">{title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  {isUz ? "Menejerimiz siz bilan bog'lanadi" : "Менеджер свяжется с вами"}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {isUz ? "Ismingiz" : "Ваше имя"}
                </label>
                <input
                  type="text"
                  placeholder={isUz ? "To'liq ism" : "Полное имя"}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ border: "1.5px solid #E5E7EB", background: "#F9FAFB" }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {isUz ? "Telefon raqamingiz *" : "Ваш телефон *"}
                </label>
                <input
                  type="tel"
                  placeholder="+998 __ ___ __ __"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ border: "1.5px solid #E5E7EB", background: "#F9FAFB" }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {isUz ? "Email (ixtiyoriy)" : "Email (необязательно)"}
                </label>
                <input
                  type="email"
                  placeholder={isUz ? "example@mail.com" : "example@mail.com"}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ border: "1.5px solid #E5E7EB", background: "#F9FAFB" }}
                />
              </div>
              <button
                type="submit"
                disabled={loading || !form.phone}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{ background: "#0057A8" }}
              >
                {loading
                  ? (isUz ? "Yuborilmoqda..." : "Отправка...")
                  : (isUz ? "📩 So'rov yuborish" : "📩 Отправить заявку")}
              </button>
              <p className="text-xs text-gray-400 text-center">
                {isUz ? "Bepul maslahat. Spam yo'q." : "Бесплатная консультация. Без спама."}
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
