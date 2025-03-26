import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Banka Fırsatları",
  description: "Banka fırsatlarını keşfedin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div suppressHydrationWarning>
          {children}
        </div>
      </body>
    </html>
  );
}
