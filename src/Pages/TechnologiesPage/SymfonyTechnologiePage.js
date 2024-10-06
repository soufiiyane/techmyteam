import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Drupal from "../../Components/Technologies/Drupal";
import FAQs from "../../Components/FAQs/FAQs";
import CTA from "../../Components/CTA/CTA";
import Symfony from "../../Components/Technologies/Symfony";

function SymfonyTechnologiePage() {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.pageYOffset > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavigation = () => setNavigationOpen(!navigationOpen);

  const faqs = [
    {
      question: "Combien de temps faut-il pour finaliser un projet Symfony ?",
      answer:
        "Le délai de réalisation d'un projet Symfony varie en fonction de sa complexité. En général, les petits projets peuvent être terminés en 4 à 8 semaines, tandis que les projets plus complexes peuvent prendre plusieurs mois.",
    },
    {
      question: "Proposez-vous un support après la livraison du projet ?",
      answer:
        "Oui, nous offrons un support technique continu et des services de maintenance après la livraison, garantissant ainsi le bon fonctionnement de votre application Symfony.",
    },
    {
      question: "Est-il possible de migrer une application vers Symfony ?",
      answer:
        "Oui, nous proposons des services de migration vers Symfony depuis d'autres frameworks ou systèmes, assurant une transition fluide et sécurisée.",
    },
  ];

  return (
    <div>
      <NavBar
        stickyMenu={stickyMenu}
        navigationOpen={navigationOpen}
        toggleNavigation={toggleNavigation}
      />
      <div className="w-full mx-auto  max-w-c-1390 mt-40 my-10   px-4 flex flex-col md:flex-row">
        <div className="w-full md:flex-1 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-sm uppercase mb-4">Un Aperçu de Notre</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12">
          <span
            className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
            Expertise Symfony
          </span>
          </h1>
          <p className="text-gray-600 mb-4 text-justify">
            Notre équipe est composée d'experts <span
            className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
            certifiés Symfony
          </span>, reconnus par &nbsp;
            <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
          SensioLabs
          </span>
            &nbsp;avec plus de 10 ans d'expérience sur Symfony, de la version 2 à Symfony 7++.
          </p>
          <p className="text-gray-600 mb-4 text-justify">
            Choisir notre équipe pour vos projets Symfony, c'est garantir un niveau d'expertise inégalé et des résultats
            de qualité.
          </p>
          <p className="text-gray-600 text-justify">
          <span
            className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
            SensioLabs
          </span> le créateur de Symfony, est également notre partenaire, renforçant ainsi notre expertise et notre
            capacité à offrir des solutions robustes et innovantes.
          </p>
        </div>
        <div className="flex flex-col space-y-6">
          <div>
            <p className="text-sm">Nos</p>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-black">
          <span
            className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
            Certifications
          </span>
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
            <img
              src="images/certifications/symfony/symfony-6.png"
              className="w-full sm:w-auto max-w-[300px] max-h-[200px] object-contain"
              alt="Symfony 6 Certification"
            />
            <img
              src="images/certifications/symfony/symfony-7.png"
              className="w-full sm:w-auto max-w-[300px] max-h-[200px] object-contain"
              alt="Symfony 7 Certification"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
            <img
              src="images/certifications/symfony/bronze.svg"
              className="w-full sm:w-auto max-w-[300px] max-h-[200px] object-contain"
              alt="Symfony 6 Certification"
            />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto px-4 max-w-c-1390 mt-5 my-10">
        <h2 className="text-sm uppercase mb-4">QUELLES APPLICATIONS</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12">
          <span
            className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
            CRÉONS-NOUS ?
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-black">
            <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
              Solutions CMS et
            </span>
                  </h1>
                  <h1 className="text-2xl sm:text-2xl md:text-3xl font-black mb-5">
            <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
              e-Commerce
            </span>
                  </h1>
            <p className="text-gray-600">
              Nous créons des systèmes de gestion de contenu (CMS) et des plateformes e-commerce performantes,
              permettant aux entreprises de gérer leur contenu web, leurs ventes en ligne, paiements sécurisés, et
              gestion des stocks. Développées avec Symfony, nos solutions sont flexibles, évolutives et parfaitement
              intégrées à vos outils métiers.
            </p>
          </div>


          <div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-black">
      <span
        className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
        Logiciel de gestion des
      </span>
            </h1>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-black mb-5">
      <span
        className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
        ressources humaines
      </span>
            </h1>
            <p className="text-gray-600">
              Un logiciel soutenant le travail du département RH, permettant la gestion des employés,
              le suivi du temps de travail et la définition d'objectifs, développé pour répondre aux
              besoins des entreprises modernes.
            </p>
          </div>

          <div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-black mb-5">
      <span
        className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
        Applications sur mesure
      </span>
            </h1>
            <p className="text-gray-600">
              Avec Symfony, nous créons des applications sur mesure adaptées aux besoins spécifiques de votre
              entreprise, qu'il s'agisse d'outils internes, de gestion de projet ou de plateformes de
              collaboration. Nos solutions sont conçues pour s'intégrer parfaitement à votre environnement
              existant.
            </p>
          </div>
        </div>
      </div>
      <Symfony/>
      <FAQs faqs={faqs}/>
      <CTA
        linkTo="/contact"
        linkText="Contactez-nous"
        title="Vous avez une idée de projet ? Donnons-lui vie !"
      />
      <Footer/>
    </div>
  );
}

export default SymfonyTechnologiePage;
