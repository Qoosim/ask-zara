import React from "react";
import { AboutUsValuesCard } from "../home/_components/_component/AboutUsValuesCard";
import { aboutUsCardInfo } from "../../constant/data";

export const About = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#f6f5dd]">
        <div className="max-w-[90%] sm:max-w-[70%] mx-auto w-[85%] sm:w-[60%] lg:w-[43%] z-20 pt-32 pb-20">
          <h1 className="text-center text-[1.8rem] font-lato-bold text-[#ed6c5f] mb-[1.5rem]">
            About Us
          </h1>
          <h3 className="text-center text-[#000] font-lato-bold text-[1.4rem] sm:text-[2rem] mb-[1rem]">
            Welcome to Ask Zara
          </h3>
          <p className="text-[#000] text-[0.9rem] font-montserrat">
            At Ask Zara, we&apos;re dedicated to creating a supportive space
            where you can find the resources, guidance, and community you need
            to manage mental health and emotional challenges. Life as a student
            can be overwhelming, and finding support should be simple,
            accessible, and private. Here, you&apos;re free to be yourself and
            take steps towards feeling better, all in an environment built just
            for you.
          </p>
          <div className="mb-[1.5rem] flex flex-col gap-[0.5rem] mt-[1.5rem]">
            <span className="text-[#000] font-lato-bold text-[1.2rem]">
              Our Mission
            </span>
            <p className="text-[#000] text-[0.9rem] font-montserrat">
              Ask Zara was created with one goal in mind: to help students
              thrive both academically and emotionally. We understand the
              challenges you face—the pressure to perform, the balance of
              studies and personal life, and the ups and downs of mental health.
              Our platform connects you with trusted resources, qualified
              professionals, and a community of peers, making it easier for you
              to seek help, find encouragement, and build resilience.
            </p>
          </div>
          <div className="mb-[1.5rem] flex flex-col gap-[0.5rem]">
            <span className="text-[#000] font-lato-bold text-[1.2rem]">
              Why We Care
            </span>
            <p>
              Mental health struggles can feel isolating, but they don&apos;t
              have to be. At Ask Zara, we&apos;re committed to reducing the
              stigma around mental health by creating a welcoming, judgment-free
              space. Whether you&apos;re reaching out to a counselor or
              connecting with fellow students, we&apos;re here to empower you to
              take control of your well-being.
            </p>
          </div>
          <div className="mb-[1.5rem] flex flex-col gap-[0.5rem]">
            <span className="text-[#000] font-lato-bold text-[1.2rem]">
              Our Values
            </span>
            <p>
              Compassion, privacy, and accessibility are at the heart of
              everything we do. We believe every student deserves a space where
              they feel safe, respected, and supported, no matter where they&apos;re
              at in their journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[2rem] gap-y-[2.5rem]">
            {aboutUsCardInfo.map((cardInfo) => (
              <AboutUsValuesCard key={cardInfo.id} cardInfo={cardInfo} />
            ))}
          </div>
          <p className="text-[#000] font-lato-bold text-[1.2rem] text-center mt-[1.5rem]">
            Ask Zara is more than just a platform; it&apos;s a community-driven space
            where students can connect, share experiences, and find help from
            peers and professionals alike.
          </p>
        </div>
      </div>
    </>
  );
};
