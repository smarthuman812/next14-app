"use client";
import React from "react";

export default function Header() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-black text-red-500 border-b border-red-700 sticky top-0 z-50">
      {/* Логотип */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
        <span className="text-2xl">🔥</span>
        <span className="font-bold text-lg">EVILS</span>
      </div>

      {/* Навигация */}
      <nav className="flex gap-6">
        <button
          onClick={() => scrollToSection("hero")}
          className="hover:text-white transition"
        >
          Главная
        </button>
        <button
          onClick={() => scrollToSection("tariffs")}
          className="hover:text-white transition"
        >
          Тарифы
        </button>
      </nav>

      {/* Языковая кнопка */}
      <button className="border px-3 py-1 rounded border-red-600 hover:bg-red-600 hover:text-white transition">
        RU
      </button>
    </header>
  );
}
