import type { Metadata } from "next";
import sanFranciscoPro from "next/font/local";
import "./globals.css";
import { clsx } from "clsx";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

const SFPro = sanFranciscoPro({
  src: [
    {
      path: "../../public/fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Igroom",
  description:
    "iGroom — твоя комната для игр. Пространство, где встречаются игры, творчество и люди. Создавай, исследуй, общайся — без границ и скуки.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(SFPro.className, "text-[var(--text-primary)]")}>
        <div className="max-w-2xl mx-auto overflow-hidden">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
