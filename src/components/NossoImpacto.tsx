import React from 'react';

interface ImpactItem {
  value: string | number;
  label: string;
}

interface ImpactCardProps {
  value: string | number;
  label: string;
}

function ImpactCard({ value, label }: ImpactCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <div className={`text-2xl font-bold ${typeof value === 'number' && value > 0 ? 'text-green-500' : ''}`}>
        {value}
      </div>
      <div className="text-gray-600 mt-2">{label}</div>
    </div>
  );
}

interface NossoImpactoProps {}

export default function NossoImpacto({}: NossoImpactoProps) {
  const impactData: ImpactItem[] = [
    { value: '+60', label: 'Empresas Parceiras' },
    { value: 'R$1 MILHÃO', label: 'lorem ipsum' },
    { value: '+242', label: 'Lorem Ipsum' },
    { value: '1000', label: 'Lorem Ipsum' },
  ];

  return (
    <div className="bg-green-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Nosso impacto</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {impactData.map((item, index) => (
          <ImpactCard key={index} value={item.value} label={item.label} />
        ))}
      </div>
    </div>
  );
}