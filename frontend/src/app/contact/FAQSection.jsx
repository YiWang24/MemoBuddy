import React, { useState } from 'react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is your return policy?",
            answer: "We accept returns within 30 days of purchase. Items must be in their original condition.",
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to many countries worldwide. Shipping fees may vary depending on the destination.",
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive an email with the tracking information.",
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg shadow-sm bg-white"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left flex justify-between items-center p-4 focus:outline-none"
                            >
                                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 text-gray-500 transform transition-transform ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 text-gray-600 border-t border-gray-300">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
