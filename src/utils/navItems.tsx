import {
  FiClipboard,
  FiEdit2,
  FiGithub,
  FiHome,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { NavItem, ResponsiveNavItem } from "../types/NavItem";

export const navItems = [
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
  {
    label: "Linkedin",
    isExternal: true,
    href: "https://linkedin.com/in/marcos-cianzio",
    icon: FiLinkedin,
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
      {
        label: "Linkedin",
        isExternal: true,
        href: "www.linkedin.com/in/marcos-cianzio",
        icon: FiLinkedin,
      },
    ],
  },
] as ResponsiveNavItem[];
