"use client";
import Header from "@/components/Header";
import Marketplace from "@/components/Marketplace";
import { useActiveAddress } from "arweave-wallet-kit";

export default function Page() {
  const address = useActiveAddress();
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-[#f2f2f2] text-black">
      <Header />
      <Marketplace />
    </main>
  );
}
