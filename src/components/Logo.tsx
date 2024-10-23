

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


export default function Logo() {
  return (
    <main>
      <Link href="/" className="flex-shrink-0">
        <Image
          className="h-12 w-auto"
          src='/W_P_B.png'
          alt="Logo Pague Bem"
          width={200}
          height={50}
        />
      </Link>
    </main>
  );
}

