import React from 'react'
import TeamCard from './TeamCard';
const MeetOurTeam = () => {
    const teamMembers = [
        {
            name: 'Komalpreet Singh',
            title: 'Full Stack Developer',
            description: 'A skilled developer with expertise in both frontend and backend technologies. Komalpreet is passionate about creating secure and efficient web applications. Built the core architecture for the diary platform, ensuring a seamless connection between the frontend interface and the backend systems',
            imageUrl: 'Komal.png',
            funFact: 'Enjoys solving complex coding challenges and contributing to open-source projects.'
        },
        {
            name: 'Yi Wang',
            title: 'Backend Developer',
            description: 'Backend expert specializing in database management and server-side logic. Yi has a keen interest in building systems that prioritize privacy and security. Designed and implemented the secure storage and encryption mechanisms that protect users data on the diary platform by passwords.',
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f802150-66ea-43cc-8f5b-a0ceb24350ea/dggoozf-ddd62ef2-5b98-4947-a335-37e87485dafa.png/v1/fill/w_1184,h_675,q_70,strp/itachi_by_elffyie_dggoozf-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMwIiwicGF0aCI6IlwvZlwvMWY4MDIxNTAtNjZlYS00M2NjLThmNWItYTBjZWIyNDM1MGVhXC9kZ2dvb3pmLWRkZDYyZWYyLTViOTgtNDk0Ny1hMzM1LTM3ZTg3NDg1ZGFmYS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.bHNHl6_Z9rUJaqLO3IDq9xQHdkY8nAT0KViensoyrdM',
            funFact: 'Loves exploring new database technologies and brewing the perfect cup of coffee.'
        },
        {
            name: 'Fares',
            title: 'UI/UX Designe & Content Creator',
            description: 'A creative designer dedicated to crafting intuitive user interfaces and meaningful content. Fares combines a passion for design with a talent for storytelling to enhance user experiences.Designed the user-friendly interface of the diary platform and created engaging content that communicates its features and benefits.',
            imageUrl: 'https://i.pinimg.com/474x/f9/d3/07/f9d307dd8f7851f84425d1181751933c.jpg',
            funFact: 'An avid traveler who finds design inspiration in cultural experiences.'
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
                        funFact={member.funFact}
                    />
                ))}
            </div>
        </div>
    );
};
export default MeetOurTeam



