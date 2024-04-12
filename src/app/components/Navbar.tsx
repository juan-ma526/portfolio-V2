"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,

      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

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
        <Link target="_blanck" href="https://github.com/juan-ma526">
          <Image src="/github.png" alt="Logo github" width={24} height={24} />
        </Link>
        <Link target="_blanck" href="https://www.linkedin.com/in/juan-ma526/">
          <Image src="/linkedin.png" alt="Logo linkedin" width={24} height={24} />
        </Link>
        <Link target="_blanck" href="https://www.youtube.com/channel/UC3TfUrSkOdYDMKmoODiQoww">
          <Image src="/youtube.png" alt="Logo youtube" width={32} height={32} />
        </Link>
      </div>
      {/* responsive menu */}
      <div className="md:hidden">
        {/*Menu button  */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-10 h-8 flex flex-col justify-between z-[100] relative"
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className={`bg-black w-10 h-1 rounded origin-left`}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className={`bg-black w-10 h-1 rounded`}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className={`bg-black w-10 h-1 rounded origin-left`}
          ></motion.div>
        </button>
        {/* Menu list */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-[50]"
          >
            {links.map((link, index) => (
              <motion.div variants={listItemVariants} key={index} className="">
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};
