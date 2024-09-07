/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const StateProviderContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useStateProvider() {
  return useContext(StateProviderContext);
}
export default function StateManagmentProvider({ children }) {
  //
  const [valueData, setValue] = useState(false);
  const [sideBarToggle, setSideBarToggle] = useState(false);

  const [activeTab, setActiveTab] = useState(0); // State to manage active tab index
  const sidebarOpen = () => {
    setSideBarToggle(true);
    document.body.classList.add("overflow-hidden");
  };
  const SidebarClose = () => {
    setSideBarToggle(false);
    document.body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    setActiveTab(activeTab);
  }, [sideBarToggle]);
  const value = {
    valueData,
    sideBarToggle,
    setSideBarToggle,
    activeTab,
    setActiveTab,
    sidebarOpen,
    SidebarClose,
  };
  return (
    <StateProviderContext.Provider value={value}>
      {children}
    </StateProviderContext.Provider>
  );
}
