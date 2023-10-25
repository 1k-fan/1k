"use client";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center p-12 bg-[#f2f2f2] min-h-screen">
      <Header />
      {/* <div>1k</div> */}
      <button onClick={() => router.push("/jb/marketplace")}>
        Get Started
      </button>
    </main>
  );
}
