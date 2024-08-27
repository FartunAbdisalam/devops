import React from "react";
import bgvideo from "../assets/bgvideo.mp4";
import meetingPhoto from "../assets/meeting.gif";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide py-4">
        Kismayo DevOps
        <span className="bg-gradient-to-r from-teal-500 to-emerald-800 text-transparent bg-clip-text">
          {" "}
          Tech Firm
        </span>
      </h1>
      <p className="mt-8 text-lg text-center text-neutral-500 max-w-4xl">
        We specialize in streamlining and optimizing the software development
        and IT operations processes for businesses, We offer expert guidance.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-teal-500 to-emerald-900 py-3 px-4 mx-3 rounded-md w-40 text-center"
        >
          Hire Us Now
        </a>
        <a
          href="#"
          className="border py-3 px-4 mx-3 rounded-md w-40 text-center"
        >
          Profolio
        </a>
      </div>
      <div className="flex justify-center mt-7">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg  w-2/3 border border-teal-700 shadow-teal-400 mx-2 my-4"
        >
          <source src={bgvideo} type="video/mp4" />
        </video>
        {/* pictute goes here */}
      </div>
    </div>
  );
};

export default HeroSection;
