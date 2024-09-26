import React from 'react';

const Banner = () => {
  return (
    <section className="py-20 lg:py-22.5 px-4 md:px-8 2xl:px-0">
      <div className="my-10"></div>
      <div
        className="mx-auto max-w-c-1390 py-22.5 xl:py-27.5 relative z-1 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark"
      >
        <div className="animate_top mx-20 md:w-4/5 lg:w-2/3 xl:w-1/2 mb-12.5 lg:mb-17.5 px-4 md:px-0">
          <h2 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-4">
            Nos offres d'emploi
          </h2>
          <p>
            Rejoignez les leaders mondiaux qui nous font confiance pour accélérer leur transformation numérique
            et libérer leur potentiel d'innovation. Découvrez nos offres d'emploi et faites partie de cette aventure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
