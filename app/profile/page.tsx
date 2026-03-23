export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pb-20 pt-24 text-center">
      <div className="text-5xl mb-4">👤</div>
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Shaxsiy kabinet</h1>
      <p className="text-gray-500 max-w-xs mb-6">Bronlaringizni ko'rish va boshqarish uchun U-ON kabinetga kiring.</p>
      <iframe
        src="https://semtravel.u-on.ru/api/enter.php"
        style={{ border: 0 }} width="260" height="220"
        title="U-ON Личный кабинет" className="rounded-2xl shadow-lg" />
    </div>
  );
}
