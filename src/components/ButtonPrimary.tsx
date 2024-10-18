'use client'

import { motion } from 'framer-motion';

interface ButtonPrimaryProps {
  text: string;
  onClick?: () => void;
}

export default function ButtonPrimary({ text, onClick }: ButtonPrimaryProps) {
  return (
    <motion.button
      transition={{ 
        duration: 0.4, // Duração reduzida para uma animação mais rápida
        ease: "easeInOut", 
        repeat: Infinity, 
        repeatType: "loop",
        repeatDelay: 1.4 // Delay entre repetições
      }}
      animate={{ x: [0, 20, -20, 0] }} // Aumentando a amplitude do movimento
      onClick={onClick}
      className="p-2 w-auto text-white font-bold bg-green-600 rounded-3xl border border-solid border-neutral-800 hover:bg-green-600 transform hover:scale-110 transition-all duration-300 ease-in-out"
    >
      {text}
    </motion.button>
  );
}
