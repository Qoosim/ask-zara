import React from "react";

export const BeginsHereComponent = () => {
  return (
    <>
      <div className="relative w-full h-[32rem]">
        <div className="absolute inset-0 bg-[#f7b4b2cc] opacity-85 z-0"></div>
        <img
          src="/assets/loginimage.jpg"
          alt="Login Image"
          className="w-full h-full object-cover"
        />
        <h2>Your Journey Begins Here</h2>
        <p>
          Create an account or log in to get personalized support, save your
          favorite resources, and keep track of your progress. At Ask Zara,
          we’re ready to be your partner in well-being.
        </p>
        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
};
