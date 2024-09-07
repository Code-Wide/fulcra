import { useState } from "react";
import verified from "../../assets/images/svg/Verified-SVG.svg";
import washList from "../../assets/images/svg/Wishlist.svg";
import { InfoIcon, ScannerIcon, ShareIcon, SourceIcon } from "../common/Icons";
import { useStateProvider } from "../common/StateContext";
import HeroPopUp from "./HeroPopUp";
import ShareCampaignPopup from "../common/ShareCampaignPopup";

const SmallCarry = () => {
  const { sidebarOpen, setActiveTab } = useStateProvider();
  const [show, setShow] = useState(false);
  const [showShare, setShowShare] = useState(false);
  return (
    <div className="relative ">
      {show ? (
        <div className="fixed z-[100] start-0 w-[100vw] h-screen right-0 top-0">
          <HeroPopUp show={show} setShow={setShow} />
        </div>
      ) : (
        ""
      )}
      {showShare ? (
        <div className="fixed z-[100] start-0 w-[100vw] h-screen right-0 top-0">
          <ShareCampaignPopup
            showShare={showShare}
            setShowShare={setShowShare}
          />
        </div>
      ) : (
        ""
      )}
      <h2 className="font-Inter font-semibold text-xxl text-black mb-0">
        Small Carry 3.0
      </h2>
      <p className="font-Inter font-normal text-sm text-gray-500 mt-3">
        bolstr Small Carry 3.0 Defiant Olive explores the balance between
        military structure and innovator rule-breaking. Subtle hints of vibrant
        yellow add pop to the line, giving it attitude and the attention it
        deserves.
      </p>
      <div className="relative mt-10">
        <img
          className="absolute sm:top-[-13px] top-[-6px] left-[-9px] lg:left-0 p-1 sm:p-0 sm:max-w-[61px] max-w-[50px] start-0"
          src={verified}
          alt="img"
        />
        <div className="bg-gray-200 py-2 pe-2 xl:w-3/4 lg:w-11/12 sm:w-1/2 w-11/12 rounded-[20px] flex flex-row justify-between xl:justify-end items-center lg:justify-end ms-[23px] sm:gap-4 gap-1">
          <h3 className="font-Inter font-bold text-xxs sm:text-sm text-gray-400 uppercase ps-3 sm:ps-0 md:ms-20 lg:ms-0 sm:ms-12 w-full text-center lg:text-end">
            Fulcra Verified Campaign
          </h3>
          <span
            onClick={() => setShow(!show)}
            className="group cursor-pointer pt-[1px]"
          >
            <InfoIcon />
          </span>
        </div>
        <p className=" font-Inter font-normal text-xxs text-gray-500 py-1 xl:w-3/4 lg:w-11/12 sm:w-1/2 w-11/12 ms-3  text-center lg:ms-10">
          Fulcra & Agency Teams Verified
        </p>
      </div>

      <div className="mt-7 flex flex-row lg:justify-between">
        <button
          className="py-2 px-2 w-[334px] text-center rounded-md text-white font-Inter font-semibold text-base
      bg-[background-color] border-transparent bg_gridant_btn relative overflow-hidden duration-200"
        >
          Back this Offering
        </button>

        <span className="relative ms-2 border border-transparent hover:border-[#E11D48] rounded-md">
          <img
            className=" cursor-pointer "
            src={washList}
            alt="icon"
            onClick={() => {
              sidebarOpen();
              setActiveTab(1);
            }}
          />
        </span>
      </div>
      <div className="flex flex-row gap-4 items-center mt-5">
        <p className="font-inter font-bold text-xxs text-gray-400">Share:</p>
        <span
          onClick={() => setShowShare(!showShare)}
          className="cursor-pointer transition-all"
        >
          {<ShareIcon />}
        </span>

        <span className="cursor-pointer transition-all">{<ScannerIcon />}</span>
        <span className="cursor-pointer transition-all">{<SourceIcon />}</span>
      </div>
    </div>
  );
};

export default SmallCarry;
