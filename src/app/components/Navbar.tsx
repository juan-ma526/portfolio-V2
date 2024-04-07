"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavLink } from "./NavLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-black text-lg">
      <div className="hidden md:flex gap-4 w-1/3 justify-center">
        {/* Links */}

        {links.map((link, index) => (
          <NavLink key={index} url={link.url} title={link.title} />
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
          <span className="text-white mr-1">Martin</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.dev</span>
        </Link>
      </div>
      {/* Social Media */}
      <div className="hidden md:flex gap-4 w-1/3 justify-center">
        <Link href="https://github.com/juan-ma526">
          <Image src="/github.png" alt="Logo github" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/juan-ma526/">
          <Image src="/linkedin.png" alt="Logo linkedin" width={24} height={24} />
        </Link>
        <Link href="https://www.youtube.com/channel/UC3TfUrSkOdYDMKmoODiQoww">
          <Image src="/youtube.png" alt="Logo youtube" width={32} height={32} />
        </Link>
      </div>
      {/* responsive menu */}
      <div className="md:hidden">
        {/*Menu button  */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
        >
          <div className="w-10 h-1 bg-white rounded "></div>
          <div className="w-10 h-1 bg-white rounded "></div>
          <div className="w-10 h-1 bg-white rounded "></div>
        </button>
        {/* Menu list */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link, index) => (
              <Link key={index} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
