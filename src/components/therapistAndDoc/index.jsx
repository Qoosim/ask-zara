import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const TherapistAndDoctor = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#f6f5dd]">
        <div className="max-w-[90%] sm:max-w-[70%] mx-auto w-[85%] sm:w-[60%] lg:w-[70%] 2xl:w-[44%] z-20 pt-32 pb-20">
          <h1 className="text-center text-[1.8rem] font-lato-bold text-[#ed6c5f] mb-[1.5rem]">
            Therapist and Doctor
          </h1>
          <h3 className="text-center text-[#000] font-lato-bold text-[1.5rem] mb-[1rem]">
            Get Professional Support, When You Need It Most
          </h3>
          <p className="text-[#000] text-[0.9rem] font-montserrat">
            Navigating university life can be challenging, and having access to
            qualified mental health professionals is crucial for your
            well-being. Our Therapist and Doctor section provides you with
            access to qualified mental health professionals, including
            counselors, therapists, and doctors, who specialize in student
            mental health.
          </p>
          <img
            src="/assets/therapistanddoctor.jpg"
            alt="Appointment Image"
            className="w-[75%] mx-auto object-cover my-[3rem]"
          />
          <p>
            Whether you’re facing stress, anxiety, or any other challenges,
            these professionals are here to provide the support you need. Ready
            to take the next step, simply click Book an Appointment and you'll
            be directed to a qualified therapist or doctor. This easy access to
            professional support ensures you can receive the timely help you
            need, no matter where you are.
          </p>
          <button className="flex items-center gap-[0.3rem] bg-[#fff836] px-[1rem] py-[0.5rem]  cursor-pointer rounded-lg hover:text-green-300 mt-[2rem]">
            <span className="text-[0.9rem] font-lato-regular">
              Book an Appointment
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <div className="w-[93%] 2xl:w-[63%] mx-auto"></div>
      </div>
    </>
  );
};
