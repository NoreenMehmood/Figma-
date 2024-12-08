import React from "react";
import { FaTruck, FaCheck } from "react-icons/fa";
import { IoFileTrayOutline } from "react-icons/io5";
import { BiSolidLeaf } from "react-icons/bi";

const AboutSection = () => {
  const features = [
    {
      icon: <FaTruck className="text-[#007580] mb-2" />,
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard.",
    },
    {
      icon: <FaCheck className="text-[#007580] mb-2" />,
      title: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftsmanship.",
    },
    {
      icon: <IoFileTrayOutline className="text-[#007580] mb-2" />,
      title: "Unbeatable prices",
      description: "For our materials and quality, you won’t find better prices anywhere.",
    },
    {
      icon: <BiSolidLeaf className="text-[#007580] mb-2" />,
      title: "Recycled packaging",
      description: "We use 100% recycled material to ensure our footprint is more manageable.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto mt-32 px-6">
      {/* Section Title */}
      <h2 className="text-[32px] font-semibold text-center mb-12">
        What Makes Our Brand Different
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#F9F9F9] p-6 text-center shadow-md rounded-lg"
          >
            <div className="flex items-center justify-center pt-5 text-[#007580] text-[32px]">
              {feature.icon}
            </div>
            <h3 className="text-[20px] font-semibold text-[#007580] mt-4">
              {feature.title}
            </h3>
            <p className="text-[16px] font-normal text-[#007580] mt-4">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;

