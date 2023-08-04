import { IconType } from "react-icons";

export interface NavItem {
  isExternal?: boolean;
  href: string;
  icon: IconType;
  label: string;
  divider?: boolean;
}

export interface ResponsiveNavItem {
  sectionName: string;
  items: NavItem[];
}
