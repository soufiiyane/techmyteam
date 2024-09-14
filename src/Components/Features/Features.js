import React from "react";

const Features = () => {
    const featuresData = [
        {
            icon: "./images/icon/icon-01.svg",
            title: "Intégration Web",
            description:
                "Notre équipe est spécialisée en HTML5, CSS3 et design responsive, prenant en charge tout, des campagnes par email à l'intégration complète de CMS."
        },
        {
            icon: "./images/icon/icon-02.svg",
            title: "Solutions Mobiles",
            description:
                "Nous développons des applications natives iOS et Android, ainsi que des solutions hybrides utilisant des outils comme Flutter et React Native, pour divers besoins."
        },
        {
            icon: "./images/icon/icon-03.svg",
            title: "CMS & E-commerce",
            description:
                "Expertise en Drupal, Magento, PrestaShop et WordPress. Nous proposons des solutions évolutives et robustes adaptées à vos besoins CMS."
        },
        {
            icon: "./images/icon/icon-04.svg",
            title: "Développement Sur Mesure",
            description:
                "Utilisant des frameworks PHP comme Laravel et Symfony, nous créons des solutions sur mesure, des sites web aux outils CRM, assurant une grande adaptabilité."
        },
        {
            icon: "./images/icon/icon-05.svg",
            title: "Services Cloud",
            description:
                "Nous fournissons des solutions cloud évolutives, en utilisant AWS, Azure et Google Cloud pour garantir la sécurité et la performance de vos applications."
        },
        {
            icon: "./images/icon/icon-06.svg",
            title: "Optimisation SEO",
            description:
                "Nous optimisons vos sites web pour les moteurs de recherche, assurant une meilleure visibilité et un trafic accru grâce à des stratégies SEO efficaces."
        },
    ];

    return (
        <section id="features" className="py-20 lg:py-25 xl:py-30">
            <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
                <div className="animate_top text-center mx-auto">
                    <h2 className="text-3xl font-bold">Nos Atouts Incontournables</h2>
                    <p className="text-gray-600 mt-4">
                        Explorez les solutions qui propulsent vos projets vers l'excellence.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
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
