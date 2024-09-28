import React from 'react';

const projects = [
  { id: 1, name: 'Montfort', image: 'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi.png', category: 'Food & Beverage', size: 'medium' },
  { id: 1, name: 'Montfort', image: 'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/privatesportshop.png', category: 'Food & Beverage', size: 'large' },
  { id: 1, name: 'Montfort', image: 'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/franceabonnements.png', category: 'Food & Beverage', size: 'small' },
  { id: 1, name: 'Montfort', image: 'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/idkids.png', category: 'Food & Beverage', size: 'small' },
  { id: 1, name: 'Montfort', image: 'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/myfans.png', category: 'Food & Beverage', size: 'large' },
  { id: 1, name: 'Montfort', image: 'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/tourista.png', category: 'Food & Beverage', size: 'medium' },
];

const ProjectCard = ({ project }) => {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-2 row-span-1',
    large: 'col-span-2 row-span-2',
  };

  return (
    <div className={`relative overflow-hidden group ${sizeClasses[project.size]}`}>
      <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-white p-4">
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="mt-2">{project.category}</p>
        </div>
      </div>
    </div>
  );
};

const DrupalRealisations = () => {
  return (
    <section className="w-full mx-auto px-4 max-w-c-1390 mt-40 my-10">
      <div className="w-full mx-auto px-4 max-w-c-1390 mt-40 my-10 flex">
        <div className="flex-1 pr-8">
          <h2 className="text-sm uppercase mb-4">Un Aperçu de Nos</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12">
      <span
        className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
        Drupal Réalisations
      </span>
          </h1>
          <p className="text-gray-600 mb-4 w-full">
            Notre équipe Drupal est composée de membres qui détiennent
            <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
        certifications professionnelles en Drupal.
      </span>
          </p>
          <p>
            Choisir notre équipe pour vos projets et missions Drupal est la meilleure décision pour garantir des
            résultats
            de qualité.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">

          <div className="flex space-x-4">
            {/* Certification Section*/}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}/>
        ))}
      </div>
    </section>
  );
};

export default DrupalRealisations;
