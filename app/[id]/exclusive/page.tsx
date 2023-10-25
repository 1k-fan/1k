"use client";
import Exclusive from "@/components/Exclusive";
import Header from "@/components/Header";
import Restricted from "@/components/Restricted";
import { useConnection } from "arweave-wallet-kit";

export default function Page() {
  const { connected, connect, disconnect } = useConnection();
  return (
    <main className="flex min-h-screen flex-col w-full p-12 bg-[#f2f2f2] text-black">
      <div className="w-full flex justify-end">
        <Header />
      </div>
      {/* CONNECTED AND TOKEN GATED HERE */}
      {connected ? <Exclusive /> : <Restricted />}
    </main>
  );
}
