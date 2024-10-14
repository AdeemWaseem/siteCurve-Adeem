import { useEffect } from "react";
import Ticker from "./Ticker";
import Logo from "../assets/logo.svg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 w-full h-screen bg-indigo z-10 md:hidden transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header for the mobile menu */}
      <div className="flex justify-between items-center mb-4 px-4">
        <div>
          <img src={Logo} alt="SiteCurve Logo" className="w-[347px] h-[60px]" />
        </div>
        <button className="text-white focus:outline-none" onClick={onClose}>
          <GiHamburgerMenu size={30} />
        </button>
      </div>

      {/* Ticker Section in Mobile Menu */}
      <Ticker />

      {/* Navigation Links */}
      <nav className="space-y-4 divide-y divide-gray-200">
        <div>
          <a
            href="#"
            className="block flex justify-between items-center text-lg font-medium mt-4 text-indigo-muted ml-4"
          >
            Features
            <FiChevronDown className="mr-2" />
          </a>
        </div>
        <div>
          <a
            href="#"
            className="block text-lg font-medium mt-4 text-indigo-muted ml-4"
          >
            Pricing
          </a>
        </div>
        <div>
          <a
            href="#"
            className="block flex justify-between items-center text-lg font-medium mt-4 text-indigo-muted ml-4"
          >
            Company
            <FiChevronDown className="mr-2" />
          </a>
        </div>
        <div>
          <button className="w-full flex items-center justify-between text-lg font-medium ml-4 mt-2">
            Resources
            <FiChevronUp className="mr-6" />
          </button>
          <div className="ml-8 mt-2 space-y-2">
            <a href="#" className="block text-base font-normal">
              Blog
            </a>
            <a href="#" className="block text-base font-normal">
              Community
            </a>
            <a href="#" className="block text-base font-normal">
              Knowledge Base
            </a>
            <a href="#" className="block text-base font-normal">
              Roadmap
            </a>
            <a href="#" className="block text-base font-normal">
              Comparisons
            </a>
          </div>
        </div>
        <div>
          <a
            href="#"
            className="block text-lg font-medium mt-4 text-indigo-muted ml-4"
          >
            Enterprise
          </a>
        </div>
        <div>
          <a
            href="#"
            className="block text-lg font-medium mt-4 text-indigo-muted ml-4"
          >
            Login
          </a>
        </div>
      </nav>

      {/* Buttons */}
      <div className="absolute bottom-0 inset-x-0 p-4">
        <button className="bg-primary w-full text-white py-2 px-4 rounded hover:bg-indigo-700 mb-2">
          Create Landscape
        </button>
        <button className="border border-indigo-muted w-full text-white py-2 px-4 rounded hover:bg-indigo-600 hover:text-white">
          Discover Landscapes
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
