import useAuth from "../../../Hooks/useAuth";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner/LoadingSpinner";
import useRole from "../../../Hooks/useRole";
import { Helmet } from "react-helmet-async";

const ProfilePage = () => {
  const { user } = useAuth();
  const [role, isLoading] = useRole();

  if (isLoading) {
    return (
      <LoadingSpinner
        count={5}
        width={300}
        height={30}
        message="Loading data"
      />
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto">
      <Helmet>
        <title>
         Profile Page
        </title>
      </Helmet>
      <div className="relative flex items-center space-x-6">
        {/* Profile Image */}
        <div className="relative">
          <img
            referrerPolicy="no-referrer"
            src={user.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-blue-500"
          />
          {/* Role Badge */}
          {role && (
            <span className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
              {role.toUpperCase()}
            </span>
          )}
        </div>

        {/* User Details */}
        <div>
          <h1 className="text-2xl font-bold">{user.displayName}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700">About Me</h2>
        <p className="text-gray-600 mt-2">
          Hi, I'm Muhammad Sharif, a passionate MERN stack developer dedicated
          to building modern, efficient, and user-friendly web applications.
          With expertise in MongoDB, Express.js, React, and Node.js, I
          specialize in creating dynamic full-stack applications that deliver
          seamless user experiences. I thrive on solving complex problems,
          optimizing performance, and crafting clean, maintainable code.
        </p>
      </div>

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
