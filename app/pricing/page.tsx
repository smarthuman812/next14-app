"use client";

import TariffCard from "@/components/TariffCard";
import Glow from "@/components/Glow";
import { useTranslation } from "@/lib/i18n";

/**
 * Pricing page.  Displays three tariff cards with icons and descriptions.
 * Each card links to the request form with a preselected plan parameter.
 */
export default function PricingPage() {
  const { t } = useTranslation();
  const tariffs = [
    {
      key: "test",
      icon: "/images/devil-detective.png",
    },
    {
      key: "referrals",
      icon: "/images/devil-referrals.png",
    },
    {
      key: "clients",
      icon: "/images/devil-speaker.png",
    },
  ];
  return (
    <section className="relative py-20">
      <Glow className="w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center uppercase">
          {t("pricing.title")}
        </h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tariffs.map((tariff) => {
            const title = t(`pricing.${tariff.key}.title`);
            const description = t(`pricing.${tariff.key}.description`);
            const features: string[] = (t(
              `pricing.${tariff.key}.features`
            ) as unknown) as any;
            const featureList = Array.isArray(features) ? features : [];
            return (
              <TariffCard
                key={tariff.key}
                plan={tariff.key}
                title={title}
                description={description}
                icon={tariff.icon}
                features={featureList}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}