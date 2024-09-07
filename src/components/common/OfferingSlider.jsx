import { ArrowIcon, CommentsIcon, FireLikesIcon } from "./Icons";
import Slider from "react-slick";
import { OfferSlider } from "./Helper";
import { useRef } from "react";

const OfferingSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.4,
    // centerPadding:'200px',
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          centerMode: false,
        },
      },
    ],
  };
  const first = useRef();
  return (
    <>
      <section>
        <div className="mx-auto">
          <div className="relative before:absolute before:content before:w-full before:h-px before:bg-gray-200 before:end-0 before:z-0  before:top-2/4 after:absolute after:content after:w-[269px] after:translate-x-2/4 after:h-px after:bg-white after:end-2/4 after:z-10 after:top-2/4">
            <h3 className="text-center text-md p-3 relative text-gray-600 z-20 font-ffInter font-semibold mb-6">
              Other Fulcra Offerings
            </h3>
          </div>
          {/* filter features option */}
          <div className="relative flex justify-between mb-3 ">
            <select
              id="countries"
              className="flex items-center  px-3 py-2 align-middle cursor-pointer gap-6 bg-white border border-[#C4C4C4] rounded-md relative max-w-[150px] !focus:focus-visible:outline-none outline-none"
            >
              <option className="py-2 px-2 font-normal text-md text-[#212121]">
                Featured
              </option>
              <option
                className="bg-white py-2 px-2 text-md text-[#212121]"
                value="US"
              >
                Dom
              </option>
              <option
                className="bg-white py-2 px-2 text-md text-[#212121]"
                value="CA"
              >
                Rob
              </option>
              <option
                className="bg-white py-2 px-2 text-md text-[#212121]"
                value="FR"
              >
                Mach
              </option>
              <option
                className="bg-white py-2 px-2 text-md text-[#212121]"
                value="DE"
              >
                VR
              </option>
            </select>
            <h4 className="absolute top-0 left-0 translate-x-1/4 -translate-y-2/4 text-xxs font-normal text-[#666666] bg-white px-1">
              Filter
            </h4>
            {/* Slider arrow */}
            <div className="flex align-middle gap-[14px]">
              <button
                className="sm:w-12 sm:h-12 w-10 h-10 rounded-full rotate-180 bg-white shadow-sliderbtnShadow flex justify-center align-middle cursor-pointer border-[1px] border-transparent focus:border-gray-800 transition-all active:scale-95"
                onClick={() => first.current.slickPrev()}
              >
                <ArrowIcon />
              </button>
              <button
                className="sm:w-12 w-10 sm:h-12 h-10 rounded-full bg-white shadow-sliderbtnShadow flex justify-center align-middle cursor-pointer border-[1px] border-transparent focus:border-gray-800 transition-all active:scale-95"
                onClick={() => first.current.slickNext()}
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
          {/* Slick Slider */}
          <Slider
            {...settings}
            ref={first}
            className="FulcraOfferingsslider relative md:after:content md:after:absolute md:after:w-[159px] md:after:h-full md:after:bg-linearWhite md:after:top-0 md:after:-end-[20px] pt-[14px]"
          >
            {OfferSlider.map((val, index) => {
              return (
                <div className="pr-3 sm:pr-5 h-full" key={index}>
                  <div
                    className="px-[14px] py-3 border card border-gray-200 rounded h-full flex flex-col justify-between group hover:border-[#E53531] transition-all"
                    key={val.id}
                  >
                    <div>
                      <div className="flex items-center gap-[11px] pb-3">
                        <img
                          className=" max-w-[48px]"
                          src={val.sliderLogo}
                          alt="img"
                        />
                        <div>
                          <h4 className=" text-black font-medium text-sm tracking-[.4px] cursor-pointer">
                            {val.heading1}
                          </h4>
                          <h5 className=" text-gray-400 font-medium text-xxs tracking-[.4px] cursor-pointer">
                            {val.heading2}
                          </h5>
                        </div>
                      </div>
                      <h4 className=" font-semibold text-lg text-textblack tracking-[.17px] pt-4">
                        {val.mainheading}
                      </h4>
                    </div>
                    <div>
                      <h5 className="font-semibold text-xxs text-gray-400 tracking-[.17px] pt-3">
                        {val.usagePlace} <span className="px-1"> • </span>{" "}
                        {val.usagePlace2}
                      </h5>
                      <div className="rounded-md overflow-hidden relative mt-3">
                        <img
                          className="w-full group-hover:scale-110 transition-all"
                          src={val.sliderimg}
                          alt="img"
                        />
                        <div className="w-[40px] absolute bottom-0 left-0 translate-x-1/4 -translate-y-1/4">
                          <img
                            className="w-full"
                            src={val.percentCircle}
                            alt="img"
                          />
                          <h5 className=" absolute text-white text-semibold text-xxs top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ">
                            {val.percentage}
                          </h5>
                        </div>
                        <h4 className="absolute right-0 bottom-0 text-xxs font-normal leading-[19px] text-white pe-4 pb-2 tracking-[.17px]">
                          {val.days}
                          <span className="block text-center font-bold text-md text-white">
                            {val.numberDay}
                          </span>
                        </h4>
                      </div>
                      <div className="flex items-center justify-between pt-4 pb-2">
                        <div className="flex items-center gap-[14px]">
                          <div className="flex items-center gap-1 cursor-pointer  hover:brightness-90 duration-200 group/edit">
                            <CommentsIcon />
                            <h5 className=" font-bold text-xxs text-gray-400 tracking-[.46px]">
                              {val.totalmessage}
                            </h5>
                          </div>
                          <div className="flex items-center gap-1 cursor-pointer hover:brightness-90 duration-200 group/edit">
                            <FireLikesIcon />
                            <h5 className=" font-bold text-xxs text-gray-400 tracking-[.46px]">
                              {val.totalLikes}
                            </h5>
                          </div>
                        </div>
                        <button className="font-bold text-xxs text-white bg-gray-800 py-[3px] px-[8px] leading-6 rounded hover:bg-white hover:text-gray-800 border-[1px] border-gray-800 transition-all duration-300">
                          {val.sliderbtn}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default OfferingSlider;
