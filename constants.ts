import {
  LayoutDashboard,
  Calculator,
  FlaskConical,
  Atom,
  Settings,
  LucideIcon,
} from "lucide-react";

interface IFeatures {
  label: string;
  icon: LucideIcon;
  href: string;
  color?: string;
}
export const features: IFeatures[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Math",
    icon: Calculator,
    href: "/math",
    color: "text-violet-500",
  },
  {
    label: "Chemistery",
    icon: FlaskConical,
    href: "/chemistery",
    color: "text-pink-700",
  },
  {
    label: "Physics",
    icon: Atom,
    href: "/Physics",
    color: "text-orange-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];
