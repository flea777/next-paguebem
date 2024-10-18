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
    <nav className="flex items-center justify-around absolute inset-x-0 top-0 z-50 bg-slate-100 shadow-md p-4">
      <Logo />
      
      {/* Botão de Menu para telas pequenas */}
      <button
        className="block lg:hidden text-green-500 focus:outline-none"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Menu Desktop */}
      <div className="hidden lg:flex items-center space-x-6">
        <InfoNavBar />
        <ButtonPrimary text="Criar Conta" />
        <ButtonSecondary text="Acessar Conta" />
        <SocialMedia />
      </div>

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
            <div className="mt-4 space-y-4 text-center">
              <InfoNavBar />
            </div>
            <div className="mt-4">
              <SocialMedia />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
