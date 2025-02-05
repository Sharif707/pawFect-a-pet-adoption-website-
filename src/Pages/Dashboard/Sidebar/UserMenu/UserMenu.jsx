import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsGift } from "react-icons/bs";
import { FaDonate,  FaHandsHelping,  FaHeart, FaHome, FaPaw } from "react-icons/fa";
import { MdOutlineCampaign, MdOutlinePets } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const UserMenu = ({ isOpen }) => {
  return (
    <div>
        <NavLink
              to="/"
              className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-300"
            >
             <FaHome />
              <span className={`${isOpen ? "block" : "hidden"}`}>
               Back to Home
              </span>
            </NavLink>
      <NavLink
        to="/dashboard/add-pets"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-300"
      >
        <AiOutlinePlusCircle />
        <span className={`${isOpen ? "block" : "hidden"}`}>Add Pet</span>
      </NavLink>
      <NavLink
        to="/dashboard/pets-table"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-300"
      >
       <MdOutlinePets />
        <span className={`${isOpen ? "block" : "hidden"}`}>My Added Pets</span>
      </NavLink>

      <NavLink
        to="/dashboard/donation"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-300"
      >
       <MdOutlineCampaign />
        <span className={`${isOpen ? "block" : "hidden"}`}>
          Create Campaign
        </span>
      </NavLink>
      <NavLink
        to="/dashboard/my-campaigns"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-300"
      >
       <RiHandHeartLine />
        <span className={`${isOpen ? "block" : "hidden"}`}>My Campaigns</span>
      </NavLink>
      {/* <NavLink
        to="/dashboard/add-pets"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-300"
      >
        <FaEdit />
        <span className={`${isOpen ? "block" : "hidden"}`}>Edit Donation</span>
      </NavLink> */}
      <NavLink
        to="/my-donations"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-300"
      >
        <BsGift />
        <span className={`${isOpen ? "block" : "hidden"}`}>My Donations</span>
      </NavLink>
      <NavLink
        to="/dashboard/adoption-request"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-300"
      >
       <FaHandsHelping />
        <span className={`${isOpen ? "block" : "hidden"}`}>
          Adoption Request
        </span>
      </NavLink>

      
      
    </div>
  );
};

export default UserMenu;
