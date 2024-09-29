import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import DrupalRealisations from "../../Components/Realisation/DrupalRealisations";
import FAQs from "../../Components/FAQs/FAQs";
import News from "../../Components/News/News";
import CTA from "../../Components/CTA/CTA";

function DrupalRealisationsPage() {
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
      question: "Quels services Drupal proposez-vous ?",
      answer:
        "Nous offrons des services de developpement, de maintenance et de migration de sites Drupal, ainsi que des formations pour les utilisateurs et les developpeurs.",
    },
    {
      question: "Votre equipe est-elle certifiee en Drupal ?",
      answer:
        "Oui, notre equipe possede plusieurs certifications Drupal, assurant un niveau d'expertise eleve dans la gestion et le developpement de projets Drupal.",
    },
    {
      question: "Combien de temps faut-il pour finaliser un projet Drupal ?",
      answer:
        "Le delai de realisation d'un projet Drupal varie en fonction de sa complexite. En general, les petits projets peuvent etre termines en 4 à 8 semaines, tandis que les projets plus complexes peuvent prendre plusieurs mois.",
    },
    {
      question: "Proposez-vous un support apres la livraison du projet ?",
      answer:
        "Oui, nous offrons un support technique continu et des services de maintenance apres la livraison, garantissant ainsi le bon fonctionnement de votre site Drupal.",
    },
    {
      question: "Quelles sont vos expertises en matiere de Drupal ?",
      answer:
        "Notre expertise inclut le developpement de modules personnalises, l'optimisation des performances, la securite des sites, et l'integration de solutions tierces.",
    },
    {
      question: "Est-il possible de migrer un site vers Drupal ?",
      answer:
        "Oui, nous proposons des services de migration vers Drupal depuis d'autres systemes de gestion de contenu, assurant une transition fluide et securisee.",
    },
  ];

  return (
    <div>
      <NavBar
        stickyMenu={stickyMenu}
        navigationOpen={navigationOpen}
        toggleNavigation={toggleNavigation}
      />
      <DrupalRealisations/>
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

export default DrupalRealisationsPage;
