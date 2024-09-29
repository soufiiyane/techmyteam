import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import DrupalRealisations from "../../Components/Realisation/DrupalRealisations";
import FAQs from "../../Components/FAQs/FAQs";
import CTA from "../../Components/CTA/CTA";
import SymfonyRealisations from "../../Components/Realisation/SymfonyRealisations";

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
      question: "Êtes-vous partenaires de SensioLabs ?",
      answer:
        "Oui, nous sommes partenaires de SensioLabs, les créateurs de Symfony. Cela renforce notre expertise et nous permet d'offrir des solutions robustes et innovantes pour vos projets Symfony.",
    },
    {
      question: "Quels services Symfony proposez-vous ?",
      answer:
        "Nous offrons des services de développement, de maintenance et de migration d'applications Symfony, ainsi que des formations pour les utilisateurs et les développeurs.",
    },
    {
      question: "Votre équipe est-elle certifiée en Symfony ?",
      answer:
        "Oui, notre équipe possède plusieurs certifications Symfony, assurant un niveau d'expertise élevé dans la gestion et le développement de projets Symfony.",
    },
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
      question: "Quelles sont vos expertises en matière de Symfony ?",
      answer:
        "Notre expertise inclut le développement de fonctionnalités personnalisées, l'optimisation des performances, la sécurité des applications, et l'intégration de solutions tierces.",
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
      <SymfonyRealisations/>
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
