import React from 'react';
import Image from 'next/image';

interface PagueBemCardProps {
  title: string;
  description: string;
  imgUrl: string;
}

const PagueBemCard: React.FC<PagueBemCardProps> = ({ title, description, imgUrl }) => {
  return (
    <article className="flex flex-col text-center justify-center items-center px-4 pt-5 pb-12 w-full rounded-3xl bg-rectangleGreen shadow-[4px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden max-w-[220px] mx-auto sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px]">
      <span>
        <Image src={imgUrl} alt={title} width={80} height={80} />
      </span>
      <h2 className="font-bold font-spartan text-textGray mt-2 text-xl sm:text-lg md:text-base lg:text-xl tracking-tight leading-normal">
        {title}
      </h2>
      <p className="font-inter self-stretch text-textGray mt-7 text-sm sm:text-base md:text-sm lg:text-base tracking-tight leading-normal">
        {description}
      </p>
    </article>
  );
};

export default PagueBemCard;
