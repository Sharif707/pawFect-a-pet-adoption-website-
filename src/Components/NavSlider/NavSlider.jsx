import React from "react";
import { slide as Menu } from "react-burger-menu";
import { MdClose } from "react-icons/md";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";

const NavSlider = ({ isOpen, setIsOpen }) => {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px'
    },
   
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      right: '36px',
      top: '36px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      width: '100%', // Makes menu full width
      height: '100%' // Makes menu full height
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      width: '100%' // Ensures content spans full width
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    },
    bmItem: {
      display: 'inline-block',
      margin: '1em 0',
      color: 'white',
      textDecoration: 'none',
      fontSize: '24px'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  };
  return (
    <Menu
      right
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
      styles={styles}
    >
      <div className="absolute top-0 left-0 w-screen h-screen bg-[#2c2c2c] p-6 z-50">
        {/* Close Button */}
        <MdClose
          className="text-[#ffffff] text-2xl absolute top-4 right-4 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        {/* User Section */}
        <div className="text-center py-6">
          <img
            src="/src/assets/cat-profile.png"
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="text-2xl font-bold my-2 text-[#ffffff]">
            Hello, friend!
          </h2>
          <div className="flex justify-center space-x-4 mt-4">
            <Button className="bg-[#ffffff] py-1 px-2 rounded-lg text-[#2c2c2c] shadow-md hover:bg-gray-200 font-bold text-md transform transition-transform duration-300 hover:-translate-y-1">
              <Link to="/signup">Sign Up</Link>
            </Button>
            <Button className="bg-transparent border-2 border-[#ffffff] py-1 px-2 rounded-lg text-[#ffffff] hover:text-white font-bold text-md transform transition-transform duration-300 hover:-translate-y-1">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="mt-6 text-[#ffffff]">
          <h3 className="text-lg font-bold">Find pets to foster or adopt</h3>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center space-x-4">
              <img
                src="/src/assets/dog-icon.png"
                alt="Dogs"
                className="w-8 h-8"
              />
              <span>Browse for dogs and puppies</span>
            </li>
            <li className="flex items-center space-x-4">
              <img
                src="/src/assets/cat-icon.png"
                alt="Cats"
                className="w-8 h-8"
              />
              <span>Browse for cats and kittens</span>
            </li>
            <li className="flex items-center space-x-4">
              <img
                src="/src/assets/rabbit-icon.png"
                alt="Other Pets"
                className="w-8 h-8"
              />
              <span>Browse for other pets</span>
            </li>
          </ul>
        </div>
      </div>
    </Menu>
  );
};

export default NavSlider;
