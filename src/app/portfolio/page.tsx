"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { items } from "../data";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-88%"]);

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: 0 }} transition={{ duration: 1 }}>
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-4 items-center justify-center text-6xl md:text-8xl text-center">
          Mis Trabajos
          {/* Scroll biografia */}
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
        </div>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-flush-orange-900 to-flush-orange-800" />
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-flush-orange-800 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white md:w-[70%] md:h-full md:m-auto lg:w-[90%]">
                  <h1 className="text-xl font-bold md:text-4xl md:mt-32 lg:mt-24 xl:mt-20 lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-[23rem] h-[16rem] md:w-[39rem] md:h-[30rem] lg:w-[800px] lg:h-[350px] xl:w-[983px] xl:h-[401px]">
                    <div className="w-[17rem] h-[14rem] md:w-[32rem] md:h-[26rem] lg:w-[42rem] lg:h-[20rem] xl:w-[50rem] xl:h-[23rem] relative ">
                      <Image className="rounded-lg" src={item.img} fill alt="Imagen projecto" />
                    </div>
                    <div className="absolute flex flex-col gap-2 right-0 top-0 w-16 h-52 md:h-[26rem] xl:h-[23rem]">
                      {item.icons.map((icon, index) => (
                        <div key={index} className="relative w-10 h-10">
                          <Image src={icon} alt="Icono" fill className="rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="w-80 md:w-[32rem] lg:w-[676px] lg:text-lg xl:w-[804px]">{item.desc}</p>
                  <div className="flex items-center justify-center">
                    {item.links.map((link, index) => (
                      <Link target="_blank" key={index} href={link.path}>
                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg xl:p-2 xl:font-medium bg-white text-gray-600 font-semibold m-4 xl:m-2 rounded">
                          {link.title}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl text-flush-orange-600">Tenes algun Projecto?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-[24rem] h-[24rem] md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
            </defs>
            <text fill="#f06c06">
              <textPath xlinkHref="#circlePath" className="text-xl">
                FullStack Developer - M.E.R.N - P.E.R.N
              </textPath>
            </text>
          </motion.svg>
          <Link
            className="w-24 h-24 md:w-32 md:h-32 absolute top-0 left-0 right-0 bottom-0 m-auto bg-flush-orange-600 text-white rounded-full flex items-center justify-center "
            href="/contact"
          >
            Contratame
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
