import "../styles/globals.css";
import { I18nProvider } from "@/lib/i18n";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EVILS",
  description: "EVILS — хаос рождает силу. Маркетинговая платформа с оплатой через Plisio и интеграцией Telegram.",
  icons: {
    icon: "/images/logo-evils.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen flex flex-col">
        <I18nProvider>
          <NavBar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}