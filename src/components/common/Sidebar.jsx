import cross_icon from "../../assets/images/svg/cross_icon.svg";
import { useStateProvider } from "./StateContext";
import men1 from "../../assets/images/svg/SidebarMen1.svg";
import men2 from "../../assets/images/svg/SidebarMen2.svg";
import Watchlist from "./Watchlist";
import {
  SideBarBellIcon,
  SideBarTruckIcon,
  SiderBarCartIcon,
  WatchlistIcon,
  BolstrIcon,
} from "./Icons";
import ShoppingCart from "./ShoppingCart";
import Orders from "./Orders";
import SidebarAlert from "./SidebarAlert";

const Sidebar = () => {
  const { sideBarToggle, activeTab, setActiveTab, SidebarClose } =
    useStateProvider();
  // Reset active tab index when sidebarToggle changes
  return (
    <>
        <section
          className={`fixed top-0 right-0 z-50 overflow-hidden bg-white h-full transition-all ease-in-out duration-500 ${
            sideBarToggle ? "translate-x-0" : "translate-x-[100%]"
          }`}
        >
          <div className="max-w-[720px] w-full h-full">
            <div className="bg-gradient-to-r from-[#EA570D] to-[#E11F46] h-1 w-full"></div>
            <div className="flex flex-row h-full">
              <div className=" sm:max-w-[77px] py-2">
                <div className="gap-5 items-center sm:px-3.5 px-2 py-2">
                    <div className="flex flex-col gap-5">
                      <button className="py-2.5 px-3">
                        <img
                          onClick={SidebarClose}
                          src={cross_icon}
                          alt="cross_icon"
                          className="min-w-3.5"
                        />
                      </button>
                      <div className="flex flex-col gap-5 items-center">
                        <button
                          onClick={() => {
                            setActiveTab(0);
                          }}
                          className={`bg-[#F3F4F6] sm:p-3.5 p-2 rounded-full sider_bar_Cart_icon group relative ${
                            activeTab === 0
                              ? "after:content-[''] after:absolute after:top-0 after:right-1 after:w-3 after:h-3 after:bg-[#65A30D] after:border-2 after:border-white after:rounded-full sm:before:content-[''] sm:before:absolute before:rounded-l-lg sm:before:border-4 sm:before:h-full sm:before:top-0 sm:before:right-[-15px] "
                              : ""
                          }`}
                        >
                          <SiderBarCartIcon activeTab={activeTab} />
                        </button>
                        <button onClick={() => {
                            setActiveTab(1);
                          }}
                          className={`bg-[#F3F4F6] sm:p-3.5 p-2 rounded-full sideBar_watchlist group relative  ${
                            activeTab === 1
                              ? " after:content-[''] after:absolute after:top-0 after:right-1 after:w-3 after:h-3 after:bg-[#E11D48] after:border-2 after:border-white after:rounded-full sm:before:content-[''] sm:before:absolute before:rounded-l-lg sm:before:border-4 sm:before:h-full sm:before:top-0 sm:before:right-[-15px] "
                              : ""
                          }`}
                        >
                          <WatchlistIcon activeTab={activeTab} />
                        </button>
                        <button onClick={() => {
                            setActiveTab(2);
                          }}
                          className={`bg-[#F3F4F6] sm:p-3.5 p-2 rounded-full sidebar_ordersicon group relative  ${
                            activeTab === 2
                              ? " after:content-[''] after:absolute after:top-0 after:right-1 after:w-3 after:h-3 after:bg-[#4F46E5] after:border-2 after:border-white after:rounded-full sm:before:content-[''] sm:before:absolute before:rounded-l-lg sm:before:border-4 sm:before:h-full sm:before:top-0 sm:before:right-[-15px] "
                              : ""
                          }`}
                        >
                          <SideBarTruckIcon activeTab={activeTab} />
                        </button>
                        <button onClick={() => {
                            setActiveTab(3);
                          }}
                          className={`bg-[#F3F4F6] sm:p-3.5 p-2 rounded-full sm:mb-5 group relative   ${
                            activeTab === 3
                              ? "after:content-[''] after:absolute after:top-0 after:right-1 after:w-3 after:h-3 after:bg-[#EA580C] after:border-2 after:border-white after:rounded-full sm:before:content-[''] sm:before:absolute before:rounded-l-lg sm:before:border-4 sm:before:h-full sm:before:top-0 sm:before:right-[-15px] "
                              : ""
                          }`}
                        >
                          <SideBarBellIcon activeTab={activeTab} />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center sm:mt-0 mt-5">
                      <div className="border-t-[1px] border-dashed border-[#9CA3AF] pb-1">
                        <p className="text-gray-400 text-xxxs tracking-[0.16px]">
                          RECENT
                        </p>
                      </div>
                      <button onClick={() => {
                            setActiveTab(4);
                          }}
                        className={`sm:mb-0.5 w-10 ${
                          activeTab === 4
                            ? "relative sm:before:content-[''] sm:before:absolute before:rounded-l-lg sm:before:border-4 sm:before:h-full sm:before:top-0 sm:before:right-[-19px] "
                            : ""
                        }`}
                      >
                        <BolstrIcon className="rounded-full w-10 sm:w-12" />
                      </button>
                      <div className="sm:mb-0.5">
                        <img
                          src={men1}
                          alt="men1"
                          className="rounded-full w-10 sm:w-12"
                        />
                      </div>
                      <div className="sm:mb-0.5">
                        <img
                          src={men2}
                          alt="men2"
                          className="rounded-full w-10 sm:w-12"
                        />
                      </div>
                    </div>
                </div>
              </div>
              <div>
                <div className="w-full sm:pl-6 pl-3 h-full sm:pr-8 pr-3 lg:py-14 sm:py-10 py-5 border-s-[1px] border-[#E5E7EB]">
                { activeTab === 0 && <><ShoppingCart /> </> }
                  {activeTab === 1 && <><Watchlist /></> }
                  { activeTab === 2 && <> <Orders /> </> }
                  { activeTab === 3 && <><SidebarAlert /></> }
                  { activeTab === 4 && <><SidebarAlert /></>}
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Sidebar;
