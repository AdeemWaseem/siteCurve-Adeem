import TopCurve from "../assets/right-curve.svg";
import BottomCurve from "../assets/bottom-curve.svg";
import Feature1 from "../assets/feature1.png";
import Feature2 from "../assets/feature2.png";
import Feature3 from "../assets/feature3.png";

function Features() {
  return (
    <div className="mt-10 md:p-8 md:space-x-4 space-y-8 md:space-y-0 md:flex md:justify-center">
      <div className="flex flex-col items-center">
        <FeatureCard
          title="Add keywords or websites"
          description="Get started by importing your keywords or websites alongside your preferred device, language, and location."
          imageSrc={Feature1}
        />
      </div>
      <Arrow />
      <div className="flex flex-col items-center">
        <FeatureCard
          title="Build landscape"
          description="SiteCurve uses AI to categorize all keywords and websites in the search results to build your custom SEO landscape."
          imageSrc={Feature2}
        />
      </div>
      <ArrowBottom />
      <div className="flex flex-col items-center">
        <FeatureCard
          title="Uncover insights"
          description="SiteCurve pulls fresh rank data, giving you an automated, up-to-date view of winning and losing websites each day."
          imageSrc={Feature3}
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, imageSrc }) {
  return (
    <div className="bg-white rounded shadow-md p-6 max-w-md text-start">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-base font-normal mb-4">{description}</p>
      <img src={imageSrc} alt={title} className="mx-auto rounded" />
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex flex-col items-center">
      <div className="absolute hidden md:block">
        <img src={TopCurve} className="mt-3 mr-3 w-20 h-10" />
      </div>
    </div>
  );
}

function ArrowBottom() {
  return (
    <div className="flex flex-col items-center justify-end">
      <div className="absolute hidden md:block">
        <img src={BottomCurve} className="mt-3 w-20 h-20" />
      </div>
    </div>
  );
}

export default Features;
