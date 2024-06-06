import React from "react";
import Showcase from "../../assets/images/showcaseImage.png";
const HomeShowcase = () => {
  return (
    <section className="max-w-[1440px] overflow-x mx-auto flex flex-col-reverse gap-[20px] md:flex-row md:h-[60vh] lg:h-[90vh] px-[16px] lg:px-[80px]">
      <div data-aos="fade-up"  className="flex-1 h-full flex items-center ">
        <div className="flex flex-col gap-[10px] md:gap-[20px]">
          <h3 className="text-[12px] ">Welcome to</h3>
          <h1 className="text-[25px] lg:text-[40px] font-[700]">
            C<span className="text-red-700">I</span>B Student Internship
            Programme
          </h1>
          <p className="text-[16px] text-gray-600 leading-[30px]">
            Cipher Brainiac's (CIB) student development initiative,stands out as
            a beacon of excellence in technological skill enhancement for university students. Get started to kickstart your Tech journey.
            {/* university students. With a track record of transforming the
            capabilities of close to a thousand students, our services and
            courses have garnered unparalleled trust and commendation from both
            universities and participants alike. */}
          </p>
          <button className="special_bg py-3 px-6 rounded-3xl w-fit text-sm cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
      <div data-aos="zoom-in" className="flex-1 h-full">
        <img className="h-full w-full lg:object-cover" src={Showcase} />
      </div>
    </section>
  );
};

export default HomeShowcase;
