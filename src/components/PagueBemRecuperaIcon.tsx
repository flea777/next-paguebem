import Image from "next/image";
import url from "../assets/icone_pague_bem_recupera.png";

const PagueBemRecuperaIcon = () => {
    return (  
    <main>
        <Image
          className="h-12 w-auto"
          src={url}
          alt="Logo Pague Bem"
        />
    </main> );
}
 
export default PagueBemRecuperaIcon;