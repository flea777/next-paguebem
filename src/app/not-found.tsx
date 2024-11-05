import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { TbError404 } from "react-icons/tb";

export default function Pagina404() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-[#2D4416] rounded shadow-2xl border-3 border-[#578F47] p-5 m-5">
        <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
          <TbError404 className="text-4xl sm:text-5xl" />
          Página não encontrada
        </h1>
        <p className="text-center sm:text-left">
          A página que você está procurando não existe ou foi removida.
        </p>
        <section className="flex gap-4 items-center flex-col sm:flex-row">

          <Link href='/' className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
          <FaHome className="text-xl sm:text-2xl" />
          Voltar para a home
          </Link>
        </section>

      </main>
    </div>
  );
}
