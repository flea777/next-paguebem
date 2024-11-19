'use client'

import { useState, useEffect } from 'react';
import Logo from './Logo';
import { FaBars, FaTimes } from 'react-icons/fa';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import Link from 'next/link';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import InfoNavBar from './InfoNavbar';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  const handleScrollOrNavigate = (to: string) => {
    if (pathname !== '/') {
      router.push(`/#${to}`);
    } else {
      document.getElementById(to)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 p-4 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-gradient-to-r from-[#2D4416] via-[#39670B] to-[#71AA37]'
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          {isScrolled ? <Image src="/logo_principal_horizontal.png" alt='Logo' width={150} height={150}/> : <Logo />}
        </div>

        <div className="hidden lg:flex items-center space-x-6 ml-10">
          <InfoNavBar textColor={isScrolled ? 'text-green-800' : 'text-white'} hoverColor="hover:text-green-600" />
        </div>

        <div className="hidden lg:flex items-center space-x-4 ml-auto">
          <ButtonPrimary text="ACESSAR CONTA" href='https://www.paguebembrasil.com.br/entrar'/>
          <ButtonSecondary text="CRIAR CONTA" href='https://www.paguebembrasil.com.br/cadastrar' />
        </div>

        <button
          className={`lg:hidden ml-4 p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 ${
            isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-end z-40 lg:hidden"
          onClick={(e) => e.target === e.currentTarget && toggleMenu()}
        >
          <div 
            className="min-h-screen w-full sm:w-80 bg-green-900 p-6 shadow-xl animate-in slide-in-from-right"
          >
            <div className="flex justify-end mb-6">
              <button
                className="p-2 text-white rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                onClick={toggleMenu}
                aria-label="Fechar menu"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col space-y-4">
                {/* Links do menu mobile usando ScrollLink */}
                <ScrollLink
                  to="solucao"
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="px-4 py-2 text-white font-bold rounded-md hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => handleScrollOrNavigate('solucao')}
                >
                  Soluções
                </ScrollLink>

                <ScrollLink
                  to="planos"
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="px-4 py-2 text-white font-bold rounded-md hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => handleScrollOrNavigate('planos')}
                >
                  Planos
                </ScrollLink>

                <ScrollLink
                  to="testimonial"
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="px-4 py-2 text-white font-bold rounded-md hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => handleScrollOrNavigate('testimonial')}
                >
                  Depoimentos
                </ScrollLink>

                <Link 
                  href="/consultores" 
                  className="px-4 py-2 text-white font-bold rounded-md hover:bg-white/10 transition-colors"
                  onClick={toggleMenu}
                >
                  Consultores
                </Link>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/20">
                <ButtonPrimary text="ACESSAR CONTA" href='https://www.paguebembrasil.com.br/entrar'/>
                <ButtonSecondary text="CRIAR CONTA" href='https://www.paguebembrasil.com.br/cadastrar' />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}