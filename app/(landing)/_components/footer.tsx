import React from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="flex items-center mt-36 w-full p-6">
      <Logo />
      <div className="flex items-center justify-between sm:ml-auto md:ml-auto md:justify-end gap-x-2 text-muted-foreground">
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-transparent hover:text-zinc-400"
        >
          Privacy Policy
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-transparent hover:text-zinc-400"
        >
          Terms & Conditions
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
