import { useRef, useEffect, useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import ArrowUp from "../assets/arrow-up.svg";
import ArrowDown from "../assets/arrow-down.svg";

const Ticker = () => {
  const [isHovered, setIsHovered] = useState(false);
  const tickerRef = useRef(null);

  const tickerData = [
    {
      site: "garagegymreviews.com",
      traffic: "4.2M",
      change: -52,
      isPositive: false,
    },
    { site: "capitalone.com", traffic: "4.2M", change: 52, isPositive: true },
    { site: "chase.com", traffic: "4.2M", change: -52, isPositive: false },
    { site: "citi.com", traffic: "4.2M", change: 52, isPositive: true },
    { site: "costco.com", traffic: "4.2M", change: 52, isPositive: true },
    { site: "amex.com", traffic: "4.2M", change: -52, isPositive: false },
    { site: "youtube.com", traffic: "4.2M", change: -52, isPositive: false },
    { site: "figma.com", traffic: "4.2M", change: 52, isPositive: true },
    { site: "google.com", traffic: "4.2M", change: 52, isPositive: true },
    { site: "microsoft.com", traffic: "4.2M", change: 52, isPositive: true },
    { site: "capitalone.com", traffic: "4.2M", change: 52, isPositive: true },
    { site: "chase.com", traffic: "4.2M", change: -52, isPositive: false },
    { site: "citi.com", traffic: "4.2M", change: 52, isPositive: true },
    { site: "costco.com", traffic: "4.2M", change: 52, isPositive: true },
    { site: "amex.com", traffic: "4.2M", change: -52, isPositive: false },
    { site: "youtube.com", traffic: "4.2M", change: -52, isPositive: false },
    { site: "figma.com", traffic: "4.2M", change: 52, isPositive: true },
    { site: "google.com", traffic: "4.2M", change: 52, isPositive: true },
    { site: "microsoft.com", traffic: "4.2M", change: 52, isPositive: true },
  ];

  useEffect(() => {
    let tickerSpeed = 1;
    const ticker = tickerRef.current;

    let animationFrame;
    const moveTicker = () => {
      if (!isHovered && ticker) {
        ticker.scrollLeft += tickerSpeed;
        if (ticker.scrollLeft >= ticker.scrollWidth - ticker.clientWidth) {
          ticker.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(moveTicker);
    };

    moveTicker();

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  return (
    <div
      ref={tickerRef}
      className="bg-indigo overflow-hidden whitespace-nowrap py-3 px-4 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {tickerData.map((item, index) => (
        <div
          key={index}
          className="inline-block bg-neutral text-white px-3 py-2 rounded-lg shadow-md mx-1 min-w-[180px] max-w-[180px] w-[180px] flex-shrink-0"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium truncate">{item.site}</span>
            <MdInfoOutline className="text-white font-bold" size={18} />
          </div>

          <div className="flex items-center mt-1 space-x-2">
            <span className="text-indigo-secondary font-medium text-sm">
              {item.traffic}
            </span>
            <div
              className={`flex items-center text-sm font-medium ${
                item.isPositive ? "text-success" : "text-destructive"
              }`}
            >
              <img
                src={item.isPositive ? ArrowUp : ArrowDown}
                alt={item.isPositive ? "arrow up" : "arrow down"}
                className="mr-1"
              />
              {Math.abs(item.change)}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ticker;
