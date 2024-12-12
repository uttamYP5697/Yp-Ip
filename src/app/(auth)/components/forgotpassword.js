import React from "react";
import { useForm } from "react-hook-form";

export default function ForgotPassword({ onSwitchPage, onResetPassword }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Handle password reset logic here
        onResetPassword(data);
    };

    return (
        <div className="forgot-password">
            <h2 className="text-lg text-white font-semibold mb-4">Forgot Password</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email Field */}
                <div className="mb-4">
                <div className="flex justify-between items-end">
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                        Enter your registered email
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
                        className="w-full px-3 py-2 border rounded-md"
                    />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-transparent font-medium text-white px-4 py-2 rounded-full border-2 hover:border-transparent hover:bg-yellow duration-500"
                >
                    Reset Password
                </button>
            </form>

           
        </div>
    );
}
