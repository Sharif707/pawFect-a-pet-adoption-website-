import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Components/Shared/Footer/Footer";
import Navbarr from "../Components/Shared/Navbar/Navbarr";

const MainLayout = () => {
  return (
    <div className="bg-white">
      <nav>
        <Navbarr />
      </nav>
      <div>
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
