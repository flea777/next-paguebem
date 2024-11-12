"use client";
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Button} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'; 
import Image from 'next/image';
import Link from 'next/link';

const FAQPage: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between p-11 bg-white font-spartan mt-7">
      <div className="flex flex-col items-start w-30p mb-5 basis-30p min-w-64 order-1">
        <div className="flex items-center mb-5 bg-backgroundWhite rounded-20p p-3 gap-2.5">
          <Image src="/simbol_pbb.png" alt='Simbolo Pague Bem Brasil' width={15} height={15}/>
          <h5 className="font-inter font-bold text-testimonialTitleGreen text-sm">FAQ</h5>
        </div>

        <h4 className="font-spartan font-bold text-testimonialTitleGreen text-40p mb-5">O que você gostaria de saber sobre a PBB?</h4>

        <Button
          variant="outlined"
          color="primary"
          startIcon={<ChatBubbleOutlineIcon />}
          className="font-bold text-testimonialTitleGreen text-base border-borderLightGreen mt-2.5 py-3 px-6 rounded-20p h-12"  
          onClick={() => alert("Redirecionando para a página de contato...")}>
          FALE CONOSCO
        </Button>
      </div>

      <div className="flex flex-col order-2 min-h-300p basis-55p mr-14 w-55p">
        {renderFAQItem("O que é a PBB?")}
        {renderFAQItem("Quais são os principais benefícios da plataforma PBB?")}
        {renderFAQItem("Como a PBB se diferencia das outras soluções de cobrança do mercado?")}
        {renderFAQItem("Quais são os principais benefícios da plataforma PBB?")}
        {renderFAQItem("Como a PBB se diferencia das outras soluções de cobrança do mercado?")}
      </div>

      <div className="ml-46n mb-46n mt-0 w-full order-3">
        <Image src="/Grafismo_verde_bandeira.png" alt="Imagem decorativa" width={200} height={100} />
      </div>
    </div>
  );
};

const renderFAQItem = (title: string) => (
  <Accordion className="bg-rectangleGreen rounded-20p p-2 mb-3.5 text-testimonialTitleGreen">
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <h4 className="text-testimonialTitleGreen text-25p font-semibold font-inter">{title}</h4>
    </AccordionSummary>
    <AccordionDetails className="flex flex-col justify-start gap-3">
      <h4 className="text-testimonialTitleGreen font-spartan">Conteúdo para "{title}"</h4>
      <Link className="font-inter font-bold underline" href="/">Saiba mais</Link>
    </AccordionDetails>
  </Accordion>
);

export default FAQPage;