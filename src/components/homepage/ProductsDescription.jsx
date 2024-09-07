// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import home_bag_img from "../../assets/images/webp/home-bag-img.webp";
import phn_bag from "../../assets/images/webp/phn-bag.webp";
import men_img from "../../assets/images/webp/men-img.webp";
import third_bag from "../../assets/images/webp/third-bag.webp";
import fourth_bag from "../../assets/images/webp/fourth-bag.webp";
import offer_bag from "../../assets/images/webp/offer-bag.webp";
import Allproducts from "../../assets/images/svg/allproducts.svg";
import { AddIcon, MoreInfo, TruckIcon } from "../common/Icons";
import HeroPopUp from "./HeroPopUp";

const ProductsDescription = () => {
  const [activetab, setActiveTab] = useState("First");
  const [activeNavtab, setActiveNavTab] = useState("one");
  const [show, setShow] = useState(false);
  const [showPopUp, setshowPopUp] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleTab = (tab) => {
    setActiveNavTab(tab);
  };
  return (
    <>
      <section id="productDescription" className=" py-12">
        <div className="mx-auto">
          <div className="flex-row xl:flex lg:me-7">
            <div className=" xl:w-2/3  pb-[13px] border-b-2 overflow-auto scroll-smooth scroll">
              <ul className="flex lg:w-[750px] lg:gap-10 gap-4">
                <li
                  onClick={() => handleTabClick("First")}
                  className="cursor-pointer"
                >
                  <span
                    className={`font-Inter font-semibold relative cursor-pointer ${
                      activetab == "First"
                        ? "text-base text-rose-600 after:content after:absolute after:w-full after:h-1 after:bg-rose-600 after:bottom-[-15px] after:start-0"
                        : "text-base text-[#475569] "
                    }`}
                  >
                    TL;DR
                  </span>
                </li>
                <li
                  onClick={() => handleTabClick("Second")}
                  className="cursor-pointer"
                >
                  <span
                    className={`font-Inter font-semibold relative  ${
                      activetab == "Second"
                        ? "text-base text-rose-600 after:content after:absolute after:w-full after:h-1 after:bg-rose-600 after:bottom-[-15px] after:start-0"
                        : "text-base text-[#475569]"
                    }`}
                  >
                    Storyline
                  </span>
                </li>
                <li
                  onClick={() => handleTabClick("Third")}
                  className="cursor-pointer"
                >
                  <span
                    className={`font-Inter font-semibold relative  ${
                      activetab == "Third"
                        ? "text-base text-rose-600 after:content after:absolute after:w-full after:h-1 after:bg-rose-600 after:bottom-[-15px] after:start-0"
                        : "text-base text-[#475569]"
                    }`}
                  >
                    Timeline
                  </span>
                </li>
                <li
                  onClick={() => handleTabClick("Fourth")}
                  className="cursor-pointer"
                >
                  <span
                    className={`font-Inter font-semibold relative  ${
                      activetab == "Fourth"
                        ? "text-base text-rose-600 after:content after:absolute after:w-full after:h-1 after:bg-rose-600 after:bottom-[-15px] after:start-0"
                        : "text-base text-[#475569]"
                    }`}
                  >
                    FAQs
                  </span>
                </li>
                <li
                  onClick={() => handleTabClick("Fifth")}
                  className="cursor-pointer"
                >
                  <span
                    className={`font-Inter font-semibold relative  ${
                      activetab == "Fifth"
                        ? "text-base text-rose-600 after:content after:absolute after:w-full after:h-1 after:bg-rose-600 after:bottom-[-15px] after:start-0"
                        : "text-base text-[#475569]"
                    }`}
                  >
                    Team
                  </span>
                </li>
                <li
                  onClick={() => handleTabClick("Sixth")}
                  className="cursor-pointer"
                >
                  <span
                    className={`font-Inter font-semibold relative  ${
                      activetab == "Sixth"
                        ? "text-base text-rose-600 after:content after:absolute after:w-full after:h-1 after:bg-rose-600 after:bottom-[-15px] after:start-0"
                        : "text-base text-[#475569]"
                    }`}
                  >
                    Updates
                  </span>
                </li>
                <li
                  onClick={() => handleTabClick("Seventh")}
                  className="cursor-pointer"
                >
                  <span
                    className={`font-Inter font-semibold relative  ${
                      activetab == "Seventh"
                        ? "text-base text-rose-600 after:content after:absolute after:w-full after:h-1 after:bg-rose-600 after:bottom-[-15px] after:start-0"
                        : "text-base text-[#475569]"
                    }`}
                  >
                    Discussion
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="xl:flex-row flex-col justify-between flex xl:h-[1516px]">
            {activetab == "First" && (
              <div className="small:flex-col xl:w-2/3  mt-8 xl:me-10  lg:w-[770px] ">
                <h2 className="font-Inter font-bold text-xl mb-0 text-black">
                  Asymmetrical Everyday Carry
                </h2>
                <p className=" font-Inter font-normal text-base text-gray-700 mt-3">
                  Donned in Ranger Green 1000 denier Cordura® as a base layer,
                  subtle hits of vibrant yellow add pop to the line, giving it
                  attitude and the attention it deserves. Camo and tonal
                  military standards are required to blend in with the
                  environment and elude the enemy.
                </p>
                <div className=" flex-col sm:flex-row flex mt-6">
                  <div className=" sm:w-3/5">
                    <img
                      className=" w-full"
                      src={home_bag_img}
                      alt="home_bag_img"
                    />
                  </div>
                  <div className=" sm:w-2/5 mt-5 sm:mt-0">
                    <div className="flex-row flex ms-6">
                      <div className=" w-1/2">
                        <img className=" w-full" src={phn_bag} alt="phn_bag" />
                      </div>
                      <div className=" w-1/2">
                        <img className=" w-full" src={men_img} alt="men_img" />
                      </div>
                    </div>
                    <div className="flex-row flex">
                      <div className=" w-1/2">
                        <img
                          className=" w-full"
                          src={third_bag}
                          alt="third_bag"
                        />
                      </div>
                      <div className=" w-1/2">
                        <img
                          className=" w-full"
                          src={fourth_bag}
                          alt="fourth_bag"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <li className=" font-bold mt-6 text-md list-none text-primary">
                  Highlights
                </li>
                <ul className="ps-6 mt-4">
                  <li className="list-disc mt-1 font-normal text-sm text-gray-700">
                    Ranger Green Cordura
                  </li>
                  <li className="list-disc mt-1 font-normal text-sm text-gray-700">
                    Hits of Yellow
                  </li>
                  <li className="list-disc mt-1 font-normal text-sm text-gray-700">
                    Designed with BA7ANCE™
                  </li>
                  <li className="list-disc mt-1 font-normal text-sm text-gray-700">
                    Pocket Research
                  </li>
                  <li className="list-disc mt-1 font-normal text-sm text-gray-700">
                    Minimalist Everyday Carry
                  </li>
                  <li className="list-disc mt-1 font-normal text-sm text-[#374151]">
                    Made in USA
                  </li>
                </ul>
                <h4 className="font-bold mt-9 text-md list-none text-primary">
                  Details
                </h4>
                <p className=" font-Inter font-medium mt-5 text-sm text-[#374151]">
                  Carry what you need: Five (5) pockets and d-rings for phone,
                  wallet, passport, keys, sunglasses, Air Pods, external
                  battery, charging cables, tablet, but not much more.
                </p>
                <div className="xl:pb-[140px] pb-[50px] xl:me-[73.6px] mt-5 xl:mt-0">
                  <img
                    className="max-w-3xl w-full"
                    src={Allproducts}
                    alt="allproducts"
                  />
                  <li className=" font-bold mt-4 text-md list-none text-primary">
                    Specs
                  </li>
                  <ul className="ps-4 mt-3">
                    <li className="list-disc mt-1 font-normal text-sm text-gray-700">
                      3.7 liters capacity
                    </li>
                    <li className="list-disc mt-1 font-normal text-sm text-gray-700">
                      Fits an 8” tablet
                    </li>
                    <li className="list-disc mt-1 font-normal text-sm text-gray-700">
                      1680D Ballistic nylon (Black) and Cordura (Colors)
                    </li>
                    <li className="list-disc mt-1 font-normal text-sm text-gray-700">
                      Tiny hit of 3M reflective tape
                    </li>
                    <li className="list-disc mt-1 font-normal text-sm text-gray-700">
                      Dimensions (Max): L 9&#34; (229mm) x W 3 (76mm) x H 9&#34;
                      (229mm)
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {activetab == "Second" && (
              <div className="xl:w-2/3  mt-8 xl:me-10">
                <h2 className="font-Inter font-bold text-xl mb-0 text-black">
                  More interesting offerings
                </h2>
                <p className=" font-Inter font-normal text-base text-gray-700 mt-3">
                  Comming Soon
                </p>
              </div>
            )}
            {activetab == "Third" && (
              <div className="xl:w-2/3  mt-8 xl:me-10">
                <h2 className="font-Inter font-bold text-xl mb-0 text-black">
                  Campaign Brand / Team Actions
                </h2>
                <p className=" font-Inter font-normal text-base text-gray-700 mt-3">
                  go ahead
                </p>
              </div>
            )}
            {activetab == "Fourth" && (
              <div className="xl:w-2/3  mt-8 xl:me-10">
                <h2 className="font-Inter font-bold text-xl mb-0 text-black">
                  Other / Related Offerings
                </h2>
                <p className=" font-Inter font-normal text-base text-gray-700 mt-3">
                  Plz go ahead
                </p>
              </div>
            )}
            {activetab == "Fifth" && (
              <div className="xl:w-2/3  mt-8 xl:me-10">
                <h2 className="font-Inter font-bold text-xl mb-0 text-black">
                  Spark Grills: Precision Charcoal Grilling Cooking & Kitchen •
                  Home & Garden
                </h2>
                <p className=" font-Inter font-normal text-base text-gray-700 mt-3">
                  go ahead please
                </p>
              </div>
            )}
            {activetab == "Sixth" && (
              <div className="xl:w-2/3  mt-8 xl:me-10">
                <h2 className="font-Inter font-bold text-xl mb-0 text-black">
                  Campaign Full Fulcra “Powered by” Footer (Active State)
                </h2>
                <p className=" font-Inter font-normal text-base text-gray-700 mt-3">
                  please wait for some time
                </p>
              </div>
            )}
            {activetab == "Seventh" && (
              <div className="xl:w-2/3  mt-8 xl:me-10">
                <h2 className="font-Inter font-bold text-xl mb-0 text-black">
                  Small Carry 3.0
                </h2>
                <p className=" font-Inter font-normal text-base text-gray-700 mt-3">
                  almost done
                </p>
              </div>
            )}
            <div className="xl:w-2/6 mt-8 xl:mt-0">
              <div className="min-[450px]:flex-row flex-col-reverse flex gap-6">
                {activeNavtab === "one" && (
                  <div className="xl:w-3/4 sm:w-3/4 min-[450px]:w-8/12">
                    <div className="border-2 border-[#E5E7EB] rounded-lg ">
                      <div className="flex justify-between bg-[#F3F4F6] border-b-2 border-[#E5E7EB] py-3 rounded-t-md px-4">
                        <div className="font-Inter font-normal text-[#4C4C4C] text-xs flex items-center relative">
                          <span className=" font-semibold text-xs text-[#4C4C4C] font-Inter">
                            Offer #1:
                          </span>
                          163 of 500
                          <span
                            onClick={() => setshowPopUp(!showPopUp)}
                            className="relative inline-block ms-1 cursor-pointer"
                          >
                            <MoreInfo />{" "}
                            <a
                              href="#"
                              className="hidden hover:flex text-base z-[1] px-1 py-1"
                            >
                              something missing
                            </a>
                          </span>
                          {showPopUp ? (
                            <div
                              onClick={() => setshowPopUp(!showPopUp)}
                              className="absolute max-w-[1000px] top-[50px] lg:start-[-500px] h-full  z-10"
                            >
                              <HeroPopUp />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>

                        <label className=" py-1 px-2 font-Inter font-semibold text-xs text-[#15803D] bg-[#BBF7D0] rounded-full cursor-pointer">
                          50% Off
                        </label>
                      </div>
                      <div className="px-4 mt-4 ">
                        <p className="font-Inter font-semibold text-xs mb-0 text-[#1A1A1A]">
                          Small Carry 3.0 Early Bird
                        </p>
                        <div className="flex items-center mt-2">
                          <h2 className=" font-Inter font-bold text-xxl text-[#1A1A1A]">
                            $68.00
                          </h2>
                          <div className=" ms-3">
                            <p className=" mb-0 font-Inter font-semibold text-xxs text-black">
                              USD
                            </p>
                            <p className=" mb-0 font-Inter font-normal text-xxs text-[#808080]">
                              Limited Time Offer
                            </p>
                          </div>
                        </div>
                        <img
                          className=" w-full mt-4"
                          src={offer_bag}
                          alt="offer_bag"
                        />
                        <button className=" py-3 px-5 rounded-md text-white tracking-[0.46px] font-bold text-[15px] bg-[background-color] bg_gridant_btn font-Roboto flex justify-center mt-4 w-full">
                          Claim This Offer
                        </button>
                        <div className="flex items-center justify-between mt-5 relative after:content after:absolute after:w-[80%] after:bg-[#E5E7EB] after:h-[1px] after:end-0">
                          <p className=" font-Inter font-normal text-sm text-[#333333]">
                            Details
                          </p>
                          <button className="font-Inter font-normal text-xs flex items-center text-[#212121] border-2 border-[#E5E7EB] px-3 py-1 rounded-full z-10 bg-white">
                            <span className=" me-3">
                              <AddIcon />
                            </span>
                            More
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between bg-[#F3F4F6] border-t-2 border-[#E5E7EB] py-3 rounded-b-md px-4 mt-4">
                        <p className="font-Inter font-normal text-[#4C4C4C] text-xs flex items-center">
                          <span className=" font-semibold text-xs text-[#4C4C4C] font-Inter">
                            Est. Shipping
                          </span>
                        </p>
                        <button className=" py-1 px-2 font-Inter font-semibold text-xs text-[#0369A1] bg-[#BAE6FD] rounded-full flex items-center">
                          <span className=" me-2">
                            <TruckIcon />
                          </span>
                          Sept 2023
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeNavtab === "two" && (
                  <div className="xl:w-3/4 sm:w-3/4 min-[450px]:w-8/12">
                    <div className="border-2 border-[#E5E7EB] rounded-lg ">
                      <div className="flex justify-between bg-[#F3F4F6] border-b-2 border-[#E5E7EB] py-3 rounded-t-md px-4">
                        <p className="font-Inter font-normal text-[#4C4C4C] text-xs flex items-center">
                          <span className=" font-semibold text-xs text-[#4C4C4C] font-Inter">
                            Offer #2:
                          </span>
                          163 of 500
                          <span className="relative inline-block ms-1">
                            <MoreInfo />{" "}
                            <a
                              href="#"
                              className="hidden hover:flex text-base z-[1] px-1 py-1"
                            >
                              something missing
                            </a>
                          </span>
                        </p>
                        <button className=" py-1 px-2 font-Inter font-semibold text-xs text-[#15803D] bg-[#BBF7D0] rounded-full">
                          50% Off
                        </button>
                      </div>
                      <div className="px-4 mt-4 ">
                        <p className="font-Inter font-semibold text-xs mb-0 text-[#1A1A1A]">
                          Small Carry 3.0 Early Bird
                        </p>
                        <div className="flex items-center mt-2">
                          <h2 className=" font-Inter font-bold text-xxl text-[#1A1A1A]">
                            $68.00
                          </h2>
                          <div className=" ms-3">
                            <p className=" mb-0 font-Inter font-semibold text-xxs text-black">
                              USD
                            </p>
                            <p className=" mb-0 font-Inter font-normal text-xxs text-[#808080]">
                              Limited Time Offer
                            </p>
                          </div>
                        </div>
                        <img
                          className=" w-full mt-4"
                          src={offer_bag}
                          alt="offer_bag"
                        />
                        <button className=" py-3 px-5 rounded-md text-white tracking-[0.46px] font-bold text-[15px] bg-[background-color] bg_gridant_btn font-Roboto flex justify-center mt-4 w-full">
                          Claim This Offer
                        </button>
                        <div className="flex items-center justify-between mt-5 relative after:content after:absolute after:w-[80%] after:bg-[#E5E7EB] after:h-[1px] after:end-0">
                          <p className=" font-Inter font-normal text-sm text-[#333333]">
                            Details
                          </p>
                          <button className="font-Inter font-normal text-xs flex items-center text-[#212121] border-2 border-[#E5E7EB] px-3 py-1 rounded-full z-10 bg-white">
                            <span className=" me-3">
                              <AddIcon />
                            </span>
                            More
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between bg-[#F3F4F6] border-t-2 border-[#E5E7EB] py-3 rounded-b-md px-4 mt-4">
                        <p className="font-Inter font-normal text-[#4C4C4C] text-xs flex items-center">
                          <span className=" font-semibold text-xs text-[#4C4C4C] font-Inter">
                            Est. Shipping
                          </span>
                        </p>
                        <button className=" py-1 px-2 font-Inter font-semibold text-xs text-[#0369A1] bg-[#BAE6FD] rounded-full flex items-center">
                          <span className=" me-2">
                            <TruckIcon />
                          </span>
                          Sept 2023
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeNavtab === "three" && (
                  <div className="xl:w-3/4 sm:w-3/4 min-[450px]:w-8/12">
                    <div className="border-2 border-[#E5E7EB] rounded-lg ">
                      <div className="flex justify-between bg-[#F3F4F6] border-b-2 border-[#E5E7EB] py-3 rounded-t-md px-4">
                        <p className="font-Inter font-normal text-[#4C4C4C] text-xs flex items-center">
                          <span className=" font-semibold text-xs text-[#4C4C4C] font-Inter">
                            Offer #3:
                          </span>
                          163 of 500
                          <span className="relative inline-block ms-1">
                            <MoreInfo />{" "}
                            <a
                              href="#"
                              className="hidden hover:flex text-base z-[1] px-1 py-1"
                            >
                              something missing
                            </a>
                          </span>
                        </p>
                        <button className=" py-1 px-2 font-Inter font-semibold text-xs text-[#15803D] bg-[#BBF7D0] rounded-full">
                          50% Off
                        </button>
                      </div>
                      <div className="px-4 mt-4 ">
                        <p className="font-Inter font-semibold text-xs mb-0 text-[#1A1A1A]">
                          Small Carry 3.0 Early Bird
                        </p>
                        <div className="flex items-center mt-2">
                          <h2 className=" font-Inter font-bold text-xxl text-[#1A1A1A]">
                            $68.00
                          </h2>
                          <div className=" ms-3">
                            <p className=" mb-0 font-Inter font-semibold text-xxs text-black">
                              USD
                            </p>
                            <p className=" mb-0 font-Inter font-normal text-xxs text-[#808080]">
                              Limited Time Offer
                            </p>
                          </div>
                        </div>
                        <img
                          className=" w-full mt-4"
                          src={offer_bag}
                          alt="offer_bag"
                        />
                        <button className=" py-3 px-5 rounded-md text-white tracking-[0.46px] font-bold text-[15px] bg-[background-color] bg_gridant_btn font-Roboto flex justify-center mt-4 w-full">
                          Claim This Offer
                        </button>
                        <div className="flex items-center justify-between mt-5 relative after:content after:absolute after:w-[80%] after:bg-[#E5E7EB] after:h-[1px] after:end-0">
                          <p className=" font-Inter font-normal text-sm text-[#333333]">
                            Details
                          </p>
                          <button className="font-Inter font-normal text-xs flex items-center text-[#212121] border-2 border-[#E5E7EB] px-3 py-1 rounded-full z-10 bg-white">
                            <span className=" me-3">
                              <AddIcon />
                            </span>
                            More
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between bg-[#F3F4F6] border-t-2 border-[#E5E7EB] py-3 rounded-b-md px-4 mt-4">
                        <p className="font-Inter font-normal text-[#4C4C4C] text-xs flex items-center">
                          <span className=" font-semibold text-xs text-[#4C4C4C] font-Inter">
                            Est. Shipping
                          </span>
                        </p>
                        <button className=" py-1 px-2 font-Inter font-semibold text-xs text-[#0369A1] bg-[#BAE6FD] rounded-full flex items-center">
                          <span className=" me-2">
                            <TruckIcon />
                          </span>
                          Sept 2023
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeNavtab === "four" && (
                  <div className="xl:w-3/4 sm:w-3/4 min-[450px]:w-8/12">
                    <div className="border-2 border-[#E5E7EB] rounded-lg ">
                      <div className="flex justify-between bg-[#F3F4F6] border-b-2 border-[#E5E7EB] py-3 rounded-t-md px-4">
                        <p className="font-Inter font-normal text-[#4C4C4C] text-xs flex items-center">
                          <span className=" font-semibold text-xs text-[#4C4C4C] font-Inter">
                            Offer #4:
                          </span>
                          163 of 500
                          <span className="relative inline-block ms-1">
                            <MoreInfo />{" "}
                            <a
                              href="#"
                              className="hidden hover:flex text-base z-[1] px-1 py-1"
                            >
                              something missing
                            </a>
                          </span>
                        </p>
                        <button className=" py-1 px-2 font-Inter font-semibold text-xs text-[#15803D] bg-[#BBF7D0] rounded-full">
                          50% Off
                        </button>
                      </div>
                      <div className="px-4 mt-4 ">
                        <p className="font-Inter font-semibold text-xs mb-0 text-[#1A1A1A]">
                          Small Carry 3.0 Early Bird
                        </p>
                        <div className="flex items-center mt-2">
                          <h2 className=" font-Inter font-bold text-xxl text-[#1A1A1A]">
                            $68.00
                          </h2>
                          <div className=" ms-3">
                            <p className=" mb-0 font-Inter font-semibold text-xxs text-black">
                              USD
                            </p>
                            <p className=" mb-0 font-Inter font-normal text-xxs text-[#808080]">
                              Limited Time Offer
                            </p>
                          </div>
                        </div>
                        <img
                          className=" w-full mt-4"
                          src={offer_bag}
                          alt="offer_bag"
                        />
                        <button className=" py-3 px-5 rounded-md text-white tracking-[0.46px] font-bold text-[15px] bg-[background-color] bg_gridant_btn font-Roboto flex justify-center mt-4 w-full">
                          Claim This Offer
                        </button>
                        <div className="flex items-center justify-between mt-5 relative after:content after:absolute after:w-[80%] after:bg-[#E5E7EB] after:h-[1px] after:end-0">
                          <p className=" font-Inter font-normal text-sm text-[#333333]">
                            Details
                          </p>
                          <button className="font-Inter font-normal text-xs flex items-center text-[#212121] border-2 border-[#E5E7EB] px-3 py-1 rounded-full z-10 bg-white">
                            <span className=" me-3">
                              <AddIcon />
                            </span>
                            More
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between bg-[#F3F4F6] border-t-2 border-[#E5E7EB] py-3 rounded-b-md px-4 mt-4">
                        <p className="font-Inter font-normal text-[#4C4C4C] text-xs flex items-center">
                          <span className=" font-semibold text-xs text-[#4C4C4C] font-Inter">
                            Est. Shipping
                          </span>
                        </p>
                        <button className=" py-1 px-2 font-Inter font-semibold text-xs text-[#0369A1] bg-[#BAE6FD] rounded-full flex items-center">
                          <span className=" me-2">
                            <TruckIcon />
                          </span>
                          Sept 2023
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeNavtab === "five" && (
                  <div className="xl:w-3/4 sm:w-3/4 min-[450px]:w-8/12">
                    <div className="border-2 border-[#E5E7EB] rounded-lg ">
                      <div className="flex justify-between bg-[#F3F4F6] border-b-2 border-[#E5E7EB] py-3 rounded-t-md px-4">
                        <p className="font-Inter font-normal text-[#4C4C4C] text-xs flex items-center">
                          <span className=" font-semibold text-xs text-[#4C4C4C] font-Inter">
                            Offer #5:
                          </span>
                          163 of 500
                          <span className="relative inline-block ms-1">
                            <MoreInfo />{" "}
                            <a
                              href="#"
                              className="hidden hover:flex text-base z-[1] px-1 py-1"
                            >
                              something missing
                            </a>
                          </span>
                        </p>
                        <button className=" py-1 px-2 font-Inter font-semibold text-xs text-[#15803D] bg-[#BBF7D0] rounded-full">
                          50% Off
                        </button>
                      </div>
                      <div className="px-4 mt-4 ">
                        <p className="font-Inter font-semibold text-xs mb-0 text-[#1A1A1A]">
                          Small Carry 3.0 Early Bird
                        </p>
                        <div className="flex items-center mt-2">
                          <h2 className=" font-Inter font-bold text-xxl text-[#1A1A1A]">
                            $68.00
                          </h2>
                          <div className=" ms-3">
                            <p className=" mb-0 font-Inter font-semibold text-xxs text-black">
                              USD
                            </p>
                            <p className=" mb-0 font-Inter font-normal text-xxs text-[#808080]">
                              Limited Time Offer
                            </p>
                          </div>
                        </div>
                        <img
                          className=" w-full mt-4"
                          src={offer_bag}
                          alt="offer_bag"
                        />
                        <button className=" py-3 px-5 rounded-md text-white tracking-[0.46px] font-bold text-[15px] bg-[background-color] bg_gridant_btn font-Roboto flex justify-center mt-4 w-full">
                          Claim This Offer
                        </button>
                        <div className="flex items-center justify-between mt-5 relative after:content after:absolute after:w-[80%] after:bg-[#E5E7EB] after:h-[1px] after:end-0">
                          <p className=" font-Inter font-normal text-sm text-[#333333]">
                            Details
                          </p>
                          <button className="font-Inter font-normal text-xs flex items-center text-[#212121] border-2 border-[#E5E7EB] px-3 py-1 rounded-full z-10 bg-white">
                            <span className=" me-3">
                              <AddIcon />
                            </span>
                            More
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between bg-[#F3F4F6] border-t-2 border-[#E5E7EB] py-3 rounded-b-md px-4 mt-4">
                        <p className="font-Inter font-normal text-[#4C4C4C] text-xs flex items-center">
                          <span className=" font-semibold text-xs text-[#4C4C4C] font-Inter">
                            Est. Shipping
                          </span>
                        </p>
                        <button className=" py-1 px-2 font-Inter font-semibold text-xs text-[#0369A1] bg-[#BAE6FD] rounded-full flex items-center">
                          <span className=" me-2">
                            <TruckIcon />
                          </span>
                          Sept 2023
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeNavtab === "six" && (
                  <div className="xl:w-3/4 sm:w-3/4 min-[450px]:w-8/12">
                    <div className="border-2 border-[#E5E7EB] rounded-lg ">
                      <div className="flex justify-between bg-[#F3F4F6] border-b-2 border-[#E5E7EB] py-3 rounded-t-md px-4">
                        <p className="font-Inter font-normal text-[#4C4C4C] text-xs flex items-center">
                          <span className=" font-semibold text-xs text-[#4C4C4C] font-Inter">
                            Offer #6:
                          </span>
                          163 of 500
                          <span className="relative inline-block ms-1">
                            <MoreInfo />{" "}
                            <a
                              href="#"
                              className="hidden hover:flex text-base z-[1] px-1 py-1"
                            >
                              something missing
                            </a>
                          </span>
                        </p>
                        <button className=" py-1 px-2 font-Inter font-semibold text-xs text-[#15803D] bg-[#BBF7D0] rounded-full">
                          50% Off
                        </button>
                      </div>
                      <div className="px-4 mt-4 ">
                        <p className="font-Inter font-semibold text-xs mb-0 text-[#1A1A1A]">
                          Small Carry 3.0 Early Bird
                        </p>
                        <div className="flex items-center mt-2">
                          <h2 className=" font-Inter font-bold text-xxl text-[#1A1A1A]">
                            $68.00
                          </h2>
                          <div className=" ms-3">
                            <p className=" mb-0 font-Inter font-semibold text-xxs text-black">
                              USD
                            </p>
                            <p className=" mb-0 font-Inter font-normal text-xxs text-[#808080]">
                              Limited Time Offer
                            </p>
                          </div>
                        </div>
                        <img
                          className=" w-full mt-4"
                          src={offer_bag}
                          alt="offer_bag"
                        />
                        <button className=" py-3 px-5 rounded-md text-white tracking-[0.46px] font-bold text-[15px] bg-[background-color] bg_gridant_btn font-Roboto flex justify-center mt-4 w-full">
                          Claim This Offer
                        </button>
                        <div className="flex items-center justify-between mt-5 relative after:content after:absolute after:w-[80%] after:bg-[#E5E7EB] after:h-[1px] after:end-0">
                          <p className=" font-Inter font-normal text-sm text-[#333333]">
                            Details
                          </p>
                          <button className="font-Inter font-normal text-xs flex items-center text-[#212121] border-2 border-[#E5E7EB] px-3 py-1 rounded-full z-10 bg-white">
                            <span className=" me-3">
                              <AddIcon />
                            </span>
                            More
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between bg-[#F3F4F6] border-t-2 border-[#E5E7EB] py-3 rounded-b-md px-4 mt-4">
                        <p className="font-Inter font-normal text-[#4C4C4C] text-xs flex items-center">
                          <span className=" font-semibold text-xs text-[#4C4C4C] font-Inter">
                            Est. Shipping
                          </span>
                        </p>
                        <button className=" py-1 px-2 font-Inter font-semibold text-xs text-[#0369A1] bg-[#BAE6FD] rounded-full flex items-center">
                          <span className=" me-2">
                            <TruckIcon />
                          </span>
                          Sept 2023
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeNavtab === "seven" && (
                  <div className="xl:w-4/5 sm:w-3/4 min-[450px]:w-8/12 xl:me-5">
                    <div className="border-2 border-[#E5E7EB] rounded-lg ">
                      <div className="flex justify-between bg-[#F3F4F6] border-b-2 border-[#E5E7EB] py-3 rounded-t-md px-4">
                        <p className="font-Inter font-normal text-[#4C4C4C] text-xs flex items-center">
                          <span className=" font-semibold text-xs text-[#4C4C4C] font-Inter">
                            Offer #7:
                          </span>
                          163 of 500
                          <span className="relative inline-block ms-1">
                            <MoreInfo />{" "}
                            <a
                              href="#"
                              className="hidden hover:flex text-base z-[1] px-1 py-1"
                            >
                              something missing
                            </a>
                          </span>
                        </p>
                        <button className=" py-1 px-2 font-Inter font-semibold text-xs text-[#15803D] bg-[#BBF7D0] rounded-full">
                          50% Off
                        </button>
                      </div>
                      <div className="px-4 mt-4 ">
                        <p className="font-Inter font-semibold text-xs mb-0 text-[#1A1A1A]">
                          Small Carry 3.0 Early Bird
                        </p>
                        <div className="flex items-center mt-2">
                          <h2 className=" font-Inter font-bold text-xxl text-[#1A1A1A]">
                            $68.00
                          </h2>
                          <div className=" ms-3">
                            <p className=" mb-0 font-Inter font-semibold text-xxs text-black">
                              USD
                            </p>
                            <p className=" mb-0 font-Inter font-normal text-xxs text-[#808080]">
                              Limited Time Offer
                            </p>
                          </div>
                        </div>
                        <img
                          className=" w-full mt-4"
                          src={offer_bag}
                          alt="offer_bag"
                        />
                        <button className=" py-3 px-5 rounded-md text-white tracking-[0.46px] font-bold text-[15px] bg-[background-color] bg_gridant_btn font-Roboto flex justify-center mt-4 w-full">
                          Claim This Offer
                        </button>
                        <div className="flex items-center justify-between mt-5 relative after:content after:absolute after:w-[80%] after:bg-[#E5E7EB] after:h-[1px] after:end-0">
                          <p className=" font-Inter font-normal text-sm text-[#333333]">
                            Details
                          </p>
                          <button className="font-Inter font-normal text-xs flex items-center text-[#212121] border-2 border-[#E5E7EB] px-3 py-1 rounded-full z-10 bg-white">
                            <span className=" me-3">
                              <AddIcon />
                            </span>
                            More
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between bg-[#F3F4F6] border-t-2 border-[#E5E7EB] py-3 rounded-b-md px-4 mt-4">
                        <p className="font-Inter font-normal text-[#4C4C4C] text-xs flex items-center">
                          <span className=" font-semibold text-xs text-[#4C4C4C] font-Inter">
                            Est. Shipping
                          </span>
                        </p>
                        <button className=" py-1 px-2 font-Inter font-semibold text-xs text-[#0369A1] bg-[#BAE6FD] rounded-full flex items-center">
                          <span className=" me-2">
                            <TruckIcon />
                          </span>
                          Sept 2023
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <div className="xl:w-1/5 sm:w-1/4">
                  <div className="flex justify-start gap-4 xl:justify-end flex-row flex-nowrap whitespace-nowrap overflow-auto pb-2 min-[450px]:flex-col xl:items-center mt-5 xl:mt-0 sm:ps-10 xl:ps-0 ">
                    <span>
                      <span
                        onClick={() => handleTab("one")}
                        className={`mb-0 font-Inter cursor-pointer hover:text-[black] ${
                          activeNavtab == "one"
                            ? "border-red-600 font-semibold px-[0.5px] py-[1px] rounded  border-2"
                            : "font-normal text-sm text-[#808080]"
                        }`}
                      >
                        Offer #1
                      </span>
                    </span>
                    <span>
                      <span
                        onClick={() => handleTab("two")}
                        className={`mb-0 font-Inter font-normal cursor-pointer hover:text-[black] ${
                          activeNavtab == "two"
                            ? "border-red-600 font-semibold px-[0.5px] py-[1px] rounded  border-2"
                            : "font-normal text-sm text-[#808080]"
                        }`}
                      >
                        Offer #2
                      </span>
                    </span>
                    <span>
                      <span
                        onClick={() => handleTab("three")}
                        className={`mb-0 font-Inter font-normal cursor-pointer hover:text-[black] ${
                          activeNavtab == "three"
                            ? "border-red-600 font-semibold px-[0.5px] py-[1px] rounded  border-2"
                            : "font-normal text-sm text-[#808080]"
                        }`}
                      >
                        Offer #3
                      </span>
                    </span>
                    <span>
                      <span
                        onClick={() => handleTab("four")}
                        className={`mb-0 font-Inter font-normal cursor-pointer hover:text-[black] ${
                          activeNavtab == "four"
                            ? "border-red-600 font-semibold px-[0.5px] py-[1px] rounded  border-2"
                            : "font-normal text-sm text-[#808080]"
                        }`}
                      >
                        Offer #4
                      </span>
                    </span>
                    <span>
                      <span
                        onClick={() => handleTab("five")}
                        className={`mb-0 font-Inter font-normal cursor-pointer hover:text-[black] ${
                          activeNavtab == "five"
                            ? "border-red-600 font-semibold px-[0.5px] py-[1px] rounded  border-2"
                            : "font-normal text-sm text-[#808080]"
                        }`}
                      >
                        Offer #5
                      </span>
                    </span>
                    {show ? (
                      <>
                        <span>
                          <span
                            onClick={() => handleTab("six")}
                            className={`mb-0 font-Inter font-normal cursor-pointer hover:text-[black] ${
                              activeNavtab == "six"
                                ? "border-red-600 font-semibold px-[0.5px] py-[1px] rounded  border-2"
                                : "font-normal text-sm text-[#808080]"
                            }`}
                          >
                            Offer #6
                          </span>
                        </span>
                        <span>
                          <span
                            onClick={() => handleTab("seven")}
                            className={`mb-0 font-Inter font-normal cursor-pointer hover:text-[black] ${
                              activeNavtab == "seven"
                                ? "border-red-600 font-semibold px-[0.5px] py-[1px] rounded  border-2"
                                : "font-normal text-sm text-[#808080]"
                            }`}
                          >
                            Offer #7
                          </span>
                        </span>
                      </>
                    ) : (
                      ""
                    )}

                    <span>
                      <span
                        onClick={() => {
                          setShow(!show);
                        }}
                        className={`mb-0 font-Roboto font-medium text-sm cursor-pointer text-[#808080] hover:text-[#E11D48] duration-200`}
                      >
                        {show ? "View Less" : "View All"}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsDescription;
