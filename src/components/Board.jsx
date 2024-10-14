import ArrowRight from "../assets/arrow-top-right.svg";
import Badge from "../assets/badge.svg";
import Clock from "../assets/clock.svg";
import Google from "../assets/google.svg";
import Folder from "../assets/folders.svg";
import Winners from "../assets/winners.png";
import Checked from "../assets/checked.svg";
import Losers from "../assets/losers.png";
import Features from "./Features";

const Board = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E2E1FC] to-[#F8F8FF] flex flex-col items-center py-10 px-5">
      {/* Title and Subtitle */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-drak max-w-6xl mb-4">
          Gain an advantage over your competitors with next-level SEO
          intelligence
        </h1>
        <p className="text-base md:text-xl font-normal text-primary-dark">
          Click the tabs below to see what makes SiteCurve standout from other
          SEO tools.
        </p>
      </div>

      {/* Tab Navigation Bar */}
      <div className="flex space-x-4 mb-10">
        <button className="px-1 md:px-4 flex items-center py-1 md:py-2 bg-white font-semibold text-base md:text-xl text-primary-link rounded border-2 border-primary-link">
          <img
            src={ArrowRight}
            className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] mr-1"
          />
          Winners & Losers
        </button>
        <button className="flex items-center md:px-4 px-1 py-1 md:py-2 bg-white font-semibold text-base md:text-xl text-gray-dark rounded border">
          <img
            src={Badge}
            className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] mr-1"
          />
          Leaderboards
        </button>
        <button className="hidden md:flex items-center px-4 py-2 bg-white font-semibold text-xl text-gray-dark rounded border">
          <img src={Clock} className="w-[24px] h-[24px] mr-1" />
          New Entrants
        </button>
        <button className="hidden md:flex items-center px-4 py-2 bg-white font-semibold text-xl text-gray-dark rounded border">
          <img src={Google} className="w-[24px] h-[24px] mr-1" />
          Unique SEO Metrics
        </button>
        <button className="hidden md:flex items-center px-4 py-2 bg-white font-semibold text-xl text-gray-dark rounded border">
          <img src={Folder} className="w-[24px] h-[24px] mr-1" />
          Portfolios
        </button>
      </div>

      {/* Main Content Section */}

      <div className="flex shadow-md pb-20 bg-white rounded-md flex-col lg:flex-row items-start justify-center max-w-6xl w-full lg:space-x-10 mx-auto">
        {/* Left Section */}
        <div className="pt-10 md:pt-20 pt-7 px-7 w-full lg:w-1/2 flex flex-col space-y-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-dark leading-tight">
            See which websites are winning and losing rank on your keywords
          </h2>
          <ul className="text-dark space-y-4 font-normal text-sm md:text-lg">
            <li className="flex items-center">
              <img src={Checked} className="mr-1" />
              View the biggest rank movers over custom time periods
            </li>
            <li className="flex items-start">
              <img src={Checked} className="mr-1" />
              Sort by share of voice, curve, volatility scores
            </li>
            <li className="flex items-start">
              <img src={Checked} className="mr-1" />
              Analyze shifts in specific categories and niches
            </li>
          </ul>
          <button className="bg-primary text-white md:w-48 px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700">
            Get Started
          </button>
        </div>

        {/* Right Section: Winners and Losers Cards */}

        <div className="relative flex w-full lg:w-1/2 pt-10 pb-20 ">
          {/* Winners Card */}
          <div className="relative z-10 w-full pl-20">
            <img
              src={Winners}
              alt="Winners card"
              className="w-[400px] h-[350px]"
            />
          </div>

          {/* Losers Card */}
          <div className="absolute -left-20 top-40 z-0 w-11/12 pl-20">
            <img
              src={Losers}
              alt="Losers card"
              className="w-[400px] h-[350px]"
            />
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Board;
