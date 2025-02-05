import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { AiOutlineHome, AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlinePets, MdOutlineCampaign } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";
import { BsGift, BsHeart } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import SidebarItem from '../../../Components/SidebarItem/SidebarItem';

const SidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
   
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300
          ${isOpen ? "w-64" : "w-20"} md:w-64 md:relative`}
      >
        {/* Logo & Close Button */}
        <div className="flex justify-between items-center p-4">
          <h2 className={`text-xl font-bold transition-all ${isOpen ? "block" : "hidden"} md:block`}>
            PetCare
          </h2>
          <button
            className="text-gray-400 hover:text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-4">
          <SidebarItem to="/" icon={<AiOutlineHome />} text="Back to Home" isOpen={isOpen} />
          <SidebarItem to="/add-pet" icon={<AiOutlinePlusCircle />} text="Add Pet" isOpen={isOpen} />
          <SidebarItem to="/my-added-pets" icon={<MdOutlinePets />} text="My Added Pets" isOpen={isOpen} />
          <SidebarItem to="/create-campaign" icon={<MdOutlineCampaign />} text="Create Campaign" isOpen={isOpen} />
          <SidebarItem to="/my-campaigns" icon={<RiHandHeartLine />} text="My Campaigns" isOpen={isOpen} />
          <SidebarItem to="/all-donations" icon={<BsGift />} text="All Donations" isOpen={isOpen} />
          <SidebarItem to="/my-donations" icon={<BsHeart />} text="My Donations" isOpen={isOpen} />
          <SidebarItem to="/adoption-requests" icon={<FaHandsHelping />} text="Adoption Requests" isOpen={isOpen} />
        </nav>
      </div>
    </>
    );
};

export default SidebarMenu;