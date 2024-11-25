'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/navigation';  // Importando o useRouter

interface Companies {
  id: number;
  name: string;
  imgUrl: string;
}

export default function Carousel() {
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter();  // Usando o router para navegação

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

  const extendedCompanies = Array(50).fill(companies).flat();

  // Função para navegar para a página de consultores
  const handleConsultorClick = () => {
    router.push('/consultores');
  };

  return (
    <main className="flex flex-col justify-center items-center overflow-hidden mb-12 bg-backgroundGray p-5 gap-5" id="carousel">
      <h2 className="text-3xl text-center font-bold mb-5 text-testimonialTitleGreen">
        Empresas que confiam na Pague Bem Brasil
      </h2>

      <motion.div
        className="flex gap-4"
        initial={{ x: 0 }}
        animate={{
          x: isPaused ? 0 : "-100%",
        }}
        transition={{
          ease: "linear",
          duration: 2400,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex gap-4">
          {extendedCompanies.map((company, index) => (
            <section
              key={company.id + index}
              className="rounded-lg p-4 w-64 h-40 flex-shrink-0 flex flex-col items-center justify-center"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={company.imgUrl}
                  alt={`Logo ${company.name}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </section>
          ))}
        </div>
      </motion.div>

      <div className="flex justify-center items-center w-full mt-6">
        {/* Usando a função handleConsultorClick para redirecionar */}
        <button
          onClick={handleConsultorClick}
          className="px-4 py-2 text-white font-bold bg-[#01AB0D] rounded-3xl border-none hover:bg-green-600 transform hover:scale-100 transition-all duration-300 ease-in-out w-full sm:w-auto"
        >
          FALAR COM CONSULTOR
        </button>
      </div>
    </main>
  );
}
