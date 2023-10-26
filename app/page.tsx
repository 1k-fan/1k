"use client";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center p-12 bg-[#f2f2f2] min-h-screen">
      <Header home={true} />
      {/* <div>1k</div> */}{" "}
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src="/1k.png" width={500} height={500} alt="logo" />
        <h1 className="text-5xl font-bold">1K Fans</h1>
      </div>
      <button className="text-2xl rounded-lg bg-gray-900 text-white py-3 px-10 mt-5 hover:cursor-pointer hover:scale-105 transition-all" onClick={() => router.push("/ts/marketplace")}>
        Get Started
      </button>
    </main>
  );
}
