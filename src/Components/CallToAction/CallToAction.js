import React from 'react';

const CallToAction = () => {
    return (
        <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
            <div
                className="mx-auto max-w-c-1390 px-7.5 md:px-12.5 xl:px-17.5 py-12.5 xl:py-0 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark"
            >
                <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-between gap-8 md:gap-0">
                    <div className="animate_left md:w-[70%] lg:w-1/2">
                        <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 w-11/12">
                            Join With Us Today & Increase Your Productivity
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
                        </p>
                    </div>
                    <div className="animate_right lg:w-[45%]">
                        <div className="flex items-center justify-end xl:justify-between">
                            <img
                                src="./images/shape/shape-06.svg"
                                alt="Saly"
                                className="hidden xl:block"
                            />
                            <a
                                href="signup.html"
                                className="inline-flex items-center gap-2.5 font-medium text-white dark:text-black bg-black dark:bg-white rounded-full py-3 px-6"
                            >
                                Sign up free
                                <img
                                    src="./images/icon/icon-arrow-dark.svg"
                                    alt="Arrow"
                                    className="dark:hidden"
                                />
                                <img
                                    src="./images/icon/icon-arrow-light.svg"
                                    alt="Arrow"
                                    className="hidden dark:block"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
