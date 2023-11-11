import { LibraryBig } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center justify-center text-muted">
        <LibraryBig className="h-12 w-12" />
        <p className="ml-2 text-xl font-bold">AI Teacher</p>
      </div>
    </nav>
  );
};

export default Navbar;
