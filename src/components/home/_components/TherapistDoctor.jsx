import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const TherapistDoctor = () => {
  return (
    <>
      <div className="w-[93%] 2xl:w-[63%] mx-auto grid grid-cols-1 md:grid-cols-2 py-[2rem]">
        {/* {First section} */}
        <div className="flex-1">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-[3%] h-[0.1rem] bg-[#000]"></div>
              <span className="text-[#e9ae0b] text-[1.05rem] lg:text-[1.2rem]">
                Therapist and Doctors
              </span>
            </div>
            <h2 className="text-[#000] text-[1.2rem] lg:text-[1.6rem] font-lato-bold w-[70%] lg:w-[60%]">
              Meet Trusted Professionals, Ready to Help
            </h2>
            <div className="flex items-center gap-[0.5rem] text-[1rem] lg:text-[1.2rem] font-lato-bold">
              <span className="text-[#e9ae0b]">Our Numbers</span>
              <span className="text-[#000]">Speaks For Themselves</span>
            </div>
          </div>
          <div className="flex items-center my-[2rem]">
            <div className="flex flex-col items-center justify-center gap-[0.9rem] size-[11rem] lg:size-[14rem] rounded-full bg-[#fff] p-[2rem] shadow shadow-gray-600">
              <h3 className="text-[#000] text-[1.3rem] font-lato-bold">24/7</h3>
              <p className="text-center text-[0.6rem] lg:text-[0.9rem] text-[#000] font-montserrat">
                Flexible Scheduling Book sessions at your convenience.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[0.9rem] size-[11rem] lg:size-[14rem] rounded-full bg-[#f4c851] p-[1rem] shadow shadow-gray-600 -ml-[1rem]">
              <h3 className="text-[#000] text-[1.3rem] font-lato-bold">4.9+</h3>
              <p className="text-center text-[0.65rem] lg:text-[0.9rem] text-[#000] font-montserrat">
                Average Rating Feedback that reflects quality support.
              </p>
            </div>
          </div>
          <div>
            <p className="w-[75%]  text-[0.9rem] text-[#000] font-montserrat mb-[1.5rem]">
              Ask Zara connects you with licensed therapists and doctors who
              understand the challenges you face. Browse our list of trusted
              professionals, and book appointments at your convenience to get
              the help you need when you need it.
            </p>
          </div>
          <button className="flex items-center gap-[0.3rem] bg-[#fff836] px-[1rem] py-[0.5rem]  cursor-pointer rounded-lg hover:text-green-300">
            <span className="text-[0.9rem] font-lato-regular">
              Find a Therapist
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        {/* {Second section} */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="w-[3%] h-[0.1rem] bg-[#000]"></div>
            <span className="text-[#e9ae0b] text-[1.1rem] lg:text-[1.2rem]">
              {" "}
              Support Group Community
            </span>
          </div>
          <h3 className="text-[#000] text-[1.2rem] lg:text-[1.6rem] font-lato-bold">
            Connect with Peers in a Safe Space
          </h3>
          <img
            src="/assets/support-group.jpg"
            alt="Support Group"
            className="w-[75%] my-[1rem]"
          />
          <p className="w-[75%] text-[0.9rem] text-[#000] font-montserrat mb-[1.5rem]">
            Our support group is a welcoming community where students can
            connect, share experiences, and support each other. Whether you need
            to vent, share advice, or find encouragement, our community is here
            to help you through it.
          </p>
          <button className="flex items-center gap-[0.3rem] bg-[#ed6c5f] px-[1rem] py-[0.5rem]  cursor-pointer rounded-lg hover:text-[#f4c950]">
            <span className="text-[0.9rem] text-[#fff] font-lato-regular">
              Join Our Support Group
            </span>
            <FontAwesomeIcon icon={faAngleRight} className="text-[#fff]" />
          </button>
        </div>
      </div>
    </>
  );
};
