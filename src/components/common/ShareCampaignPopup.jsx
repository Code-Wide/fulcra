import React from "react";
import { shareCampaignPopupData } from "./Helper";
import QRcode from "../../assets/images/png/sharePopupQRcode.png";
import cross_icon from "../../assets/images/svg/cross_icon.svg";

const ShareCampaignPopup = ({ showShare, setShowShare }) => {
  // if (showShare == true) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "initial";
  // }
  return (
    <>
      <div className="h-full w-FULL flex items-center justify-center ">
        <div
          onClick={() => setShowShare(!showShare)}
          className="absolute w-full h-full top-0 left-0  bg-gray-500 blur-[2px] opacity-50"
        ></div>
        <section className="max-w-[1048px] lg:mx-16 mx-2 sm:mx-5 sm:p-8 p-4 rounded-md bg-white shadow-popupBoxShadow relative z-10">
          <button className="py-2.5 px-3 absolute end-0 top-0">
            <img
              onClick={() => setShowShare(!showShare)}
              src={cross_icon}
              alt="cross_icon"
              className="min-w-3.5"
            />
          </button>
          <h2 className=" mb-9 text-neutral-900 text-xl font-semibold">
            Share Campaign
          </h2>
          <div className="flex justify-between md:flex-row flex-col gap-3 lg:gap-8">
            <div className="rounded-md gap-6 flex-wrap flex w-full md:max-w-[371px]">
              {shareCampaignPopupData &&
                shareCampaignPopupData.map((obj, index) => {
                  {
                    console.log(obj, "obj.socialIcon");
                  }
                  return (
                    <div
                      className="flex justify-between xl:gap-16 sm:gap-10 gap-5 bg-gray-100 sm:py-4 py-2 sm:px-5 px-2 rounded-md w-full"
                      key={index}
                    >
                      <div className="flex">
                        <div
                          className={`sm:py-3 sm:px-6 p-2 flex justify-center items-center rounded-md me-4 ${obj.socialIconBoxColor}`}
                        >
                          <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {obj.socialIcon}
                          </a>
                        </div>
                        <div>
                          <h2 className=" text-gray-900 text-md font-semibold">
                            Facebook
                          </h2>
                          <p className=" text-gray-500 text-sm font-normal">
                            Share a Post
                          </p>
                        </div>
                      </div>
                      <button className="bg-gray-500 py-3 px-4 rounded-md text-white text-xxs font-semibold">
                        Share now
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="lg:mt-0 mt-6 w-full max-w-[549px]">
              <div className="flex justify-center flex-col xl:flex-row w-full bg-gray-100 py-4 px-5 rounded-md">
                <div className="xl:me-5">
                  <img
                    src={QRcode}
                    alt="QRcode"
                    className="w-full max-w-[180px] mx-auto"
                  />
                </div>
                <div className="flex flex-col justify-center xl:justify-start items-center xl:items-start">
                  <h2 className="mb-5 text-xl font-bold mt-2 xl:text-start text-center">
                    URL or QR Code
                  </h2>
                  <p className="mb-5 bg-gray-300 px-4 py-3 text-xxs text-gray-600 font-normal rounded-md">
                    https://BrandNameX.fulcra.com/?ref=FBGX9A
                  </p>
                  <div>
                    <button className="bg-gray-500 py-3 px-4 rounded-md sm:me-4 me-3 text-white text-xxs font-semibold">
                      Copy URL
                    </button>
                    <button className="bg-gray-500 py-3 px-4 rounded-md text-white text-xxs font-semibold">
                      Download QR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ShareCampaignPopup;
