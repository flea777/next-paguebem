import Image from "next/image";
import url from "../assets/Icone_pague_bem_localize.png";

const PagueBemLocalizeIcon = () => {
    return (  
    <main>
        <Image
          className="h-12 w-auto"
          src={url}
          alt="Logo Pague Bem"
        />
    </main> );
}
 
export default PagueBemLocalizeIcon;