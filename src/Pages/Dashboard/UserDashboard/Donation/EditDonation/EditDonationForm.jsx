import React from "react";
import { Helmet } from "react-helmet-async";

const EditDonationForm = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
  existingImage,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Helmet>
        <title>Edit Donation</title>
      </Helmet>
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <img
              src="/path-to-your-image.png"
              alt="Animal Shelter"
              className="h-24"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mt-4">
            Share Your Campaign
          </h1>
          <p className="text-pink-500">Edit Donation Form</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-[#6B7280] font-medium">
                Full Name
              </label>
              <input
                type="text"
                {...register("fullName", { required: true })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-700"
                placeholder="Full Name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  First Name is required
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-[#6B7280] font-medium">
              Campaign Name
            </label>
            <input
              type="text"
              {...register("campaignName", { required: true })}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-700"
              placeholder="Your Campaign Name"
            />
            {errors.campaignName && (
              <p className="text-red-500 text-sm mt-1">
                Campaign Name is required
              </p>
            )}
          </div>

          <div>
            <label className="block text-[#6B7280] font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-700"
              placeholder="example@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          <div>
            <label className="block text-[#6B7280] font-medium">
              Maximum Donation Amount
            </label>
            <input
              type="number"
              {...register("donationAmount", { required: true })}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-700"
              placeholder="Enter Amount"
            />
            {errors.donationAmount && (
              <p className="text-red-500 text-sm mt-1">
                Donation amount is required
              </p>
            )}
          </div>

          <div>
            <label className="block text-[#6B7280] font-medium">
              Pet Picture
            </label>
            {existingImage && (
              <div className="mb-2">
                <img
                  src={existingImage}
                  alt="Current pet"
                  className="w-32 h-32 object-cover rounded-md"
                />
              </div>
            )}
            <input
              type="file"
              {...register("petPicture", { required: true })}
              className="mt-1 w-full text-gray-700"
            />
            {errors.petPicture && (
              <p className="text-red-500 text-sm mt-1">
                Pet picture is required
              </p>
            )}
          </div>

          <div>
            <label className="block text-[#6B7280] font-medium">
              Short Description
            </label>
            <textarea
              {...register("shortDescription", { required: true })}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-700"
              rows="3"
              placeholder="Short description"
            />
            {errors.shortDescription && (
              <p className="text-red-500 text-sm mt-1">
                Short description is required
              </p>
            )}
          </div>

          <div>
            <label className="block text-[#6B7280] font-medium">
              Long Description
            </label>
            <textarea
              {...register("longDescription", { required: true })}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-700"
              rows="6"
              placeholder="Long description"
            />
            {errors.longDescription && (
              <p className="text-red-500 text-sm mt-1">
                Long description is required
              </p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDonationForm;
