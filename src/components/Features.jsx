import React from "react";
import features from "../constants";

const Features = () => {
  return (
    <div
      className="relative border-b border-neutral-800 min-h-[800px] mt-20"
      id="features"
    >
      <div className="text-center">
        <span className="bg-neutral-900 text-teal-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase ">
          features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          <span className="bg-gradient-to-r from-teal-500 to-emerald-800 text-transparent bg-clip-text">
            Costum Engineer{" "}
          </span>
          Your Product
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 justify-center items-center rounded-full text-teal-700">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-3 text-xl">{feature.text}</h5>
                <p className="text-md mb-20 p-2 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
