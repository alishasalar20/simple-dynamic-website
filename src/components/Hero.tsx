import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full h-screen bg-blue-200">
      {/* Left Section */}
      <div className="flex flex-1 flex-col justify-center items-start px-8 md:px-16">
        <h1 className="text-white font-serif font-semibold text-4xl md:text-6xl leading-snug">
          Save Water <br /> for <br /> Our <br /> Future Generations
        </h1>
      </div>
      
      {/* Right Section */}
      <div className="flex flex-1 justify-center items-center p-8 md:p-0">
        <Image
          src="/w.jpg"
          alt="Save Water"
          width={600}
          height={600}
          className="object-contain w-full max-w-sm md:max-w-lg"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;

