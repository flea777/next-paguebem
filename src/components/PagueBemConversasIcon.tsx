import Image from "next/image";
// trocar o icon
import url from "../assets/icone_pague_bem_conta.png";

const PagueBemConversasIcon = () => {
    return (  
    <main>
        <Image
          className="h-12 w-auto"
          src={url}
          alt="Logo Pague Bem"
        />
    </main> );
}
 
export default PagueBemConversasIcon;