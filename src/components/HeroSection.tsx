'use client'

import React from 'react';
import { motion } from 'framer-motion';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import SocialMedia from './SocialMedia';

export default function HeroSection() {
  return (
    
    <main className="w-full bg-gradient-to-r from-[#2D4416] via-[#39670B] to-[#71AA37] md:flex flex-col items-center h-auto md:h-full p-5">

      <SocialMedia />

      <section className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 ">
        <motion.div 
          className="w-full md:w-1/2 text-white p-6 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="sm:text-2xl md:text-3xl font-bold mb-4 tex-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Quem é a Pague Bem Brasil?
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl mb-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <strong>Automatizamos</strong> o seu setor de cobrança, apoiamos o seu cliente em toda a <strong>Jornada de Pagamento</strong> e reduzimos a sua inadimplência.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <ButtonPrimary text="FALAR COM CONSULTOR" />
            <ButtonSecondary text="CONHECER OS PLANOS" />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 mt-10 md:mt-0 relative flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/banner.png" alt="Woman with laptop" className="w-4/5 sm:w-3/4 md:w-full" />

          {/* Animated icons */}
          <motion.div className="absolute top-1/4 left-1/4"
            animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <img src="/ícone_pague_bem_conta.png" alt="Icon 1" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </motion.div>
          <motion.div className="absolute top-1/2 right-1/4"
            animate={{ y: [0, 10, 0], rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <img src="/ícone_pague_bem_recupera.png" alt="Icon 2" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"/>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
};

