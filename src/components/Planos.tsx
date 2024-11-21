'use client';

import React, { useState } from 'react';

interface MeiosPagamento {
  boleto: string;
  creditoAVista: string;
  creditoParcelado: string;
}

interface CanaisDeComunicacao {
  franquia: string;
  franquiaAlternativa: string;
  roboDeVoz: string;
}

interface PlanoVariacao {
  nome: string;
  preco: string;
  meiosPagamento: MeiosPagamento;
  canaisDeComunicacao?: CanaisDeComunicacao;
  beneficios?: string[];
  popupTexto: string[];
}

const Planos: React.FC = () => {
  const [indexLeft, setIndexLeft] = useState(0);
  const [indexRight, setIndexRight] = useState(1);
  const [popupPlano, setPopupPlano] = useState<PlanoVariacao | null>(null);

  const planosVariacoes: PlanoVariacao[] = [
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

  const handleOpenPopup = (plano: PlanoVariacao) => setPopupPlano(plano);
  const handleClosePopup = () => setPopupPlano(null);

  return (
    <div className="container mx-auto px-4 py-8" id="planos">
      <h2 className="text-2xl text-center font-bold mb-5 text-testimonialTitleGreen">
        Planos para todas as empresas
      </h2>
      
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {[indexLeft, indexRight].map((index, i) => (
          <div key={i} className="flex-1 bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <button className="bg-gray-200 p-2 rounded-full" onClick={i === 0 ? handlePreviousLeft : handlePreviousRight}>←</button>
              <button className="bg-gray-200 p-2 rounded-full" onClick={i === 0 ? handleNextLeft : handleNextRight}>→</button>
            </div>

            <div className={`flex items-center justify-between ${planosVariacoes[index]?.nome === 'Free' ? 'bg-white' : 'bg-darkGreen'} p-6 rounded-t-lg`}>
              <h2 className={`text-xl sm:text-2xl font-semibold ${planosVariacoes[index]?.nome === 'Free' ? 'text-black' : 'text-white'}`}>
                {planosVariacoes[index]?.nome}
              </h2>
              <div className="text-right">
                <p className={`text-lg sm:text-xl font-bold ${planosVariacoes[index]?.nome === 'Free' ? 'text-black' : 'text-goldenYellow'}`}>
                  {planosVariacoes[index]?.preco}
                </p>
                <p className={`text-sm ${planosVariacoes[index]?.nome === 'Free' ? 'text-black' : 'text-white'}`}>Por mês</p>
              </div>
            </div>

            <div className="border-t border-gray-300 my-4"></div>

            <div className="text-black p-6">
              <h4 className="text-lg font-semibold text-center text-titleGreen">Meios de pagamento</h4>
              <div className="flex justify-between">
                <p className="text-sm"><strong>Boleto:</strong> {planosVariacoes[index]?.meiosPagamento?.boleto}</p>
                <div className="flex flex-col items-end">
                  <p className="text-sm"><strong>Crédito à vista:</strong> {planosVariacoes[index]?.meiosPagamento?.creditoAVista}</p>
                  <p className="text-sm"><strong>Crédito parcelado:</strong> {planosVariacoes[index]?.meiosPagamento?.creditoParcelado}</p>
                </div>
              </div>
            </div>

            {planosVariacoes[index]?.nome !== 'Free' && (
              <div className="border-t border-gray-300 my-4"></div>
            )}

            {planosVariacoes[index]?.nome === 'Free' && (
              <>
                <div className="border-t border-gray-300 my-4"></div>

                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-center text-titleGreen">Benefícios do plano Free</h4>
                  <ul className="list-disc ml-6 text-sm">
                    {planosVariacoes[index]?.beneficios?.map((beneficio, idx) => (
                      <li key={idx}>{beneficio}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {planosVariacoes[index]?.canaisDeComunicacao && planosVariacoes[index]?.nome !== 'Free' && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-center text-titleGreen">Canais de Comunicação</h4>
                <div className="text-sm">
                  <p><strong>Franquia de:</strong> {planosVariacoes[index]?.canaisDeComunicacao?.franquia}</p>
                  <p><strong>Franquia alternativa:</strong> {planosVariacoes[index]?.canaisDeComunicacao?.franquiaAlternativa}</p>
                  <p><strong>Robô de voz:</strong> {planosVariacoes[index]?.canaisDeComunicacao?.roboDeVoz}</p>
                </div>
              </div>
            )}

            <div className="mt-4 text-center">
              <button className="bg-buttonGreen text-white py-2 px-4 rounded-md" onClick={() => handleOpenPopup(planosVariacoes[index])}>
                Mais Informações
              </button>
            </div>
          </div>
        ))}
      </div>

      {popupPlano && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50" onClick={handleClosePopup}>
          <div className="bg-white p-6 rounded-lg w-11/12 sm:w-96" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-semibold mb-4">{popupPlano.nome}</h2>
            <h4 className="text-lg font-semibold">Benefícios:</h4>
            <ul className="list-disc ml-6 text-sm mb-4">
              {popupPlano.popupTexto.length > 0 ? (
                popupPlano.popupTexto.map((beneficio, idx) => (
                   <li key={idx}>{beneficio}</li>
                ))
              ) : (
                <li>Nenhum benefício disponível.</li>
              )}
            </ul>
            <button className="bg-red-500 text-white py-2 px-4 rounded-md" onClick={handleClosePopup}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Planos;