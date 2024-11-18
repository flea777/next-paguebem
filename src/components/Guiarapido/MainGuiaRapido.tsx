// No arquivo do componente onde deseja adicionar a seção, por exemplo, GuideSection.jsx
import React from 'react';


const MainGuiarapido = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto max-w-5xl flex flex-col lg:flex-row items-center gap-8">
        {/* Texto do Guia Rápido */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Guia rápido</h2>
          <p className="text-gray-600 mb-6">
            Aqui você encontrará um vídeo com instruções simples para integrar nossos serviços ao seu sistema. Siga o passo a passo para aproveitar todas as funcionalidades da Pague Bem Brasil com facilidade e rapidez.
          </p>
          <a href="#video" className="text-green-700 font-semibold flex items-center">
            Assistir o vídeo <span className="ml-2">▶</span>
          </a>
        </div>
        
        {/* Vídeo */}
        <div className="lg:w-1/2 bg-gray-200 rounded-lg p-6 text-center flex items-center justify-center">
          {/* Placeholder para o vídeo, substitua com um elemento de vídeo real */}
          <div className="bg-gray-400 rounded-md w-full h-60 flex items-center justify-center">
            <span className="text-3xl text-white">▶</span>
          </div>
          <div className="mt-4 text-gray-700 text-sm">
            <p>Álvaro Leal</p>
            <p>CEO Pague Bem Brasil</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainGuiarapido;