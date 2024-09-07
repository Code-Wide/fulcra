
import watch_img from "../../assets/images/svg/watch-img.svg";
import carry_right_arrow from "../../assets/images/svg/carry-right-arrow.svg";
import nintyFive_img from "../../assets/images/svg/Donut-Chart.svg";
import { useState } from "react";
import HeroPopUp from "./HeroPopUp";
import { ToolIcon } from "../common/Icons";

const Offering = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="border-y-2">
        <div className="flex flex-col lg:flex-row py-5 sm:py-4 lg:py-3 justify-between items-center relative lg:after:content lg:after:absolute lg:after:h-full lg:after:ms-[-3px] lg:after:bg-[#E5E7EB] lg:after:top-0 lg:after:start-1/2 lg:after:w-[2px]">
          <div className="w-full lg:w-1/2">
            <div className="sm:flex items-center">
              <div className=" bg-gray-200 inline-block py-1 ps-1 pe-3 rounded-full">
                <div className="flex items-center">
                  <button
                    className="px-[11px] py-[3px] rounded-full text-white uppercase font-bold text-xxs bg-[background-color] bg_gridant_btn relative overflow-hidden"
                  >
                    Live Offering
                  </button>
                  <p className=" mb-0 ms-[13px] font-bold text-xxs text-black">
                    28 Days Left
                  </p>
                  <img className=" ms-[7px]" src={watch_img} alt="watch_img" />
                </div>
              </div>
              <div className="sm:ms-[22px] flex pt-3 mb-1 sm:pt-0 sm:mb-0">
                <div className="flex items-center">
                  <p
                    className=" mb-0 font-Inter font-medium text-xs text-gray-500"
                  >
                    Everyday Carry
                  </p>
                  <img
                    className="ms-3"
                    src={carry_right_arrow}
                    alt="carry_right_arrow"
                  />
                  <p
                    className=" mb-0 font-Inter font-medium text-xs text-gray-500 ms-3"
                  >
                    Bags
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-1/2 mt-4 lg:mt-0">
            <div className="sm:flex items-center justify-between lg:ps-[10px] xl:ps-[30px] py-1">
              <div className="flex items-center">
                <img src={nintyFive_img} alt="nintyFive_img" />
                <p className="ms-4 text-gray-400">
                  <span className="flex items-center text-sm text-gray-500">
                    Campaign to Date{" "}
                    <span
                      onClick={() => setShow(!show)}
                      className="group cursor-pointer pt-[1px] ms-2"
                    >
                      <span>
                        <ToolIcon />
                      </span>
                    </span>
                    {show ? (
                      <div
                        onClick={() => setShow(!show)}
                        className="fixed w-full top-[50%] translate-y-[-50%] start-[50%] translate-x-[-50%] h-full z-40"
                      >
                        <HeroPopUp />
                      </div>
                    ) : (
                      ""
                    )}
                  </span>
                  <span className="block text-gray-500 text-base">
                    <span className=" text-slate-800 font-bold">
                      $470,000
                    </span>{" "}
                    of <span className="lg:block xl:inline">$500,000 goal</span>
                  </span>
                </p>
              </div>
              <div className="flex items-center mt-4 sm:mt-0 lg:mb-[24px] xl:mb-0 float-left">
                <p className=" sm:ms-4 text-gray-400">
                  <span className="flex text-sm items-center text-gray-500">
                    Total Backers
                    <span
                      onClick={() => setShow(!show)}
                      className="group relative cursor-pointer pt-[1px] ms-2"
                    >
                      <span>
                        <ToolIcon />
                      </span>
                    </span>
                    {show ? (
                      <div
                        onClick={() => setShow(!show)}
                        className="fixed w-full top-[50%] translate-y-[-50%] start-[50%] translate-x-[-50%] h-full z-40"
                      >
                        <HeroPopUp />
                      </div>
                    ) : (
                      ""
                    )}
                  </span>
                  <span className="block text-gray-500 text-base">
                    <span className=" text-slate-800 font-bold">10,375</span>
                  </span>
                </p>
              </div>
              <div className="flex items-center mt-4 sm:mt-0 lg:mb-[24px] xl:mb-0 float-right">
                <p className="sm:ms-4 text-gray-400">
                  <span className="flex items-center text-sm text-gray-500">
                    Watching
                    <span
                      onClick={() => setShow(!show)}
                      className="group relative cursor-pointer pt-[1px] ms-2"
                    >
                      <span>
                        <ToolIcon />
                      </span>
                    </span>
                    {show ? (
                      <div
                        onClick={() => setShow(!show)}
                        className="fixed w-full top-[50%] translate-y-[-50%] start-[50%] translate-x-[-50%] h-full z-40"
                      >
                        <HeroPopUp />
                      </div>
                    ) : (
                      ""
                    )}
                  </span>
                  <span className="block text-gray-500 text-base">
                    <span className=" text-slate-800 font-bold"> 7,289</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offering;
