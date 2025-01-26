import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-white">
      <nav>
        <Navbar />
      </nav>
    <div className="my-8">
    <Outlet></Outlet>
    </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
