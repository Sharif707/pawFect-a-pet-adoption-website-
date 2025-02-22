import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaFacebook,
  FaGoogle,
  FaApple,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

import { TbFidgetSpinner } from "react-icons/tb";

import { Link, useNavigate } from "react-router-dom";

import { saveUser, uploadImageToImageBB } from "../../Utils/Utils";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const {
  
    createUser,
    error,
    setError,
    signInwithGoogle,
    updateUserProfile,
  } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setisPasswordVisible(!isPasswordVisible);
  };
  const [loading, setLoading] = useState(false);
  const handleGoogleSignup = async () => {
    try {
      const { user } = await signInwithGoogle();

 
      navigate("/");

      setError({});
    } catch (error) {
      setError({ ...error, registerError: error.message });
    }
  };
  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const { name, email, password } = data;
      const imageFile = data.image[0];

      const imageURL = await uploadImageToImageBB(imageFile);

      const { user } = await createUser(email, password);
      await updateUserProfile(name, imageURL);

      
      setError({});
      toast.success("Signed up successful");
      navigate("/")
    } catch (error) {
      setError({ ...error, registerError: error?.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:w-1/2 mx-auto bg-white flex flex-col justify-center items-center p-8">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-2">PawFect</h1>
      <p className="text-gray-600 mb-4">Start your journey</p>
      <h2 className="text-2xl font-semibold mb-6">Sign Up to PawFect</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm flex flex-col gap-4"
      >
        <div>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Your name"
            className={`w-full px-4 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            type="file"
            {...register("image", { required: "User Photo is required" })}
            placeholder="Your Image"
            className={`w-full px-4 py-2 border ${
              errors.image ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none`}
            accept="image/*"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email address"
            className={`w-full px-4 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="relative">
          <input
            type={isPasswordVisible ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="Password"
            className={`w-full  px-4 py-2 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none`}
          />

          <button
            onClick={togglePasswordVisibility}
            className="absolute top-2/4 right-3 transform -translate-y-1/2 cursor-pointer"
          >
            {isPasswordVisible ? (
              <FaEyeSlash className="text-gray-500" />
            ) : (
              <FaEye className="text-gray-500" />
            )}
          </button>
        </div>
        <div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`bg-blue-500 text-white py-2 rounded hover:bg-blue-600 flex justify-center items-center`}
          disabled={loading}
        >
          {loading ? (
            <TbFidgetSpinner
              className="animate-spin m-auto"
              size={20}
              color="#fff"
            />
          ) : (
            "Sign up"
          )}
        </button>
      </form>
      {error && (
        <p className="text-red-500 text-sm my-1">{error?.registerError}</p>
      )}
      <div className="flex items-center my-4">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-2 text-gray-500">or sign up with</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {/* Social Sign-Up Options */}
      <div className="flex gap-4">
        <button className="bg-gray-100 p-3 rounded-full text-blue-600">
          <FaFacebook size={20} />
        </button>
        <button
          onClick={handleGoogleSignup}
          className="bg-gray-100 p-3 rounded-full text-red-500"
        >
          <FaGoogle size={20} />
        </button>
        <button className="bg-gray-100 p-3 rounded-full text-black">
          <FaApple size={20} />
        </button>
      </div>

      {/* Login Link */}
      <p className="text-gray-600 mt-6">
        Have an account?{" "}
        <Link to={"/login"} className="text-blue-500 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
