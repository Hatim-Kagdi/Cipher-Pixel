// src/components/Footer.jsx
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="flex justify-between items-center border-b-2 pb-6 mb-6">
          <h1 className="font-bold text-2xl">Cipher Pixel</h1>
          <div className="flex gap-10">
            <ul className="flex gap-6 text-[16px]">
              <li className="hover:text-blue-300 cursor-pointer">About Us</li>
              <li className="hover:text-blue-300 cursor-pointer">Features</li>
              <li className="hover:text-blue-300 cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Icons */}
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2025 Cipher Pixel, Inc.</p>
          
          {/* Social Media Icons */}
          <div className="flex gap-5">
            <a href="#" className="text-blue-400 hover:text-blue-500 text-xl"><FaTwitter /></a>
            <a href="#" className="text-blue-600 hover:text-blue-700 text-xl"><FaFacebook /></a>
            <a href="#" className="text-blue-800 hover:text-blue-900 text-xl"><FaLinkedin /></a>
            <a href="#" className="text-red-600 hover:text-red-700 text-xl"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
