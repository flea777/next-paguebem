"use client";
import React from "react";
import Image from "next/image";
import SocialMedia from "./SocialMedia";

const iconGrafismo = '/Grafismo_verde_escuro.png';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <section className=" relative flex flex-col lg:flex-row bg-white h-[1000px]">

      <div className="flex flex-col justify-center text-center lg:text-left lg:w-1/2 p-8 bg-backgroundWhite">
        <h2 className="text-[60px] font-spartan font-bold leading-[60px] text-primaryGradientMiddle text-center text-[#367C2F] ">
          Dúvidas? Fale conosco
        </h2>
        <p className="w-full max-w-[802px] h-auto text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-inter font-normal text-center mx-auto text-labelText mt-4 sm:mt-6">
          Estamos aqui para ajudar! Se você tiver alguma dúvida, sugestão ou precisar de assistência, nossa equipe está pronta para atendê-lo.
        </p>
        <p className="text-[24px] text-black font-inter font-medium pt-6 text-center mt-6">Fale também através do</p>

        <div className="flex justify-center">
          <SocialMedia color="white"/>
        </div>

        <div className="absolute bottom-0 left-0 ">
             <img src={iconGrafismo} alt="Grafismo" className="w-56 h-56" />
        </div>
      </div>


      <div className="flex items-center justify-center lg:w-1/2 p-6 sm:p-12 lg:p-16 bg-socialBackgroundGreen">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[936px] max-h-[750px]" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[26px] font-inter font-semibold text-white pl-3 mb-4">
              Nome
            </label>
            <input
              type="text"
              name="nome"
              className="mt-1 p-4 block w-full border rounded-xl pl-5 text-labelText shadow-md focus:outline-none focus:ring-2 focus:ring-primaryGradientMiddle"
              placeholder="Digite o seu nome"
              required
            />
          </div>

          <div>
            <label className="block text-[26px] font-inter font-semibold text-white pl-3 mb-4">
              Assunto
            </label>
            <input
              type="text"
              name="assunto"
              className="mt-1 p-4 block w-full border rounded-xl pl-5 text-labelText shadow-md focus:outline-none focus:ring-2 focus:ring-primaryGradientMiddle"
              placeholder="Digite o assunto"
              required
            />
          </div>

          <div>
            <label className="block text-[26px] font-inter font-semibold text-white pl-3 mb-4">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 p-4 block w-full border rounded-xl pl-5 text-labelText shadow-md focus:outline-none focus:ring-2 focus:ring-primaryGradientMiddle"
              placeholder="Digite o seu e-mail corporativo"
              required
            />
          </div>

          <div>
            <label className="block text-[26px] font-inter font-semibold text-white pl-3 mb-4">
              Celular
            </label>
            <input
              type="text"
              name="celular"
              className="mt-1 p-4 block w-full border rounded-xl pl-5 text-labelText shadow-md focus:outline-none focus:ring-2 focus:ring-primaryGradientMiddle"
              placeholder="(81)91234-5678"
              required
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-[26px] font-inter font-semibold text-white pl-3 mb-4">
              Mensagem
            </label>
            <textarea
              name="mensagem"
              className="mt-1 p-4 block w-full border rounded-xl pl-5 text-labelText shadow-md focus:outline-none focus:ring-2 focus:ring-primaryGradientMiddle"
              placeholder="Digite uma mensagem"
              rows={4}
              required
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2 text-center mt-6">
            <button
              type="submit"
              className="bg-buttonGreen text-white font-bold py-3 px-8 rounded-2xl w-full sm:w-[209px] h-[58px] text-[20px] sm:text-[20px] font-inter shadow-lg transition-all hover:bg-green-700"
            >
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
