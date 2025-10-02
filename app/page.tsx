import React from "react";
import Hero from "../components/Hero"; // карточки с дьяволятами
import TariffSection from "../components/TariffsSection"; // тарифы

export default function HomePage() {
  return (
    <main>
      {/* Секция карточек */}
      <Hero />

      {/* Секция тарифов */}
      <TariffSection />
    </main>
  );
}
