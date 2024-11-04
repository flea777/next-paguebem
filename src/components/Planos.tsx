'use client';

import React, { useState } from 'react';
import '../app/planos.css';

const Planos: React.FC = () => {
  const [indexLeft, setIndexLeft] = useState(0);
  const [indexRight, setIndexRight] = useState(1);
  const [popupPlano, setPopupPlano] = useState<any>(null);

  const planosVariacoes = [
    {
      nome: 'Free',
      preco: 'R$0,00',
      meiosPagamento: {
        boleto: 'R$3,00',
        creditoAVista: '3,20%',
        creditoParcelado: '3,45%',
      },
      beneficios: [
        'WhatsApp: R$0,20 por notificação (pré-pago)',
        'Robô de Voz: R$0,75 por ligação (pré-pago)',
        'Régua de Cobrança (apenas E-mail)',
        'Cobrança de vencidos em até 30 dias',
        '1 (um) usuário e 1 (um) CNPJ',
        '6 notificações gratuitas de cobranças via E-mail (por boleto/pix vencido)',
      ],
      popupTexto: [
        'WhatsApp: R$0,20 por notificação (pré-pago)',
        'Robô de Voz: R$0,75 por ligação (pré-pago)',
        'Régua de Cobrança (apenas E-mail)',
        'Cobrança de vencidos em até 30 dias',
        '1 (um) usuário e 1 (um) CNPJ',
        '6 notificações gratuitas de cobranças via E-mail (por boleto/pix vencido)'
      ],
    },
    {
      nome: 'Starter',
      preco: 'R$290,00',
      meiosPagamento: {
        boleto: 'R$2,85',
        creditoAVista: '3,15%',
        creditoParcelado: '3,40%',
      },
      canaisDeComunicacao: {
        franquia: '9100 notificações, sendo até 5000 e-mails, 2500 SMS e 1600 WhatsApp',
        franquiaAlternativa: '3190 notificações apenas em WhatsApp',
        roboDeVoz: 'R$0,75 por ligação',
      },
      popupTexto: [
        'Gestão de recebíveis',
        'Régua de cobrança',
        'Plataforma multicanal personalizada (WhatsApp, E-mail, SMS e Voz)',
        'Cobrança de vencidos em até 1 (um) ano',
        'CRM financeiro com registro de histórico em uma timeline',
        'Gestão de documentos e ativos digitais',
        'Plataforma de atração e aquecimento de leads',
        'Suporte via gerente de conta',
        '4 (quatro) usuários',
        'Acesso para 1 (um) CNPJ',
      ],
    },
    {
      nome: 'Business',
      preco: 'R$590,00',
      meiosPagamento: {
        boleto: 'R$2,75',
        creditoAVista: '3,10%',
        creditoParcelado: '3,35%',
      },
      canaisDeComunicacao: {
        franquia: '9100 notificações, sendo até 5000 e-mails, 2500 SMS e 1600 WhatsApp',
        franquiaAlternativa: '3190 notificações apenas em WhatsApp',
        roboDeVoz: 'R$0,75 por ligação',
      },
      popupTexto: [
        'Gestão de recebíveis',
        'Régua de cobrança',
        'Plataforma multicanal personalizada (WhatsApp, E-mail, SMS e Voz)',
        'Cobrança de vencidos em até 5 (cinco) anos',
        'CRM financeiro com registro de histórico em uma timeline',
        'Gestão de documentos e ativos digitais',
        'Plataforma de atração e aquecimento de leads',
        'Suporte via gerente de conta',
        '6 (seis) usuários',
        'Acesso para até 2 (dois) CNPJs simultaneamente',
      ],
    },
    {
      nome: 'Advanced',
      preco: 'R$890,00',
      meiosPagamento: {
        boleto: 'R$2,50',
        creditoAVista: '3,00%',
        creditoParcelado: '3,25%',
      },
      canaisDeComunicacao: {
        franquia: '15000 notificações, sendo até 9000 e-mails, 3500 SMS e 2500 WhatsApp',
        franquiaAlternativa: '5000 notificações apenas em WhatsApp',
        roboDeVoz: 'R$0,70 por ligação',
      },
      popupTexto: [
        'Gestão de recebíveis',
        'Régua de cobrança',
        'Plataforma multicanal personalizada (WhatsApp, E-mail, SMS e Voz)',
        'Cobrança de vencidos em até 5 (cinco) anos',
        'CRM financeiro com registro de histórico em uma timeline',
        'Gestão de documentos e ativos digitais',
        'Plataforma de atração e aquecimento de leads',
        'Suporte via gerente de conta',
        '8 (oito) usuários',
        'Acesso para até 3 (três) CNPJs simultaneamente',
      ],
    },
    {
      nome: 'Premium',
      preco: 'R$1290,00',
      meiosPagamento: {
        boleto: 'R$2,50',
        creditoAVista: '3,00%',
        creditoParcelado: '3,25%',
      },
      canaisDeComunicacao: {
        franquia: '21500 notificações, sendo até 12500 e-mails, 5000 SMS e 4000 WhatsApp',
        franquiaAlternativa: '7330 notificações apenas em WhatsApp',
        roboDeVoz: 'R$0,70 por ligação',
      },
      popupTexto: [
        'Gestão de recebíveis',
        'Régua de cobrança',
        'Plataforma multicanal personalizada (WhatsApp, E-mail, SMS e Voz)',
        'Cobrança de vencidos em até 5 (cinco) anos',
        'CRM financeiro com registro de histórico em uma timeline',
        'Gestão de documentos e ativos digitais',
        'Plataforma de atração e aquecimento de leads',
        'Suporte via gerente de conta',
        '10 (dez) usuários',
        'Acesso para até 5 (cinco) CNPJs simultaneamente',
      ],
    },
  ];

  const handleNextLeft = () => setIndexLeft((indexLeft + 1) % planosVariacoes.length);
  const handlePreviousLeft = () => setIndexLeft((indexLeft - 1 + planosVariacoes.length) % planosVariacoes.length);
  const handleNextRight = () => setIndexRight((indexRight + 1) % planosVariacoes.length);
  const handlePreviousRight = () => setIndexRight((indexRight - 1 + planosVariacoes.length) % planosVariacoes.length);

  const handleOpenPopup = (plano: any) => setPopupPlano(plano);
  const handleClosePopup = () => setPopupPlano(null);

  return (
    <div className="container">
      <h1 className="title">Planos para todas as empresas</h1>
      <div className="plansContainer">
        {[indexLeft, indexRight].map((index, i) => (
          <div key={i} className="cardWrapper">
            <div className="buttonContainer">
              <button className="navButton" onClick={i === 0 ? handlePreviousLeft : handlePreviousRight}>←</button>
              <button className="navButton" onClick={i === 0 ? handleNextLeft : handleNextRight}>→</button>
            </div>
            <div className="card">
              <div className={`cardHeader ${planosVariacoes[index]?.nome !== 'Free' ? 'paid' : ''}`}>
                <h2 className="planName">{planosVariacoes[index]?.nome}</h2>
                <div className="priceSection">
                  <p className={`price ${planosVariacoes[index]?.nome !== 'Free' ? 'paidPrice' : 'value'}`}>
                    {planosVariacoes[index]?.preco}
                  </p>
                  <p className="pricePer">Por mês</p>
                </div>
              </div>
              <div className="divider" />

              <h4 className="paymentTitle">Meios de pagamento</h4>
              <div className="paymentInfoContainer">
                <div className="paymentLeft">
                  <p className="paymentItem"><strong>Boleto:</strong> <span className="value">{planosVariacoes[index]?.meiosPagamento?.boleto}</span></p>
                </div>
                <div className="paymentRight">
                  <p className="paymentItem"><strong>Crédito à vista:</strong> <span className="value">{planosVariacoes[index]?.meiosPagamento?.creditoAVista}</span></p>
                  <p className="paymentItem"><strong>Crédito parcelado:</strong> <span className="value">{planosVariacoes[index]?.meiosPagamento?.creditoParcelado}</span></p>
                </div>
              </div>

              <div className="divider" />
              
              {planosVariacoes[index]?.nome === 'Free' && (
                <div>
                  <h4 className="sectionTitle">Benefícios do plano Free</h4>
                  <ul className="benefitsList">
                    {planosVariacoes[index]?.beneficios?.map((beneficio: string, idx: number) => (
                      <li key={idx}>{beneficio}</li>
                    ))}
                  </ul>
                </div>
              )}

              {planosVariacoes[index]?.canaisDeComunicacao && planosVariacoes[index]?.nome !== 'Free' && (
                <div>
                  <h4 className="sectionTitle">Canais de Comunicação</h4>
                  <div className="communicationInfo">
                    <p><strong>Franquia de:</strong> <span className="value">{planosVariacoes[index]?.canaisDeComunicacao?.franquia}</span></p>
                    <p><strong>Franquia alternativa:</strong> <span className="value">{planosVariacoes[index]?.canaisDeComunicacao?.franquiaAlternativa}</span></p>
                    <p><strong>Robô de voz:</strong> <span className="value">{planosVariacoes[index]?.canaisDeComunicacao?.roboDeVoz}</span></p>
                  </div>
                </div>
              )}

              <div className="buttonWrapper">
                <button className="infoButton" onClick={() => handleOpenPopup(planosVariacoes[index])}>
                  Mais Informações
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {popupPlano && (
        <div className="popup" onClick={handleClosePopup}>
          <div className="popupContent" onClick={(e) => e.stopPropagation()}>
            <h2>{popupPlano.nome}</h2>
            <h4>Benefícios:</h4>
            <ul>
              {popupPlano.popupTexto.length > 0 ? (
                popupPlano.popupTexto.map((beneficio: string, idx: number) => (
                  <li key={idx}>{beneficio}</li>
                ))
              ) : (
                <li>Nenhum benefício disponível.</li>
              )}
            </ul>
            <button className="infoButton" onClick={handleClosePopup}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Planos;
