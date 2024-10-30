import React from 'react';

interface PagueBemCardProps {
  title: string;
  description: string;
  imgUrl: string;
}

const PagueBemCard: React.FC<PagueBemCardProps> = ({ title, description, imgUrl}) => {

  return (
    <article className="flex">
      <div className="flex flex-col text-center justify-center items-center px-4 pt-5 pb-12 w-full rounded-3xl bg-rectangleGreen shadow-[4px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden w-80 h-72">
        <span><img src={imgUrl} alt={title}/></span>
        <h2 className="font-bold font-spartan text-textGray mt-2 text-2xl tracking-tight leading-normal">{title}</h2>
        <p className="font-inter self-stretch text-textGray mt-7 text-xl tracking-tight leading-normal">{description}</p>
      </div>
    </article>
  );
};

export default PagueBemCard;