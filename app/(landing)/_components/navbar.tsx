import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <Logo />
      <div>
        <Button size="sm" className="font-semibold  hover:bg-transparent">
          <SignInButton>Get Start</SignInButton>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
