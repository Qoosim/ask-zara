import React from "react";
import { moodInfo } from "../../../constant/data";
import { MoodCard } from "./_component/MoodCard";

export const MoodSelectComponent = () => {
  return (
    <>
      <section>
        <h2>Feel Seen, Heard, and Understood</h2>
        <p>
          Sometimes, expressing how you feel can make all the difference. Start
          a conversation that’s tuned into your emotions. Select your mood to
          get tailored support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[7rem] w-[80%] mx-auto pb-[5rem]">
          {moodInfo.map((cardInfo) => (
            <MoodCard key={cardInfo.id} cardInfo={cardInfo} />
          ))}
        </div>
      </section>
    </>
  );
};
