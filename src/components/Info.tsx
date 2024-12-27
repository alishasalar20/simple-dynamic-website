import React from 'react';
import Image from 'next/image';

const Info = () => {
  return (
    <div className="bg-blue-200 min-h-screen w-full flex flex-col items-center px-6 md:px-16 py-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold font-serif text-blue-900 text-center mb-8">
        Information
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
        {/* Text Content */}
        <div className="flex-1 text-blue-600 font-serif text-lg md:text-xl leading-relaxed">
          <p>
            <strong>Water Waste and Its Global Impact:</strong> Water wastage is a growing issue that affects agriculture, the economy, and global ecosystems. According to the United Nations, approximately 70% of the world’s freshwater is used for agriculture, and a substantial portion of this is wasted due to poor irrigation practices and inefficient water management.
          </p>
          <p className="mt-4">
          It&apos;s estimated that in some areas, 40-50% of irrigation water never reaches the crops. This has a significant impact on crop yield and food production.
          </p>
          <p className="mt-4">
            As a result, regions that rely on agriculture for their livelihoods are seeing droughts, crop failures, and loss of productivity. For example, the California drought of 2015 resulted in a $2.7 billion loss in crops. The problem is also exacerbated by the over-extraction of groundwater, which has led to sinking water tables in some areas, making water more difficult to access for farming.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0 md:ml-8">
          <Image
            src="/waste.png"
            alt="Water Waste"
            width={350}
            height={350}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
