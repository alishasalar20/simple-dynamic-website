import React from "react";
import Image from "next/image";

const Info = () => {
  return (
    <div className="bg-blue-100 w-full min-h-screen px-6 md:px-16 py-10">
      {/* Section: Why Save Water */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 font-serif text-blue-900">
          Why Save Water?
        </h2>
        <p className="text-blue-600 font-serif text-lg leading-relaxed">
          Water conservation is the practice of using water efficiently to
          reduce unnecessary water usage. With the increasing global water
          scarcity, it's essential to act responsibly and conserve water
          resources for future generations.
        </p>
      </div>

      {/* Section: Ways to Save Water */}
      <div className="mt-10 max-w-4xl mx-auto">
        <h3 className="text-3xl text-center font-semibold mb-6 font-serif text-blue-900">
          Ways to Save Water
        </h3>
        <ul className="list-disc ml-6 md:ml-12 text-blue-600 font-serif text-lg leading-relaxed">
          <li>Fix leaks and drips immediately.</li>
          <li>Shorten your shower time.</li>
          <li>Turn off the tap when brushing teeth or washing dishes.</li>
          <li>Water plants early in the morning or late in the evening.</li>
        </ul>
      </div>

      {/* Section: Global Impact */}
      <div className="mt-10 text-center max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 font-serif text-blue-900">
          Global Impact of Water Waste
        </h3>
        <p className="text-blue-600 font-serif text-lg leading-relaxed">
          Water waste affects agriculture, drinking water supply, and the
          overall economic stability of a nation. As water becomes scarcer,
          more areas will face droughts and crop failures, impacting local
          economies.
        </p>
      </div>

      {/* Section: Take Action */}
      <div className="mt-10 text-center max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 font-serif text-blue-900">
          Take Action
        </h3>
        <p className="text-blue-600 font-serif text-lg leading-relaxed">
          Join local programs and take responsibility in your daily life to
          ensure water conservation for future generations. Every small action
          can make a big difference in conserving this precious resource.
        </p>
      </div>

      {/* Image */}
      <div className="mt-10 flex justify-center">
       <Image src="/w2.png"
          alt="Water Conservation"
          width={600}
          height={600}
          className="w-full max-w-4xl rounded-lg shadow-lg"></Image>
      </div>
    </div>
  );
};

export default Info;