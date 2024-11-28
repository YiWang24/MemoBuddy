import React from 'react'
import TeamCard from './TeamCard';
const MeetOurTeam = () => {
    const teamMembers = [
        {
            name: 'Komalpreet Singh',
            title: 'role',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia ex sed velit vehicula, at fermentum augue sollicitudin. Integer cursus, nunc sed feugiat vestibulum, justo lacus hendrerit ante, eget euismod lorem mi at nulla. Curabitur pretium risus id nunc ullamcorper, a pretium nunc suscipit. Nulla facilisi. Sed vehicula sapien vitae risus egestas, sit amet luctus metus iaculis. Suspendisse potenti',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            name: 'Yi Wang',
            title: 'role',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia ex sed velit vehicula, at fermentum augue sollicitudin. Integer cursus, nunc sed feugiat vestibulum, justo lacus hendrerit ante, eget euismod lorem mi at nulla. Curabitur pretium risus id nunc ullamcorper, a pretium nunc suscipit. Nulla facilisi. Sed vehicula sapien vitae risus egestas, sit amet luctus metus iaculis. Suspendisse potenti',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            name: 'Fares',
            title: 'role',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia ex sed velit vehicula, at fermentum augue sollicitudin. Integer cursus, nunc sed feugiat vestibulum, justo lacus hendrerit ante, eget euismod lorem mi at nulla. Curabitur pretium risus id nunc ullamcorper, a pretium nunc suscipit. Nulla facilisi. Sed vehicula sapien vitae risus egestas, sit amet luctus metus iaculis. Suspendisse potenti',
            imageUrl: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div className="py-12 px-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Team</h2>
            <div className="flex justify-center gap-8 flex-wrap">
                {teamMembers.map((member, index) => (
                    <TeamCard
                        key={index}
                        name={member.name}
                        title={member.title}
                        description={member.description}
                        imageUrl={member.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};
export default MeetOurTeam



