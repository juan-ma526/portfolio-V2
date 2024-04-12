"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: 0 }} transition={{ duration: 1 }}>
      <div className="h-full flex flex-col md:gap-24 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image */}
        <div className="h-[40%] md:h-[60%] lg:h-[80%] md:w-2/3 lg:w-1/2 relative flex items-center justify-center md:m-auto lg:m-auto">
          <Image src="/photoProfile2.png" alt="Imagen Home" fill={true} className="rounded-full z-20 absolute" />
        </div>
        {/* Text container*/}
        <div className="h-[60%] md:h-[40%] lg:h-full lg:w-1/2 flex flex-col gap-4 items-center justify-center text-black text-wrap  break-word">
          {/* Titulo */}
          <h1 className="text-4xl md:text-6xl font-bold">Fullstack Developer</h1>
          {/* Descripcion */}
          <p className="md:text-lg text-sm leading-6 md:leading-8">
            Como Fullstack Developer, poseo conocimientos en JavaScript, MongoDB y PostgreSQL, junto con herramientas
            como Express y Node para construir distintas API. Mi experiencia en React, Next y CSS, junto con mi
            capacidad para trabajar en equipo y mi enfoque en la mejora continua, me convierten en un desarrollador
            versátil y adaptable. Apasionado por los retos, me mantengo actualizado y comprometido con la excelencia en
            cada proyecto.
          </p>
          <div className="w-full flex justify-center items-center gap-4 mb-2">
            <Link href="CV_JuanMartinPerez.pdf" download="CV_JuanMartinPerez.pdf" target="_blank">
              <button className="p-3 rounded-lg text-flush-orange-500  border-2 border-flush-orange-600 bg-white hover:text-flush-orange-700 hover:border-flush-orange-700 ">
                Descarga CV
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="p-3 rounded-lg bg-gradient-to-b from-flush-orange-500 to-flush-orange-600 text-white hover:from-flush-orange-600 hover:to-flush-orange-700">
                Trabajos
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-3 rounded-lg  text-flush-orange-500  border-2 border-flush-orange-600 bg-white hover:text-flush-orange-700 hover:border-flush-orange-700">
                Contacto
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
