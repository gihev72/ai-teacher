import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <p className="text-muted font-semibold text-3xl p-4">
        Welcome to AI Teacher
      </p>
    </div>
  );
}
