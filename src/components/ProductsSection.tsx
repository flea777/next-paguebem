import React from "react";
import PagueBemCard from "./PagueBemCard";
import Solutions from "./Solutions";

const iconRecupera = '/icon_pague_bem_recupera.png';
const iconConta = '/icon_pague_bem_conta.png';
const iconProtege = '/icon_pague_bem_protege.png';
const iconLocalize = '/icon_pague_bem_localize.png'
const iconConversas = '/icon_pague_bem_conversas.png';

const ProductsSection = () => {
    return(
          <div className="sm:w-full sm:flex sm:flex-row sm:flex-nowrap sm:mx-auto sm:justify-center sm:gap-6 p-8 ">

            <div>
                <Solutions/>
            </div>

            <div className="md:grid md:cols-3 md:gap-6 md:w-full md:overflow-hidden justify-center">
                <div className="md:flex md:justify-center md:gap-6 md:overflow-hidden justify-center">
                  <div className="md:max-w-80 md:overflow-hidden justify-center p-3">
                      <PagueBemCard
                      title="Pague Bem Recupera"
                      description="Ferramenta ideal para empresas resolverem cobranças de forma simples."
                      imgUrl={iconRecupera}/>
                  </div>

                  <div className="md:max-w-80 md:overflow-hidden justify-center p-3">
                      <PagueBemCard
                      title="Pague Bem Conta"
                      description="Agilize o pagamento com boleto, PIX ou cartão na hora da cobrança."
                      imgUrl={iconConta}/>
                  </div>

                  <div className="md:max-w-80 md:overflow-hidden justify-center p-3">
                      <PagueBemCard
                      title="Pague Bem Protege"
                      description="Rede colaborativa gratuita para pesquisa, publicação e análise de crédito empresarial."
                      imgUrl={iconProtege}/>
                  </div>

                </div>

                  <div className="md:flex md:justify-center md:gap-12 md:overflow-hidden">
                    <div className="md:max-w-80 md:overflow-hidden justify-center p-3">
                        <PagueBemCard
                        title="Pague Bem Localize"
                        description="Facilite o pagamento da dívida com boleto, PIX ou cartão no momento da cobrança."
                        imgUrl={iconLocalize}/>
                    </div>

                    <div className="md:max-w-80 md:overflow-hidden justify-center p-3">
                        <PagueBemCard
                        title="Pague Bem Conversas"
                        description="Converta inadimplentes em pagantes com conversas diretas via WhatsApp."
                        imgUrl={iconConversas}/>
                    </div>  
                  </div>
              </div>
            </div>
    )
}

export default ProductsSection;
