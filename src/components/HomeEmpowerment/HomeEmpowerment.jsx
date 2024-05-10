import React from "react";
import Line from '../../assets/svg/line.svg'
const HomeEmpowerment = () => {
  return (
    <div className="max-w-[1440px] bg-gray-100 mx-auto px-[16px] lg:px-[80px] py-[80px] md:py-[100px] flex flex-col gap-[40px] md:gap-[80px]">
      <div className="flex flex-col items-center">
        <h4 className="text-red-700">About the Programme</h4>
        <h1 className="text-[25px] md:text-[40px] md:w-[600px] text-center font-[600]">
          CIB Student Empowerment Programme
        </h1>
      </div>
      <div className="flex flex-col flex-col-reverse md:flex-row gap-[40px]">
        <div className="flex-1 flex flex-col gap-[15px]">
          <h3 className="text-red-600">Benefits</h3>

          <div className="flex flex-col gap-[20px] relative ">
          <div className="absolute">
            <img src={Line} className="w-[200px] h-[100%]" />
          </div>
            <div className="absolute right-4">
                <img src={Line} className="w-[200px] h-[100%]" />
            </div>
            <div className="bg-specialBrown z-20 p-2 rounded-tr-[30px] rounded-br-[30px] flex items-center gap-[10px]">
              <div className="bg-white h-[50px] w-[50px] rounded-full text-[20px] lg:text-[23px] font-bold flex items-center justify-center">
                0<span className="text-red-600">1</span>
              </div>
              <div className="text-[20px] lg:text-[25px] font-[500]">
                 Beginner friendly Courses
              </div>
            </div>
            <div className="bg-specialBrown z-20  p-2 rounded-tr-[30px] rounded-br-[30px] flex items-center gap-[10px]">
              <div className="bg-white h-[50px] w-[50px] rounded-full text-[20px] lg:text-[23px] font-bold flex items-center justify-center">
                0<span className="text-red-600">2</span>
              </div>
              <div className="text-[20px] lg:text-[25px] font-[500]">
                 Experienced Tutors
              </div>  
            </div>
            <div className="bg-specialBrown z-20  p-2 rounded-tr-[30px] rounded-br-[30px] flex items-center gap-[10px]">
              <div className="bg-white h-[50px] w-[50px] rounded-full text-[20px] lg:text-[23px] font-bold flex items-center justify-center">
                0<span className="text-red-600">3</span>
              </div>
              <div className="text-[20px] lg:text-[25px] font-[500]">
                 Quality Contents & Webinars
              </div>  
            </div>
            <div className="bg-specialBrown z-20   p-2 rounded-tr-[30px] rounded-br-[30px] flex items-center gap-[10px]">
              <div className="bg-white h-[50px] w-[50px] rounded-full text-[20px] lg:text-[23px] font-bold flex items-center justify-center">
                0<span className="text-red-600">4</span>
              </div>
              <div className="text-[20px] lg:text-[25px] font-[500]">
                Certification & Internship Opportunties
              </div>  
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-[15px]">
          <h3 className="text-red-600">Our Purpose</h3>
          <div className="flex flex-col gap-[20px]">
            <p className="text-gray-500 text-justify leading-[30px]">
              Here's the updated text with your addition: "The CIB Student
              Empowerment initiative by Cipher Brainiac is designed to guide
              university students towards acquiring technical and creative
              skills. Our program adopts a hands-on approach, prioritizing the
              individual growth of each student. By the program's end, every
              student emerges confident and equipped with the knowledge to
              create their own income. At the end of each program, you will be
              posted to various companies for internships. We ensure that your
              internship aligns with your skills, allowing you to apply and
              showcase your learning effectively."
            </p>
            <button className="special_bg w-fit px-[40px] cursor-pointer py-[10px] rounded-3xl">Courses</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEmpowerment;
