import HeroDashboard from "../assets/hero-dash.png";
import Card from "../assets/credit-card.svg";
import { FaSearch } from "react-icons/fa";
import Vector1 from "../assets/Vector1.svg";
import Vector2 from "../assets/Vector2.svg";
import Vector3 from "../assets/Vector3.svg";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-100 via-gray-50 to-white py-16 px-4 sm:px-8 overflow-hidden">
      <img src={Vector1} className="absolute bottom-0 right-0 w-full" />

      <img src={Vector2} className="absolute bottom-0 right-0 w-full" />

      <img src={Vector3} className="absolute bottom-[-10px] right-0 w-full" />

      {/* Hero Section */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-dark mb-6">
          Discover Who’s Winning and Losing in SEO and Why
        </h1>
        <p className="text-sm md:text-xl font-normal text-dark">
          Spot winning and losing websites across your competitive landscape in
          different niches, website types, and business models.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <button className="bg-primary hover:bg-blue-700 text-white text-base font-medium py-2 px-6 rounded w-full sm:w-auto shadow-lg">
            Create Landscape -{" "}
            <span className="font-bold text-base">It’s Free</span>
          </button>
          <button className="bg-white text-black hover:bg-gray-300 font-medium text-base border py-2 px-6 rounded w-full sm:w-auto shadow-lg">
            Schedule a demo
          </button>
        </div>
        <p className="text-gray font-normal mt-4 text-sm text-center justify-center flex items-center">
          <img src={Card} alt="Card logo" className="w-5 h-5 mr-2" />
          No Credit Card Required
        </p>
      </div>
      <div className="relative inset-x-0 bottom-0 mx-auto mt-4">
        <img
          src={HeroDashboard}
          alt="Dashboard Image"
          className="w-full object-contain"
        />
        <p className="font-normal mt-4 text-base text-center">
          <span className="flex items-center justify-center block md:hidden">
            <FaSearch className="w-4 h-4 mr-2" />
            Discover existing landscapes:
          </span>
          {/* For mobile: Second line text */}
          <span className="block md:hidden text-primary-link text-base font-semibold mt-1">
            Real Estate Agents, Credit Cards, Lawyers
          </span>

          {/* For desktop: Single line text */}
          <span className="hidden md:flex items-center justify-center mt-4">
            <FaSearch className="w-4 h-4 mr-2" />
            <span>
              Discover existing landscapes:{" "}
              <span className="text-primary-link font-semibold">
                Real Estate Agents, Credit Cards, Lawyers
              </span>
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
