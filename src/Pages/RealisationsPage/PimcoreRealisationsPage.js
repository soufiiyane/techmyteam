import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import DrupalRealisations from "../../Components/Realisation/DrupalRealisations";
import FAQs from "../../Components/FAQs/FAQs";
import CTA from "../../Components/CTA/CTA";
import SymfonyRealisations from "../../Components/Realisation/SymfonyRealisations";
import PimcoreRealisations from "../../Components/Realisation/PimcoreRealisations";

function SymfonyRealisationsPage() {
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
      question: "Quels services Pimcore proposez-vous ?",
      answer:
        "Nous offrons des services de développement, de maintenance, et de migration d'applications Pimcore, ainsi que des formations pour les utilisateurs et les développeurs.",
    },
    {
      question: "Votre équipe est-elle certifiée en Pimcore ?",
      answer:
        "Notre équipe possède une expertise solide dans la gestion et le développement de projets Pimcore, bien que nous ne détenions pas de certifications officielles.",
    },
    {
      question: "Combien de temps faut-il pour finaliser un projet Pimcore ?",
      answer:
        "Le délai de réalisation d'un projet Pimcore dépend de sa complexité. Les petits projets peuvent être terminés en 4 à 8 semaines, tandis que les projets plus complexes peuvent prendre plusieurs mois.",
    },
    {
      question: "Proposez-vous un support après la livraison du projet ?",
      answer:
        "Oui, nous offrons un support technique continu et des services de maintenance après la livraison, garantissant ainsi le bon fonctionnement de votre application Pimcore.",
    },
    {
      question: "Quelles sont vos expertises en matière de Pimcore ?",
      answer:
        "Notre expertise inclut la gestion de données, le développement de fonctionnalités personnalisées, l'optimisation des performances, la sécurité des applications, et l'intégration de solutions tierces.",
    },
    {
      question: "Est-il possible de migrer une application vers Pimcore ?",
      answer:
        "Oui, nous proposons des services de migration vers Pimcore depuis d'autres systèmes ou frameworks, en assurant une transition fluide et sécurisée.",
    },
    {
      question: "Pouvez-vous développer des solutions personnalisées avec Pimcore ?",
      answer:
        "Absolument. Nous concevons des solutions sur mesure adaptées à vos besoins spécifiques en utilisant les fonctionnalités avancées de Pimcore.",
    },
  ];

  return (
    <div>
      <NavBar
        stickyMenu={stickyMenu}
        navigationOpen={navigationOpen}
        toggleNavigation={toggleNavigation}
      />
      <PimcoreRealisations/>
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

export default SymfonyRealisationsPage;
