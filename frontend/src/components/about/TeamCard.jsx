import React from 'react'

const TeamCard = ({ name, title, description, imageUrl, funFact }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-80 hover:shadow-xl transition-shadow duration-300">
            <img
                src={imageUrl}
                alt={name}
                className="w-full h-48 object-initial object-center"
            />
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
                <p className="text-md text-gray-500 mb-4">{title}</p>
                <p className="text-gray-600 text-base">{description}</p><br></br>
                <p className='italic'><strong>Fun Fact: </strong>"{funFact}"</p>
            </div>
        </div>
    );
};

export default TeamCard
