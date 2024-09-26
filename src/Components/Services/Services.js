import React, { useState } from 'react';

const ServiceItem = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="text-3xl font-light mb-4 transition-colors duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`inline-block transition-colors duration-300 ease-in-out ${isHovered ? 'text-pink-500' : 'text-gray-800'}`}>
        {isHovered && <span className="mr-2">&gt;</span>}
        {text}
      </span>
    </div>
  );
};

const Services = () => {
  const services = [
    "e-Commerce",
    "Experience platforms",
    "Technology & Transformation",
    "Digital Marketing & Design"
  ];

  return (
    <div className="bg-gray-100 max-w-screen-xl mx-auto p-4">
      <h2 className="text-sm uppercase mb-4">our</h2>
      <h1 className="text-6xl font-black mb-12">SERVICES</h1>
      <div className="space-y-4">
        {services.map((service, index) => (
          <ServiceItem key={index} text={service} />
        ))}
      </div>
      <div className="my-10"></div>
    </div>
  );
};

export default Services;
