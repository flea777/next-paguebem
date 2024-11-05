'use client'

import { motion } from 'framer-motion';
import Link from 'next/link'



interface ButtonPrimaryProps {
  text: string;
  href: string;
}

export default function ButtonPrimary({ text, href }: ButtonPrimaryProps) {
  const link = href ? href : "/";

  return (
    <Link href={link}>

    <motion.button
          transition={{ 
            duration: 0.4, 
            ease: "easeInOut", 
            repeat: Infinity, 
            repeatType: "loop",
            repeatDelay: 1.4 
          }}
          animate={{ x: [0, 20, -20, 0] }} 
          className="px-4 py-2 text-white font-bold bg-[#01AB0D] rounded-3xl border-none hover:bg-green-600 transform hover:scale-110 transition-all duration-300 ease-in-out"
        >
          {text}
        </motion.button>
    
    </Link>
   
  );
}
