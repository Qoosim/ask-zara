import React from "react";
import { TipsCard } from "../home/_components/_component/TipsCard";
import { tipsData } from "../../constant/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const Resources = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#f6f5dd]">
        <div className="max-w-[90%] sm:max-w-[70%] mx-auto w-[85%] sm:w-[60%] lg:w-[43%] z-20 pt-32 pb-20">
          <h1 className="text-center text-[1.8rem] font-lato-bold text-[#ed6c5f] mb-[1.5rem]">
            Resources
          </h1>
          <h3 className="text-center text-[#000] font-lato-bold text-[1.4rem] sm:text-[2rem] mb-[1rem]">
            Explore Topics that Matter to You
          </h3>
          <p className="text-[#000] text-[0.9rem] font-montserrat">
            Our resources section is where you&apos;ll find articles, guides,
            and tips that resonate with students just like you. Here, we cover
            everything from coping with academic stress to building healthy
            habits and balancing life. Each piece is crafted to provide
            practical advice, empower you, and help you understand the mental
            health challenges you may be facing.
          </p>
        </div>
        <div>
          <div className="w-[93%] 2xl:w-[63%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2.5rem] mb-[3rem] w-full">
              {tipsData.map((info) => (
                <TipsCard key={info.id} cardInfo={info} />
              ))}
            </div>
            <button className="flex items-center gap-[0.3rem] bg-[#fff836] px-[1rem] py-[0.5rem]  cursor-pointer rounded-lg hover:text-green-300">
              <span className="text-[0.9rem] font-lato-regular">
                See More Articles
              </span>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
