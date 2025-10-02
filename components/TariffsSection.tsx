"use client";

import Image from "next/image";

const tariffs = [
  {
    title: "ТЕСТ",
    price: "от 1000$",
    features: [
      "Анализ ниши",
      "Создание 3–5 креативов",
      "Запуск на 7 дней",
      "Полный отчет",
    ],
    image: "/images/tariffs/test.png",
  },
  {
    title: "РЕФЕРАЛЫ",
    price: "от 1500$",
    features: [
      "Прогрев аудитории",
      "Работа с инфлюенсерами",
      "Оптимизация воронки",
      "Еженедельная отчетность",
    ],
    image: "/images/tariffs/referrals.png",
  },
  {
    title: "КЛИЕНТЫ",
    price: "от 1800$",
    features: [
      "Глубокий анализ ЦА",
      "Масштабирование РК",
      "A/B тесты",
      "Поддержка 24/7",
    ],
    image: "/images/tariffs/clients.png",
  },
];

export default function TariffSection() {
  return (
    <section id="tariffs" className="py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a0000]">
      <h2 className="text-center text-3xl font-bold mb-12 text-white">Тарифы</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {tariffs.map((tariff, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#111] to-[#1c0000] p-6 rounded-xl border border-red-700 shadow-lg text-center hover:scale-105 hover:shadow-red-900 transition-transform duration-300"
          >
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src={tariff.image}
                alt={tariff.title}
                fill
                className="object-contain animate-pulse"
              />
            </div>
            <h3 className="text-xl font-bold text-white">{tariff.title}</h3>
            <p className="text-red-500 font-semibold mb-4">{tariff.price}</p>
            <ul className="text-gray-300 text-sm space-y-2 mb-6">
              {tariff.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition">
              Выбрать тариф
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
