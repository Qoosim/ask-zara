import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutUsValuesCard = ({ cardInfo }) => {
  return (
    <>
      <div
        className={`px-[1rem] py-[1.5rem] flex flex-col gap-[1rem] ${
          cardInfo.title === "Empathy"
            ? "bg-[#fbe5e0]"
            : cardInfo.title === "Accessibility"
            ? "bg-[#e3f9e0]"
            : cardInfo.title === "Trustworthiness"
            ? "bg-[#e8eaf6]"
            : "bg-[#fff8d4]"
        }`}
      >
        <div
          className={`w-[3rem] h-[3rem] rounded-full flex justify-center items-center ${
            cardInfo.title === "Empathy"
              ? "bg-[#f2cdc5]"
              : cardInfo.title === "Accessibility"
              ? "bg-[#b5ddb1]"
              : cardInfo.title === "Trustworthiness"
              ? "bg-[#b8c3e5]"
              : "bg-[#f6e9a2]"
          }`}
        >
          <FontAwesomeIcon icon={cardInfo.img} className="text-[#fff]" />
        </div>
        <span className="text-[#000] font-lato-bold text-[1.1rem]">
          {cardInfo.title}
        </span>
        <p className="text-[#000] font-montserrat text-[0.9rem]">{cardInfo.content}</p>
      </div>
    </>
  );
};
