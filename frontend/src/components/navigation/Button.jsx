import React from 'react'

const Button = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 border-2 border-black  font-semibold rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600`}
        >
            {children}
        </button>

    )
}

export default Button
