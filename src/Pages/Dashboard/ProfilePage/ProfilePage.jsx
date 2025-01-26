import React from "react";
import useAuth from "../../../Hooks/useAuth";

const ProfilePage = () => {
  // Example user data
  const { user } = useAuth();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto">
    
      <div className="flex items-center space-x-6">
        <img
          referrerPolicy="no-referrer"
          src={user.photoURL}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-blue-500"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.displayName}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700">About Me</h2>
        <p className="text-gray-600 mt-2">
          Hi, I'm Muhammad Sharif, a passionate
          MERN stack developer dedicated to building modern, efficient, and
          user-friendly web applications. With expertise in MongoDB, Express.js,
          React, and Node.js, I specialize in creating dynamic full-stack
          applications that deliver seamless user experiences. I thrive on
          solving complex problems, optimizing performance, and crafting clean,
          maintainable code.
        </p>
      </div>

      {/* Join Date */}
      {/* <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700">Joined On</h2>
        <p className="text-gray-600 mt-2">{user.joinDate}</p>
      </div> */}

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Edit Profile
        </button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
