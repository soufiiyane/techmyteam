import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const projects = [
  { id: 1, name: 'Montfort', images: [
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi.png',
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/idkids.png',
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/myfans.png'
    ], category: 'Food & Beverage', size: 'medium', client: 'MAISON MONTFORT', techno: 'Drupal, Lift, iOS, Android, Javascript, ibeacon' },
  { id: 2, name: 'Private Sport Shop',
    images: [
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/tourista.png',
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/flowersforzoe.png',
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi3.png'
    ],
    category: 'E-commerce', size: 'large', client: 'PRIVATE SPORT SHOP', techno: 'Drupal, React, Node.js, MongoDB' },
  { id: 3, name: 'France Abonnements', images: [
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi.png',
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi2.png',
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi3.png'
    ], category: 'Media', size: 'small', client: 'FRANCE ABONNEMENTS', techno: 'Drupal, PHP, MySQL, jQuery' },
  { id: 4, name: 'ID Kids', images: [
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi.png',
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi2.png',
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi3.png'
    ], category: 'Retail', size: 'small', client: 'ID KIDS', techno: 'Drupal, Vue.js, Laravel, PostgreSQL' },
  { id: 5, name: 'My Fans', images: [
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi.png',
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi2.png',
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi3.png'
    ], category: 'Entertainment', size: 'large', client: 'MY FANS', techno: 'Drupal, Angular, Express.js, MySQL' },
  { id: 6, name: 'Tourista', images: [
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi.png',
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi2.png',
      'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi3.png'
    ], category: 'Travel', size: 'medium', client: 'TOURISTA', techno: 'Drupal, React Native, GraphQL, MongoDB' },
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100000] p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="relative w-full h-48 md:h-64 flex-shrink-0">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 bg-black bg-opacity-50 rounded-full p-2 z-10"
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
        <div className="overflow-y-auto flex-grow">
          <div className="flex flex-col md:flex-row bg-gray-100 p-4 rounded-lg">
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">Objectif :</h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">TRANSFORMATION DIGITALE</h3>
              <ul className="list-disc pl-5 space-y-2 text-black">
                <li>Digitaliser la marque et construire une stratégie d'acquisition.</li>
                <li>Déployer le positionnement accompagnateur de la marque.</li>
                <li>Faire naviguer les consommateurs dans la gamme.</li>
                <li>Optimiser l'expérience utilisateur sur tous les canaux digitaux.</li>
                <li>Augmenter la visibilité en ligne et le trafic vers le site web.</li>
                <li>Améliorer la conversion et la fidélisation des clients.</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 p-4 bg-gray-800 rounded-lg mt-4 md:mt-0">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Réponse :</h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">DRIVE TO STORE</h3>
              <ul className="list-disc pl-5 space-y-2 text-white">
              <li>Construction de la plateforme digitale.</li>
                <li>Développement d'un plan d'acquisition multi-leviers : web native, mobile et social.</li>
                <li>Création du plan d'activation CRM.</li>
                <li>Innovation Drive to Store.</li>
                <li>Mise en place d'une stratégie de contenu engageante.</li>
                <li>Optimisation SEO pour améliorer le classement dans les moteurs de recherche.</li>
                <li>Intégration de fonctionnalités de commerce électronique.</li>
                <li>Développement d'une application mobile complémentaire.</li>
              </ul>
            </div>
          </div>
          <div className="w-full mt-4 flex flex-col md:flex-row justify-between bg-gray-100 p-4 rounded-lg">
            <div className="md:w-1/2 p-4">
              <h2 className="text-lg md:text-xl font-bold mb-2 text-black">CLIENT</h2>
              <p className="text-black">{project.client}</p>
              <h2 className="text-lg md:text-xl font-bold mt-4 mb-2 text-black">CATÉGORIE</h2>
              <p className="text-black">{project.category}</p>
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-lg md:text-xl font-bold mb-2 text-black">TECHNO</h2>
              <p className="text-black">{project.techno}</p>
            </div>
          </div>
          <div className="w-full mt-4 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg md:text-xl font-bold mb-4 text-black">RÉSULTATS DU PROJET</h2>
            <ul className="list-disc pl-5 space-y-2 text-black">
              <li>Augmentation de 150% du trafic organique en 6 mois</li>
              <li>Amélioration du taux de conversion de 3% à 5.5%</li>
              <li>Croissance de 200% des ventes en ligne sur 12 mois</li>
              <li>Réduction de 25% du taux de rebond</li>
              <li>Augmentation de 40% du panier moyen</li>
            </ul>
          </div>
          <div className="w-full mt-4 bg-gray-800 text-white p-4 rounded-lg">
            <h2 className="text-lg md:text-xl font-bold mb-4">TÉMOIGNAGE CLIENT</h2>
            <blockquote className="italic">
              "L'équipe a fait un travail exceptionnel pour transformer notre présence en ligne. Leur expertise en Drupal et leur approche stratégique ont dépassé nos attentes. Nous avons vu une amélioration significative de nos performances digitales et de notre engagement client."
            </blockquote>
            <p className="mt-2">- Directeur Marketing, {project.client}</p>
          </div>
          <div className="w-full mt-4 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg md:text-xl font-bold mb-4 text-black">DÉFIS ET SOLUTIONS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-blue-600">Défi 1: Intégration de systèmes existants</h3>
                <p>Solution: Développement d'API personnalisées pour une intégration transparente avec les systèmes CRM et ERP existants.</p>
              </div>
              <div>
                <h3 className="font-bold text-blue-600">Défi 2: Performance du site à grande échelle</h3>
                <p>Solution: Mise en place d'une architecture de mise en cache avancée et optimisation des requêtes de base de données.</p>
              </div>
              <div>
                <h3 className="font-bold text-blue-600">Défi 3: Personnalisation de l'expérience utilisateur</h3>
                <p>Solution: Implémentation d'un système de recommandation basé sur l'IA pour offrir des contenus et produits personnalisés.</p>
              </div>
            </div>
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
            <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
              Drupal Réalisations
            </span>
          </h1>
          <p className="text-gray-600 mb-4 w-full">
            Notre équipe Drupal est composée de membres qui détiennent
            <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
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
