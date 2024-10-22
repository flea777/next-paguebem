import React from 'react';
import PagueBemIcon from './PagueBemIcon';
import Logo from './Logo';

interface PagueBemCardProps {
  title: string;
  description: string;
}

const PagueBemCard: React.FC<PagueBemCardProps> = ({ title, description}) => {
  const imgUrl = "../assets/icone_pague_bem_recupera.png";

  return (
    <article className="flex flex-col text-center rounded-none max-w-[300px] text-neutral-700">
      <div className="flex flex-col items-center px-4 pt-5 pb-12 w-full rounded-3xl bg-stone-100 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] min-h-[350px] max-h-[370px]">
        <h2 className="-mt-2 text-2xl font-bold tracking-tight leading-loose">{title}</h2>
        <Logo/>
        <p className="self-stretch mt-7 text-lg tracking-tight leading-8">{description}</p>
      </div>
    </article>
  );
};

export default PagueBemCard;