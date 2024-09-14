import React, { useState } from 'react';

const FeatureTabs = () => {
    const [activeTab, setActiveTab] = useState('tabOne');

    return (
        <section className="pt-18.5 pb-20 lg:pb-22.5 relative">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div className="absolute top-0 -z-1">
                    <img
                        className="dark:hidden"
                        src="./images/shape/shape-dotted-light.svg"
                        alt="Dotted Shape"
                    />
                    <img
                        className="hidden dark:block"
                        src="./images/shape/shape-dotted-dark.svg"
                        alt="Dotted Shape"
                    />
                </div>

                {/* Tab Menus Start */}
                <div
                    className="animate_top border border-stroke dark:border-strokedark dark:bg-blacksection shadow-solid-5 dark:shadow-solid-6 bg-white rounded-[10px] flex flex-wrap md:flex-nowrap md:items-center justify-center lg:gap-7.5 xl:gap-12.5 mb-15 xl:mb-21.5"
                >
                    <div
                        className={`relative cursor-pointer w-full md:w-auto border-b last:border-0 md:border-0 border-stroke dark:border-strokedark flex items-center gap-4 py-2 xl:py-5 px-6 xl:px-13.5 ${activeTab === 'tabOne' ? 'active before:w-full before:h-1 before:bg-primary before:absolute before:bottom-0 before:left-0 before:rounded-tl-[4px] before:rounded-tr-[4px]' : ''}`}
                        onClick={() => setActiveTab('tabOne')}
                    >
                        <div className="w-12.5 h-12.5 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                            <p className="text-black dark:text-white font-medium text-metatitle3">01</p>
                        </div>
                        <div className="lg:w-auto md:w-3/5">
                            <h5 className="text-black dark:text-white text-sm xl:text-regular font-medium">Interface Utilisateur Épurée</h5>
                        </div>
                    </div>
                    <div
                        className={`relative cursor-pointer w-full md:w-auto border-b last:border-0 md:border-0 border-stroke dark:border-strokedark flex items-center gap-4 py-2 xl:py-5 px-6 xl:px-13.5 ${activeTab === 'tabTwo' ? 'active before:w-full before:h-1 before:bg-primary before:absolute before:bottom-0 before:left-0 before:rounded-tl-[4px] before:rounded-tr-[4px]' : ''}`}
                        onClick={() => setActiveTab('tabTwo')}
                    >
                        <div className="w-12.5 h-12.5 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                            <p className="text-black dark:text-white font-medium text-metatitle3">02</p>
                        </div>
                        <div className="lg:w-auto md:w-3/5">
                            <h5 className="text-black dark:text-white text-sm xl:text-regular font-medium">Options de Sauvegarde des Données Cloud</h5>
                        </div>
                    </div>
                    <div
                        className={`relative cursor-pointer w-full md:w-auto border-b last:border-0 md:border-0 border-stroke dark:border-strokedark flex items-center gap-4 py-2 xl:py-5 px-6 xl:px-13.5 ${activeTab === 'tabThree' ? 'active before:w-full before:h-1 before:bg-primary before:absolute before:bottom-0 before:left-0 before:rounded-tl-[4px] before:rounded-tr-[4px]' : ''}`}
                        onClick={() => setActiveTab('tabThree')}
                    >
                        <div className="w-12.5 h-12.5 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                            <p className="text-black dark:text-white font-medium text-metatitle3">03</p>
                        </div>
                        <div className="lg:w-auto md:w-3/5">
                            <h5 className="text-black dark:text-white text-sm xl:text-regular font-medium">Gestion et Collaboration</h5>
                        </div>
                    </div>
                </div>
                {/* Tab Menus End */}

                {/* Tab Content Start */}
                <div className="animate_top mx-auto max-w-c-1154">
                    {activeTab === 'tabOne' && (
                        <div className="flex items-center gap-8 lg:gap-19">
                            <div className="md:w-1/2">
                                <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-bold mb-7">Interface Utilisateur Épurée et Moderne</h2>
                                <p className="mb-5">Notre interface utilisateur est conçue pour offrir une expérience claire et intuitive, facilitant l'utilisation de notre solution.</p>
                                <p className="w-11/12">Découvrez comment notre interface élégante et fonctionnelle peut améliorer votre productivité et simplifier vos tâches quotidiennes.</p>
                            </div>
                            <div className="hidden md:block md:w-1/2">
                                <img
                                    src="./images/features/features-light-01.svg"
                                    alt="Fonctionnalités"
                                    className="dark:hidden"
                                />
                                <img
                                    src="./images/features/features-dark-01.svg"
                                    alt="Fonctionnalités"
                                    className="hidden dark:block"
                                />
                            </div>
                        </div>
                    )}

                    {activeTab === 'tabTwo' && (
                        <div className="flex items-center gap-8 lg:gap-19">
                            <div className="md:w-1/2">
                                <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-bold mb-7">Options de Sauvegarde des Données Cloud</h2>
                                <p className="mb-5">Nous proposons diverses options pour sauvegarder vos données dans le cloud, assurant leur sécurité et leur accessibilité.</p>
                                <p className="w-11/12">Explorez nos solutions de sauvegarde flexibles qui répondent à vos besoins spécifiques en matière de sécurité des données.</p>
                            </div>
                            <div className="hidden md:block md:w-1/2">
                                <img
                                    src="./images/features/features-light-01.svg"
                                    alt="Fonctionnalités"
                                    className="dark:hidden"
                                />
                                <img
                                    src="./images/features/features-dark-01.svg"
                                    alt="Fonctionnalités"
                                    className="hidden dark:block"
                                />
                            </div>
                        </div>
                    )}

                    {activeTab === 'tabThree' && (
                        <div className="flex items-center gap-8 lg:gap-19">
                            <div className="md:w-1/2">
                                <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-bold mb-7">Gestion et Collaboration</h2>
                                <p className="mb-5">Optimisez la gestion de vos projets et collaborez efficacement avec notre suite d'outils intégrés.</p>
                                <p className="w-11/12">Découvrez comment nos fonctionnalités de gestion et de collaboration peuvent transformer votre manière de travailler en équipe.</p>
                            </div>
                            <div className="hidden md:block md:w-1/2">
                                <img
                                    src="./images/features/features-light-01.svg"
                                    alt="Fonctionnalités"
                                    className="dark:hidden"
                                />
                                <img
                                    src="./images/features/features-dark-01.svg"
                                    alt="Fonctionnalités"
                                    className="hidden dark:block"
                                />
                            </div>
                        </div>
                    )}
                </div>
                {/* Tab Content End */}
            </div>
        </section>
    );
};

export default FeatureTabs;
