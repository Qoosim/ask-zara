import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const SupportGroup = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#f6f5dd]">
        <div className="max-w-[90%] sm:max-w-[70%] mx-auto w-[85%] sm:w-[60%] lg:w-[70%] 2xl:w-[44%] z-20 pt-32 pb-20">
          <h1 className="text-center text-[1.6rem] sm:text-[1.8rem] font-lato-bold text-[#ed6c5f] mb-[1.5rem]">
            Support Group
          </h1>
          <h3 className="text-center text-[#000] font-lato-bold text-[1.3rem] sm:text-[1.5rem] mb-[1rem]">
            Join a Community that Understands
          </h3>
          <p className="text-[#000] text-[0.9rem] font-montserrat">
            Sometimes, the best support comes from people who know exactly what
            you&apos;re going through. Our WhatsApp Support Group connects you
            with fellow students who understand the unique pressures of student
            life. Here, you can share experiences, ask questions, offer advice,
            or just vent in a safe, non-judgmental space.
          </p>
          <img
            src="/assets/supportgroup.jpg"
            alt="Support Group Image"
            className="w-[75%] mx-auto object-cover my-[3rem]"
          />
          <h3 className="text-[#000] font-lato-bold text-[1.2rem] mb-[1rem]">
            Why Join?
          </h3>
          <p className="text-[#000] font-montserrat text-[0.9rem]">
            Being part of a community can make a big difference, especially when
            you&apos;re going through tough times. Whether you&apos;re looking
            to make friends, find encouragement, or just listen to others&apos;
            stories, our support group is a place where you belong.
          </p>
          <button className="flex items-center gap-[0.3rem] bg-[#ed6c5f] px-[1rem] py-[0.5rem]  cursor-pointer rounded-lg hover:text-green-300 mt-[2rem]">
            <span className="text-[0.9rem] font-lato-regular text-[#fff]">
              Join Our Support Group
            </span>
            <FontAwesomeIcon icon={faAngleRight} className="text-[#fff]" />
          </button>
        </div>
        <div className="w-[93%] 2xl:w-[63%] mx-auto"></div>
      </div>
    </>
  );
};
