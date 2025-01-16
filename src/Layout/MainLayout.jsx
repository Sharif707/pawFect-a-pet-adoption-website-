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
      <Outlet></Outlet>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
