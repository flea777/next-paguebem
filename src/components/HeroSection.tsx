'use client'

import React from 'react';
import { motion } from 'framer-motion';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import Image from 'next/image';


export default function HeroSection() {
  return (
    
    <main className="bg-gradient-to-r from-[#2D4416] via-[#39670B] to-[#71AA37] md:flex md:flex-col md:items-center md:p-5 sm:flex sm:flex-col">


      <section className="w-full h-full flex flex-col md:flex-row items-center justify-between px-4 mt-10 ">

          <motion.div 
              className="w-full md:w-1/2 text-white p-6"
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
                <ButtonPrimary text="FALAR COM CONSULTOR" href="/consultores"/>
                <ButtonSecondary text="CONHECER OS PLANOS" />
              </motion.div>


            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 mt-10 md:mt-0 relative flex justify-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image src="/banner.png" alt="Woman with laptop" className="w-4/5 sm:w-3/4 md:w-full" width={1390} height={1430}/>

            </motion.div>

        </section>




    </main>
  )
};

