 
import { Tab } from "@headlessui/react";
import {
  SideBarBellIcon,
  SideBarTruckIcon,
  SiderBarCartIcon,
  WatchlistIcon,
  BolstrIcon,
} from "./Icons";
import Watchlist from "./Watchlist";

const SidebarTabs = () => {
  return (
    <>
      <Tab.Group defaultIndex={1}>
        <Tab.List>
          <Tab>
            <button className="bg-[#F3F4F6] sm:p-3.5 p-2 rounded-full sider_bar_Cart_icon group relative after:focus:content-[''] after:absolute after:top-0 after:right-1 after:w-3 after:focus:h-3 after:focus:bg-[#65A30D] after:focus:border-2 after:border-white after:rounded-full">
              <SiderBarCartIcon />
            </button>
          </Tab>
          <Tab>
            <button className="bg-[#F3F4F6] sm:p-3.5 p-2 rounded-full sideBar_watchlist group relative  after:focus:content-[''] after:absolute after:top-0 after:right-1 after:w-3 after:focus:h-3 after:focus:bg-[#E11D48] after:focus:border-2 after:border-white after:rounded-full">
              <WatchlistIcon />
            </button>
          </Tab>
          <Tab>
            <button className="bg-[#F3F4F6] sm:p-3.5 p-2 rounded-full sidebar_ordersicon group relative  after:focus:content-[''] after:absolute after:top-0 after:right-1 after:w-3 after:focus:h-3 after:focus:bg-[#4F46E5] after:focus:border-2 after:border-white after:rounded-full">
              <SideBarTruckIcon />
            </button>
          </Tab>
          <Tab>
            <button className="bg-[#F3F4F6] sm:p-3.5 p-2 rounded-full sm:mb-5 group relative  after:focus:content-[''] after:absolute after:top-0 after:right-1 after:w-3 after:focus:h-3 after:focus:bg-[#EA580C] after:focus:border-2 after:border-white after:rounded-full">
              <SideBarBellIcon />
            </button>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Watchlist />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 4</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default SidebarTabs;
