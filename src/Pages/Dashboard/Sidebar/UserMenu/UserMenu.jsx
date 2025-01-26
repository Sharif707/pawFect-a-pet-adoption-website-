import React from "react";
import { FaDonate, FaEdit, FaHeart, FaPaw } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserMenu = ({ isOpen }) => {
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
        to="/dashboard/pets-table"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-blue-700"
      >
        <FaPaw />
        <span className={`${isOpen ? "block" : "hidden"}`}>My Added Pets</span>
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
        to="/dashboard/add-pets"
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

      <NavLink
        to="/adoption-request"
        className="flex items-center gap-4 p-2 rounded-md hover:bg-blue-700"
      >
        <FaPaw />
        <span className={`${isOpen ? "block" : "hidden"}`}>user menu</span>
      </NavLink>
    </div>
  );
};

export default UserMenu;
