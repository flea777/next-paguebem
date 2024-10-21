import React from 'react';
import PagueBemContaIcon from './PagueBemContaIcon';

interface PaymentCardProps {
  title: string;
  description: string;
}


const PaymentCard: React.FC<PaymentCardProps> = ({ title, description }) => {
  return (
    <article className="flex flex-col text-center rounded-none max-w-[300px] text-neutral-700">
      <div className="flex flex-col items-center px-4 pt-5 pb-12 w-full rounded-3xl bg-stone-100 shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
        <PagueBemContaIcon/>
        <h2 className="self-center text-3xl font-bold tracking-tight leading-loose">
          {title}
        </h2>
        <p className="mt-5 text-xl tracking-tight leading-8">
          {description}
        </p>
      </div>
    </article>
  );
};

export default PaymentCard;