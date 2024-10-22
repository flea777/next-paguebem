import Image from "next/image";

interface PagueBemIconProps {
  imgUrl: string;
}

const PagueBemIcon : React.FC<PagueBemIconProps> = ({ imgUrl }) => {
    return (  
    <main>
        <Image
          className="h-12 w-auto"
          src={imgUrl}
          alt="Logo Pague Bem"
        />
    </main> );
}
 
export default PagueBemIcon;