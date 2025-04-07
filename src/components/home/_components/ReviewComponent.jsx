import React from "react";

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
        <div></div>
      </div>
    </>
  );
};
