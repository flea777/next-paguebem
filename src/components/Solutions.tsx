import React from 'react';

interface Feature {
  id: number;
  text: string;
}

const features: Feature[] = [
  { id: 1, text: 'Recupere valores de forma simples' },
  { id: 2, text: 'Ofereça opções flexíveis de pagamento' },
  { id: 3, text: 'Proteja-se com análise colaborativa de crédito' },
];

const Solutions: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6 p-6 overflow-hidden max-w-5xl mx-auto" id="solucao">
      <h1 className="font-inter text-base sm:text-lg md:text-2xl font-medium text-titleGray text-left md:text-center lg:text-left">
        Conheça mais sobre a Pague Bem Brasil
      </h1>
      <h2 className="font-spartan text-2xl sm:text-3xl md:text-4xl font-bold text-titleGreen leading-tight overflow-hidden text-center sm:text-left md:text-center lg:text-left">
        Soluções integradas que geram resultados.
      </h2>
      <p className="font-inter text-sm sm:text-base md:text-lg text-textGray leading-relaxed">
        Revolucione sua gestão financeira com a Pague Bem Brasil:
      </p>

      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature.id} className="flex items-start space-x-2 text-textGray text-sm sm:text-base md:text-lg font-inter">
            <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
            <p>{feature.text}</p>
          </li>
        ))}
      </ul>

      <p className="font-inter text-sm sm:text-base md:text-lg text-textGray leading-relaxed">
        Entre em contato hoje mesmo e descubra como a Pague Bem Brasil pode transformar sua gestão financeira, sem complicações.
      </p>

      <button className="bg-buttonGreen text-white py-2 px-4 sm:py-3 sm:px-6 rounded-2xl hover:bg-green-700 mx-auto text-sm sm:text-base md:text-lg font-bold tracking-wide">
        Zerar Inadimplência
      </button>
    </div>
  );
};

export default Solutions;
