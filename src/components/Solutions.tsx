import React from 'react';

interface Feature {
  id: number;
  text: string;
}

const features: Feature[] = [
  {
    id: 1,
    text: 'Recupere valores de forma simples',
  },
  {
    id: 2,
    text: 'Ofereça opções flexíveis de pagamento',
  },
  {
    id: 3,
    text: 'Proteja-se com análise colaborativa de crédito',
  },
];

const Solutions: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6 p-6 overflow-hidden" id="solucao">
      <h1 className="font-inter text-2xl font-medium text-titleGray">
        Conheça mais sobre a Pague Bem Brasil
      </h1>
      <h2 className="font-spartan text-5xl font-bold text-titleGreen leading-tight overflow-hidden">
        Soluções integradas que geram resultados.
      </h2>
      <p className="font-inter text-base text-textGray leading-relaxed">
        Revolucione sua gestão financeira com a Pague Bem Brasil:
      </p>
      
      <ul className="space-y-3">
        {features.map((feature) => (
          <li
            key={feature.id}
            className="flex items-start space-x-2 text-textGray text-base font-inter"
          >
            <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
            <p>{feature.text}</p>
          </li>
        ))}
      </ul>

      <p className="font-inter text-base text-textGray leading-relaxed">
        Entre em contato hoje mesmo e descubra como a Pague Bem Brasil pode transformar sua gestão financeira, sem complicações.
      </p>
      
      <button className="bg-buttonGreen text-white py-2 px-6 rounded-2xl hover:bg-green-700 self-start text-base font-bold tracking-wide">
        Zerar Inadimplência
      </button>
    </div>
  );
};

export default Solutions;
