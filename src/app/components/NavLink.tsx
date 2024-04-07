"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  url: string;
  title: string;
}

export const NavLink = ({ url, title }: Props) => {
  const pathname = usePathname();
  return (
    <Link className={`rounded p-1 ${pathname === url && "bg-black text-white"}`} href={url}>
      {title}
    </Link>
  );
};
