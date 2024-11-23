"use client";

import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import { MdExpandMore, MdOutlineChatBubbleOutline } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const FAQPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-wrap justify-between p-11 bg-white font-spartan mt-7">
      <div className="flex flex-col items-start w-30p mb-5 basis-30p min-w-64 order-1">
        <div className="flex items-center mb-5 bg-backgroundWhite rounded-20p p-3 gap-2.5">
          <Image src="/simbol_pbb.png" alt="Simbolo Pague Bem Brasil" width={15} height={15} />
          <h5 className="font-inter font-bold text-testimonialTitleGreen text-sm">FAQ</h5>
        </div>

        <h4 className="font-spartan font-bold text-testimonialTitleGreen text-40p mb-5 tracking-tight sm:text-36p xs:text-28p lg:text-40p xl:text-50p">
          O que você gostaria de saber sobre a Pague Bem Brasil?
        </h4>

        <Button
          variant="outlined"
          color="primary"
          startIcon={<MdOutlineChatBubbleOutline size={20} />}
          className="font-bold text-testimonialTitleGreen text-base border-borderLightGreen mt-2.5 py-3 px-6 rounded-20p h-12"
          onClick={() => router.push('/consultores')}
        >
          FALE CONOSCO
        </Button>
      </div>

      <div className="flex flex-col order-2 min-h-300p w-full sm:w-55p mr-[13.5]">
        {renderFAQItem("O que é a PBB?")}
        {renderFAQItem("Quais são os principais benefícios da plataforma Pague Bem Brasil?")}
        {renderFAQItem("Como a Pague Bem Brasil se diferencia das outras soluções de cobrança do mercado?")}
        {renderFAQItem("Quais são os principais benefícios da plataforma Pague Bem Brasil?")}
        {renderFAQItem("Outras dúvidas sobre a Pague Bem Brasil?")}
      </div>

      <div className="ml-46n mb-46n mt-0 w-full order-3">
        <Image src="/Grafismo_verde_bandeira.png" alt="Imagem decorativa" width={200} height={100} />
      </div>
    </div>
  );
};

const renderFAQItem = (title: string) => (
  <Accordion className="bg-rectangleGreen rounded-20p p-2 mb-3.5 text-testimonialTitleGreen">
    <AccordionSummary expandIcon={<MdExpandMore size={20} color="green" />}>
      <h4 className="text-testimonialTitleGreen text-25p font-semibold font-inter">{title}</h4>
    </AccordionSummary>
    <AccordionDetails className="flex flex-col justify-start gap-3">
      <h4 className="text-testimonialTitleGreen font-spartan">Conteúdo para &quot;{title}&quot;</h4>
      <Link className="font-inter font-bold underline" href="/">
        Saiba mais
      </Link>
    </AccordionDetails>
  </Accordion>
);

export default FAQPage;