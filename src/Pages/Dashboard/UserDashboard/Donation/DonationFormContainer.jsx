import React from "react";
import { useForm } from "react-hook-form";

import DonationForm from "./DonationForm";

const DonationFormContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <DonationForm
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
};

export default DonationFormContainer;
