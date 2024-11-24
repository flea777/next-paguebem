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
    { id: 1, name: 'Cardeal', imgUrl: '/cardeal.png' },
    { id: 2, name: 'Cesar School', imgUrl: '/cesar_school.png' },
    { id: 3, name: 'Colegio Souza Leao', imgUrl: '/colegio_souza_leao.png' },
    { id: 4, name: 'Ferreira Costa', imgUrl: '/ferreira_costa.png' },
    { id: 5, name: 'Focus', imgUrl: '/focus.png' },
    { id: 6, name: 'Neoenergia', imgUrl: '/neoenergia.png' },
    { id: 7, name: 'Net Jacarei', imgUrl: '/net_jacarei.png' },
    { id: 8, name: 'Reclame Aqui', imgUrl: '/reclame_aqui.webp' },
    { id: 9, name: 'Sebrae', imgUrl: '/sebrae.png' },
    { id: 10, name: 'Senac', imgUrl: '/senac.png' },
  ];

  // Criando 50 cópias das imagens
  const extendedCompanies = Array(50).fill(companies).flat();

  return (
    <main className="flex flex-col justify-center items-center overflow-hidden mb-12 bg-backgroundGray p-5 gap-5" id="carousel">
      <h2 className="text-3xl text-center font-bold mb-5 text-testimonialTitleGreen">
        Empresas que confiam na Pague Bem Brasil
      </h2>

      <motion.div
        className="flex gap-4"
        initial={{ x: 0 }}
        animate={{
          x: isPaused ? 0 : "-100%", // Animação contínua de rolagem para a esquerda
        }}
        transition={{
          ease: "linear",
          duration: 2400, // Velocidade constante para o movimento de ida
          repeat: Infinity, // O loop será infinito, fazendo o movimento contínuo
          repeatType: "reverse", // Faz o movimento de ida e volta
        }}
        whileHover={{ scale: 1.1 }}
      >
        {/* Carrossel que se move de forma contínua */}
        <div className="flex gap-4">
          {extendedCompanies.map((company, index) => (
            <section
              key={company.id + index}
              className="rounded-lg p-4 w-64 h-40 flex-shrink-0 flex flex-col items-center justify-center"
              onMouseEnter={() => setIsPaused(true)} // Pausa o carrossel ao passar o mouse
              onMouseLeave={() => setIsPaused(false)} // Retorna a rolagem ao retirar o mouse
            >
              <div className="relative w-full h-full">
                <Image
                  src={company.imgUrl}
                  alt={`Logo ${company.name}`}
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </section>
          ))}
        </div>
      </motion.div>

      <div className="flex justify-center items-center w-full mt-6">
        <ButtonPrimary text="FALAR COM CONSULTOR" href="/consultores" className="w-full sm:w-auto" />
      </div>
    </main>
  );
}
