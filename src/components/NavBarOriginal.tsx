
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/1. Logo_Principal_Horizontal_Pague_Bem_Brasil.png';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import SocialLinks from './SocialLinks';

export default function NavbarOriginal() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className="bg-[#EDF5EC] text-black p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold hover:text-[#578F47]">
          <Image src={Logo} alt="Pague Bem Brasil" width={200} height={50} />
        </Link>

        {/* Botão do menu hambúrguer */}
        <button
          className="text-black block sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div className="space-y-1">
            <span
              className={`block h-1 w-6 bg-gray-800 transition-transform duration-300 ease-in-out ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-gray-800 transition-opacity duration-300 ease-in-out ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-gray-800 transition-transform duration-300 ease-in-out ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </div>
        </button>

        {/* Itens do menu para telas maiores */}
        <div className="hidden sm:flex space-x-6 items-center">
          <Link href="/sobre" className="hover:text-gray-400">
            Quem somos
          </Link>
          <Link href="/solucoes" className="hover:text-gray-400">
            Soluções
          </Link>
          <Link href="/planos" className="hover:text-gray-400">
            Planos
          </Link>
          <Link href="/contato" className="hover:text-gray-400">
            Contato
          </Link>
          <Link href="/depoimentos" className="hover:text-gray-400">
            Depoimentos
          </Link>

          {/* Botões de ação */}
          <div className="flex space-x-4">
            <ButtonPrimary text="Criar Conta" />
            <ButtonSecondary text="Acessar Conta" />
          </div>

          {/* Links de redes sociais */}
          <SocialLinks />
        </div>

        {/* Menu lateral para dispositivos móveis */}
        <aside
          ref={menuRef}
          className={`fixed inset-0 bg-white sm:hidden transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
          aria-hidden={!isOpen}
        >
          <nav className="flex flex-col space-y-4 p-6">
            <Link href="/sobre" className="hover:text-gray-400" onClick={closeMenu}>
              Quem somos
            </Link>
            <Link href="/solucoes" className="hover:text-gray-400" onClick={closeMenu}>
              Soluções
            </Link>
            <Link href="/planos" className="hover:text-gray-400" onClick={closeMenu}>
              Planos
            </Link>
            <Link href="/contato" className="hover:text-gray-400" onClick={closeMenu}>
              Contato
            </Link>
            <Link href="/depoimentos" className="hover:text-gray-400" onClick={closeMenu}>
              Depoimentos
            </Link>
            <div className="flex space-x-4 mt-4">
              <ButtonPrimary text="Criar Conta" />
              <ButtonSecondary text="Acessar Conta" />
            </div>
            <SocialLinks />
          </nav>
        </aside>
      </nav>
    </header>
  );
}
