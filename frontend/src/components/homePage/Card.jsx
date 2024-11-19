import React from 'react'

const Card = ({ title, para, icon, colScheme }) => {
    return (
        <div className="bg-white p-10 rounded-lg shadow-md text-center">
            <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full ${colScheme}`}>
                <i className={icon}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">
                {para}
            </p>
        </div>
    )
}

export default Card
