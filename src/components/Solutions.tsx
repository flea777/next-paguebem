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
    <div className="flex flex-col space-y-4 p-6 w-full max-w-screen-lg mx-auto overflow-hidden" id="solucao">
      <h1 className="font-inter text-2xl font-medium text-titleGray text-center sm:text-left">
        Conheça mais sobre a Pague Bem Brasil
      </h1>
      <h2 className="font-spartan text-3xl sm:text-6xl font-bold text-titleGreen text-center sm:text-left overflow-hidden">
        Soluções integradas que geram resultados.
      </h2>
      <p className="font-inter text-lg font-regular text-textGray text-center sm:text-left">
        Revolucione sua gestão financeira com a Pague Bem Brasil:
      </p>

      <ul className="list-disc pl-4 sm:pl-6">
        {features.map((feature) => (
          <li key={feature.id} className="mb-3">
            <p className="font-inter text-lg font-regular text-textGray text-center sm:text-left">
              {feature.text}
            </p>
          </li>
        ))}
      </ul>

      <p className="font-inter text-lg font-regular text-textGray text-center sm:text-left">
        Entre em contato hoje mesmo e descubra como a Pague Bem Brasil pode transformar sua gestão financeira, sem complicações.
      </p>

      <div className="flex justify-center sm:justify-start">
        <button className="bg-buttonGreen text-white py-2 px-4 rounded-2xl hover:bg-green-700">
          Zerar Inadimplência
        </button>
      </div>
    </div>
  );
};

export default Solutions;
