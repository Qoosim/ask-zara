import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHeart,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export const CardComponent = ({ cardItem }) => {
  return (
    <>
      <div
        className={`flex items-center gap-[2rem] px-[1.3rem] py-[1rem] rounded-md ${
          cardItem.icon === faShieldHeart
            ? "bg-[#e54946]"
            : cardItem.icon === faCircleCheck
            ? "bg-[#d6e8ff]"
            : "bg-[#e7d7fe]"
        }`}
      >
        <div
          className={`w-[8rem] h-[4rem] 2xl:w-[6rem] rounded-lg flex items-center justify-center ${
            cardItem.color === "white" ? "bg-[#fff]" : "bg-[#f4c851]"
          }`}
        >
          <FontAwesomeIcon
            icon={cardItem.icon}
            className={`text-3xl ${
              cardItem.color === "white" ? "text-orange-300" : "text-red-500"
            }`}
          />
        </div>
        <div
          className={`flex flex-col text-[#000] ${
            cardItem.color === "white" ? "text-[#fff]" : "text-[#000]"
          }`}
        >
          <h2 className="font-semibold">{cardItem.title}</h2>
          <p className="text-[0.9rem]">{cardItem.text}</p>
        </div>
      </div>
    </>
  );
};
