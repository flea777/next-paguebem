'use client'


import Link from 'next/link'
import { useState } from 'react';

export default function InfoNavBar(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex items-center justify-center">
    
      {/* Logo PagueBem */}
    <section className="flex space-b">




        <div className="flex items-center justify-center">
          <Link href="/quem-somos" className="text-white hover:text-green-600 px-3 py-2 text-sm font-bold">
            Quem somos
          </Link>
          <Link href="/solucoes" className="text-white hover:text-green-600 px-3 py-2 text-sm font-bold">
            Soluções
          </Link>
          <Link href="/planos" className="text-white hover:text-green-600 px-3 py-2 text-sm font-bold">
            Planos
          </Link>
          <Link href="/contato" className="text-white hover:text-green-600 px-3 py-2 text-sm font-bold">
            Contato
          </Link>
          <Link href="/depoimentos" className="text-white hover:text-green-600 px-3 py-2 text-sm font-bold">
            Depoimentos
          </Link>
        </div>



    </section>

    {/* Buttons Criar Conta e Acessar */}
    {/* <section className="hidden sm:ml-6 sm:flex sm:items-center">
      <Link href="/criar-conta" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
        Criar conta
      </Link>
      <Link href="/acessar-conta" className="ml-4 text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
        Acessar conta
      </Link>
    </section> */}


    <div className="flex items-center sm:hidden">
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
    </div>
  </main>
  )
}



// {isOpen && (
//   <div className="sm:hidden">
//     <div className="pt-2 pb-3 space-y-1">
//       <Link href="/quem-somos" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">
//         Quem somos
//       </Link>
//       <Link href="/solucoes" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">
//         Soluções
//       </Link>
//       <Link href="/planos" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">
//         Planos
//       </Link>
//       <Link href="/contato" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">
//         Contato
//       </Link>
//       <Link href="/depoimentos" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">
//         Depoimentos
//       </Link>
//       <Link href="/criar-conta" className="block px-3 py-2 text-base font-medium text-white bg-green-500 hover:bg-green-600">
//         Criar conta
//       </Link>
//       <Link href="/acessar-conta" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">
//         Acessar conta
//       </Link>
//     </div>
//   </div>
// )}