'use client'

import React from 'react';
import { motion } from 'framer-motion';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';


export default function HeroSection() {
  return (
    <main 
        className="relative h-screen m-5 rounded-lg flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/Fundo_Verde_Escuro.png')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
         >


      <section className="container mx-auto px-6 relative z-10">
        {/* <motion.div
          animate={{ x: [0, 100, 0] }}
        > */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Quem é a Pague Bem Brasil?
              </motion.h1>
              <motion.p 
                className="text-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Automatizamos o seu setor de cobrança, apoiamos o seu cliente em toda a Jornada de Pagamento e reduzimos a sua inadimplência.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.button>

                  
                </motion.button>


                <ButtonPrimary text="FALAR COM CONSULTOR" />

                <ButtonSecondary text="CONHECER OS PLANOS" />
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 mt-10 md:mt-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src="/banner.png" alt="Woman with laptop" className="w-full" />
              
              {/* Animated icons */}
              <motion.div className="absolute top-1/4 left-1/4"
                animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <img src="/ícone_pague_bem_conta.png" alt="Icon 1" className="w-12 h-12" />
              </motion.div>
              <motion.div className="absolute top-1/2 right-1/4"
                animate={{ y: [0, 10, 0], rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <img src="/ícone_pague_bem_recupera.png" alt="Icon 2" className="w-12 h-12" />
              </motion.div>
              {/* Add more animated icons as needed */}
            </motion.div>
          </div>
        {/* </motion.div> */}
      </section>
    </main>
  );
};

