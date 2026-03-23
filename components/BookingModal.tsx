"use client";

import { useState, useEffect, useRef } from "react";
import { X, CheckCircle } from "lucide-react";
import { useLang } from "@/lib/language-context";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourTitle?: string;
}

const TELEGRAM_USERNAME = "SEMTravelUz";
const WHATSAPP_NUMBER = "998712000000";

export default function BookingModal({
  isOpen,
  onClose,
  tourTitle = "",
}: BookingModalProps) {
  const { t, lang } = useLang();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    tour: tourTitle,
    date: "",
    people: "2",
    comment: "",
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Sync tourTitle prop when it changes
  useEffect(() => {
    setForm((f) => ({ ...f, tour: tourTitle }));
  }, [tourTitle]);

  // Focus first input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 100);
      setSubmitted(false);
      setErrors({});
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (form.name.trim().length < 2) newErrors.name = t.booking.errors.name;
    if (!/^\+?[\d\s\-]{9,15}$/.test(form.phone.trim()))
      newErrors.phone = t.booking.errors.phone;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text =
      lang === "uz"
        ? `Bron so'rov:\nIsm: ${form.name}\nTelefon: ${form.phone}\nTur: ${form.tour || "—"}\nSana: ${form.date || "—"}\nKishilar: ${form.people}\nIzoh: ${form.comment || "—"}`
        : `Заявка на бронирование:\nИмя: ${form.name}\nТелефон: ${form.phone}\nТур: ${form.tour || "—"}\nДата: ${form.date || "—"}\nЧеловек: ${form.people}\nКомментарий: ${form.comment || "—"}`;

    window.open(
      `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  const whatsappText =
    lang === "uz"
      ? `Salom! Tur bron qilmoqchiman: ${form.tour || "turlar haqida ma'lumot"}`
      : `Здравствуйте! Хочу забронировать тур: ${form.tour || "информация о турах"}`;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.booking.title}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-primary px-6 py-5">
            <h2 className="text-white font-bold text-xl">{t.booking.title}</h2>
            <p className="text-blue-200 text-sm mt-0.5">{t.booking.subtitle}</p>
            <button
              onClick={onClose}
              aria-label={t.booking.close}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            {submitted ? (
              <div className="text-center py-6">
                <CheckCircle size={52} className="text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 text-lg">
                  {t.booking.success}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{t.booking.successSub}</p>
                <button
                  onClick={onClose}
                  className="mt-5 btn-primary w-full"
                >
                  {t.booking.close}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.booking.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.booking.namePlaceholder}
                    className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors ${errors.name ? "border-red-400" : "border-gray-300"}`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.booking.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={t.booking.phonePlaceholder}
                    className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors ${errors.phone ? "border-red-400" : "border-gray-300"}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Tour (pre-filled, editable) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.booking.tour}
                  </label>
                  <input
                    type="text"
                    value={form.tour}
                    onChange={(e) => setForm({ ...form, tour: e.target.value })}
                    placeholder={t.booking.tour}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>

                {/* Date + People */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.booking.date}
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.booking.people}
                    </label>
                    <select
                      value={form.people}
                      onChange={(e) => setForm({ ...form, people: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {t.common.person}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.booking.comment}
                  </label>
                  <textarea
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    placeholder={t.booking.commentPlaceholder}
                    rows={2}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary w-full text-sm py-3">
                  {t.booking.submit}
                </button>

                {/* WhatsApp alternative */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-sm py-3 text-center block"
                >
                  {t.booking.whatsapp}
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
