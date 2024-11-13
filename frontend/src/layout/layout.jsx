import { useState } from "react";
import SidebarNav from "../components/LeftSidebar/sidebar.nav";
import Header from "../components/Header/header.component";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`pr-6 pl-20 md:p-0 transition-[padding] ${
        visible ? "pl-64 2xl:pl-20 md:pl-0" : "pl-20 md:pl-0"
      }`}
    >
      <SidebarNav visible={visible} onClick={() => setVisible(!visible)} />
      <div className="flex py-6 h-screen h-screen-ios md:py-0">
        <div className="relative flex flex-col grow max-w-full pt-16 bg-[#FCFDFE] rounded-xl overflow-y-auto scroll-smooth scrollbar-none md:rounded-none">
          <Header 
            visible={visible}
            onClick={() => setVisible(!visible)}
          />
          <div className="flex flex-col grow overflow-y-auto scroll-smooth scrollbar-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
