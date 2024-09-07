import HeroSlider from "./HeroSlider";
import SmallCarry from "./SmallCarry";

const Hero = () => {
  return (
    <section className="pb-5">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-2/3 lg:pe-3">
          <HeroSlider />
        </div>
        <div className="lg:w-1/3 mt-4 :lg:mt-0">
          <SmallCarry />
        </div>
      </div>
    </section>
  );
};

export default Hero;
