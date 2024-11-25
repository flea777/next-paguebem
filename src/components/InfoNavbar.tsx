'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface InfoNavBarProps {
  textColor?: string;
  hoverColor?: string;
}

export default function InfoNavBar({ textColor = 'text-white', hoverColor = 'hover:text-green-600' }: InfoNavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleScrollOrNavigate = (to: string) => {
    // Quando estamos na home, fazemos scroll normal, se não, navegamos para a seção
    if (pathname === '/') {
      document.getElementById(to)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push(`/#${to}`);
    }
  };

  return (
    <main className="flex items-center justify-center w-full">
      {/* Links da navbar */}
      <section className={`flex ${isOpen ? 'flex-col' : 'space-x-4'} items-center w-full md:w-auto`}>
        {/* Soluções */}
        <div
          onClick={() => handleScrollOrNavigate('solucao')}
          className={`${textColor} ${hoverColor} px-3 py-2 text-me font-bold cursor-pointer`}
        >
          Soluções
        </div>

        {/* Planos */}
        <div
          onClick={() => handleScrollOrNavigate('planos')}
          className={`${textColor} ${hoverColor} px-3 py-2 text-me font-bold cursor-pointer`}
        >
          Planos
        </div>

        {/* Depoimentos */}
        <div
          onClick={() => handleScrollOrNavigate('testimonial')}
          className={`${textColor} ${hoverColor} px-3 py-2 text-me font-bold cursor-pointer`}
        >
          Depoimentos
        </div>

        {/* Consultores */}
        <a
          href="/consultores"
          className={`${textColor} ${hoverColor} px-3 py-2 text-me font-bold`}
        >
          Consultores
        </a>
      </section>

      {/* Botão de menu responsivo */}
      <section className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </section>
    </main>
  );
}
