import React, { useState } from 'react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What is Focus Stacking?',
      answer: 'Focus stacking is a technique designed to achieve a deep depth of field by blending (or stacking) several images together. Each stacked shot is focused in a different spot, so the combined depth of field is deeper than the depth of field produced by any of the individual images. Macro and product photographers often use the technique to control which elements are in focus, but it also works well for landscape scenes.'
    },
    {
      question: 'Why do you need Focus Stacking Software?',
      answer: 'Focus stacking software helps automate the blending process and ensures precise alignment and seamless merging of the images, resulting in a final image with a greater depth of field.'
    },
    {
      question: 'How to do Focus Stacking in Luminar Neo?',
      answer: 'In Luminar Neo, focus stacking can be performed by importing your set of images and using the focus stacking tool to blend them together, adjusting settings to achieve the desired depth of field.'
    },
    {
      question: 'How does focus stacking software improve macro and landscape photography?',
      answer: 'Focus stacking software allows photographers to achieve sharp focus across the entire image, which is particularly useful in macro and landscape photography where depth of field is crucial.'
    },
    {
      question: 'Can I use this focus stacking software for Mac and Windows?',
      answer: 'Yes, the focus stacking software is available for both Mac and Windows operating systems.'
    },
    {
      question: 'What file formats are supported by the photo stacking software, and can I edit RAW files directly?',
      answer: 'The photo stacking software supports various file formats, including RAW files, allowing you to edit them directly.'
    },
    {
      question: 'Can I use focus stacking software for astrophotography or night sky images?',
      answer: 'Yes, focus stacking software can be used for astrophotography and night sky images to achieve sharp focus across the entire scene.'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black-100 p-6 min-h-screen flex items-center justify-center ">
      <div className="max-w-4xl mx-auto bg-gray p-8 rounded-lg shadow-lg border-2 border-yellow-400">
        <h1 className="text-4xl font-bold mb-6 text-center text-white ">Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`mb-4 p-4 rounded-lg shadow-yellow transition-all duration-300 ${openIndex === index ? 'bg-yellow-100' : 'bg-white'}`}
          >
            <h2
              className="text-lg font-semibold mb-2 cursor-pointer flex justify-between items-center"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                {openIndex === index ? '▲' : '▼'}
              </span>
            </h2>
            {openIndex === index && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
