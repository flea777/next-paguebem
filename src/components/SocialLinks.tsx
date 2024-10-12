import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a href="https://www.instagram.com/paguebembrasil/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
        <FaInstagram size={24} />
      </a>
      <a href="https://www.linkedin.com/company/paguebembrasil/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
        <FaLinkedin size={24} />
      </a>
      <a href="https://wa.me/yourNumber" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}



