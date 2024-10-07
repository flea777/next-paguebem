// components/Navbar.tsx

'use client'

import { useState } from 'react';
import Link from 'next/link';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#EDF5EC] text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        <Link href="/" className="text-2xl font-bold hover:text-[#578F47]">
          Logo
        </Link>
      
          {/* Hamburger */}

        <button
          className="text-white block sm:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>


        <section
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:items-center sm:space-x-6`}
        >
          <Link href="/sobre" className="block mt-4 sm:mt-0 hover:text-gray-400">
            Quem somos
          </Link>
          <Link href="/solucoes" className="block mt-4 sm:mt-0 hover:text-gray-400">
            Soluções
          </Link>
          <Link href="/planos" className="block mt-4 sm:mt-0 hover:text-gray-400">
            Planos
          </Link>
          <Link href="/contato" className="block mt-4 sm:mt-0 hover:text-gray-400">
            Contato
          </Link>
          <Link href="/depoimentos" className="block mt-4 sm:mt-0 hover:text-gray-400">
            Depoimentos
          </Link>
        </section>

      </div>
    </nav>
  );
}
