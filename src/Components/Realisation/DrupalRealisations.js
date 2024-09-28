import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const projects = [
  {
    id: 1,
    name: 'DESTINATION COCKTAILS',
    images: [
      'images/realisations/drupal/cocktails/cocktail-1.png',
      'images/realisations/drupal/cocktails/cocktail-2.png',
      'images/realisations/drupal/cocktails/cocktail-3.png'
    ],
    category: 'Food & Beverage',
    size: 'large',
    client: 'DESTINATION COCKTAILS',
    techno: 'Drupal, Acquia Lift, IOS, Android, Elastic',
    objectifs: [
      'Digitaliser la marque et construire une stratégie dacquisition.',
      'Déployer le positionnement accompagnateur de la marque.',
      'Faire naviguer les consommateurs dans la gamme.',
      'Optimiser lexpérience utilisateur sur tous les canaux digitaux.',
      'Augmenter la visibilité en ligne et le trafic vers le site web.',
      'Améliorer la conversion et la fidélisation des clients.'
    ],
    reponses: [
      'Construction de la plateforme digitale.',
      'Développement dun plan dacquisition multi-leviers : web native, mobile et social.',
      'Création du plan dactivation CRM.',
      'Innovation Drive to Store.',
      'Mise en place dune stratégie de contenu engageante.',
      'Optimisation SEO pour améliorer le classement dans les moteurs de recherche.',
      'Intégration de fonctionnalités de commerce électronique.',
      'Développement dune application mobile complémentaire.'
    ],
    resultats: [
      'Augmentation de 150% du trafic organique en 6 mois',
      'Amélioration du taux de conversion de 3% à 5.5%',
      'Croissance de 200% des ventes en ligne sur 12 mois',
      'Réduction de 25% du taux de rebond',
      'Augmentation de 40% du panier moyen'
    ],
    temoignage: {
      text: "L'équipe a fait un travail exceptionnel pour transformer notre présence en ligne. Leur expertise en Drupal et leur approche stratégique ont dépassé nos attentes. Nous avons vu une amélioration significative de nos performances digitales et de notre engagement client.",
      author: "Directeur Marketing"
    },
    defis: [
      {
        title: "Intégration de systèmes existants",
        solution: "Développement d'API personnalisées pour une intégration transparente avec les systèmes CRM et ERP existants."
      },
      {
        title: "Performance du site à grande échelle",
        solution: "Mise en place d'une architecture de mise en cache avancée et optimisation des requêtes de base de données."
      },
      {
        title: "Personnalisation de l'expérience utilisateur",
        solution: "Implémentation d'un système de recommandation basé sur l'IA pour offrir des contenus et produits personnalisés."
      }
    ]
  },
  {
    id: 1,
    name: 'DESTINATION COCKTAILS',
    images: [
      'images/realisations/drupal/cocktails/cocktail-1.png',
      'images/realisations/drupal/cocktails/cocktail-2.png',
      'images/realisations/drupal/cocktails/cocktail-3.png'
    ],
    category: 'Food & Beverage',
    size: 'medium',
    client: 'DESTINATION COCKTAILS',
    techno: 'Drupal, Acquia Lift, IOS, Android, Elastic',
    objectifs: [
      'Digitaliser la marque et construire une stratégie dacquisition.',
      'Déployer le positionnement accompagnateur de la marque.',
      'Faire naviguer les consommateurs dans la gamme.',
      'Optimiser lexpérience utilisateur sur tous les canaux digitaux.',
      'Augmenter la visibilité en ligne et le trafic vers le site web.',
      'Améliorer la conversion et la fidélisation des clients.'
    ],
    reponses: [
      'Construction de la plateforme digitale.',
      'Développement dun plan dacquisition multi-leviers : web native, mobile et social.',
      'Création du plan dactivation CRM.',
      'Innovation Drive to Store.',
      'Mise en place dune stratégie de contenu engageante.',
      'Optimisation SEO pour améliorer le classement dans les moteurs de recherche.',
      'Intégration de fonctionnalités de commerce électronique.',
      'Développement dune application mobile complémentaire.'
    ],
    resultats: [
      'Augmentation de 150% du trafic organique en 6 mois',
      'Amélioration du taux de conversion de 3% à 5.5%',
      'Croissance de 200% des ventes en ligne sur 12 mois',
      'Réduction de 25% du taux de rebond',
      'Augmentation de 40% du panier moyen'
    ],
    temoignage: {
      text: "L'équipe a fait un travail exceptionnel pour transformer notre présence en ligne. Leur expertise en Drupal et leur approche stratégique ont dépassé nos attentes. Nous avons vu une amélioration significative de nos performances digitales et de notre engagement client.",
      author: "Directeur Marketing"
    },
    defis: [
      {
        title: "Intégration de systèmes existants",
        solution: "Développement d'API personnalisées pour une intégration transparente avec les systèmes CRM et ERP existants."
      },
      {
        title: "Performance du site à grande échelle",
        solution: "Mise en place d'une architecture de mise en cache avancée et optimisation des requêtes de base de données."
      },
      {
        title: "Personnalisation de l'expérience utilisateur",
        solution: "Implémentation d'un système de recommandation basé sur l'IA pour offrir des contenus et produits personnalisés."
      }
    ]
  }
];

const ProjectCard = ({ project, onClick }) => {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-2 row-span-1',
    large: 'col-span-2 row-span-2',
  };

  return (
    <div
      className={`relative overflow-hidden group ${sizeClasses[project.size]} cursor-pointer`}
      onClick={() => onClick(project)}
    >
      <img src={project.images[0]} alt={project.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-white p-4">
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="mt-2">{project.category}</p>
        </div>
      </div>
    </div>
  );
};

const ProjectPopup = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-[100000] p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="relative w-full h-48 md:h-64  flex-shrink-0">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white  bg-black bg-opacity-50 rounded-full p-2 z-10"
          >
            <X size={24}/>
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 bg-black bg-opacity-50 rounded-full p-2"
          >
            <ChevronLeft size={24}/>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 bg-black bg-opacity-50 rounded-full p-2"
          >
            <ChevronRight size={24}/>
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {project.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="overflow-y-auto flex-grow ">
          <div className="flex flex-col md:flex-row  p-4 rounded-lg ">
            <div className="w-full md:w-1/2 p-4 z-[1000000000]">
                <h2 className="text-sm mb-4">Les</h2>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12">
                <span
                  className="inline-block uppercase relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  Objectif
                </span>
                </h1>
            <ul className="list-disc pl-5 space-y-2 text-black">
              {project.objectifs.map((objectif, index) => (
                <li key={index}>{objectif}</li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-4 z-[1000000000] bg-gray-800 rounded-lg mt-4 md:mt-0">
            <h2 className="text-sm mb-4">Les</h2>
            <h1 className="text-4xl uppercase sm:text-5xl md:text-6xl font-black mb-12">
                <span
                  className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
                  Réponse
                </span>
            </h1>
            <ul className="list-disc pl-5 space-y-2  text-black">
                {project.reponses.map((reponse, index) => (
                  <li key={index}>{reponse}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full mt-4 z-[1000000000]  flex flex-col md:flex-row justify-between bg-gray-100 p-4 rounded-lg">
            <div className="md:w-1/2 p-4 z-[1000000000] ">
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-black mb-5">
                <span
                  className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  CLIENT
                </span>
              </h1>
              <p className="text-black font-bold mb-5">{project.client}</p>
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-black mb-5">
                <span
                  className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  CATÉGORIE
                </span>
              </h1>
              <p className="text-black font-bold ">{project.category}</p>
            </div>
            <div className="md:w-1/2 p-4 z-[1000000000]">
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-black mb-5">
                <span
                  className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
                  TECHNO
                </span>
              </h1>
              <p className="text-black font-bold ">{project.techno}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  p-4 rounded-lg ">
          <div className="w-full  p-4 z-[1000000000]">
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-black mb-5">
                <span
                  className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                                    RÉSULTATS DU PROJET
                </span>
            </h1>
            <ul className="list-disc pl-5 space-y-2 text-black">
              {project.resultats.map((resultat, index) => (
                <li key={index}>{resultat}</li>
              ))}
            </ul>
          </div>
          </div>
          <div className="w-full mt-4 bg-gray-800 text-white p-4 rounded-lg">
            <h2 className="text-lg md:text-xl font-bold mb-4">TÉMOIGNAGE CLIENT</h2>
            <blockquote className="italic">
              "{project.temoignage.text}"
            </blockquote>
            <p className="mt-2">- {project.temoignage.author}, {project.client}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

const DrupalRealisations = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section className="w-full mx-auto px-4 max-w-c-1390 mt-40 my-10">
      <div className="w-full mx-auto px-4 max-w-c-1390 mt-40 my-10 flex flex-col md:flex-row">
        <div className="flex-1 pr-8 mb-8 md:mb-0">
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
            résultats de qualité.
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
          <ProjectCard key={project.id} project={project} onClick={handleProjectClick} />
        ))}
      </div>

      {selectedProject && <ProjectPopup project={selectedProject} onClose={handleClosePopup} />}
    </section>
  );
};

export default DrupalRealisations;
