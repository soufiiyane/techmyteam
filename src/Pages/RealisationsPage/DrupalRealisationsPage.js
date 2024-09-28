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
        "Nous offrons des services de développement, de maintenance et de migration de sites Drupal, ainsi que des formations pour les utilisateurs et les développeurs.",
    },
    {
      question: "Votre équipe est-elle certifiée en Drupal ?",
      answer:
        "Oui, notre équipe possède plusieurs certifications Drupal, assurant un niveau d'expertise élevé dans la gestion et le développement de projets Drupal.",
    },
    {
      question: "Combien de temps faut-il pour finaliser un projet Drupal ?",
      answer:
        "Le délai de réalisation d'un projet Drupal varie en fonction de sa complexité. En général, les petits projets peuvent être terminés en 4 à 8 semaines, tandis que les projets plus complexes peuvent prendre plusieurs mois.",
    },
    {
      question: "Proposez-vous un support après la livraison du projet ?",
      answer:
        "Oui, nous offrons un support technique continu et des services de maintenance après la livraison, garantissant ainsi le bon fonctionnement de votre site Drupal.",
    },
    {
      question: "Quelles sont vos expertises en matière de Drupal ?",
      answer:
        "Notre expertise inclut le développement de modules personnalisés, l'optimisation des performances, la sécurité des sites, et l'intégration de solutions tierces.",
    },
    {
      question: "Est-il possible de migrer un site vers Drupal ?",
      answer:
        "Oui, nous proposons des services de migration vers Drupal depuis d'autres systèmes de gestion de contenu, assurant une transition fluide et sécurisée.",
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
