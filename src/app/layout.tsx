import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { TransitionProvider } from "./components/TransitionProvider";

const robo = Roboto({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio Web de Martin Perez, Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={robo.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
