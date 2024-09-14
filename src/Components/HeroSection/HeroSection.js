import React from 'react';

function HeroSection() {
    return (
        <section class="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
            <div class="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div class="flex lg:items-center lg:gap-8 xl:gap-32.5">
                    <div class="animate_left md:w-1/2">
                        <h1 class="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5">
                            Optimisez Votre Entreprise avec des
                            <span class="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1"> &nbsp;Solutions IT</span>
                            d'Experts
                        </h1>
                        <p>TechMyTeam vous connecte avec des professionnels IT de premier plan et des développeurs pour dynamiser vos projets, du développement web aux solutions d'applications mobiles.</p>

                        <div class="mt-10">
                            <form action="https://formbold.com/s/unique_form_id" method="POST">
                                <div class="flex flex-wrap gap-5">
                                    <input
                                        type="text"
                                        placeholder="Entrez votre adresse e-mail"
                                        class="dark:bg-black border border-stroke dark:border-strokedark shadow-solid-2 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-2.5 px-6"
                                    />
                                    <button class="flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5">Commencer</button>
                                </div>
                            </form>

                            <p class="text-black dark:text-white mt-5">Discutons de Votre Projet</p>
                        </div>
                    </div>
                    <div class="animate_right md:w-1/2 hidden lg:block">
                        <div class="relative 2xl:-mr-7.5">
                            <img src="./images/shape/shape-01.png" alt="forme" class="absolute -left-11.5 top-0" />
                            <img src="./images/shape/shape-02.svg" alt="forme" class="absolute right-0 bottom-0" />
                            <img src="./images/shape/shape-03.svg" alt="forme" class="absolute -right-6.5 bottom-0" />
                            <div>
                                <img class="dark:hidden shadow-solid-l" src="./images/hero/hero-light.svg" alt="Héros" />
                                <img class="hidden dark:block shadow-solid-l" src="./images/hero/hero-dark.svg" alt="Héros" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
