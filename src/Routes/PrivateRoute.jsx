import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default PrivateRoute;
