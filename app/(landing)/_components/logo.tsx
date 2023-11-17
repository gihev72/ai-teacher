import { LibraryBig } from "lucide-react";
import IconSvg from "./icon-svg";

const Logo = () => {
  return (
    <div className="flex items-center justify-center text-muted">
      <IconSvg className="h-10 w-10" />
      <h1 className="ml-2 hidden sm:block text-xl font-bold">AI Teacher</h1>
    </div>
  );
};

export default Logo;
