import React from 'react';

const AboutBanner = () => {
    return (
        <div className="relative w-full min-h-[14rem] bg-gray-800">
            {/* Background image */}

            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 md:px-10">
                <div>
                    <p className="text-lg max-w-3xl mx-auto">
                        Our mission is to give you a digital journal that prioritizes privacy and security while offering a seamless, user-friendly experience.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;
