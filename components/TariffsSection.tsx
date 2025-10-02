import React from "react";
import TariffCard from "./TariffCard";

export default function TariffSection() {
  return (
    <section className="mt-16 px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-10">Тарифы</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <TariffCard
          title="ТЕСТ"
          price="1000$"
          features={[
            "Анализ ниши",
            "Создание 3–5 креативов",
            "Запуск на 7 дней",
            "Полный отчет",
          ]}
        />
        <TariffCard
          title="РЕФЕРАЛЫ"
          price="1500$"
          features={[
            "Прогрев аудитории",
            "Работа с инфлюенсерами",
            "Оптимизация воронки",
            "Еженедельная отчетность",
          ]}
        />
        <TariffCard
          title="КЛИЕНТЫ"
          price="1800$"
          features={[
            "Глубокий анализ ЦА",
            "Масштабирование РК",
            "A/B тесты",
            "Поддержка 24/7",
          ]}
        />
      </div>
    </section>
  );
}
