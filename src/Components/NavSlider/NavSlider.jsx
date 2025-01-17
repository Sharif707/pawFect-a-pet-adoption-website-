import React from "react";
import { slide as Menu } from "react-burger-menu";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const NavSlider = ({ isOpen, setIsOpen }) => {
  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const styles = {
    bmBurgerButton: {
      display: "none",
    },
    bmCrossButton: {
      display: "none",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      width: "100%",
      top: "0px",
    },
    bmMenu: {
      background: "#2c2c2c",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmItemList: {
      height: "100%",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <div className="sm:hidden">
      <Menu
        right
        isOpen={isOpen}
        onStateChange={handleStateChange}
        styles={styles}
        width={"100%"}
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
      >
        <div className="flex flex-col h-full relative p-4">
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-white hover:text-[#eac435] transition-colors"
            aria-label="Close Menu"
          >
            <MdClose className="text-2xl" />
          </button>

          {/* Main Navigation */}
          <div className="mt-8">
            <Link
              to="/"
              className="text-white font-bold text-xl block py-2 hover:text-[#eac435] relative group transition-colors"
              onClick={closeMenu}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/pet-listing"
              className="text-white font-bold text-xl block py-2 hover:text-[#eac435] relative group transition-colors"
              onClick={closeMenu}
            >
              Pet Listing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/donation-campaigns"
              className="text-white font-bold text-xl block py-2 hover:text-[#eac435] relative group transition-colors"
              onClick={closeMenu}
            >
              Donation Campaigns
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Pet Browse Section */}
          <div className="border-t border-gray-600 pt-6 text-white mt-6">
            <h3 className="text-lg font-bold text-[#eac435]">
              Find pets to foster or adopt
            </h3>
            <ul className="space-y-4 mt-4">
              <li>
                <Link
                  to="/browse/dogs"
                  className="flex items-center space-x-4 py-2 hover:bg-[#444444] rounded-lg px-2 relative group transition-colors"
                  onClick={closeMenu}
                >
                  <img
                    src="/src/assets/dog-icon.png"
                    alt="Dogs"
                    className="w-8 h-8"
                  />
                  <span className="text-white hover:text-[#eac435] relative">
                    Browse for dogs and puppies
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/browse/cats"
                  className="flex items-center space-x-4 py-2 hover:bg-[#444444] rounded-lg px-2 relative group transition-colors"
                  onClick={closeMenu}
                >
                  <img
                    src="/src/assets/cat-icon.png"
                    alt="Cats"
                    className="w-8 h-8"
                  />
                  <span className="text-white hover:text-[#eac435] relative">
                    Browse for cats and kittens
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/browse/other"
                  className="flex items-center space-x-4 py-2 hover:bg-[#444444] rounded-lg px-2 relative group transition-colors"
                  onClick={closeMenu}
                >
                  <img
                    src="/src/assets/rabbit-icon.png"
                    alt="Other Pets"
                    className="w-8 h-8"
                  />
                  <span className="text-white hover:text-[#eac435] relative">
                    Browse for other pets
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Auth Buttons */}
          <div className="flex flex-col gap-4 mt-8 border-t border-gray-600 pt-6">
            <Link
              to="/login"
              className="bg-transparent py-2 px-4 rounded-lg text-white border border-[#eac435] hover:bg-[#eac435] hover:text-[#333333] font-bold text-lg text-center transition-colors"
              onClick={closeMenu}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#eac435] py-2 px-4 rounded-lg text-[#333333] shadow-custom-gray hover:bg-[#eac445] font-bold text-lg text-center transition-colors"
              onClick={closeMenu}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default NavSlider;