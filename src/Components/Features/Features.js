import React from "react";

const Features = () => {
  const featuresData = [
    {
      icon: "./images/icon/icon-01.svg",
      title: "Web Époustouflant",
      description:
        "Captivez vos visiteurs avec des expériences web immersives. Du responsive design à l'e-mail marketing, nous créons des interfaces qui marquent les esprits."
    },
    {
      icon: "./images/icon/icon-02.svg",
      title: "Solutions Mobiles",
      description:
        "Propulsez votre marque dans la poche de vos clients. Nos apps iOS et Android sur mesure offrent une expérience utilisateur exceptionnelle sur tous les appareils."
    },
    {
      icon: "./images/icon/icon-03.svg",
      title: "E-commerce Futuriste",
      description:
        "Transformez les visiteurs en clients fidèles. Nos plateformes e-commerce de pointe créent des parcours d'achat fluides et personnalisés qui boostent vos ventes."
    },
    {
      icon: "./images/icon/icon-04.svg",
      title: "Solutions Sur Mesure Géniales",
      description:
        "Donnez vie à vos idées les plus audacieuses. Nos outils web et CRM personnalisés s'adaptent parfaitement à votre vision unique et stimulent votre croissance."
    },
    {
      icon: "./images/icon/icon-05.svg",
      title: "Cloud Sans Limites",
      description:
        "Décuplez la puissance de votre entreprise. Nos solutions cloud garantissent une sécurité et des performances inégalées pour vos applications critiques."
    },
    {
      icon: "./images/icon/icon-06.svg",
      title: "Visibilité Maximale",
      description:
        "Dominez les moteurs de recherche. Nos stratégies SEO avancées propulsent votre site au sommet, attirant un flux constant de clients potentiels qualifiés."
    },
  ];

    return (
        <section id="features" className="py-20 lg:py-25 xl:py-30">
            <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
              <div className="animate_top text-center mx-auto">
                <h2 className="text-3xl font-bold">Découvrez Notre Arsenal Technologique</h2>
                <p className="text-gray-600 mt-4">
                  Des solutions avant-gardistes pour propulser votre succès numérique
                </p>
              </div>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
                {featuresData.map((feature, index) => (
                  <div
                    key={index}
                            className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection"
                        >
                            <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16">
                                <img src={feature.icon} alt="Icon" />
                            </div>
                            <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                                {feature.title}
                            </h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
