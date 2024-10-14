import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Ticker from "./Ticker";
import Logo from "../assets/logo.svg";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-indigo text-white relative">
      <div className="flex justify-between items-center px-4 py-2">
        <div>
          <img src={Logo} alt="SiteCurve Logo" className="w-[347px] h-[60px]" />
        </div>

        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className="text-indigo-muted font-medium text-sm flex items-center"
          >
            Features <FaChevronDown className="ml-1 mt-1 inline" size={12} />
          </a>
          <a href="#" className="text-indigo-muted font-medium text-sm">
            Pricing
          </a>
          <a
            href="#"
            className="text-indigo-muted font-medium text-sm flex items-center"
          >
            Company <FaChevronDown className="ml-1 mt-1 inline" size={12} />
          </a>
          <a
            href="#"
            className="text-indigo-muted font-medium text-sm flex items-center"
          >
            Resources <FaChevronDown className="ml-1 mt-1 inline" size={12} />
          </a>
          <a href="#" className="text-indigo-muted font-medium text-sm">
            Enterprise
          </a>
          <a href="#" className="text-indigo-muted font-medium text-sm">
            Login
          </a>
        </div>

        <div className="hidden md:flex space-x-2">
          <button className="bg-primary text-white py-2 px-3 rounded hover:bg-indigo-700">
            Create Landscape
          </button>
          <button className="border border-2 border-white text-white py-2 px-3 rounded hover:bg-primary hover:text-white">
            Discover Landscapes
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <GiHamburgerMenu size={30} />
          </button>
        </div>
      </div>

      <Ticker />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
