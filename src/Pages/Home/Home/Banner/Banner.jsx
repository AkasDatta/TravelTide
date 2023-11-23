import React from 'react';
import banner from '../../../../assets/banner2.jpg';

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center zoom-animation"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-70"></div>
      <div className="text-gray-300 text-4xl font-bold z-10">
        Your Centered Text Here
      </div>
    </div>
  );
};

export default Banner;
