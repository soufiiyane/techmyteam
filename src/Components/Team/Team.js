import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';

const TeamMember = ({ name, title, imageSrc, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-sm shadow-md border border-gray-200">
    <img src={imageSrc} alt={name} className="w-40 h-40 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-bold mb-1">{name}</h3>
    <p className="text-gray-600 text-sm mb-3">{title}</p>
    <p className="text-justify text-sm mb-4">{description}</p>
    <div className="flex text-left">
      <Linkedin className="w-5 h-5 text-gray-500 hover:text-blue-700 cursor-pointer" />
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Miceli José",
      title: "CEO",
      imageSrc: "images/team/jose.jpg",
      description: "José Miceli, PDG de TechMyTeam depuis 2014, apporte plus de 25 ans d'expérience en tant que propriétaire de L'AGENT X. Expert chevronné en marketing, communication et médias sociaux."
    },
    {
      name: "Courtney Henry",
      title: "Designer",
      imageSrc: "images/team/michael.jpg",
      description: "Creative problem-solver with an eye for detail and a love for user-centered design."
    },
    {
      name: "Tom Cook",
      title: "Director of Product",
      imageSrc: "images/team/marouane.jpeg",
      description: "Experienced in guiding product strategy and aligning team efforts with business goals."
    }
  ];

  return (
    <div className="w-full mx-auto p-4  max-w-c-1390">
      <h2 className="text-sm uppercase mb-4">Rencontrez notre équipe de</h2>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12">
        <span
          className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">Direction</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
