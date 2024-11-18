'use client'

import Link from 'next/link'
import { useState } from 'react';

interface InfoNavBarProps {
  textColor?: string;
  hoverColor?: string;
}


export default function InfoNavBar({ textColor = 'text-white', hoverColor = 'hover:text-green-600' }: InfoNavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex items-center justify-center">

      <section className="flex space-b">
        <div className="flex items-center justify-center">
          <Link href="/quem-somos" className={`${textColor} ${hoverColor} px-3 py-2 text-sm font-bold`}>
            Quem somos
          </Link>
          <Link href="/solucoes" className={`${textColor} ${hoverColor} px-3 py-2 text-sm font-bold`}>
            Soluções
          </Link>
          <Link href="/planos" className={`${textColor} ${hoverColor} px-3 py-2 text-sm font-bold`}>
            Planos
          </Link>
          <Link href="/contato" className={`${textColor} ${hoverColor} px-3 py-2 text-sm font-bold`}>
            Contato
          </Link>
          <Link href="/depoimentos" className={`${textColor} ${hoverColor} px-3 py-2 text-sm font-bold`}>
            Depoimentos
          </Link>
          <Link href="/consultores" className="px-3 py-2 text-sm font-bold text-white">
                  Consultores
                </Link>
        </div>
      </section>

      <section className="flex items-center sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </section>
      
    </main>
  );
}
