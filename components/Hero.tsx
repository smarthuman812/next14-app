import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-16 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-8">EVILS</h1>
      <p className="text-gray-300 mb-12">
        Сила в хаосе. Запускаем продукты, сжигаем барьеры, делаем результат.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Гемблинг */}
        <div className="bg-gradient-to-b from-black to-red-900 rounded-lg border border-red-600 p-6 hover:scale-105 transition">
          <Image
            src="/images/devil-gambling.png"
            alt="Гемблинг"
            width={300}
            height={300}
            className="mx-auto"
          />
          <h3 className="text-xl font-bold text-white mt-4">Гемблинг</h3>
          <p className="text-gray-300 text-sm mt-2">
          </p>
        </div>

        {/* OnlyFans */}
        <div className="bg-gradient-to-b from-black to-red-900 rounded-lg border border-red-600 p-6 hover:scale-105 transition">
          <Image
            src="/images/devil-onlyfans.png"
            alt="OnlyFans"
            width={300}
            height={300}
            className="mx-auto"
          />
          <h3 className="text-xl font-bold text-white mt-4">OnlyFans</h3>
          <p className="text-gray-300 text-sm mt-2">
          </p>
        </div>

        {/* Товарный бизнес */}
        <div className="bg-gradient-to-b from-black to-red-900 rounded-lg border border-red-600 p-6 hover:scale-105 transition">
          <Image
            src="/images/devil-business.png"
            alt="Товарный бизнес"
            width={300}
            height={300}
            className="mx-auto"
          />
          <h3 className="text-xl font-bold text-white mt-4">Товарный бизнес</h3>
          <p className="text-gray-300 text-sm mt-2">
          </p>
        </div>
      </div>
    </section>
  );
}
