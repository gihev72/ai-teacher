"use client";
import Link from "next/link";
import IconSvg from "@/app/(landing)/_components/icon-svg";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { features } from "@/constants";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col py-4 h-full space-y-4 text-white bg-[#111827]">
      <div className="px-3 py-2 flex-1">
        <Link
          href="/dashboard"
          className="flex items-center pl-3 mb-14 space-x-1"
        >
          <div className="relative">
            <IconSvg className="h-10 w-10" />
          </div>
          <h1 className={cn("font-bold text-2xl", montserrat.className)}>
            AI Teach
          </h1>
        </Link>
        <div className="space-y-1">
          {features.map((feature) => (
            <Link
              href={feature.href}
              key={feature.href}
              className={cn(
                "text-sm group flex p-3 w-full items-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === feature.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <feature.icon className={cn(feature.color, "h-5 w-5 mr-3")} />
                {feature.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
