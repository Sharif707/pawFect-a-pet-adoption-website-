import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { uploadImageToImageBB } from "../../../Utils/Utils";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const UpdatePet = () => {
  const { id } = useParams();
  const [selectedCategory, setselectedCategory] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const handleChange = (selectedValue) =>
    setselectedCategory(selectedValue.value);
  const axiosSecure = useAxiosSecure();

  const petCategories = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "bird", label: "Bird" },
    { value: "rabbit", label: "Rabbit" },
    { value: "Tiger", label: "Tiger" },
    { value: "other", label: "Other" },
  ];

  const fetchPetData = async (id) => {
    const response = await axiosSecure(`/single-pet/${id}`);

    console.log("response data", response);
    return response.data;
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const {
    data: petData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["Pet", id],
    queryFn: () => fetchPetData(id),
  });

  // Handle form submission
  const onSubmit = async (formData) => {
    console.log(formData);

    const imageFile = formData.petImage[0];

    const imageURL = await uploadImageToImageBB(imageFile);
    console.log("image url", imageURL);
    const updatedPetsData = {
      ...formData,
      image: imageURL,
      petImage: undefined,
    };
    try {
      await axiosSecure.put(`/pet-info-update/${id}`, {
        updatedPetsData,
      });
      // navigate("/pets");
    } catch (err) {
      console.error("Failed to update pet", err);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading pet data: {error.message}</p>;
  }
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-md">
      <Helmet>
        <title>Update Pet</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-center mb-6">Update Pet</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Pet Name
          </label>
          <input
            defaultValue={petData?.petName}
            type="text"
            {...register("petName", { required: "Pet name is required" })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter pet name"
          />
          {errors.petName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.petName.message}
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pet Category
          </label>
          <Select
            options={petCategories}
            placeholder="Select a category"
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleChange}
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Age</label>
          <input
            defaultValue={petData?.petAge}
            type="number"
            {...register("petAge", {
              required: "Age is required",
              min: { value: 0, message: "Age cannot be negative" },
            })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter pet age"
          />
          {errors.petAge && (
            <p className="text-red-500 text-sm mt-1">{errors.petAge.message}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Location
          </label>
          <input
            defaultValue={petData?.petLocation}
            type="text"
            {...register("petLocation", { required: "Location is required" })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter pet location"
          />
          {errors.petLocation && (
            <p className="text-red-500 text-sm mt-1">
              {errors.petLocation.message}
            </p>
          )}
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Short Description
          </label>
          <textarea
            defaultValue={petData?.shortDescription}
            {...register("shortDescription", {
              required: "Description is required",
            })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter a short description about the pet"
          ></textarea>
          {errors.shortDescription && (
            <p className="text-red-500 text-sm mt-1">
              {errors.shortDescription.message}
            </p>
          )}
        </div>

        {/* Image */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Image URL
          </label>

          {petData?.image && (
            <div className="mb-2">
              <p className="text-gray-700">Current Image:</p>
              <img
                src={petData.image}
                alt="Current Pet"
                className="w-32 h-32 object-cover rounded border"
              />
            </div>
          )}
          <input
            type="file"
            {...register("petImage", {
              required: !petData?.image && "Image is required",
            })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Is Adopted */}
        <div className="flex items-center">
          <input type="checkbox" {...register("isAdopted")} className="mr-2" />
          <label className="text-gray-700">Is Adopted?</label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Update Pet
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePet;
