"use client";
import React from "react";

const FormSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <section className="flex flex-col bg-backgroundGray px-4 sm:px-6 lg:px-8">
      
      <div className="bg-gradient-to-r from-[#2D4416] to-[#39670B] h-[150px] w-full mt-[80px] flex justify-center items-center overflow-hidden">
  <div className="flex flex-col w-full max-w-screen-xl text-center px-4 h-full justify-center">
  <p className="text-[24px] sm:text-[32px] lg:text-[44px] font-spartan font-bold leading-[1.4] text-white mt-2 mb-2">
      Fale com nossos consultores
    </p>
    <p className="text-[14px] sm:text-[18px] lg:text-[22px] font-spartan font-normal leading-[1.4] text-white">
      Converse conosco e tire suas dúvidas
    </p>
  </div>
</div>

      <div className="flex justify-center bg-backgroundGray p-6 sm:p-12 lg:p-20">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[936px]" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[20px] sm:text-[24px] lg:text-[26px] font-inter font-semibold text-titleGray pl-3">
              Nome
            </label>
            <input
              type="text"
              name="nome"
              className="mt-1 p-2 block w-full border rounded-2xl pl-5 text-bord"
              placeholder="Digite o seu nome"
              required
            />
          </div>

          <div>
            <label className="block text-[20px] sm:text-[24px] lg:text-[26px] font-inter font-semibold text-titleGray pl-3">
              Empresa
            </label>
            <input
              type="text"
              name="empresa"
              className="mt-1 p-2 block w-full border rounded-2xl pl-5 text-bord"
              placeholder="Digite o nome da sua empresa"
              required
            />
          </div>

          <div>
            <label className="block text-[20px] sm:text-[24px] lg:text-[26px] font-inter font-semibold text-titleGray pl-3">
              E-mail corporativo
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 p-2 block w-full border rounded-2xl pl-5 text-bord"
              placeholder="Digite o seu e-mail corporativo"
              required
            />
          </div>

          <div>
            <label className="block text-[20px] sm:text-[24px] lg:text-[26px] font-inter font-semibold text-titleGray pl-3">
              Celular
            </label>
            <input
              type="text"
              name="celular"
              className="mt-1 p-2 block w-full border rounded-2xl pl-5 text-bord"
              placeholder="Digite o seu número de celular"
              required
            />
          </div>

          <div>
            <label className="block text-[20px] sm:text-[24px] lg:text-[26px] font-inter font-semibold text-titleGray pl-3">
              Plano
            </label>
            <select name="plano" className="mt-1 pl-5 text-bord p-2 block w-full border rounded-2xl bg-white">
              <option value="">Selecionar um plano</option>
              <option value="plano1">Starter</option>
              <option value="plano2">Business</option>
              <option value="plano3">Advanced</option>
              <option value="plano4">Premium</option>
            </select>
          </div>

          <div>
            <label className="block text-[20px] sm:text-[24px] lg:text-[26px] font-inter font-semibold text-titleGray pl-3">
              Segmento
            </label>
            <input
              type="text"
              name="segmento"
              className="mt-1 p-2 block w-full border rounded-2xl pl-5 text-bord"
              placeholder="Digite o segmento da empresa"
              required
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-[20px] sm:text-[24px] lg:text-[26px] font-inter font-semibold text-titleGray pl-3">
              Mensagem
            </label>
            <textarea
              name="mensagem"
              className="mt-1 p-2 block w-full border rounded-2xl pl-5 text-bord"
              placeholder="Digite uma mensagem"
              rows={4}
              required
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              style={{ backgroundColor: '#01AB0D' }}
              className="text-white font-bold py-2 px-6 rounded-2xl mt-4 hover:bg-green-700 w-full sm:w-[209px] h-[58px] text-[16px] sm:text-[20px] font-inter"
            >
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
