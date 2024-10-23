'use client'

import { useState } from 'react';
import InfoNavBar from './InfoNavbar';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import { FaBars, FaTimes } from 'react-icons/fa';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#2D4416] via-[#39670B] to-[#71AA37] absolute inset-x-0 top-0 z-50 p-4 flex items-center justify-between">

      
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center space-x-6 ml-10">
          <InfoNavBar />
        </div>

       
        <div className="hidden lg:flex items-center space-x-4 ml-auto">
        <ButtonPrimary text="ACESSAR CONTA" />
        <ButtonSecondary text="CRIAR CONTA" />
        </div>
      </div>

      {/* Botão de Menu para telas pequenas */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-40">
          <div className="bg-slate-100 w-64 p-6 flex flex-col items-center rounded-l-3xl">
            <button
              className="text-green-500 self-end focus:outline-none"
              onClick={toggleMenu}
              aria-label="Fechar menu"
            >
              <FaTimes size={24} />
            </button>
            <div className="mt-4 space-y-4 text-center flex flex-col items-center">
              <InfoNavBar />
              <ButtonPrimary text="ACESSAR CONTA" />
              <ButtonSecondary text="CRIAR CONTA" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
