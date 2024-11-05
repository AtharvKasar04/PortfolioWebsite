import React from 'react'
import "../assets/styles/projects.css";
import "../assets/fonts/fonts.css";
import ProjectCard from './ProjectCard';
import passGenImg from "../assets/images/passGen.jpg"
import quotesGeneratorImg from "../assets/images/quotesGenerator.jpg"
import weatherAppImg from "../assets/images/weatherAp.jpg"
import todoImg from "../assets/images/todoapp.jpg"
import guessCountryImg from "../assets/images/guesscountry.jpg"
import assignmentManagerImg from "../assets/images/assignment_manager.jpg"

const projects = [
    {
        image: assignmentManagerImg,
        name: "MERN Assignment Manager",
        description: "• A MERN Stack web-application to manage your assignments with state management features [Done, Doing, Pending]",
        githubLink: "https://github.com/AtharvKasar04/Assignment-Manager",
        techStack: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS']
    },
    {
        image: todoImg,
        name: "TO-DO list using LocalStorage functionality",
        description: "• A TODO app to track your TODOs with LocalStorage functionality to store the TODOs",
        githubLink: "https://github.com/AtharvKasar04/MET-SE-COM-TODO-LIST",
        techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"]
    },
    {
        image: guessCountryImg,
        name: "Guess the Country using its Flag game",
        description: "• A simple game where you have to guess the country by its Flag",
        githubLink: "https://30daysofjs.netlify.app/115%20-%20guess%20the%20country/",
        techStack: ["OpenSource Contribution", "HTML", "CSS", "JavaScript"]
    },
    {
        image: weatherAppImg,
        name: "Weather App using  OpenWeatherMap API",
        description: "• A weather app  which  displays  the weather data of a particular location using OpenWeatheMap  API",
        githubLink: "https://github.com/AtharvKasar04/Weather_App",
        techStack: ["HTML", "CSS", "JavaScript", "API"]
    },
    {
        image: quotesGeneratorImg,
        name: "Random  Quotes  generator",
        description: "• A  simple quotes generator which  generates a random quote when clickedd on generate button",
        githubLink: "https://github.com/AtharvKasar04/Random-quotes-generator",
        techStack: ["HTML", "CSS", "JavaScript"]
    },
    {
        image: passGenImg,
        name: "React Password generator",
        description: "• A simple password generator made using React JS which  with different options to generate the password",
        githubLink: "https://github.com/AtharvKasar04/React-Password-Generator",
        techStack: ["ReactJS"]
    }
]

function Projects() {
    return (
        <>
            <div className="main" id='projects-main'>
                <div className="cardContainer" id='projects'>
                    <h1>My Projects</h1>
                    <div className="cardsSection">
                        {
                            projects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    image={project.image}
                                    name={project.name}
                                    description={project.description}
                                    githubLink={project.githubLink}
                                    techStack={project.techStack}
                                />
                            ))
                        }
                    </div>

                    <div className="buttonSection">
                        <a href="https://github.com/AtharvKasar04?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <button className='viewAllProjectsButton'>View all Projects</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects