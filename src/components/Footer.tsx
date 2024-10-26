import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center p-2 bg-white text-xs mt-auto">
      <div className="flex items-center">
        <span>Pague Bem Brasil ©.</span>
        <a
          href="https://www.facebook.com/paguebembrasil"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1 text-gray-800 text-base"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/paguebembrasil/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1 text-gray-800 text-base"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <span>
          CNPJ: <strong>21.052.746/0001-19</strong>
        </span>
        <a
          href="https://www.paguebembrasil.com.br/assets/assets/files/Termos-de-uso-e-Politica-de-Privacidade.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 no-underline ml-2"
        >
          Termos de Uso e Política de Privacidade
        </a>
      </div>
    </footer>
  );
};

export default Footer;
