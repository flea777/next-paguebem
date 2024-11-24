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
          <div className="w-full flex flex-row flex-nowrap mx-auto justify-center gap-6 p-8">

            <div>
                <Solutions/>
            </div>

            <div className="grid cols-3 gap-6 w-full">
                <div className="flex justify-center gap-6">
                  <div className="max-w-80">
                      <PagueBemCard 
                      title="Pague Bem Recupera"
                      description="Ferramenta ideal para empresas resolverem cobranças de forma simples."
                      imgUrl={iconRecupera}/>
                  </div>

                  <div className="max-w-80">
                      <PagueBemCard
                      title="Pague Bem Conta"
                      description="Agilize o pagamento com boleto, PIX ou cartão na hora da cobrança."
                      imgUrl={iconConta}/>
                  </div>

                  <div className="max-w-80">
                      <PagueBemCard
                      title="Pague Bem Protege"
                      description="Rede colaborativa gratuita para pesquisa, publicação e análise de crédito empresarial."
                      imgUrl={iconProtege}/>
                  </div>

                </div>

                  <div className="flex justify-center gap-12">
                    <div className="max-w-80">
                        <PagueBemCard
                        title="Pague Bem Localize"
                        description="Facilite o pagamento da dívida com boleto, PIX ou cartão no momento da cobrança."
                        imgUrl={iconLocalize}/>
                    </div>

                    <div className="max-w-80">
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