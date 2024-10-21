import Image from "next/image";
import url from "../assets/icone_pague_bem_protege.png";

const PagueBemProtegeIcon = () => {
    return (  
    <main>
        <Image
          className="h-12 w-auto"
          src={url}
          alt="Logo Pague Bem"
        />
    </main> );
}
 
export default PagueBemProtegeIcon;