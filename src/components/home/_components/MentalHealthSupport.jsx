import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const MentalHealthSupport = () => {
  return (
    <>
      <div className="w-[85%] 2xl:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[6rem] items-center justify-between pt-[3rem] pb-[4rem]">
        <div>
          <div className="">
            <div className="flex items-center gap-2 bg-[#fff] w-fit px-[1.5rem] py-[0.3rem] rounded-[1.2rem] mb-[0.5rem]">
              <FontAwesomeIcon
                icon={faHeartCircleCheck}
                className="text-pink-400 text-2xl"
              />
              <span className="text-[#49a67b] font-semibold">
                Get the support you need
              </span>
            </div>
            <h1 className="text-[#000] font-lato-bold text-[1.5rem] mb-[1rem]">
              Your Safe Space for Mental Health Support
            </h1>
            <p className="text-[#000] font-montserrat text-[0.9rem]">
              Ask Zara is here to support your well-being, offering a
              judgment-free, anonymous space where you can connect, learn, and
              find the help you need. Take a step towards feeling better, with
              resources and a community that understands.
            </p>
          </div>
          <div className="flex items-center gap-[2rem] mt-[1rem]">
            <button className="flex items-center gap-[0.3rem] bg-[#fff836] px-[1rem] py-[0.5rem]  cursor-pointer rounded-lg hover:text-green-300">
              <span className="text-[0.9rem] font-lato-regular">
                Ask Zara Now
              </span>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <button className="flex items-center gap-[0.5rem] bg-[#ff6f61] px-[1rem] py-[0.5rem]  cursor-pointer rounded-lg">
              <span className="text-[0.9rem] font-lato-regular text-[#fff]">
                Learn More
              </span>
              <FontAwesomeIcon icon={faAngleRight} className="text-[#fff]" />
            </button>
          </div>
        </div>
        <div className="w-[28rem] h-full justify-self-end rounded-xl border-2 border-blue-400">
          <img
            src="/assets/image1.jpg"
            alt="Image"
            className="w-auto h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
};
