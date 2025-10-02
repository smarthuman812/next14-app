import Devil1 from "./icons/Devil1";
import Devil2 from "./icons/Devil2";
import Devil3 from "./icons/Devil3";

export default function BrandSection() {
  return (
    <section className="py-16 text-center text-white bg-black">
      <h2 className="text-3xl font-bold mb-10 text-red-500">Брендинг</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        <div className="p-6 border border-red-600 rounded-2xl bg-black hover:bg-red-900/20 transition">
          <Devil1 size={100} />
          <p className="mt-4">Devil Capsule</p>
        </div>
        <div className="p-6 border border-red-600 rounded-2xl bg-black hover:bg-red-900/20 transition">
          <Devil2 size={100} />
          <p className="mt-4">Team Power</p>
        </div>
        <div className="p-6 border border-red-600 rounded-2xl bg-black hover:bg-red-900/20 transition">
          <Devil3 size={100} />
          <p className="mt-4">Hacker Devil</p>
        </div>
      </div>
    </section>
  );
}
