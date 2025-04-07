import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ReviewCard = ({ cardInfo }) => {
  const totalStars = 5;

  return (
    <>
      <div className="bg-[#fefffe] p-[1.2rem] shadow-2xl">
        <img
          src={cardInfo.img}
          alt={cardInfo.title}
          className="w-[4rem] h-[4rem] rounded-full object-cover"
        />
        <h3 className="text-[#000] text-[1.1rem] font-lato-bold">
          {cardInfo.title}
        </h3>
        {Array.from({ length: totalStars }, (_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={cardInfo.star}
            className={`${
              index === totalStars - 1 &&
              (cardInfo.title === "Chidimma" || cardInfo.title === "Adetunji")
                ? "text-[#dedcd7]"
                : "text-[#f9c604]"
            }`}
          />
        ))}
        <p className="font-montserrat text-[#000] text-[0.8rem]">
          {cardInfo.msg}
        </p>
      </div>
    </>
  );
};
