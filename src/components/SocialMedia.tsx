import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

interface SocialMediaProps {
  color: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ color }) => {

  const isGreen = color === 'green' ? true : false;

  return (
    <nav 
      aria-label="Redes sociais"
      className={`${ isGreen === true ? 'fixed z-50' : ''} bottom-4 right-2 md:bottom-8 md:right-4 lg:bottom-12 lg:right-6 xl:bottom-16 xl:right-10 flex items-center`}>
      <ul className={`flex ${ isGreen === true ? 'flex-col space-y-3' : 'flex-row gap-2'} items-center`}>
        <li>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
          <span className={`${ isGreen === true ? 'bg-socialBackgroundGreen hover:bg-green-600' : 'bg-backgroundWhite hover:bg-socialBackgroundGreen'} rounded-full p-1 sm:p-2 lg:p-3 flex items-center justify-center text-white hover:bg-green-600 transform hover:scale-110 transition-all duration-300 ease-in-out`}>
              <FaInstagram className={`text-sm sm:text-md lg:text-lg ${ isGreen === true ? '' : 'text-socialIconGreen'}`}/>
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <span className={`${ isGreen === true ? 'bg-socialBackgroundGreen hover:bg-green-600' : 'bg-backgroundWhite hover:bg-socialBackgroundGreen'} rounded-full p-1 sm:p-2 lg:p-3 flex items-center justify-center text-white hover:bg-green-600 transform hover:scale-110 transition-all duration-300 ease-in-out`}>
              <FaLinkedinIn className={`text-sm sm:text-md lg:text-lg ${ isGreen === true ? '' : 'text-socialIconGreen'}`}/>
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://whatsapp.com" target="_blank" aria-label="WhatsApp">
          <span className={`${ isGreen === true ? 'bg-socialBackgroundGreen hover:bg-green-600' : 'bg-backgroundWhite hover:bg-socialBackgroundGreen'} rounded-full p-1 sm:p-2 lg:p-3 flex items-center justify-center text-white hover:bg-green-600 transform hover:scale-110 transition-all duration-300 ease-in-out`}>
              <FaWhatsapp className={`text-sm sm:text-md lg:text-lg ${ isGreen === true ? '' : 'text-socialIconGreen'}`}/>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SocialMedia;
