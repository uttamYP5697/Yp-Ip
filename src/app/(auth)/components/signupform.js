import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEye , IoEyeOff  } from "react-icons/io5";


export default function SignupForm({ onSwitchPage, onSignup }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePassword = (name) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const onSubmit = (data) => {
    // Call signup logic here
    onSignup(data);
  };

  return (
    <div className="signup-form">
      <form className="mb-8 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div className="mb-4">
          <div className="flex justify-between items-end">
            <label htmlFor="name" className="text-body text-white font-medium block mb-1">
              Name
            </label>
          </div>
          <div className="flex w-full">
            <input
              id="name"
              type="text"
              {...register("name", {
                required: "Name is required.",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters.",
                },
              })}
              className="border-grey-300 focus:border-grey-400 bg-white pl-2 pr-2 text-primary-400 w-full py-3 rounded border-2 placeholder-grey-300 focus:outline-none"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <div className="flex justify-between items-end">
            <label htmlFor="email" className="block font-medium text-white mb-2">
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
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4 relative">
        <div className="flex justify-between items-end">
          <label htmlFor="password" className="block font-medium text-white mb-2">
            Password
          </label>
          </div>
          <div className="relative flex w-full">
            <input
              id="password"
              type={passwordVisibility.password ? "text" : "password"}
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters.",
                },
              })}
              className="border-grey-300 focus:border-grey-400 bg-white pl-2 pr-10 text-primary-400 w-full py-3 rounded border-2 placeholder-grey-300 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => togglePassword("password")}
              className="absolute right-3 top-3 -translate-x-[50%] translate-y-[50%] text-gray-500"
              aria-label="Toggle password visibility"
            >
              {passwordVisibility.password ? <IoEye /> : <IoEyeOff />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="mb-4 relative">
        <div className="flex justify-between items-end">
          <label htmlFor="confirmPassword" className="block font-medium text-white mb-2">
            Confirm Password
          </label>
          </div>
          <div className="relative flex w-full" >
            <input
              id="confirmPassword"
              type={passwordVisibility.confirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Confirm your password.",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match.",
              })}
              className="border-grey-300 focus:border-grey-400 bg-white pl-2 pr-10 text-primary-400 w-full py-3 rounded border-2 placeholder-grey-300 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => togglePassword("confirmPassword")}
              className="absolute right-3 top-3 -translate-x-[50%] translate-y-[50%] text-gray-500"
              aria-label="Toggle confirm password visibility "
            >
              {passwordVisibility.confirmPassword ? <IoEye /> : <IoEyeOff />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500  text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-transparent font-medium text-white px-4 py-2 rounded-full border-2 hover:border-transparent hover:bg-yellow duration-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
