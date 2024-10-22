
import React from 'react';

interface Feature {
  id: number;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Recuperar valores de maneira prática e simples',
    description: 'Facilite a recuperação de créditos da sua empresa com eficiência.',
  },
  {
    id: 2,
    title: 'Oferecer opções flexíveis de pagamento aos clientes',
    description: 'Diversifique as formas de pagamento disponíveis para seus clientes.',
  },
  {
    id: 3,
    title: 'Proteger sua empresa com uma análise colaborativa de crédito',
    description: 'Garanta segurança com um sistema de análise de crédito colaborativa.',
  },
];

const Solutions: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 p-6">
      <h1 className="text-2xl text-gray-600">Conheça mais sobre a Pague Bem Brasil</h1>
      <h2 className="text-3xl font-bold text-green-700">
        Soluções integradas que geram resultados.
      </h2>
      <p className="text-gray-700">
        Revolucione a gestão financeira da sua empresa com as soluções integradas da Pague Bem Brasil. Com nosso sistema automatizado, você poderá:
      </p>
      
      <ul className="list-disc pl-6">
        {features.map((feature) => (
          <li key={feature.id} className="mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>

      <p className="text-gray-700">
        Entre em contato hoje mesmo e descubra como a Pague Bem Brasil pode transformar sua gestão financeira, sem complicações.
      </p>
      
      <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
        Zerar Inadimplência
      </button>
    </div>
  );
};

export default Solutions;
