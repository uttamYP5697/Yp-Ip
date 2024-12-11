import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function LoginForm({ onLogin, onSwitchPage }) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const onSubmit = (data) => {
    onLogin(data);

  };

  return (
    <div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <p className="text-center text-sm text-gray-600 mb-2">
          Login Credentials:
        </p>
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-600">Email:</span>
          <span className="text-sm text-gray-800 font-bold ml-2">ypdevloper@gmail.com</span>
        </div>
        <div className="flex items-center justify-center mt-2">
          <span className="text-sm text-gray-600">Password:</span>
          <span className="text-sm text-gray-800 font-bold ml-2">123456</span>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        className="flex"
      >
        <img
          src="https://www.yellowpanther.io/images/header-logo.svg"
          alt="Logo"
          className="self-center my-8 w-40"
        />
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8 flex flex-col">
        {/* Email Field */}
        <div className="mb-4">
          <div className="flex justify-between items-end">
            <label
              htmlFor="email"
              className="text-body text-primary-400 block mb-1"
            >
              Email
            </label>
          </div>
          <div className="flex w-full">
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format.",
                },
              })}
              className="border-grey-300 focus:border-grey-400 bg-white pl-2 pr-2 text-primary-400 w-full py-3 rounded border-2 placeholder-grey-300 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <div className="flex justify-between items-end">
            <label
              htmlFor="password"
              className="text-body text-primary-400 block mb-1"
            >
              Password
            </label>
          </div>
          <div className="flex relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"} // Toggle input type
              {...register("password", {
                required: "Password is required.",
              })}
              className="border-grey-300 focus:border-grey-400 text-primary-400 w-full py-3 pl-2 pr-10 bg-white rounded border-2 placeholder-grey-300 focus:outline-none"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              aria-label="Toggle password visibility"
              className="absolute right-0 mr-6 top-[50%] translate-x-[50%] -translate-y-[50%]"
            >
              {/* Change icon based on visibility state */}
              {showPassword ?
                <IoEye />
                :

                <IoEyeOff />
              }
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
