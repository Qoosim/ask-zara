import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { CardComponent } from "./_component/CardComponent";
import { cardComponentInfo } from "../../../constant/data";

export const SupportMentalHealth = () => {
  return (
    <>
      <div className="bg-[#fcd8cd]">
        <div className="w-[85%] 2xl:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[6rem] items-center pt-[3rem] pb-[1.5rem]">
          <div>
            <h1 className="text-[1.6rem] md:text-[2rem] font-lato-bold">
              Supporting Student Mental Health
            </h1>
            <p className="text-[#000] text-[0.9rem] font-normal">
              We believe in the power of connection, support, and access to
              reliable resources. Ask Zara is a safe space where you can find
              guidance, build resilience, and connect with those who understand.
            </p>
            <div className="flex flex-col gap-[3rem] my-[1.5rem]">
              {cardComponentInfo.map((item) => (
                <CardComponent key={item.id} cardItem={item} />
              ))}
            </div>
            <button className="flex items-center gap-[0.3rem] bg-[#fff836] px-[1rem] py-[0.5rem]  cursor-pointer rounded-lg hover:text-green-300">
              <span className="text-[0.9rem] font-lato-regular">
                Learn More About Us
              </span>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
          <div className="w-[28rem] h-fit justify-self-end rounded-xl border-2 border-blue-400">
            <img
              src="/assets/image2.jpg"
              alt="Image"
              className="w-auto h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};
