"use client";

import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is a password-protected diary?",
            answer: "It's a digital application designed for secure journaling. It allows users to write, save, and organize personal entries while safeguarding them with a password. This ensures privacy and prevents unauthorized access to sensitive thoughts or information."
        },
        {
            question: "What  should I do if I forget my password? ",
            answer: "If you forget your password, click on the 'Forgot Password' option on the login screen. Follow the instructions to reset your password via email or SMS verification",
        },
        {
            question: "Can I access my diary from multiple devices?",
            answer: "Yes, you can access your diary from multiple devices. As long as you log in with your account credentials, your entries will be securely synced across all devices, allowing you to view and update your diary anytime, anywhere.",
        },
        {
            question: "Is my diary data encrypted for security?",
            answer: "Yes, your diary data is encrypted to ensure that your personal entries remain private and secure. We use advanced encryption methods to protect your information from unauthorized access.",
        },
        {
            question: "Can I delete my diary entries?",
            answer: "Yes, you can delete any diary entry at any time. Simply select the entry you wish to remove, and it will be permanently deleted from your account after confirmation.",
        },
    ];

    return (
        <div className="bg-gray-100 p-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <h2 className='text-center pb-10 text-5xl font-bold'>
                    Frequently Asked Questions
                </h2>
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

export default FAQ;
