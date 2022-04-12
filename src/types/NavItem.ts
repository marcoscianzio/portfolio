import { IconType } from "react-icons";

export interface NavItem {
  isExternal?: boolean;
  href: string;
  icon: IconType;
}

interface NavItemWithLabel extends NavItem {
  label: string;
}

export interface ResponsiveNavItem {
  sectionName: string;
  items: NavItemWithLabel[];
}
