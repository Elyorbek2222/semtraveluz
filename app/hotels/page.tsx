export default function HotelsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pb-20 pt-24 text-center">
      <div className="text-5xl mb-4">🏨</div>
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Mehmonxonalar</h1>
      <p className="text-gray-500 max-w-xs">Ushbu bo'lim tez orada to'ldiriladi. Hozircha operatorlarimiz bilan bog'laning.</p>
      <a href="https://wa.me/998946642222" target="_blank" rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold"
        style={{ background: "#25D366" }}>
        💬 WhatsApp orqali so'rov
      </a>
    </div>
  );
}
