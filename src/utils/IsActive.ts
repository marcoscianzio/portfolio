import { useRouter } from "next/router";

export const isActive = (href: string) => {
  const router = useRouter();

  const isActive = router.pathname === href;

  return isActive;
};
