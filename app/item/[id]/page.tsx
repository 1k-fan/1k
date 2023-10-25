"use client";
import Buy from "@/components/Buy";
import Header from "@/components/Header";
import { useActiveAddress } from "arweave-wallet-kit";

export default function Page() {
  const address = useActiveAddress();
  return (
    <main className="flex min-h-screen flex-col items-end p-12 bg-[#f2f2f2] text-black">
      <Header />
      <Buy />
    </main>
  );
}
