import { FiClipboard, FiEdit2, FiGithub, FiHome, FiMail } from "react-icons/fi";
import { NavItem, ResponsiveNavItem } from "../types/NavItem";

export const navItems = [
  {
    href: "/",
    icon: FiHome,
  },
  {
    href: "/blog",
    icon: FiEdit2,
  },
  {
    href: "/projects",
    icon: FiClipboard,
  },
  {
    isExternal: true,
    href: "mailto:marcoscianziogamero@gmail.com",
    icon: FiMail,
  },
  {
    isExternal: true,
    href: "https://github.com/marcoscianzio",
    icon: FiGithub,
  },
] as NavItem[];

export const responsiveNavItems = [
  {
    sectionName: "Marcos Cianzio",
    items: [
      {
        label: "common:home",
        href: "/",
        icon: FiHome,
      },
      {
        label: "Blog",
        href: "/blog",
        icon: FiEdit2,
      },
      {
        label: "common:projects",
        href: "/projects",
        icon: FiClipboard,
      },
    ],
  },
  {
    sectionName: "Social",
    items: [
      {
        label: "Email",
        isExternal: true,
        href: "mailto:marcoscianziogamero@gmail.com",
        icon: FiMail,
      },
      {
        label: "Github",
        isExternal: true,
        href: "https://github.com/marcoscianzio",
        icon: FiGithub,
      },
    ],
  },
] as ResponsiveNavItem[];
