import React from 'react';

const About = () => {
    return (
        <div>
            {/* ===== About Start ===== */}
            <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
                <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
                    <div className="flex items-center gap-8 lg:gap-32.5">
                        <div className="animate_left hidden md:block md:w-1/2">
                            <img
                                src="./images/about/about-light-01.svg"
                                alt="À propos"
                                className="dark:hidden"
                            />
                            <img
                                src="./images/about/about-dark-01.svg"
                                alt="À propos"
                                className="hidden dark:block"
                            />
                        </div>
                        <div className="animate_right md:w-1/2">
                            <h4 className="text-black dark:text-white font-medium uppercase">
                                <a
                                    href="#"
                                    className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4"
                                >
                                    Nouveau
                                </a>
                                Découvrez TechMyTeam
                            </h4>
                            <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                                TechMyTeam
                                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  Réinvente Vos Projets
                </span>
                            </h2>
                            <p>
                                Nous offrons des solutions numériques et mobiles sur mesure pour répondre à tous vos besoins technologiques.
                            </p>

                            <div className="mt-7.5 flex items-center gap-5">
                                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                                    <p className="text-black dark:text-white font-semibold text-metatitle2">01</p>
                                </div>
                                <div className="w-3/4">
                                    <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">Expertise Complète</h5>
                                    <p>Solutions web, mobiles et CMS adaptées à vos besoins.</p>
                                </div>
                            </div>
                            <div className="mt-7.5 flex items-center gap-5">
                                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                                    <p className="text-black dark:text-white font-semibold text-metatitle2">02</p>
                                </div>
                                <div className="w-3/4">
                                    <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">Solutions Innovantes</h5>
                                    <p>Technologies modernes pour des résultats uniques.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ===== About End ===== */}

            {/* ===== About Two Start ===== */}
            <section>
                <div className="mx-auto max-w-c-1235 px-4 md:px-8 2xl:px-0 overflow-hidden">
                    <div className="flex items-center gap-8 lg:gap-32.5">
                        <div className="animate_left md:w-1/2">
                            <h4 className="text-black dark:text-white font-medium uppercase">
                                Accélérez Votre Croissance
                            </h4>
                            <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                                Suivi Précis de Votre Audience
                                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
                  Réalisez Vos Objectifs
                </span>
                            </h2>
                            <p>
                                Analysez les comportements de vos visiteurs et optimisez vos stratégies pour une croissance accélérée.
                            </p>

                            <a
                                href="#"
                                className="flex items-center gap-2.5 text-black dark:text-white mt-7.5"
                            >
                                En savoir plus
                                <img
                                    className="dark:hidden"
                                    src="./images/icon/icon-arrow-light.svg"
                                    alt="Flèche"
                                />
                                <img
                                    className="hidden dark:block"
                                    src="./images/icon/icon-arrow-dark.svg"
                                    alt="Flèche"
                                />
                            </a>
                        </div>
                        <div className="animate_right hidden md:block md:w-1/2">
                            <img
                                src="./images/about/about-light-02.svg"
                                alt="À propos"
                                className="dark:hidden"
                            />
                            <img
                                src="./images/about/about-dark-02.svg"
                                alt="À propos"
                                className="hidden dark:block"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* ===== About Two End ===== */}
        </div>
    );
};

export default About;
