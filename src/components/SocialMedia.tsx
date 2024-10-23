import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <nav 
      aria-label="Redes sociais"
      className="fixed bottom-4 right-2 md:bottom-8 md:right-4 lg:bottom-12 lg:right-6 xl:bottom-16 xl:right-10 flex flex-col items-center z-50"
    >
      <ul className="flex flex-col items-center space-y-3">
        <li>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <span className="bg-[#FEB700] rounded-full p-1 sm:p-2 lg:p-3 flex items-center justify-center text-white hover:bg-green-600 transform hover:scale-110 transition-all duration-300 ease-in-out">
              <FaInstagram className="text-sm sm:text-md lg:text-lg" />
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <span className="bg-[#FEB700] rounded-full p-1 sm:p-2 lg:p-3 flex items-center justify-center text-white hover:bg-green-600 transform hover:scale-110 transition-all duration-300 ease-in-out">
              <FaLinkedinIn className="text-sm sm:text-md lg:text-lg" />
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://whatsapp.com" target="_blank" aria-label="WhatsApp">
            <span className="bg-[#FEB700] rounded-full p-1 sm:p-2 lg:p-3 flex items-center justify-center text-white hover:bg-green-600 transform hover:scale-110 transition-all duration-300 ease-in-out">
              <FaWhatsapp className="text-sm sm:text-md lg:text-lg" />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
