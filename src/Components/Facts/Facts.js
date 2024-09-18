import React from 'react';

const Facts = () => {
    return (
        <section className="py-20 lg:py-22.5 px-4 md:px-8 2xl:px-0">
          <div
            className="mx-auto max-w-c-1390 py-22.5 xl:py-27.5 relative z-1 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark"
          >
            <img src="./images/shape/shape-04.svg" alt="Man" className="absolute -top-25 -left-15 lg:left-0 -z-1"/>
            <img src="./images/shape/shape-05.svg" alt="Doodle" className="absolute bottom-0 right-0 -z-1"/>
            <img src="./images/shape/shape-dotted-light-02.svg" alt="Dotted"
                 className="absolute top-0 left-0 -z-1 dark:hidden"/>
            <img src="./images/shape/shape-dotted-dark-02.svg" alt="Dotted"
                 className="absolute top-0 left-0 -z-1 hidden dark:block"/>

            <div className="animate_top mx-auto text-center md:w-4/5 lg:w-2/3 xl:w-1/2 mb-12.5 lg:mb-17.5 px-4 md:px-0">
              <h2 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-4">
                Propulsant l'excellence des leaders mondiaux
              </h2>
              <p className="lg:w-11/12 mx-auto">
                Découvrez pourquoi les plus grandes entreprises du monde choisissent notre expertise pour propulser leur
                transformation numérique et atteindre de nouveaux sommets d'innovation.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
              <div className="animate_top text-center">
                <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">5K+</h3>
                <p className="text-lg lg:text-para2">Clients satisfaits</p>
              </div>
              <div className="animate_top text-center">
                <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">7k+</h3>
                <p className="text-lg lg:text-para2">Solutions déployées</p>
              </div>
              <div className="animate_top text-center">
                <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">100+</h3>
                <p className="text-lg lg:text-para2">Prix d'excellence</p>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Facts;
