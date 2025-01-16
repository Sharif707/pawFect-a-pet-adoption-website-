import React from "react";
import { stack as Menu } from 'react-burger-menu'
import { MdClose } from "react-icons/md";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const NavSlider = ({isOpen, setIsOpen}) => {
  return (
    <Menu
    right
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    customBurgerIcon={false}
    customCrossIcon={false}
    className="bg-white"
  >
    <div className="p-6">
      {/* Close Button */}
      <MdClose
        className="text-[#0b0b0b] text-2xl absolute top-4 right-4 cursor-pointer"
        onClick={() => setIsOpen(false)}
      />

      {/* User Section */}
      <div className="text-center py-6">
        <img
          src="/src/assets/cat-profile.png" // Replace with your cat image path
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="text-lg font-bold mt-2">Hello, friend!</h2>
        <div className="flex justify-center space-x-4 mt-4">
        <Button className="bg-[#efefef] py-2 px-4 rounded-lg text-[#0b0b0b] shadow-custom-gray hover:bg-white font-bold text-md transform transition-transform duration-300 hover:-translate-y-1">
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button className="bg-transparent py-2 px-4 rounded-lg text-[#0b0b0b] hover:text-white font-bold text-md transform transition-transform duration-300 hover:-translate-y-1">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="mt-6">
        <h3 className="text-lg font-bold">Find pets to foster or adopt</h3>
        <ul className="space-y-4 mt-4">
          <li className="flex items-center space-x-4">
            <img src="/src/assets/dog-icon.png" alt="Dogs" className="w-8 h-8" />
            <span>Browse for dogs and puppies</span>
          </li>
          <li className="flex items-center space-x-4">
            <img src="/src/assets/cat-icon.png" alt="Cats" className="w-8 h-8" />
            <span>Browse for cats and kittens</span>
          </li>
          <li className="flex items-center space-x-4">
            <img src="/src/assets/rabbit-icon.png" alt="Other Pets" className="w-8 h-8" />
            <span>Browse for other pets</span>
          </li>
        </ul>
      </div>
    </div>
  </Menu>
  );
};

export default NavSlider;
