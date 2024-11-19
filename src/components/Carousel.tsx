'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ButtonPrimary from "./ButtonPrimary";

interface Companies {
  id: number;
  name: string;
  imgUrl: string;
}

export default function Carousel() {
  const [isPaused, setIsPaused] = useState(false);

  const companies: Companies[] = [
    { id: 1, name: 'Cardeal', imgUrl: '/cardeal.png'},
    { id: 2, name: 'Cesar School', imgUrl: '/cesar_school.png'},
    { id: 3, name: 'Colegio Souza Leao', imgUrl: '/colegio_souza_leao.png'},
    { id: 4, name: 'Ferreira Costa', imgUrl: '/ferreira_costa.png'},
    { id: 5, name: 'Focus', imgUrl: '/focus.png'},
    { id: 6, name: 'Neoenergia', imgUrl: '/neoenergia.png'},
    { id: 7, name: 'Net Jacarei', imgUrl: '/net_jacarei.png'},
    { id: 8, name: 'Reclame Aqui', imgUrl: '/reclame_aqui.webp'},
    { id: 9, name: 'Sebrae', imgUrl: '/sebrae.png'},
    { id: 10, name: 'Senac', imgUrl: '/senac.png'},];

  
  return (
    <main className="flex flex-col justify-center items-center overflow-hidden mb-12 bg-backgroundGray p-5 gap-5" id="carousel">

      <h2 className="text-2xl text-center font-bold mb-5 text-testimonialTitleGreen">
        Empresas que confiam na Pague Bem Brasil
      </h2>

      <motion.div
        className="flex space-x-4n max-w-7xl"
        initial={{ x: 0 }}
        animate={{ x: isPaused ? 0 : "-100%" }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity, repeatType: "loop" }}
        whileHover={{ scale: 1.1 }}
        >
        {companies.map((company) => (
          <section
          key={company.id}
          className="rounded-lg p-4 w-60 h-40 flex-shrink-0 flex flex-col items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>

            <div className="relative w-32 h-24">
                <Image
                  src={company.imgUrl}
                  alt={`Logo ${company.name}`}
                  fill
                  className="object-contain"
                  priority
                  />
            </div>
      </section>
        ))}
      </motion.div>
      <div className="flex justify-center items-center w-full mt-6">
      <ButtonPrimary text="FALAR COM CONSULTOR" href="/consultores" className="w-full sm:w-auto"/>
      </div>
    </main>
  );
}