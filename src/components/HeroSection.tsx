'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <main className="bg-gradient-to-r from-[#2D4416] via-[#39670B] to-[#71AA37] flex flex-col items-center p-5">
      <section className="w-full h-full flex flex-col md:flex-row items-center justify-between px-4 mt-10">
        <motion.div 
          className="w-full md:w-1/2 text-white p-6 flex flex-col justify-center items-center md:items-start rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Quem é a Pague Bem Brasil?
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl mb-6 text-center md:text-left w-full max-w-2xl break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <strong className="text-xl md:text-2xl">Automatizamos</strong> o seu setor de cobrança, apoiamos o seu cliente em toda a <strong className="text-xl md:text-2xl">Jornada de Pagamento</strong> e reduzimos a sua inadimplência.
          </motion.p>

          <motion.div 
            className="group flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <ButtonPrimary text="FALAR COM CONSULTOR" href="/consultores" className="w-full sm:w-auto group-hover:scale-110 transition-transform duration-300" />
            <ButtonSecondary text="CONHECER OS PLANOS" href="#planos" className="w-full sm:w-auto group-hover:scale-100 transition-transform duration-300" />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 relative flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src="/banner.png" alt="Woman with laptop" className="w-4/5 sm:w-3/4 md:w-full mt-10" width={1390} height={1430}/>
        </motion.div>
      </section>
    </main>
  );
}
