import React from "react";
import MobileSidebar from "./mobile-sidebar";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="w-full flex justify-end">
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
