import React, { useEffect, useState } from "react";
import EditDonationForm from "./EditDonationForm";
import useAuth from "../../../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { uploadImageToImageBB } from "../../../../Utils/Utils";
import LoadingSpinner from "../../../../../Components/Shared/LoadingSpinner/LoadingSpinner";
import toast from "react-hot-toast";

const EditDonation = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },

    setValue,
  } = useForm();

  const {
    data: campaignsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["campaignsData", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/edit-donation/${id}`);
     
      return data;
    },
    enabled: !!id,
  });

  const [existingImage, setexistingImage] = useState(null);
  useEffect(() => {
    if (campaignsData) {
      setValue("fullName", campaignsData.fullName);
      setValue("campaignName", campaignsData.campaignName);
      setValue("email", campaignsData.email);
      setValue("donationAmount", campaignsData.donationAmount);
      setValue("shortDescription", campaignsData.shortDescription);
      setValue("longDescription", campaignsData.longDescription);
      setValue("petPicture", campaignsData.petImage);
      setexistingImage(campaignsData.petImage);
    }
  }, [campaignsData, setValue]);

  const onSubmit = async (donationdata) => {

    const imageFile = donationdata.petPicture[0];
    const imageURL = await uploadImageToImageBB(imageFile);
    const updatedData = {
      ...donationdata,
      donationAmount: parseInt(donationdata?.donationAmount),

      petPicture: undefined,
      petImage: imageURL,
    };
 
    const { data } = await axiosSecure.put(
      `/edited-donation/${id}`,
      updatedData
    );

    toast.success("successfully edited");
  };

  if (isLoading) {
    return (
      <LoadingSpinner
        count={5}
        width={300}
        height={30}
        message="Editing data"
      />
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 text-center">
        <div className="text-red-500">
          Error Editing donations. Please try again later.
        </div>
      </div>
    );
  }
  return (
    <EditDonationForm
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      existingImage={existingImage}
    />
  );
};

export default EditDonation;
