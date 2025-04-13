import React from "react";
import { Link } from "react-router-dom";

export const BeginsHereComponent = () => {
  return (
    <>
      <div className="relative w-full h-[27rem]">
        <div className="absolute inset-0 bg-[#f7b4b2cc] opacity-85 z-0"></div>
        <img
          src="/assets/loginimage.jpg"
          alt="Login Image"
          className="w-full h-full object-cover"
        />

        <div className="flex flex-col items-center gap-[2rem] w-[37%] 2xl:w-[27%] mx-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-[#000] text-[1.5rem] font-lato-bold">
            Your Journey Begins Here
          </h2>
          <p className="text-center text-[0.9rem] font-montserrat text-[#000] font-normal">
            Create an account or log in to get personalized support, save your
            favorite resources, and keep track of your progress. At Ask Zara,
            we’re ready to be your partner in well-being.
          </p>
          <ul className="flex items-center gap-[2rem]">
            <Link to={`/login`}>
              <li className="bg-[#fff] text-[#000] w-[9rem] py-[0.5rem] rounded-[2rem] outline-2 outline-[#ff6e60] shadow-2xl cursor-pointer text-center">
                Login
              </li>
            </Link>
            <Link to={`/signup`}>
              <li className="bg-[#ff6e60] text-[#fff] w-[9rem] py-[0.5rem] rounded-[2rem] shadow-2xl cursor-pointer text-center">
                Sign Up
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
