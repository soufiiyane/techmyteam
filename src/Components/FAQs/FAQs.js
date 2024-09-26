import React, { useState } from 'react';

const FAQs = () => {
  const [selected, setSelected] = useState(null);

  const toggleFAQ = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
      <div className="my-20"></div>
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 relative">
        <div className="absolute -bottom-7.5 -z-1">
          <img
            src="./images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
          />
          <img
            src="./images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="hidden dark:block"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap md:items-center gap-8 xl:gap-32.5">
          <div className="animate_left md:w-2/5 lg:w-1/2">
            <h4 className="text-black dark:text-white font-medium uppercase">
              OUR FAQS
            </h4>
            <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
              Frequently Asked
              <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
                Questions
              </span>
            </h2>
            <a
              href="#"
              className="flex items-center gap-2.5 text-black dark:text-white mt-25"
            >
              Know More
              <img
                className="dark:hidden"
                src="./images/icon/icon-arrow-light.svg"
                alt="Arrow"
              />
              <img
                className="hidden dark:block"
                src="./images/icon/icon-arrow-dark.svg"
                alt="Arrow"
              />
            </a>
          </div>

          <div className="animate_right md:w-3/5 lg:w-1/2">
            <div className="bg-white dark:bg-blacksection dark:border dark:border-strokedark shadow-solid-8 rounded-lg">
              <FAQItem
                index={0}
                selected={selected}
                toggleFAQ={toggleFAQ}
                question="Lorem ipsum dolor sit amet, consectetur."
                answer="We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences."
              />
              <FAQItem
                index={1}
                selected={selected}
                toggleFAQ={toggleFAQ}
                question="Lorem ipsum dolor sit amet, consectetur."
                answer="We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences."
              />
              <FAQItem
                index={2}
                selected={selected}
                toggleFAQ={toggleFAQ}
                question="Lorem ipsum dolor sit amet, consectetur."
                answer="We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ index, selected, toggleFAQ, question, answer }) => {
  const isSelected = selected === index;

  return (
    <div className={`flex flex-col border-b border-stroke dark:border-strokedark`}>
      <h4
        onClick={() => toggleFAQ(index)}
        className="cursor-pointer flex justify-between items-center font-medium text-metatitle3 text-black dark:text-white py-5 lg:py-7.5 px-6 lg:px-9"
      >
        {question}
        <img
          src="./images/icon/icon-plus-light.svg"
          alt="plus"
          className={`dark:hidden ${isSelected ? 'hidden' : 'block'}`}
        />
        <img
          src="./images/icon/icon-minus-light.svg"
          alt="minus"
          className={`dark:hidden ${isSelected ? 'block' : 'hidden'}`}
        />
        <img
          src="./images/icon/icon-plus-dark.svg"
          alt="plus"
          className={`hidden dark:block ${isSelected ? 'dark:hidden' : 'dark:block'}`}
        />
        <img
          src="./images/icon/icon-minus-dark.svg"
          alt="minus"
          className={`hidden dark:block ${isSelected ? 'dark:block' : 'dark:hidden'}`}
        />
      </h4>
      {isSelected && (
        <p className="py-5 lg:py-7.5 px-6 lg:px-9 border-t border-stroke dark:border-strokedark">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQs;
