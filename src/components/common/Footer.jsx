import logo from "../../assets/images/svg/logo.svg";
import brand_deliver from "../../assets/images/svg/Build & Deliver.svg";
import footerimg from "../../assets/images/svg/footerimg.svg";
import { data } from "autoprefixer";
import { footerData } from "./Helper";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <div className="py-5">
        <div className="bg-[url('/src/assets/images/svg/Maskgroup.svg')] relative bg-center bg-cover bg-no-repeat w-100 rounded-md pb-[13px] ">
          <div className="text-center translate-y-[-50%]">
            <img
              className="w-full max-w-[420px] mx-auto"
              src={footerimg}
              alt="footerimg"
            />
            <span className="absolute top-[10px] top_7 max_width_animation_text left-[50%] translate-x-[-50%]">
              <img
                className=" animation_rotate "
                src={brand_deliver}
                alt="brand_deliver"
              />
            </span>
          </div>
          <div className=" flex-wrap lg:mx-[30px] flex justify-between items-start border-b-[1px] border-slate-700 lg:pb-[56px] pb-[40px]">
            <div className="mt-[5px] xl:w-1/6 w-full xl:mb-[0px] mb-[30px]">
              <img
                className="cursor-pointer max-w-[142px] lg:mx-[0px] mx-auto "
                src={logo}
                alt="logo"
              />
            </div>
            {footerData.map((links, e) => {
              return (
                <div className="mx-[30px] lg:mt-[0px] mt-[20px]">
                  {links.GetTOKnowData.map((obj, i) => {
                    return (
                      <div className="flex flex-col" key={i}>
                        <h2 className="font-bold text-md text-secoundary">
                          {obj.footerTitle}
                        </h2>
                        <ul>
                          <li className="mt-[8px]">
                            <a
                              href="#"
                              target="_blank"
                              key={e}
                              className="font-normal  text-sm text-gray5002  hover:text-secoundary ease-in-out duration-300"
                            >
                              {obj.a}
                            </a>
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <p className=" mx-[10px] lg:mx-[30px] mt-[14px] lg:text-start text-center font-normal text-sm text-gray5002 ">
            ©{year} Fulcra, LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
