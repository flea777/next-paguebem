'use client';

import { Link as ScrollLink } from 'react-scroll';
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
    if (pathname !== '/') {
      router.push(`/#${to}`);
    } else {
      document.getElementById(to)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="flex items-center justify-center">
      {/* Links da navbar */}
      <section className={`flex ${isOpen ? 'flex-col' : 'space-x-4'} items-center`}>
        {/* Soluções */}
        <ScrollLink
          to="solucao"
          smooth={true}
          duration={800}
          offset={-70} // Ajusta para considerar headers fixos
          className={`${textColor} ${hoverColor} px-3 py-2 text-me font-bold cursor-pointer`}
          onClick={() => handleScrollOrNavigate('solucao')}
        >
          Soluções
        </ScrollLink>

        {/* Planos */}
        <ScrollLink
          to="planos"
          smooth={true}
          duration={800}
          offset={-70}
          className={`${textColor} ${hoverColor} px-3 py-2 text-me font-bold cursor-pointer`}
          onClick={() => handleScrollOrNavigate('planos')}
        >
          Planos
        </ScrollLink>

        {/* Depoimentos */}
        <ScrollLink
          to="testimonial"
          smooth={true}
          duration={800}
          offset={-70}
          className={`${textColor} ${hoverColor} px-3 py-2 text-me font-bold cursor-pointer`}
          onClick={() => handleScrollOrNavigate('testimonial')}
        >
          Depoimentos
        </ScrollLink>

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
