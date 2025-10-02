import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Background from "../components/Background";

export const metadata: Metadata = {
  title: "EVILS",
  description: "Сила в хаосе. Запускаем продукты, сжигаем барьеры, делаем результат.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-black text-white relative">
        <Background />
        <Header />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
