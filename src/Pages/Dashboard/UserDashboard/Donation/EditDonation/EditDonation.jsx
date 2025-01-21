import React from "react";
import EditDonationForm from "./EditDonationForm";
import useAuth from "../../../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const EditDonation = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const fetchData = async () => {
    console.log("asynchronous function");
  };
  console.log("let us see");
  const {
    data: campaignsData = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["campaignsData"],
    queryFn: async () => fetchData(),
  });

  const onSubmit = async (donationdata) => {
    console.log(donationdata);
  };

  return (
    <EditDonationForm
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      user={user}
    />
  );
};

export default EditDonation;
