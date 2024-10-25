
import React from 'react';

interface Feature {
  id: number;
  text: string;
}

const features: Feature[] = [
  {
    id: 1,
    text: 'Recuperar valores de maneira prática e simples',
  },
  {
    id: 2,
    text: 'Oferecer opções flexíveis de pagamento aos clientes',
  },
  {
    id: 3,
    text: 'Proteger sua empresa com uma análise colaborativa de crédito',
  },
];

const Solutions: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 p-6">
      <h1 className="font-inter text-2xl font-medium text-titleGray">Conheça mais sobre a Pague Bem Brasil</h1>
      <h2 className="font-spartan text-6xl font-bold text-titleGreen">
        Soluções integradas que geram resultados.
      </h2>
      <p className="font-inter text-lg font-regular text-sm text-textGray">
        Revolucione a gestão financeira da sua empresa com as soluções integradas da Pague Bem Brasil. Com nosso sistema automatizado, você poderá:
      </p>
      
      <ul className="list-disc pl-6">
        {features.map((feature) => (
          <li key={feature.id} className="mb-3">
            <p className="font-inter text-lg font-medium text-sm text-textGray">
              {feature.text}
            </p>
          </li>
        ))}
      </ul>

      <p className="font-inter text-lg font-regular text-sm text-textGray">
        Entre em contato hoje mesmo e descubra como a Pague Bem Brasil pode transformar sua gestão financeira, sem complicações.
      </p>
      
      <button className="mt-4 bg-buttonGreen text-white py-2 px-4 rounded-2xl hover:bg-green-700">
        Zerar Inadimplência
      </button>
    </div>
  );
};

export default Solutions;
