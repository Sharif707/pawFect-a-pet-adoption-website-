import React from "react";
import { NavLink } from "react-router-dom";
import { FaPaw, FaEdit, FaHeart, FaDonate, FaBars } from "react-icons/fa";

const AdminMenu = ({ isOpen }) => {
  return (
    <div>
      <NavLink
        to="/dashboard/add-pets"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-blue-700"
      >
        <FaPaw />
        <span className={`${isOpen ? "block" : "hidden"}`}>Add Pet</span>
      </NavLink>
      <NavLink
        to="/dashboard/all-pets"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-blue-700"
      >
        <FaPaw />
        <span className={`${isOpen ? "block" : "hidden"}`}>All Pets</span>
      </NavLink>
     
      <NavLink
        to="/dashboard/donation"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-blue-700"
      >
        <FaDonate />
        <span className={`${isOpen ? "block" : "hidden"}`}>
          Create Campaign
        </span>
      </NavLink>
      <NavLink
        to="/dashboard/my-campaigns"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-blue-700"
      >
        <FaDonate />
        <span className={`${isOpen ? "block" : "hidden"}`}>My Campaigns</span>
      </NavLink>
      {/* <NavLink
        to="/dashboard/edited-donation"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-blue-700"
      >
        <FaEdit />
        <span className={`${isOpen ? "block" : "hidden"}`}>Edit Donation</span>
      </NavLink> */}
      <NavLink
        to="/my-donations"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-blue-700"
      >
        <FaHeart />
        <span className={`${isOpen ? "block" : "hidden"}`}>My Donations</span>
      </NavLink>
      <NavLink
        to="/dashboard/adoption-request"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-blue-700"
      >
        <FaPaw />
        <span className={`${isOpen ? "block" : "hidden"}`}>
          Adoption Request
        </span>
      </NavLink>
      {/* <NavLink
        to="/adoption-requesttt"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-blue-700"
      >
        <FaPaw />
        <span className={`${isOpen ? "block" : "hidden"}`}>for admin</span>
      </NavLink> */}
    </div>
  );
};

export default AdminMenu;
