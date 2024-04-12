"use client";

import { motion, useInView, useScroll } from "framer-motion";
import { Brain } from "../components/Brain";
import { useRef } from "react";
import { skills } from "../data";
import { ExperienceListItem } from "../components/ExperienceListItem";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const estudiosRef = useRef<HTMLDivElement>(null);
  const isEstudiosRefInView = useInView(estudiosRef, { margin: "-100px" });

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: 0 }} transition={{ duration: 1 }}>
      {/* Containter */}
      <div className="h-full overflow-y-scroll lg:flex" ref={containerRef}>
        {/* Text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-20 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:pr-0 w-full xl:w-1/2">
          {/* Biografia container*/}
          <div className="flex flex-col gap-12 justify-center">
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.1 }}
              className="text-white"
            >
              Scroll hacia abajo
            </motion.span>
            <h1 className="font-bold text-2xl">BIOGRAFIA</h1>
            <p className="text-lg leading-8">
              Estudie Ingenieria en Sistemas 3 años en la FCEFyN de Córdoba, ahí conocí la programación dando mis
              primeros pasos con C++ y decidí dedicarme a ella. Enpece mis estudios en Ingles, sabiendo la importancia
              del idioma en una carrera como programacion, llegando a completar 4 niveles de los 6 disponibles, para
              obtener una certificacion en la Facultad de Lenguas de B1+. En septiembre del 2022 participe en un
              Bootcamp de programacion de la empresa Plataforma 5. Curse durante 4 meses 10 horas diarias de lunes a
              viernes, aprendiendo tecnologias y metodologias tanto de Backend como de Frontend. En el Bootcamp, hubo 3
              proyectos finales, una TMDB aplicando lo aprendido durante la parte teorica y tecnina, despues la
              realizacion de un Ecommerce con 4 compañeros, para reforzar las habilidades blandes, y aprender como
              trabaja un equipo con metas semanales y diarias, usando Trello, y metodologias Scrum. El ultimo proyecto
              trabaje realizando una practica profesional por 2 meses para la empresa Cruce, en colaboración con 3
              compañeros haciendo pair programming con ellos, lo que fortaleció mis habilidades aun mas mis habilidades
              tecnicas y blandas, como la comunicación y la resolucion de problemas que iban apareciendo. En dicha
              experiencia laboral realizamos una app de turnos con seguimiento de un encargado de la empresa Cruce que
              nos establecia metas semanales a cumplir para ellos. Al terminar el Bootcamp, eh estado mejorando mis
              habilidades técnicas, en CSS, SASS, REDUX, NEXTJS, TAILWIND CSS y BOOSTRAP, realizando cursos en distintas
              plataformas, y realizando app para mantenerme programando constantemente. Soy una persona activa y
              apasionada por la programacion, estoy constantemente intentando mejorar mis habilidades tecnicas y blandas
              y sumarme nuevas herramientas para utilizar en mi dia a dia. Además, disfruto trabajar en equipo y
              enfrentar desafíos que me permitan encontrar soluciones a los problemas. Confío en mis habilidades como
              desarrollador y estoy comprometido con el crecimiento profesional continuo. Estoy entusiasmado por
              contribuir con mi experiencia y conocimientos en un entorno dinámico donde pueda seguir expandiendo mis
              capacidades técnicas.
            </p>
            <span className="italic">Martin Perez, FullStack Developer</span>
            <div className="self-end">
              <svg width="145" height="125" viewBox="0 0 525 585" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M194.078 390.873C202.202 359.521 193.995 320.059 190.707 288.474C190.425 285.766 187.561 260.469 185.528 253.322C180.266 234.826 190.26 291.491 192.538 310.585C200.905 380.711 203.109 437.404 145.624 486.334C126.437 502.665 103.243 518.039 82.7347 532.406C62.2321 546.769 31.2894 576.796 5.71307 583.273C-1.50264 585.1 4.78303 567.478 8.68771 561.141C40.7729 509.069 85.4029 462.417 126.478 417.756C237.587 296.946 356.091 183.175 467.431 62.5447C479.369 49.6111 491.065 36.4572 502.832 23.3681C509.164 16.3253 512.829 4.59991 522.051 2.44363C524.795 1.80192 520.51 7.87893 519.431 10.4827"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M171.988 299.519C158.624 308.307 168.383 323.816 173.672 301.392C182.979 261.941 182.46 220.434 189.658 180.575C192.24 166.275 204.749 76.0438 233.68 74.1101C239.506 73.7207 241.974 83.3338 242.697 89.1276C246.442 119.134 232.309 167.399 225.693 192.389C205.731 267.791 177.464 342.432 167.203 420.16C163.759 446.256 157.543 511.261 205.413 486.209C244.432 465.79 256.798 427.016 282.06 394.803"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M201.191 293.903C199.221 297.203 193.39 304.591 202.106 299.852C213.689 293.555 222.173 282.621 228.959 271.615C240.339 253.155 233.241 247.417 235.802 264.41C238.094 279.623 249.959 272.702 256.748 264.929C261.235 259.792 269.014 236.375 269.29 242.382C269.903 255.726 285.594 240.315 287.677 238.201C299.545 226.152 317.065 203.639 310.183 185.161C305.899 173.657 303.856 178.347 309.829 162.967C320.296 136.017 331.342 109.95 335.776 81.099C336.477 76.5403 340.33 65.338 336.14 67.267C329.881 70.1491 329.11 79.1578 326.313 85.4562C318.227 103.665 311.864 122.617 303.527 140.711C269.599 214.339 242.173 268.791 193.682 335.711C169.088 369.653 108.044 443.185 66.1155 469.497C17.0333 500.297 118.691 365.356 154.526 319.819C232.398 220.864 233.701 223.236 309.278 131.029C325.527 111.204 373.805 52.4179 353.593 68.1821C338.33 80.0858 324.861 94.1898 311.618 108.305C271.642 150.914 199.116 234.699 166.538 282.339C153.071 302.033 137.525 322.06 132.749 345.435C131.061 353.695 141.448 364.933 149.836 364.082C187.622 360.248 294.046 294.135 316.505 285.291"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
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
          {/*Skils container  */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: -300 }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILLS List */}
            <motion.div
              initial={{ x: -300 }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="capitalize rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-flush-orange-600"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
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
          {/* experience container */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={estudiosRef}>
            <motion.h1
              initial={{ x: -300 }}
              animate={isEstudiosRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCIA
            </motion.h1>
            {/* Experience list */}
            <motion.div initial={{ x: -300 }} animate={isEstudiosRefInView ? { x: 0 } : {}} className="">
              {/* list item */}
              <ExperienceListItem
                title={"Ingenieria en Sistemas"}
                desc={"Curse 3 años de la carrera de Ingenieria en Sistemas,"}
                date={"2015/2018"}
                direccion={"left"}
                place="FCEFyN/Cordoba"
              />
              {/* list item */}
              <ExperienceListItem
                title={"Idioma Ingles"}
                desc={
                  "Curse 2 años intensivos de Ingles, haciendo 4 niveles de los 6 disponibles, llegando a tener un nivel de B1+"
                }
                date={"2018/2020"}
                direccion={"right"}
                place="Facultad de Lenguas/Cordoba"
              />
              {/* list item */}
              <ExperienceListItem
                title={"Bootcamp de Programacion"}
                desc={
                  "Curse un bootcamp de programacion, 4 meses intensivos, cursando una cantidad superior a las 895 horas, aprendi las tecnologias que me permiten desempeñarme como fullstack developer."
                }
                date={"10/2022 - 12/2022"}
                direccion={"left"}
                place="Plataforma 5"
              />
              <ExperienceListItem
                title={"Curso de CSS"}
                desc={
                  "Realice un curso de CSS para reforzar mis conocimientos sobre el estilo y como usar correctamente CSS."
                }
                date={"02/2023 - 04/2023"}
                direccion={"right"}
                place="Udemy"
              />
              <ExperienceListItem
                title={"Curso de React"}
                desc={
                  "Realice un curso de React ampliando mis conocimientos, aprendiendo a usar Redux, Context, y reforzando mis conocimientos sobre React."
                }
                date={"05/2023 - 07/2023"}
                direccion={"left"}
                place="Udemy"
              />
              <ExperienceListItem
                title={"Curso de Next JS"}
                desc={
                  "Realice un curso de Next 13.1 aprendiendo las ventajas y como usar las herramientas que dispone Next, como el server side y mejorar el SEO de las paginas, tambien pude actualizar mis conocimientos de Next a la version 14, mejorando mis conocimientos, y aprendiendo tambien como usar Server Actions, y route Api de Next."
                }
                date={"09/2023 - 04/2024"}
                direccion={"right"}
                place="Udemy"
              />
            </motion.div>
          </div>
        </div>
        {/* Svg container */}
        <div className="hidden lg:block xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}
