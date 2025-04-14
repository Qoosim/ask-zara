import React from "react";
import { moodInfo } from "../../constant/data";
import { MoodCard } from "../home/_components/_component/MoodCard";

export const Chat = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#f6f5dd]">
        <div className="max-w-full">
          <div className="max-w-[90%] sm:max-w-[70%] mx-auto w-[85%] sm:w-[60%] lg:w-[60%] z-20 pt-32 pb-20">
            <h1 className="text-center text-[1.8rem] font-lato-bold text-[#ed6c5f] mb-[1.5rem]">
              Live Chat
            </h1>
            <h3 className="text-center text-[#000] font-lato-bold text-[2rem] mb-[1rem]">
              Express How You’re Feeling, Find the Right Support
            </h3>
            <p className="text-[#000] text-[0.9rem] font-montserrat">
              Ask Zara’s Live Chat is designed to meet you exactly where you
              are. We understand that emotions can be complex, so we’ve made it
              easy to select a mood that best represents how you’re feeling.
              Whether you’re sad, anxious, happy, or just okay, choosing your
              mood helps our counselors provide conversations and support
              tailored to your current state of mind.
            </p>
            <div className="mb-[1.5rem] flex flex-col gap-[0.5rem] mt-[1.5rem]">
              <span className="text-[#000] font-lato-bold text-[1.2rem]">
                How It Works
              </span>
              <p className="text-[#000] text-[0.9rem] font-montserrat">
                Select a mood that matches how you’re feeling right now. This
                choice helps shape the conversation, allowing our counselors to
                offer responses and advice specific to your emotional state.
                Whether it’s listening, providing tips, or just being there for
                you, we’re here to improve your mood and offer meaningful
                guidance.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2.5rem] pb-[5rem] max-w-full sm:max-w-full mx-auto w-[85%] sm:w-[60%] lg:w-[90%] 2xl:w-[70%]">
            {moodInfo.map((cardInfo) => (
              <MoodCard key={cardInfo.id} cardInfo={cardInfo} />
            ))}
          </div>
          <div className="max-w-[90%] sm:max-w-[70%] mx-auto w-[85%] sm:w-[60%] lg:w-[60%]">
            <p className="text-[#000] font-montserrat text-[0.9rem] text-center pb-[2rem]">
              Select your mood and connect with the right support. Whether
              you're feeling anxious, sad, or just okay, we're here to listen
              and help you find balance. Your well-being matters, and we're here
              to guide you every step of the way. Choose your mood, find your
              balance
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
