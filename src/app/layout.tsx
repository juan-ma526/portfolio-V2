import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const robo = Roboto({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={robo.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-blue-50 to-orange-200">
          <div className="h-24 ">
            <Navbar />
          </div>
          <div className="h-[calc(100vh - 6rem)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
