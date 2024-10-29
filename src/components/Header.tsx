'use client'

import { useState, useEffect } from 'react';
import InfoNavBar from './InfoNavbar';
import Logo from './Logo';
import LogoSecondary from './1. Logo_Principal_Horizontal_Pague_Bem_Brasil.png'; // Nova logo ao rolar a página
// import SocialMedia from './SocialMedia';
import { FaBars, FaTimes } from 'react-icons/fa';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Efeito para monitorar a rolagem da página
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
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 p-4 flex items-center justify-between transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-gradient-to-r from-[#2D4416] via-[#39670B] to-[#71AA37]'
      }`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center">
          {isScrolled ? <img src="./1. Logo_Principal_Horizontal_Pague_Bem_Brasil.png" alt='' width={150} height={150}/> : <Logo />} {/* Alternar logo */}
        </div>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center space-x-6 ml-10">
          {/* <InfoNavBar />  */}
          <InfoNavBar textColor={isScrolled ? 'text-green-800' : 'text-white'} hoverColor="hover:text-green-600" />
        </div>

        {/* Botões de Ação */}
        <div className="hidden lg:flex items-center space-x-4 ml-auto">
          <ButtonPrimary text="ACESSAR CONTA" />
          <ButtonSecondary text="CRIAR CONTA" />
        </div>
      </div>

      {/* Botão de Menu para telas pequenas */}
      <button
        className={`lg:hidden focus:outline-none ${
          isScrolled ? 'text-gray-900' : 'text-white'
        }`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <div className="bg-green-900 bg-opacity-90 p-6 rounded-lg max-h-screen w-4/5 md:w-1/3 flex flex-col items-center justify-center">
            <button
              className="text-white self-end focus:outline-none"
              onClick={toggleMenu}
              aria-label="Fechar menu"
            >
              <FaTimes size={24} />
            </button>

            <div className="mt-4 space-y-4 text-center flex flex-col items-center">
              {/* Links de navegação */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <Link href="/quem-somos" className="px-3 py-2 text-sm font-bold text-white">
                  Quem somos
                </Link>
                <Link href="/solucoes" className="px-3 py-2 text-sm font-bold text-white">
                  Soluções
                </Link>
                <Link href="/planos" className="px-3 py-2 text-sm font-bold text-white">
                  Planos
                </Link>
                <Link href="/contato" className="px-3 py-2 text-sm font-bold text-white">
                  Contato
                </Link>
                <Link href="/depoimentos" className="px-3 py-2 text-sm font-bold text-white">
                  Depoimentos
                </Link>
              </div>

              {/* Botões de ação */}
              <ButtonPrimary text="ACESSAR CONTA" />
              <ButtonSecondary text="CRIAR CONTA" />
            </div>
          </div>
        </div>
      )}

    </nav>
  );
}
