import React from 'react';

function HeroSection() {
  return (
    <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className="animate_left md:w-1/2">
            <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5">
              Propulsez Votre Entreprise vers le Futur avec nos
              <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1"> &nbsp;Solutions IT Innovantes</span>
            </h1>
            <p>Chez TechMyTeam, nous réunissons les meilleurs talents IT pour transformer vos idées en réalité. De la conception web à l'intelligence artificielle, nous sommes votre partenaire pour l'innovation digitale.</p>

            <div className="mt-10">
              <form action="https://formbold.com/s/unique_form_id" method="POST">
                <div className="flex flex-wrap gap-5">
                  <input
                    type="email"
                    placeholder="Votre e-mail pour une consultation gratuite"
                    className="dark:bg-black border border-stroke dark:border-strokedark shadow-solid-2 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-2.5 px-6 w-full sm:w-auto"
                  />
                  <button className="flex bg-primary hover:bg-primaryho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5">Démarrer l'Innovation</button>
                </div>
              </form>

              <p className="text-black dark:text-white mt-5">Transformons Ensemble Votre Vision en Réalité</p>
            </div>
          </div>
          <div className="animate_right md:w-1/2 hidden lg:block">
            <div className="relative 2xl:-mr-7.5">
              <img src="./images/shape/shape-01.png" alt="forme" className="absolute -left-11.5 top-0" />
              <img src="./images/shape/shape-02.svg" alt="forme" className="absolute right-0 bottom-0" />
              <img src="./images/shape/shape-03.svg" alt="forme" className="absolute -right-6.5 bottom-0" />
              <div>
                <img className="dark:hidden shadow-solid-l" src="./images/hero/hero-light.svg" alt="Innovation Technologique" />
                <img className="hidden dark:block shadow-solid-l" src="./images/hero/hero-dark.svg" alt="Innovation Technologique" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
