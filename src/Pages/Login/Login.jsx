
import toast from "react-hot-toast";

import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  FaFacebook,
  FaGoogle,

  FaEye,
  FaEyeSlash,
} from "react-icons/fa";


const Login = () => {
  const { setUser, createUser, setError, error } = useAuth();
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
  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    try {
      const { name, email, password } = data;

      const { user } = await createUser(email, password);
      setUser(user);
      setError({});
      const userInfo = {
        ...data,
        role: "user",
      };

      toast.success("Log in successful");
    } catch (error) {
      console.error("Error occurred", error.message);
      setError({ ...error, registerError: error?.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:w-1/2 mx-auto bg-white flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-bold mb-2">PawFect</h1>
      <p className="text-gray-600 mb-4">Start your journey</p>
      <h2 className="text-2xl font-semibold mb-6">Sign In to PawFect</h2>

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

        {/* Email Input */}
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
        <button className="bg-gray-100 p-3 rounded-full text-red-500">
          <FaGoogle size={20} />
        </button>
      
      </div>

      {/* Login Link */}
      <p className="text-gray-600 mt-6">
       Don't Have an account?{" "}
        <a href="/login" className="text-blue-500 hover:underline">
          Register
        </a>
      </p>
    </div>
  );
};

export default Login;
