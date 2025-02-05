import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaPaw, FaEdit, FaHeart, FaDonate, FaBars, FaUser, FaSignOutAlt, FaCog } from "react-icons/fa";
import useRole from "../../../Hooks/useRole";

import LoadingSpinner from "../../../Components/Shared/LoadingSpinner/LoadingSpinner";
import UserMenu from "./UserMenu/UserMenu";
import AdminMenu from "./AdminMenu/AdminMenu";
import useAuth from "../../../Hooks/useAuth";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [role, isLoading] = useRole();
 
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  if (isLoading)
    return (
      <LoadingSpinner
        count={5}
        width={300}
        height={30}
        message="Loading users data"
      />
    );

  const handleProfileClick = () => {
    navigate('/dashboard/profile-page');
    setIsProfileMenuOpen(false);
  };

  const handleLogout = () => {
    logOut();
    setIsProfileMenuOpen(false);
  };

  return (
    <div className="bg-gray-100 text-gray-800 flex justify-between">
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gray-200 text-black h-screen transition-all duration-300 flex flex-col  relative`}
      >
        <button
          className="p-4 focus:outline-none text-[#424242]"
          onClick={toggleSidebar}
        >
          <FaBars size={20} />
        </button>

        <nav className="flex flex-col gap-4 px-4 mt-4">
          {role === "user" && <UserMenu isOpen={isOpen} />}
          {role === "admin" && <AdminMenu isOpen={isOpen} />}
        </nav>

        <div className="px-5 pb-5 relative">
          <div className="relative">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center gap-3 w-full p-2 text-white transition hover:bg-blue-700 rounded"
            >
              <FaUser className="text-xl" />
              {isOpen && <span>{user?.displayName || 'Profile'}</span>}
            </button>

            {isProfileMenuOpen && (
              <div className="absolute bottom-full left-0 w-full bg-blue-700 rounded shadow-lg z-10">
                <button
                  onClick={handleProfileClick}
                  className="flex items-center gap-3 w-full p-2 text-white hover:bg-blue-600 transition"
                >
                  <FaCog className="text-xl" />
                  <span>Profile Settings</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full p-2 text-white hover:bg-blue-600 transition"
                >
                  <FaSignOutAlt className="text-xl" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;