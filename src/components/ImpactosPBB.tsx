import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const ImpactosPBB: React.FC = () => {
  return (
    <section className="bg-[#E6F4E5] py-10 px-4 text-center">
      <h2 className="text-2xl font-bold text-testimonialTitleGreen mb-6">
        Transforme sua gestão financeira com a PBB
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
        
        <div className="bg-white rounded-lg shadow-lg p-6 w-64">
          <div className="text-yellow-500 mb-2 text-2xl">
            <i className="bi bi-coin"></i>
          </div>
          <h3 className="text-2xl font-semibold text-[#39670B]">+ R$10 bilhões</h3>
            <p className="text-lg text-gray-700">em cobranças<br />realizadas</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 w-64">
          <div className="text-yellow-500 mb-2 text-2xl">
            <i className="bi bi-bank"></i>
          </div>
          <h3 className="text-2xl font-semibold text-[#39670B]">até 25 vezes</h3>
          <p className="text-lg text-gray-700">mais retorno sobre o investimento</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 w-64">
          <div className="text-yellow-500 mb-2 text-2xl">
            <i className="bi bi-robot"></i>
          </div>
          <h3 className="text-2xl font-semibold text-[#39670B]">até 40%</h3>
          <p className="text-lg text-gray-700">de cobranças feitas sem intervenção humana</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 w-64">
          <div className="text-yellow-500 mb-2 text-2xl">
            <i className="bi bi-piggy-bank-fill"></i>
          </div>
          <h3 className="text-2xl font-semibold text-[#39670B]">até 50%</h3>
          <p className="text-lg text-gray-700">de redução nos custos com cobrança externa</p>
        </div>
        
      </div>

      <p className="text-gray-600 mt-6 text-sm">
        Não somos um escritório de cobrança terceirizado! Nossa tecnologia se integra ao seu ERP, reduzindo custos com cobrança externa e perdas.
      </p>
    </section>
  );
};

export default ImpactosPBB;
