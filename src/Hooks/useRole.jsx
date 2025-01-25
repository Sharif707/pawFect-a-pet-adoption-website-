import useAuth from "./useAuth";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import LoadingSpinner from "../Components/Shared/LoadingSpinner/LoadingSpinner";

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: role, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/role/${user?.email}`);
      if (isLoading) {
        return  <LoadingSpinner count={5} width={300} height={30} message="Loading user role" />
      }
      return data.role;
    },
  });
  console.log(role);
  return [role];
};

export default useRole;
