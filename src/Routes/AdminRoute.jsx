import React from "react";
import useRole from "../Hooks/useRole";
import LoadingSpinner from "../Components/Shared/LoadingSpinner/LoadingSpinner";
import { Navigate } from "react-router-dom";

const AdminRoute = ({children}) => {
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
  if(role === "admin"){
    return children
  }
  return <Navigate to={'/'} replace='true'></Navigate>

 
};

export default AdminRoute;
