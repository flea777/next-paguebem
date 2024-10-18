import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <nav aria-label="Redes sociais">
      <ul className="flex items-center justify-between space-x-4">
        <li>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <span className="bg-[#019a0c] rounded-full p-2 flex items-center justify-center text-white hover:bg-green-600 transform hover:scale-110 transition-all duration-300 ease-in-out">
              <FaInstagram size={20} />
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <span className="bg-[#019a0c] rounded-full p-2 flex items-center justify-center text-white hover:bg-green-600 transform hover:scale-110 transition-all duration-300 ease-in-out">
              <FaLinkedinIn size={20} />
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://whatsapp.com" target="_blank" aria-label="WhatsApp">
            <span className="bg-[#019a0c] rounded-full p-2 flex items-center justify-center text-white hover:bg-green-600 transform hover:scale-110 transition-all duration-300 ease-in-out">
              <FaWhatsapp size={20} />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
