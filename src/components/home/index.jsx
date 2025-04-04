import React from "react";
import { MentalHealthSupport } from "./_components/MentalHealthSupport";
import { SupportMentalHealth } from "./_components/SupportMentalHealth";
import { MoodSelectComponent } from "./_components/MoodSelectComponent";

export const Home = () => {
  return (
    <div className="min-h-screen pt-[5rem]">
      <MentalHealthSupport />
      <SupportMentalHealth />
      <MoodSelectComponent />
    </div>
  );
};
