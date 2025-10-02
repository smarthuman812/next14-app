"use client";
import DevilGambling from "./graphics/DevilGambling";
import DevilOnlyfans from "./graphics/DevilOnlyfans";
import DevilBusiness from "./graphics/DevilBusiness";

type SphereCardProps = {
  title: string;
  description: string;
  type: "gambling" | "onlyfans" | "business";
};

export default function SphereCard({ title, description, type }: SphereCardProps) {
  return (
    <div className="bg-gradient-to-b from-neutral-900 to-black rounded-xl border border-red-600 p-4 shadow-md hover:shadow-red-600/50 transition w-80">
      <div className="flex justify-center items-center mb-3">
        {type === "gambling" && <DevilGambling />}
        {type === "onlyfans" && <DevilOnlyfans />}
        {type === "business" && <DevilBusiness />}
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-neutral-300">{description}</p>
    </div>
  );
}
