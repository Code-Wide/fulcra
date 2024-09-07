import { socialIcon } from "./Helper";

const BrandFooter = () => {
  return (
    <section className=" border-t-[1px] mt-[50px] sm:mb-[30px] mb-10 border-gray-200">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex-wrap flex mt-[16px] ">
          <p className=" font-bold lg:me-[35px] me-[20px] hover:opacity-[.6] mt-[16px] duration-150 text-md text-gray-700 cursor-pointer">
            About Bolstr
          </p>
          <p className=" font-bold lg:me-[35px] me-[20px] hover:opacity-[.6] mt-[16px] duration-150 text-md text-gray-700 cursor-pointer">
            Storyline
          </p>
          <p className=" font-bold lg:me-[35px] me-[20px] hover:opacity-[.6] mt-[16px] duration-150 text-md text-gray-700 cursor-pointer">
            FAQ
          </p>
          <p className=" font-bold lg:me-[35px] me-[20px] hover:opacity-[.6] mt-[16px] duration-150 text-md text-gray-700 cursor-pointer">
            Updates
          </p>
          <p className=" font-bold lg:me-[35px] me-[20px] hover:opacity-[.6] mt-[16px] duration-150 text-md text-gray-700 cursor-pointer">
            Discussion
          </p>
        </div>
        <div className="flex mt-[32px] items-center flex-wrap">
          <div className="relative flex justify-between mb-3 sm:w-[unset] w-1/2 ">
            <select
              id="countries"
              className="flex items-center  text-gray5002 font-normal text-md align-middle pr-[45px] py-[7px] ps-[14px] cursor-pointer  bg-white border border-[#C4C4C4] rounded-md relative  outline-none"
            >
              <option
                className="py-2 px-2 font-normal text-md text-gray5002"
                selected
                defaultValue="English"
              >
                English
              </option>
              <option
                className="bg-white py-2 px-2 text-md text-gray5002"
                value="US"
              >
                German
              </option>
              <option
                className="bg-white py-2 px-2 text-md text-gray5002"
                value="CA"
              >
                French
              </option>
              <option
                className="bg-white py-2 px-2 text-md text-gray5002"
                value="FR"
              >
                Italian
              </option>
            </select>
            <h4 className="absolute top-0 left-3 -translate-y-2/4 text-xxs font-normal text-[#666666] bg-white px-1">
              Language
            </h4>
          </div>
          <div className="sm:ms-[4px] sm:w-[unset] w-1/2 ps-[24px] ">
            <div className="relative flex justify-between mb-3  ">
              <select
                id="countries"
                className="flex items-center  text-gray5002 font-normal text-md align-middle pr-[45px] py-[7px] ps-[14px] cursor-pointer  bg-white border border-[#C4C4C4] rounded relative  outline-none"
              >
                <option
                  className="py-2 px-2 font-normal text-md text-gray5002"
                  selected
                  defaultValue="USD"
                >
                  USD
                </option>
                <option
                  className="bg-white py-2 px-2 text-md text-gray5002"
                  value="US"
                >
                  Indian
                </option>
                <option
                  className="bg-white py-2 px-2 text-md text-gray5002"
                  value="CA"
                >
                  Rubal
                </option>
              </select>
              <h4 className="absolute top-0 left-3 -translate-y-2/4 text-xxs font-normal text-[#666666] bg-white px-1">
                Currency
              </h4>
            </div>
          </div>
          <p className=" font-normal sm:ms-[23px] ms-[5px] mb-[10px] text-sm text-gray5002 cursor-pointer">
            Terms
          </p>
          <p className=" font-normal ms-[23px] mb-[10px] text-sm text-gray5002 cursor-pointer">
            Privacy
          </p>
        </div>
      </div>
      <div className="flex-wrap flex mt-[16px] gap-[30px] ms-1">
        {socialIcon &&
          socialIcon.map((data, index) => {
            return (
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="cursor-pointer"
              >
                {data.Icon}
              </a>
            );
          })}
      </div>
    </section>
  );
};

export default BrandFooter;
