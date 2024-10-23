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
        duration: 0.4, 
        ease: "easeInOut", 
        repeat: Infinity, 
        repeatType: "loop",
        repeatDelay: 1.4 
      }}
      animate={{ x: [0, 20, -20, 0] }} 
      onClick={onClick}
      className="px-4 py-2 text-white font-bold bg-[#01AB0D] rounded-3xl border-none hover:bg-green-600 transform hover:scale-110 transition-all duration-300 ease-in-out"
    >
      {text}
    </motion.button>
  );
}
