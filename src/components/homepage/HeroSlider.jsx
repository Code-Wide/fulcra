/* eslint-disable no-unused-vars */
import { useState } from "react";
import { HeroSliderData } from "../common/Helper";
import btnImg from "../../assets/images/svg/playbtn.svg";
import btnImg1 from "../../assets/images/svg/Play Button.svg";
import pexels_videos_2104648 from "../../assets/video/pexels_videos_2104648.mp4";

const HeroSlider = () => {
  const [Data, setData] = useState(HeroSliderData[0]);
  const [show, setShow] = useState(false);

  return (
    <section className=" pt-7 w-full">
      <div className="lg:px-3 mx-auto">
        <div className="w-full">
          <div className="flex xl:flex-row flex-col-reverse w-full">
            <div className="xl:w-1/12 mt-2 sm:mt-4 xl:mt-0">
              <div className="flex xl:flex-col flex-row justify-center gap-2 sm:gap-5 xl:gap-0 xl:justify-between h-full">
                {HeroSliderData.map((value, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        setShow(false);
                        setData(value);
                      }}
                      className="border border-transparent hover:border-[#DBDBDB] rounded-[5px] sm:w-[70px] w-14 relative cursor-pointer"
                    >
                      {i === 0 && (
                        <div className="absolute w-full h-full top-0 start-0 flex justify-center items-center ">
                          <img className="p-2" src={btnImg1} alt="btn" />
                        </div>
                      )}{" "}
                      <img
                        className="p-1 sm:p-0"
                        src={value.sliderImage}
                        alt="img"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="xl:w-11/12 w-full h-[250px] sm:h-[390px]">
              <div className="xl:ps-2 ">
                {Data.isVideo ? (
                  <div className="relative">
                    {show ? (
                      <video
                        className="ps-2"
                        src={pexels_videos_2104648}
                        autoPlay={show}
                        controls={show}
                        muted={show}
                      />
                    ) : (
                      <>
                        {console.log(Data.fullImage, "Data")}
                        <div className="absolute w-full h-full top-0 start-0 flex justify-center items-center">
                          <img
                            className="cursor-pointer w-10 sm:w-20"
                            src={btnImg}
                            alt="btn"
                            onClick={() => setShow(true)}
                          />
                        </div>

                        <img
                          className="w-full object-cover  h-[250px] sm:h-[390px] xl:ps-2.5"
                          src={Data.fullImage}
                          alt="img"
                        />
                      </>
                    )}
                  </div>
                ) : (
                  <img
                    className="w-full object-cover h-[250px] sm:h-[390px] xl:ps-2.5 "
                    src={Data.sliderImage}
                    alt="img"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
