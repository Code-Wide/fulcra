/* eslint-disable no-unused-vars */
//MAIN LOGO PAGE
import mainLogo from "../../assets/images/png/Main-logo-fulcra.png";
//NAV IMAGES
import navLogo from "../../assets/images/svg/Bolstr-logo.svg";
import navImage1 from "../../assets/images/svg/nav-people-img-1.svg";
import navImage2 from "../../assets/images/svg/nav-people-img-2.svg";
import navImage3 from "../../assets/images/svg/nav-people-img-3.svg";
import navImage4 from "../../assets/images/svg/nav-people-img-4.svg";
import navImage5 from "../../assets/images/svg/nav-people-img-5.svg";
import greenIcon from "../../assets/images/svg/green-icon.svg";
//NAV ICONS
import { BellIcon, CartIcon } from "./Icons";
import { useStateProvider } from "./StateContext";
import { sideBarData } from "./Helper";
import { useState } from "react";
import { BolstrIcon } from "./Icons";

const Header = () => {
  const { sidebarOpen, setActiveTab } = useStateProvider();
  return (
    <section>
      <div className="bg-zinc700 fixed w-full top-0 z-50">
        <div className="max-w-[1280px] mx-auto py-3 sm:py-2 font-Inter">
          <div className="flex justify-between items-center mx-[20px]">
            <a href="#">
              <img src={mainLogo} alt="mainpageLogo" />
            </a>
            <a
              href="#"
              className="text-secoundary text-sm font-medium hidden sm:block"
            >
              Get free shipping on orders over $100
            </a>
            <a href="#" className="text-secoundary text-sm font-medium ">
              Help & FAQs
            </a>
          </div>
          <div className="text-center sm:hidden mt-1">
            <a
              href="#"
              className="text-secoundary text-center text-sm font-medium "
            >
              Get free shipping on orders over $100
            </a>
          </div>
        </div>
      </div>
      <div className="font-Inter mt-[73px] sm:mt-[37px] max-w-[1280px] mx-3 xl:mx-auto bg-white px-3 sm:px-4 md:px-8 xl:px-10">
        <div className="flex justify-between py-4 sm:py-3">
          <div className="flex items-center">
            <div
              className="rounded-full sm:w-[60px] w-[40px] sm:h-[60px] h-[40px] cursor-pointer"
              onClick={() => {
                sidebarOpen();
                setActiveTab(4);
              }}
            >
              <BolstrIcon />
            </div>
            <p className="text-sm font-medium ms-[5px] sm:ms-3">
              Bolstr
              <span className="text-xxs font-medium block text-zinc100">
                {" "}
                Cleveland, OH, USA
              </span>
            </p>
            <div className="hidden sm:block  ">
              <div className="relative ms-[5px] sm:ms-[30px] flex">
                <img
                  src={navImage1}
                  alt="navimage1"
                  className="cursor-pointer rounded-full border-[2px] border-[solid] border-borderpeople relative z-[5]"
                />
                <img
                  src={navImage2}
                  alt="navimage2"
                  className="cursor-pointer absolute left-[28px] rounded-full border-[2px] border-[solid] border-borderpeople z-[4]"
                />
                <img
                  src={navImage3}
                  alt="navimage3"
                  className="cursor-pointer absolute left-[56px] rounded-full border-[2px] border-[solid] border-borderpeople z-[3]"
                />
                <img
                  src={navImage4}
                  alt="navimage4"
                  className="cursor-pointer absolute left-[84px] rounded-full border-[2px] border-[solid] border-borderpeople z-[2]"
                />
                <a
                  href="#"
                  className="h-[37px] hover:bg-black w-[37px] absolute lef t-[ ] top-[50%] translate-y-[-50%] left-[112px] bg-gary400 rounded-full text-secoundary text-center pt-[6px] text-sm border-[2px] border-[solid] border-borderpeople"
                >
                  +2
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <a
              href="#"
              onClick={() => {
                sidebarOpen();
                setActiveTab(3);
              }}
            >
              <BellIcon />
            </a>
            <div className="pe-[5px] sm:px-[15px] ">
              <a href="#">
                <div className="relative">
                  <img
                    src={greenIcon}
                    alt="greenIcon"
                    className="absolute bottom-[-4px] right-[-3px]"
                  />
                  <img
                    src={navImage5}
                    alt="navimage5"
                    className="rounded-full "
                  />
                </div>
              </a>
            </div>
              <div className="line relative before:absolute before:content before:left-[0px] before:w-[1px] before:h-[30px] before:top-[-5px] before:bg-gary300">
                <div className="ms-[5px] sm:ms-[22px] hover:text-[#EA570D] flex">
                  <a href="#">
                    <span
                      onClick={() => {
                        sidebarOpen();
                        setActiveTab(0);
                      }}
                    >
                      <CartIcon />
                    </span>
                  </a>
                  <p className="text-xxs font-medium ps-[5px] chanfe sm:ps-[7px] ">
                    {sideBarData.length}
                  </p>
                </div>
              </div>
          </div>
        </div>
        <div className="sm:hidden pb-4 sm:pb-0">
          <div className="relative flex">
            <img
              src={navImage1}
              alt="navimage1"
              className="cursor-pointer rounded-full border-[2px] border-[solid] border-borderpeople relative z-[5]"
            />
            <img
              src={navImage2}
              alt="navimage2"
              className="cursor-pointer absolute left-[28px] rounded-full border-[2px] border-[solid] border-borderpeople z-[4]"
            />
            <img
              src={navImage3}
              alt="navimage3"
              className="cursor-pointer absolute left-[56px] rounded-full border-[2px] border-[solid] border-borderpeople z-[3]"
            />
            <img
              src={navImage4}
              alt="navimage4"
              className="cursor-pointer absolute left-[84px] rounded-full border-[2px] border-[solid] border-borderpeople z-[2]"
            />
            <a
              href="#"
              className="h-[37px] hover:bg-black w-[37px] absolute lef t-[ ] top-[50%] translate-y-[-50%] left-[112px] bg-gary400 rounded-full text-secoundary text-center pt-[6px] text-sm border-[2px] border-[solid] border-borderpeople"
            >
              +2
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
