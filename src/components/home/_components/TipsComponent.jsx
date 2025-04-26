import React from "react";
import { TipsCard } from "./_component/TipsCard";
import { tipsData } from "../../../constant/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const TipsComponent = () => {
  return (
    <>
      <section className="bg-[#fcd8cd] pb-[3rem]">
        <div className="w-[90%] md:w-[48%] 2xl:w-[35%] mx-auto text-center py-[1.7rem]">
          <h2 className="text-[1.8rem] font-lato-bold text-[#000]">
            Explore Helpful Reads & Tips
          </h2>
          <p className="font-montserrat text-[0.9rem] text-[#000]">
            Our Resources section is packed with articles, tips, and guides
            written with you in mind. Discover practical insights that can help
            you manage everyday challenges and boost your mental well-being.
          </p>
        </div>
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
      </section>
    </>
  );
};
