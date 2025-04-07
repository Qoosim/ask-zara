import React from "react";
import { ReviewCard } from "./_component/ReviewCard";
import { reviewData } from "../../../constant/data";

export const ReviewComponent = () => {
  return (
    <>
      <div className="bg-[#fbd9cd]">
        <div className="w-[48%] 2xl:w-[35%] mx-auto text-center py-[1.7rem]">
          <div className="flex items-center justify-center gap-2">
            <div className="w-[3%] h-[0.1rem] bg-[#000]"></div>
            <span className="text-[#ed6d5e] text-[1.2rem]">
              Honest Feedback
            </span>
          </div>
          <h2 className="text-[#000] text-[1.6rem] font-lato-bold">
            What People Are Saying
          </h2>
          <p className="text-[0.9rem] text-[#000] font-montserrat">
            At Ask Zara, we believe that every voice matters. Discover how
            students like you are finding support and community with Ask Zara.
          </p>
        </div>
        <div className="w-[93%] 2xl:w-[63%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mb-[3rem] w-full">
            {reviewData.map((info) => (
              <ReviewCard key={info.id} cardInfo={info} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
