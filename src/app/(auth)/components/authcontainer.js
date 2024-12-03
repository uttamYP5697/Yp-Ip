"use client"
import React, { useState } from "react";
import LoginForm from "./loginform";
import SignupForm from "./signupform";
import ForgotPassword from "./forgotpassword";
import { useAuth } from "@/app/utils/auth";

export default function AuthContainer() {
    const [activePage, setActivePage] = useState("login");
    const { login } = useAuth();

    const handleLogin = async (data) => {
        console.log("Login data:", data);
        try {
            await login(data);
            if (!localStorage.getItem("authToken")) {
                throw new Error("wrong credentials");
            }
        } catch (error) {
            setTimeout(() => {
                alert(error.message);
            }, 2000);
        }
    };

    const handleSignup = (data) => {
        console.log("Signup data:", data);
        // Perform signup logic here
    };

    const handleResetPassword = (data) => {
        console.log("Reset Password data:", data);
        // Perform password reset logic here
    };

    return (

        <div className="grid grid-rows-1 bg-slate-400">
            
            <div className="grid grid-cols-2">
                <div className="flex flex-col sm:pl-6 pb-20 sm:pb-0 pt-10 sm:pr-6 lg:pr-20 lg:pt-28">

                    <div className=" w-full max-w-sm self-center  text-center flex flex-col">
                 
                        {activePage === "login" && (
                            <LoginForm
                                onLogin={handleLogin}
                                onSwitchPage={setActivePage}
                                onForgotPassword={() => setActivePage("forgot")}
                            />
                        )}
                        {activePage === "signup" && (
                            <SignupForm onSignup={handleSignup} onSwitchPage={setActivePage} />
                        )}
                        {activePage === "forgot" && (
                            <ForgotPassword
                                onResetPassword={handleResetPassword}
                                onSwitchPage={setActivePage}
                            />
                        )}
                    </div>
                    {/* Additional Options */}
                    <div className="mt-4 text-center">
                        {activePage !== "login" && (
                            <p>
                                Already have an account?{" "}
                                <button
                                    onClick={() => setActivePage("login")}
                                    className="text-blue-500 underline"
                                >
                                    Login
                                </button>
                            </p>
                        )}
                        {activePage !== "signup" && (
                            <p>
                                Don't have an account?{" "}
                                <button
                                    onClick={() => setActivePage("signup")}
                                    className="text-blue-500 underline"
                                >
                                    Sign up
                                </button>
                            </p>
                        )}
                        <button
                            type="button"
                            onClick={() => setActivePage("forgot")}
                            className="inline e-link-secondary"
                        >
                            Forgotten your password?
                        </button>
                    </div>
                </div>

                <div className="">
                    <div className="h-screen flex right_side flex-col pb-20 pl-4 pr-4 sm:pb-0 pt-10 sm:pt-20 sm:pl-6 lg:pl-20 sm:pr-6 lg:pr-0 lg:pt-40  sm:block">
                        <div className="max-w-sm self-center sm:self-start flex flex-col">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
