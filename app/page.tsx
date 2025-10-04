"use client";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Glow from "@/components/Glow";
import { useTranslation } from "@/lib/i18n";

/**
 * Home page.  Renders the hero section and the three service cards defined
 * in the specification.  All text is internationalised via the i18n hook.
 */
export default function HomePage() {
  const { t } = useTranslation();
  const services = [
    {
      key: "gambling",
      image: "/images/devil-gambling.png",
    },
    {
      key: "onlyfans",
      image: "/images/devil-onlyfans.png",
    },
    {
      key: "commerce",
      image: "/images/devil-commerce.png",
    },
  ];
  return (
    <>
      <Hero />
      {/* Services section */}
      <section className="relative py-20">
        {/* Glow under the cards */}
        <Glow className="w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t("services.title") ?? "Наши сферы"}
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => {
              const title = t(`services.${svc.key}.title`);
              const desc = t(`services.${svc.key}.description`);
              const bullets: string[] = (t(
                `services.${svc.key}.bullets`
              ) as unknown) as any;
              // t() returns a string for simple keys; when used on arrays we need to
              // ensure we get the array.  If translation missing we fall back to
              // an empty array.
              const bulletList = Array.isArray(bullets) ? bullets : [];
              return (
                <ServiceCard
                  key={svc.key}
                  image={svc.image}
                  title={title}
                  description={desc}
                  bullets={bulletList}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}