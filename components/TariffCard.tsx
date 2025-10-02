import React from "react";

interface TariffCardProps {
  title: string;
  price: string;
  features: string[];
}

export default function TariffCard({ title, price, features }: TariffCardProps) {
  return (
    <div className="bg-gradient-to-b from-black/90 to-red-950 border border-red-600 rounded-xl shadow-lg hover:shadow-red-600/30 p-6 w-80 transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-red-400 font-semibold mb-4">от {price}</p>
      <ul className="space-y-2 text-gray-300 text-sm">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-green-400">✔</span> {feature}
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition">
        Выбрать тариф
      </button>
    </div>
  );
}
