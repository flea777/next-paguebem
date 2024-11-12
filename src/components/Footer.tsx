import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-rectangleGreen w-full py-6 px-4 grid grid-cols-1 md:grid-cols-3 justify-between items-center">

      <section className="mb-6 md:mb-0">
        <h2 className="font-spartan text-titleGreen font-bold mb-2 text-2xl">Links úteis</h2>
        <ul className="space-y-1">
          <li>
            <Link href="" target="_blank" className="font-spartan text-titleGreen hover:text-hoverGreen transition-colors font-bold">
              Termos de Uso e Política de Privacidade
            </Link>
          </li>
          <li>
            <Link href="" target="_blank" className="font-spartan text-titleGreen hover:text-hoverGreen transition-colors font-bold">
              Planos
            </Link>
          </li>
          <li>
            <Link href="" target="_blank" className="font-spartan text-titleGreen hover:text-hoverGreen transition-colors font-bold">
              Quem somos
            </Link>
          </li>
          <li>
            <Link href="" target="_blank" className="font-spartan text-titleGreen hover:text-hoverGreen transition-colors font-bold">
              Depoimentos
            </Link>
          </li>
          <li>
            <Link href="/fale-com-getuliao" target="_blank" className="font-spartan text-titleGreen hover:text-hoverGreen transition-colors font-bold">
              Contato
            </Link>
          </li>
          <li>
            <Link href="/fale-com-getuliao" target="_blank" className="font-spartan text-titleGreen hover:text-hoverGreen transition-colors font-bold">
              Falar com um consultor
            </Link>
          </li>
        </ul>
      </section>

      <section className="flex flex-col items-center mb-6 md:mb-0">

        <Image src="/simbol_pbb.png" alt="PBB Symbol" width={80} height={108.96} className="h-auto" />

        <p className="font-spartan text-sm text-gray-600 mt-2">Pague Bem Brasil | 21.052.740/0001-19</p>

        <div className='flex gap-1'>
          
          <Link href="https://instagram.com" target="_blank" className="text-hoverGreen hover:text-hoverDarkGreen transition-colors rounded-full border border-hoverGreen p-1">
            <FaInstagram size={20} />
          </Link>
          
          <Link href="https://linkedin.com" target="_blank" className="text-hoverGreen hover:text-hoverDarkGreen transition-colors rounded-full border border-hoverGreen p-1">
            <FaLinkedin size={20} />
          </Link>

          <Link href="https://whatsapp.com" target="_blank" className="text-hoverGreen hover:text-hoverDarkGreen transition-colors rounded-full border border-hoverGreen p-1">
            <FaWhatsapp size={20} />
          </Link>
        </div>

      </section>

      <section className="flex space-x-4 justify-center">
        <p className="font-spartan text-sm text-black">Todos os direitos reservados.</p>
      </section>


    </footer>
  )
}