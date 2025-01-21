import React from "react";
import { useForm } from "react-hook-form";

import DonationForm from "./DonationForm";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { uploadImageToImageBB } from "../../../Utils/Utils";

const DonationFormContainer = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (donationdata) => {
    console.log("donation data", donationdata);
    const imageFile = donationdata.petPicture[0]
    const imageURL = await uploadImageToImageBB(imageFile)
    console.log("image url from donation form", imageURL);
    const donationInfo = {
      ...donationdata,
      petPicture: undefined,
      petImage: imageURL,
      donationAmount: parseInt(donationdata?.donationAmount),
    };
    console.log("donation info", donationInfo);
    const { data } = await axiosSecure.post(
      `/donation-campaigns`,
      donationInfo
    );

    if (data?.insertedId) {
      toast.success("Successfully added a campaign");
    }
  };

  return (
    <DonationForm
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      user={user}
    />
  );
};

export default DonationFormContainer;
