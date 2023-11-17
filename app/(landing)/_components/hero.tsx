import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex flex-col items-center justify-center ">
        <h1>Welcome to AI Teacher.</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffab3e] to-[#ff56b6] mt-8 text-3xl w-[60%]">
          <h3>Learning is easer, faster, and more enjoyable now.</h3>
        </div>
      </div>
      <p className="text-sm md:text-lg font-light text-zinc-400">
        Boost your learning 10X!
      </p>
      <div>
        <Link href="/sign-up">
          <Button variant="outline" className="text-primary">
            Start Learning For Free
          </Button>
        </Link>
      </div>
      <p className="text-xs md:text-sm font-normal text-zinc-400">
        No credit card required
      </p>
    </section>
  );
};

export default Hero;
