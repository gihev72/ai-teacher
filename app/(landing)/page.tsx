import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Footer from "./_components/footer";
import Features from "./_components/features";

export default function Home() {
  return (
    <div className="h-full flex flex-col ">
      <div className="flex-1">
        <Navbar />
        <Hero />
        <Features />
      </div>

      <Footer />
    </div>
  );
}
