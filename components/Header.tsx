"use client";

export default function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black border-b border-red-800 sticky top-0 z-50">
      <div className="text-2xl font-bold text-red-500">EVILS</div>
      <nav className="hidden md:flex space-x-6 text-white">
        <button onClick={() => scrollTo("home")} className="hover:text-red-500">Главная</button>
        <button onClick={() => scrollTo("tariffs")} className="hover:text-red-500">Тарифы</button>
        <button onClick={() => scrollTo("contacts")} className="hover:text-red-500">Контакты</button>
        <button onClick={() => scrollTo("about")} className="hover:text-red-500">О нас</button>
      </nav>
    </header>
  );
}
