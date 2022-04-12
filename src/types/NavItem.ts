import { IconType } from "react-icons";

export interface NavItem {
  isExternal?: boolean;
  href: string;
  icon: IconType;
  label: string;
}

export interface ResponsiveNavItem {
  sectionName: string;
  items: NavItem[];
}
