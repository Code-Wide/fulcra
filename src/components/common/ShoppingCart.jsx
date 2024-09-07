import { sideBarData } from "./Helper";
import fire_icon from "../../assets/images/svg/fire_icon.svg";

const ShoppingCart = () => {
  return (
    <>
      <h2 className="text-black font-semibold tracking-[0.4px] sm:text-xxl text-lg sm:pb-12 pb-5 bg-white">
        Your Shopping Cart
      </h2>
      <div className="overflow-auto h-full">
        <div className="overflow-auto py-2 h-[calc(100vh-200px)]">
          {sideBarData &&
            sideBarData.map((item, i) => {
              return (
                <div
                  className="py-[27px] sm:px-[32px] px-2 border border-[#E2E8F0] rounded-md mb-7"
                  key={i}
                >
                  <div className="sm:flex justify-between pb-6 grid grid-cols-2 sm:grid-cols-4">
                    {item.statusList.map((val, i) => {
                      return (
                        <div className="md:me-10" key={i}>
                          <h2
                            className={`sm:text-sm text-xxs font-semibold text-neutral-900 mb-1 ${
                              i === 2 ? "mt-5 sm:mt-0" : ""
                            }`}
                          >
                            {val.heading}
                          </h2>
                          <p className="sm:text-md text-xxs text-neutral-900">
                            {val.name}
                          </p>
                        </div>
                      );
                    })}
                    <div>
                      <button className="py-2.5 px-4 border-none bg-neutral-100 rounded-md mt-5 sm:mt-0 hover:bg-gray-200 transition-all group duration-200">
                        <img
                          src={fire_icon}
                          alt="fire_icon"
                          className="w-[17px] group-hover:scale-125 transition-all duration-200"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="border border-t"></div>
                  <h2 className="mb-8 pt-4 font-semibold text-md text-neutral-900">
                    Estimated delivery: Aug 2023
                  </h2>
                  <div>
                    {item &&
                      item.estimated &&
                      item.estimated.map((value, i) => {
                        return (
                          <div
                            className="flex justify-between items-center sm:items-start"
                            key={i}
                          >
                            <div className="flex sm:flex-row flex-col ml-1">
                              <img
                                src={value.img}
                                alt="fitness_watch"
                                className="max-w-[70px] w-full  mr-2.5 rounded-md"
                              />
                              <div>
                                <h3 className="text-xxs font-semibold text-black mb-1 sm:mt-0 mt-2">
                                  {value.brandName}
                                </h3>
                                <p className="sm:text-md text-xxs text-black whitespace-pre-wrap pr-5">
                                  {value.productName}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <p className="text-xxs text-neutral-500 line-through">
                                {value.price}
                              </p>
                              <p className=" text-right text-xxs text-[#E11D48]">
                                {value.discount}
                              </p>
                              <p className=" text-md text-[#E11D48] font-semibold">
                                {value.totalPrice}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
