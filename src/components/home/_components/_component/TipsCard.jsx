import React from "react";

export const TipsCard = ({ cardInfo }) => {
  return (
    <>
      <div className="bg-[#fef4e6] flex flex-col h-full">
        <div>
          <img src={cardInfo.img} alt={cardInfo.title} />
        </div>
        <div className="p-[1.3rem] flex flex-col flex-grow gap-[1.1rem]">
          <div>
            <h2 className="text-[1rem] font-lato-bold text-[#313030] mb-[0.6rem]">
              {cardInfo.title}
            </h2>
            <p className="text-[0.9rem]">{cardInfo.content}</p>
          </div>
          <span className="mt-auto text-[#d95204] underline cursor-pointer hover:text-[#84d904]">
            Read More
          </span>
        </div>
      </div>
    </>
  );
};
