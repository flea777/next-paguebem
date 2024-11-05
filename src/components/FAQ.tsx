"use client";

import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Button, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'; 

const FAQPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '45px', backgroundColor: '#FFFFFF', fontFamily: 'League Spartan, sans-serif', marginTop: '30px'}}>
      {/* Lado Esquerdo */}
      <div style={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {/* Seção FAQ */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#F0F0F0', borderRadius: '20px', padding: '12px' }}>
            <ChatBubbleOutlineIcon style={{ marginRight: '8px', color: '#4caf50', fontSize: '24px' }} />
            <Typography variant="h5" style={{ fontWeight: 'bold', color: '#367C2F', fontSize: '13px' }}>FAQ</Typography>
        </div>

        {/* Título principal */}
        <Typography variant="h4" style={{ fontWeight: 'bold', color: '#367C2F', marginBottom: '20px', fontSize: '40px'}}>
          O que você gostaria de saber sobre a PBB?
        </Typography>

        {/* Botão "Fale Conosco" com ícone de bate-papo */}
        <Button
          variant="outlined"
          color="primary"
          startIcon={<ChatBubbleOutlineIcon />} 
          style={{ marginTop: '10px', borderColor: '#4caf50', color: '#367C2F', borderRadius: '20px', padding: '12px 24px', fontSize: '16px', height: '50px', fontWeight: 'bold'}}
          onClick={() => alert("Redirecionando para a página de contato...")}
        >
          FALE CONOSCO
        </Button>
      </div>

      {/* Lado Direito */}
      <div style={{ width: '55%', marginRight: '45px'}}>
        {/* Itens de FAQ com Accordion para expansão */}
        {renderFAQItem("O que é a PBB?", "/sobre-pbb")}
        {renderFAQItem("Quais são os principais benefícios da plataforma PBB?", "/beneficios")}
        {renderFAQItem("Como a PBB se diferencia das outras soluções de cobrança do mercado?", "/diferenciais")}
        {renderFAQItem("Quais são os principais benefícios da plataforma PBB?", "/beneficios")}
        {renderFAQItem("Como a PBB se diferencia das outras soluções de cobrança do mercado?", "/diferenciais")}
      </div>
    </div>
  );
};

// Função para renderizar cada item do FAQ
const renderFAQItem = (title: string, route: string) => (
  <Accordion style={{ marginBottom: '15px', backgroundColor: '#EDF5EC', color: '#367C2F', borderRadius: '20px', padding: '8px' }}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ color: '#367C2F' }}>
      <Typography style={{ color: '#367C2F', fontWeight: 'bold' }}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Conteúdo para (ai coloca oq quiser) "{title}". 
      </Typography>
      <Button variant="text" color="primary" onClick={() => alert(`Redirecionando para ${route}`)}>
        Saiba mais
      </Button>
    </AccordionDetails>
  </Accordion>
);

export default FAQPage;
