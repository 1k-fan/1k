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
        <Image src="/1klogo.svg" width={500} height={500} alt="logo" />
        <h1 className="text-5xl font-bold">1k.Fans</h1>
      </div>
      <button onClick={() => router.push("/ts/marketplace")}>
        Get Started
      </button>
    </main>
  );
}
