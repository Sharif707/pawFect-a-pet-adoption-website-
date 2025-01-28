import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FiSettings, FiUser } from "react-icons/fi";
import useAuth from "../../../Hooks/useAuth";
import { FaSignOutAlt } from "react-icons/fa";
import NavSlider from "../../NavSlider/NavSlider";
import { MdOutlineMenu } from "react-icons/md";
import toast from "react-hot-toast";
import websitelogo from "../../../assets/download.png"
import petIcon from "../../../assets/peticon.png"

const Navbarr = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = async () => {
    try {
      await logOut();

      toast.success("logged out");
    } catch (error) {}
  };
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-gray-100 hidden shadow-md px-6 py-3 md:flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          
          <img
             src={websitelogo}
             alt="Logo"
             className="w-20 h-auto"
           />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 font-medium">
          <Link className="hover:text-gray-800" to="/">
            Home
          </Link>

          <Link className="hover:text-gray-800" to="/all-pets">
            Pet Listing
          </Link>

          <Link
            className="hover:text-gray-800 focus:bg-gray-300"
            to={"/dashboard/add-pets"}
          >
            Add a Pet
          </Link>

          <Link
            to="/dashboard"
            className="px-3  rounded-md bg-gray-200 text-gray-800"
          >
            Dashboard
          </Link>
        </ul>

        <div className="flex items-center space-x-4">
          {user?.email ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-bold rounded-full shadow-md hover:bg-blue-600 transition"
            >
              <span>LOG OUT</span>
              <FaSignOutAlt className="text-xl" />
            </button>
          ) : (
            <>
              {" "}
              <Link
                className="bg-transparent py-2 px-4 rounded-lg text-[#0b0b0b]  font-bold text-md transform transition-transform duration-300 hover:-translate-y-1"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="bg-[#efefef] py-2 px-4 rounded-lg text-[#0b0b0b] shadow-custom-gray hover:bg-white font-bold text-md transform transition-transform duration-300 hover:-translate-y-1"
                to={"/signup"}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
      <nav className="md:hidden flex justify-between items-center px-6 py-4">
        <div>
          <img
            src={petIcon}
            alt="Logo"
            className="w-12 h-auto"
          />
        </div>
        <div className="space-x-2 flex ">
          <Link className=" bg-[#eac435] text-[#333333] transition-colors hover:bg-[#eac445] py-2 px-5 rounded-lg font-bold text-lg uppercase">
            Donate
          </Link>
          <MdOutlineMenu
            className="w-8 h-auto cursor-pointer"
            onClick={handleMenuToggle}
          />
        </div>
      </nav>
      <NavSlider isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbarr;
