import { main } from "framer-motion/client";
import PagueBemRecupera from "./PagueBemRecupera";
import PagueBemConta from "./PagueBemConta";
import PagueBemProtege from "./PagueBemProtege";
import PagueBemLocalize from "./PagueBemLocalize";
import PagueBemConversas from "./PagueBemConversas";


const ProductsSection = () => {
    return (
        <main>
    <PagueBemRecupera
    title="Pague Bem Recupera" 
    description="A ferramenta certa para que as empresas possam resolver de forma prática e simples suas cobranças."/>

    <PagueBemConta
    title="Pague Bem Conta"
    description="Agilize a vida do devedor com opções para pagamento da dívida via boleto, pix ou cartão de crédito no momento que ele receber a cobrança."/>

    <PagueBemProtege
    title="Pague Bem Protege"
    description="Rede colaborativa e gratuita para pesquisa, publicação e análise de crédito das empresas."/>

    <PagueBemLocalize 
    title="Pague Bem Localize"
    description="Agilize a vida do devedor com opções para pagamento da dívida via boleto, pix ou cartão de crédito no momento que ele receber a cobrança."/>

    <PagueBemConversas 
    title="Pague Bem Conversas"
    description="Converta seus clientes inadimplentes em pagantes através de estratégias de conversação diretamente da plataforma para o número do WhatsApp do seu cliente."/>
    </main>

);
}
 
export default ProductsSection; 