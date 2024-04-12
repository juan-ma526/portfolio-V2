"use client";
import { motion } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const msj = " Bienvenido";

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (!textArea || !email) {
      setError(true);
      router.refresh();
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, form.current, {
          publicKey: `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`,
        })
        .then(
          () => {
            setSuccess(true);
            setError(false);
          },
          (error) => {
            setError(true);
            setSuccess(false);
          }
        );
    } else {
      console.log("Form es nulo");
    }
  };

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: 0 }} transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* text container */}
        <div className="h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl md:text-6xl">
          {msj.split("").map((letra, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
            >
              {letra}
            </motion.span>
          ))}
          <span>😊</span>
        </div>
        {/* form container */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-2/3 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-4 md:p-24"
        >
          <span className="text-lg md:text-2xl">A Martin Perez:</span>
          <span className="text-sm md:text-lg lg:text-sm">Mensaje:</span>
          <textarea
            onChange={(e) => setTextArea(e.target.value)}
            name="user_message"
            rows={6}
            className="p-9 md:p-5 lg:p-0 w-full bg-transparent border-b-2 border-b-black outline-none resize-none text-base md:text-xl lg:text-2xl"
          />
          <span className="text-sm md:text-lg lg:text-sm">Mi direccion de email es:</span>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none text-base md:text-xl lg:text-2xl"
          />
          <button className="bg-flush-orange-500 rounded font-semibold text-white p-4">Enviar</button>
          {success && (
            <div className="flex justify-center items-center gap-2 text-gray-600 font-normal text-base md:text-xl p-4 rounded-3xl bg-flush-orange-100 border-2 border-flush-orange-400">
              <Image src="/success.png" alt="Success" width={40} height={40} />
              <span>Tu mensaje fue enviado con exito!!</span>
            </div>
          )}
          {error && (
            <div className="flex justify-center items-center gap-2 text-gray-600 font-normal text-base md:text-xl p-4 rounded-3xl bg-flush-orange-100 border-2 border-flush-orange-400">
              <Image src="/wrong.png" alt="Error" width={40} height={40} />
              <span>LLena el campo de mensaje y email Por Favor!!</span>
            </div>
          )}
        </form>
      </div>
    </motion.div>
  );
}
motion;
