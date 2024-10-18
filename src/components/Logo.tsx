

// export default function Logo(){
//   return (
//         <main>
//           <Link href="/" className="flex-shrink-0">
//             <img className="h-8 w-auto" src="/1. Logo_Principal_Horizontal_Pague_Bem_Brasil.png" alt="Pague Bem" />
//           </Link>
//         </main> 
//   )
// }


import Link from "next/link";
import Image from "next/image";
import logo from "../assets/1. Logo_Principal_Horizontal_Pague_Bem_Brasil.png";

export default function Logo() {
  return (
    <main>
      <Link href="/" className="flex-shrink-0">
        <Image
          className="h-12 w-auto"
          src={logo}
          alt="Logo Pague Bem"
        />
      </Link>
    </main>
  );
}

