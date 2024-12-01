"use client";
import React, { useEffect, useState } from 'react'

const Thoughts = () => {
    // Define an array with 100 thoughts
    const [thoughtNew, setThoughtNew] = useState()
    const thoughts = [
        "Be yourself; everyone else is already taken",
        "True friends stab you in the front.",
        "Be the change that you wish to see in the world.",
        "No one can make you feel inferior without your consent.",
        "Do one thing every day that scares you.",
        "Injustice anywhere is a threat to justice everywhere.",
        "The time is always right to do what is right.",
        "I have not failed. I've just found 10,000 ways that won't work.",
        "Life isn't about finding yourself. Life is about creating yourself.",
        "If you're going through hell, keep going.",
        "Peace begins with a smile.",
        "Everything you want is on the other side of fear"

    ];

    // Function to randomly pick a thought
    function getRandomThought(thoughtsArray) {
        const randomIndex = Math.floor(Math.random() * thoughtsArray.length);
        return thoughtsArray[randomIndex];
    }

    useEffect(() => {
        setThoughtNew(getRandomThought(thoughts))
        // console.log("Random Thought:", getRandomThought(thoughts));

    }, [])
    console.log(thoughtNew)
    // Test the function
    return (
        <div>
            {thoughtNew}
        </div>
    )
}

export default Thoughts
