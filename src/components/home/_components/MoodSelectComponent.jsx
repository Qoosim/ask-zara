import React from "react";
import { moodInfo } from "../../../constant/data";
import { MoodCard } from "./_component/MoodCard";

export const MoodSelectComponent = () => {
  return (
    <>
      <section>
        <div className="w-[51%] mx-auto text-center py-[1.7rem]">
          <h2 className="text-[1.8rem] font-lato-bold text-[#000]">Feel Seen, Heard, and Understood</h2>
          <p className="font-montserrat text-[0.9rem]">
            Sometimes, expressing how you feel can make all the difference.
            Start a conversation that’s tuned into your emotions. Select your
            mood to get tailored support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2.5rem] 2xl:gap-[7rem] w-[90%] 2xl:w-[80%] mx-auto pb-[5rem]">
          {moodInfo.map((cardInfo) => (
            <MoodCard key={cardInfo.id} cardInfo={cardInfo} />
          ))}
        </div>
      </section>
    </>
  );
};
