import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="max-w-md w-full space-y-8">
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-bold text-gray-100">Welcom Back!</h2>
        <p className="mt-2 text-sm text-gray-400">Please Confirm your OTP</p>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <span className="h-px w-16 bg-gray-300"></span>
        <span className="text-gray-400 font-normal">or continue with</span>
        <span className="h-px w-16 bg-gray-300"></span>
      </div>
      <form action="">
        <div className="mt-8 space-y-6">
          <div className="relative">
            <label className="ml-3 text-sm font-bold text-gray-200 tracking-wide">
              Enter Your OTP{" "}
            </label>
            <input
              className="w-full placeholder:text-zinc-600 text-gray-900 text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
              type="text"
              placeholder="OTP Confirmation"
              name="identifier"
              required
              minLength={4}
              maxLength={4}
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-80 flex justify-center bg-black/70 active:scale-95 font-bold text-xl text-white shadow-xl p-3  rounded-full tracking-wide    cursor-pointer transition ease-in duration-500"
            >
              Sign in
            </button>
          </div>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
            <span>Don't have an account?</span>
            <Link
              to="/auth/signup"
              className="text-indigo-100 h-30 font-semibold hover:text-blue-500 no-underline hover:underline hover:scale-105 cursor-pointer transition ease-in duration-300"
            >
              Move Back
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
