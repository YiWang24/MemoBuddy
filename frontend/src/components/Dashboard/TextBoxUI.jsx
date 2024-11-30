import React, { useState } from 'react';

const TextBoxUI = () => {
    const [isVisible, setIsVisible] = useState(false); // State to toggle textbox visibility
    const [text, setText] = useState(''); // State to store textbox value

    const handleButtonClick = () => {
        setIsVisible(!isVisible); // Toggle visibility
    };

    const handleInputChange = (e) => {
        setText(e.target.value); // Update text state
    };

    return (
        <div className="app">
            {/* Button to show/hide the UI */}
            <button
                onClick={handleButtonClick}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                {isVisible ? 'Close' : 'Open Textbox'}
            </button>

            {/* Conditional rendering of the textbox UI */}
            {/* Conditional rendering of the centered textbox UI */}
            {isVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    {/* Popup UI */}
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
                        <label htmlFor="inputText" className="block text-gray-700 mb-2">
                            Enter Text:
                        </label>
                        <input
                            type="text"
                            id="inputText"
                            value={text}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-sm text-gray-600 mt-2">You typed: {text}</p>
                        {/* Close Button */}
                        <button
                            onClick={handleButtonClick}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 w-full"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TextBoxUI;
