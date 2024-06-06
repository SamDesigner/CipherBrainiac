import React from "react";
import IntroVideo from "./IntroVideo";

const IntroSection = () => {
  return (
    <div className="max-w-[1440px] overflow-x-hidden mx-auto px-[16px] lg:px-[80px] flex flex-col md:flex-row gap-[40px] lg:gap-[130px] py-[40px] md:py-[80px] ">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="flex-1 h-auto flex "
      >
        <IntroVideo />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        className="flex-1 flex flex-col gap-[10px]"
      >
        <h1 className="text-red-700 font-[600] text-[25px] lg:text-[30px]">
          Bringing Out Your Best Version
        </h1>
        <p className="text-[17px] text-gray-500">
          At Cipher Brainiac, we go beyond just teaching skills; we empower
          individuals with the knowledge of how to leverage and monetize their
          skills effectively. Our focus is not just on education but also on
          equipping you with the tools to market yourself and succeed
          financially in the tech industry."
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
