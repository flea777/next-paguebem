import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin, FaChevronDown } from 'react-icons/fa';

export default function MinimalistTaxiBookingPage() {
  return (
    <header className="bg-black min-h-screen relative">
      <nav className="absolute top-4 left-4">
        <ul className="flex flex-col space-y-4">
          {[FaInstagram, FaYoutube, FaLinkedin].map((Icon, index) => (
            <li key={index}>
              <a href="#" className="block bg-green-600 rounded-full p-2 hover:bg-green-500 transition-colors">
                <Icon className="text-white w-6 h-6" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="absolute bottom-8 right-8">
        <button className="bg-yellow-400 rounded-full p-4 hover:bg-yellow-300 transition-colors">
          <FaChevronDown className="h-6 w-6 text-black" />
        </button>
      </footer>
    </header>
  );
}