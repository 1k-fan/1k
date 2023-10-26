import type { Metadata } from "next";
import { ArweaveWalletKit } from "arweave-wallet-kit";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "1k",
  description: "1k Fans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ArweaveWalletKit>
        <body className={`bg-[#F3F4F6]  ${inter.className}`}>{children}</body>
      </ArweaveWalletKit>
    </html>
  );
}
