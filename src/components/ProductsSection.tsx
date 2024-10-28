import React from "react";
import ButtonPrimary from "./ButtonPrimary";

export default function ProductsSection() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <aside className="space-y-3">
          <p className="font-medium text-[#4F4F4F]">Conheça mais sobre a Pague Bem Brasil</p>
          <h2 className="text-3xl font-bold text-[#578F47]">
            Soluções integradas que geram resultados.
          </h2>
          <p className="text-[#4F4F4F]">
            Revolucione a gestão financeira da sua empresa com as soluções integradas do Pague Bem Brasil. Com nosso sistema automatizado, você poderá:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-[#4F4F4F]">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Recuperar valores de maneira prática e simples
            </li>
            <li className="flex items-center gap-2 text-[#4F4F4F]">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Oferecer opções flexíveis de pagamento aos clientes
            </li>
            <li className="flex items-center gap-2 text-[#4F4F4F]">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Proteger sua empresa com uma análise colaborativa de crédito
            </li>
          </ul>
          {/* <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            TENHA MAIS EFICIÊNCIA
          </button> */}
          <ButtonPrimary text="ZERAR INADIMPLÊNCIA"/>
        </aside>

       
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="p-6 bg-[#edf5ec] rounded-lg shadow-md border border-gray-100">

                <div className="flex flex-col items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <img className="w-10 h-10 text-green-600" src="/simbseta.png">

                </img>
                </div>
                <h3 className="font-semibold text-lg">Pague Bem Recupera</h3>
                </div>

                <p className="text-gray-600">
                A ferramenta certa para que as empresas possam resolver de forma prática e simples suas cobranças.
                </p>
            </div>

            <div className="p-6 bg-[#edf5ec] rounded-lg shadow-md border border-gray-100">
                
                <div className="flex flex-col items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <img className="w-10 h-10 text-green-600" src="/boleto.png">

                </img>
                </div>
                <h3 className="font-semibold text-lg">Pague Bem Recupera</h3>
                </div>

                <p className="text-gray-600">
                Agilize a vida do devedor com opções para pagamento da dívida via boleto, pix ou cartão de crédito no momento que ele receber a cobrança.
                </p>
             </div>

            <div className="p-6 bg-[#edf5ec] rounded-lg shadow-md border border-gray-100">

                <div className="flex flex-col items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <img className="w-10 h-10 text-green-600" src="/escudo.png">

                </img>
                </div>
                <h3 className="font-semibold text-lg">Pague Bem Recupera</h3>
                </div>

                <p className="text-gray-600">
                Rede colaborativa e gratuita para pesquisa, publicação e análise de crédito das empresas.
                </p>
             </div>

            <div className="p-6 bg-[#edf5ec] rounded-lg shadow-md border border-gray-100">

                <div className="flex flex-col items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <img className="w-10 h-10 text-green-600" src="/loccarta.png">

                </img>
                </div>
                <h3 className="font-semibold text-lg">Pague Bem Recupera</h3>
                </div>

                <p className="text-gray-600">
                Agilize a vida do devedor com opções para pagamento da dívida via boleto, pix ou cartão de crédito no momento que ele receber a cobrança.
                </p>
             </div>

            <div className="p-6 bg-[#edf5ec] rounded-lg shadow-md border border-gray-100">

                <div className="flex flex-col items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <img className="w-10 h-10 text-green-600" src="/cel.png">

                </img>
                </div>
                <h3 className="font-semibold text-lg">Pague Bem Recupera</h3>
                </div>

                <p className="text-gray-600">
                Converta seus clientes inadimplentes em pagantes através de estratégias de conversação diretamente da plataforma para o número do WhatsApp do seu cliente.
                </p>
             </div>

          
          




        </section>


      </section>

    </main>
  );
};
