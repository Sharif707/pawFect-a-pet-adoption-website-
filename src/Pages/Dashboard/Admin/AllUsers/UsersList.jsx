import React from "react";
import { UsersTable } from "../../../../Components/Admin/UsersTable/UsersTable";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import LoadingSpinner from "../../../../Components/Shared/LoadingSpinner/LoadingSpinner";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const UsersList = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const {
    data: usersList = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["usersList", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/all-users/${user?.email}`);

      return data;
    },
  });
  if (isLoading) {
    return (
      <LoadingSpinner
        count={5}
        width={300}
        height={30}
        message="Loading users data"
      />
    );
  }
  const handleCreateAdmin = async (email) => {
 
    const { data } = await axiosSecure.patch(`/user/role/${email}`, {
      status: "Verified",
    });

    if (data?.modifiedCount === 1) {
        refetch()
      return toast.success("Successfully updated");
    }
  };
  return (
    <div>
      <Helmet>
        <title>
          All Users List
        </title>
      </Helmet>
      <UsersTable usersList={usersList} handleCreateAdmin={handleCreateAdmin} />
    </div>
  );
};

export default UsersList;
