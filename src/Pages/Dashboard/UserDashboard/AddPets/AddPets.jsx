import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import useAuth from "../../../../Hooks/useAuth";
import { uploadImageToImageBB } from "../../../Utils/Utils";
import axios from "axios";
import toast from "react-hot-toast";

const AddPetForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedCategory, setselectedCategory] = useState(null);

  // Options for the pet category dropdown
  const petCategories = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "bird", label: "Bird" },
    { value: "rabbit", label: "Rabbit" },
    { value: "Tiger", label: "Tiger" },
    { value: "other", label: "Other" },
  ];
  const { user } = useAuth();
  const handleChange = (selectedValue) =>
    setselectedCategory(selectedValue.value);
  console.log(selectedCategory);

  const onSubmit = async (data) => {
    try {
      // Extract the file from the FileList
      const imageFile = data.petImage[0];

      if (!imageFile) {
        throw new Error("No file selected for the pet image.");
      }

      const imageURL = await uploadImageToImageBB(imageFile);
      console.log("Uploaded Image URL:", imageURL);

      const petsData = {
        ...data,
        petAge: parseInt(data.petAge),
        petImage: undefined,
        petCategory: selectedCategory,
        image: imageURL,
      };

      // Send data to the backend
   const response =  await axios.post(
        `${import.meta.env.VITE_API_URL}/add-pets/${user?.email}`,
        petsData
      );
      console.log(response);
      toast.success("Your Pet has been added")

 
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Your Pet</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pet Image
          </label>
          <input
            type="file"
            accept="image/*"
            {...register("petImage", { required: "Pet image is required" })}
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Pet Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pet Name
          </label>
          <input
            type="text"
            placeholder="Enter pet name"
            {...register("petName", { required: "Pet name is required" })}
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.petName && (
            <span className="text-red-500 text-sm">
              {errors.petName.message}
            </span>
          )}
        </div>

        {/* Pet Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pet Age
          </label>
          <input
            type="number"
            placeholder="Enter pet age in years"
            {...register("petAge", { required: "Pet age is required" })}
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.petAge && (
            <span className="text-red-500 text-sm">
              {errors.petAge.message}
            </span>
          )}
        </div>

        {/* Pet Category */}
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

        {/* Pet Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pet Location
          </label>
          <input
            type="text"
            placeholder="Enter pickup location"
            {...register("petLocation", { required: "Location is required" })}
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.petLocation && (
            <span className="text-red-500 text-sm">
              {errors.petLocation.message}
            </span>
          )}
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Short Description
          </label>
          <textarea
            placeholder="Write a short description or note from the owner"
            {...register("shortDescription", {
              required: "Short description is required",
            })}
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            rows="2"
          ></textarea>
          {errors.shortDescription && (
            <span className="text-red-500 text-sm">
              {errors.shortDescription.message}
            </span>
          )}
        </div>

        {/* Long Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Long Description
          </label>
          <textarea
            placeholder="Provide detailed information about the pet"
            {...register("longDescription", {
              required: "Long description is required",
            })}
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            rows="5"
          ></textarea>
          {errors.longDescription && (
            <span className="text-red-500 text-sm">
              {errors.longDescription.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Pet
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPetForm;
