import React from "react";
import { MentalHealthSupport } from "./_components/MentalHealthSupport";
import { SupportMentalHealth } from "./_components/SupportMentalHealth";
import { MoodSelectComponent } from "./_components/MoodSelectComponent";
import { TipsComponent } from "./_components/TipsComponent";
import { TherapistDoctor } from "./_components/TherapistDoctor";
import { ReviewComponent } from "./_components/ReviewComponent";
import { BeginsHereComponent } from "./_components/BeginsHereComponent";

export const Home = () => {
  return (
    <div className="min-h-screen pt-[5rem]">
      <MentalHealthSupport />
      <SupportMentalHealth />
      <MoodSelectComponent />
      <TipsComponent />
      <TherapistDoctor />
      <ReviewComponent />
      <BeginsHereComponent />
    </div>
  );
};
