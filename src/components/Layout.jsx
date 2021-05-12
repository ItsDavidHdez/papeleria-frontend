import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div class="leading-normal tracking-normal" id="main-body">
      <div class="flex flex-wrap">
        <Sidebar />
        <div
          class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen"
          //   :class="sideBarOpen ? 'overlay' : ''" id="main-content"
        >
          <Navbar />
          <div class="p-6 bg-gray-100 mb-20">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
