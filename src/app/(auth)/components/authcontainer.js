"use client";
import React, { useState } from "react";
import LoginForm from "./loginform";
import SignupForm from "./signupform";
import ForgotPassword from "./forgotpassword";
import { useAuth } from "@/app/utils/auth";

export default function AuthContainer() {
  const [activePage, setActivePage] = useState("login");
  const { login } = useAuth();

  const handleLogin = async (data) => {
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
    // Perform signup logic here
  };

  const handleResetPassword = (data) => {
    // Perform password reset logic here
  };

  return (
    <>
      <div className="grid grid-rows-1 h-screen">
        <div className="grid md:grid-cols-1 bg-black  right_side  md:px-0  px-10">
          <div className="flex flex-col items-center h-screen">
            <div className=" w-full max-w-sm self-center  text-center flex flex-col">
              {activePage === "login" && (
                <LoginForm
                  onLogin={handleLogin}
                  onSwitchPage={setActivePage}
                  onForgotPassword={() => setActivePage("forgot")}
                />
              )}
              {activePage === "signup" && (
                <SignupForm
                  onSignup={handleSignup}
                  onSwitchPage={setActivePage}
                />
              )}
              {activePage === "forgot" && (
                <ForgotPassword
                  onResetPassword={handleResetPassword}
                  onSwitchPage={setActivePage}
                />
              )}
            </div>
            {/* Additional Options */}
            <div className="my-4 text-center">
              {activePage !== "login" && (
                <p className="text-white font-medium">
                  Already have an account?{" "}
                  <button
                    onClick={() => setActivePage("login")}
                    className="text-white  font-medium underline"
                  >
                    Login
                  </button>
                </p>
              )}
              {activePage !== "signup" && (
                <p className="text-white font-medium">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setActivePage("signup")}
                    className="text-white underline font-medium "
                  >
                    Sign up
                  </button>
                </p>
              )}
              <button
                type="button"
                onClick={() => setActivePage("forgot")}
                className="inline e-link-secondary text-white font-medium"
              >
                Forgotten your password?
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


