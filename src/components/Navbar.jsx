// src/components/Navbar.jsx
import { FaSignInAlt } from 'react-icons/fa';
import { PiSignInBold } from 'react-icons/pi';
import { SlBookOpen } from 'react-icons/sl';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black shadow-md sticky top-0 z-50 h-14">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Project Name */}
        <Link to="/" className="text-xl font-bold text-white flex items-center">
          <img src="/logo2.jpg" alt="Logo" className="mr-2 w-8 h-8 rounded-full" />
          Cipher Pixel
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8"> {/* Adjusted gap */}
          <div className="space-x-4 py-1 text-[18px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold pb-2.5 border-b-4 border-purple-500'
                  : 'text-gray-100'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/embed"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold pb-2.5 border-b-4 border-purple-500'
                  : 'text-gray-100'
              }
            >
              Embed
            </NavLink>
            <NavLink
              to="/extract"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold pb-2.5 border-b-4 border-purple-500'
                  : 'text-gray-100'
              }
            >
              Extract
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
