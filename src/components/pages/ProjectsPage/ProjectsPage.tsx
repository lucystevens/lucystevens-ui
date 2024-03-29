import React from 'react'
import './ProjectsPage.scss';

export const ProjectsPage: React.FC = () => {

    const projects = [
        {
            name: "Junction",
            subtitle: "Open-source Programmatic Reverse Proxy",
            technologies: ["Kotlin", "Docker", "Gradle"],
            description:
                "Junction is an open-source proxy server, designed to allow easy deployment of services and automated SSL setup." +
                "Written in Kotlin, using Undertow as a HTTP server, and LetsEncrypt for automatic SSL certificate renewal.",
            link: {
                url: "https://github.com/lucystevens/junction",
                text: "View project on GitHub",
                icon: "fa-brands fa-github"
            }
        },
        {
            name: "Closet Brewing Project",
            subtitle: "Nanobrewery Website",
            technologies: ["React", "Typescript", "Kotlin"],
            description:
                "The website and backing API for the Closet Brewing Project nanobrewery. " +
                "The website UI is developed in Typescript using the React framework, and the backing API in Kotlin using Javalin as the HTTP server. " +
                "Deployed using Docker containers which are automatically built and updated on the server using a GitHub actions CI/CD pipeline.",
            link: {
                url: "https://closetbrewingproject.co.uk",
                text: "View project",
                icon: "fa-solid fa-arrow-up-right-from-square"
            }
        },
        {
            name: "Unity Gaming Services",
            subtitle: "Player Engagement and Analytics tools for Gaming",
            technologies: ["Kotlin", "Java", "Docker", "Kubernetes", "Google Cloud"],
            description:
                "Before going freelance, I spent almost 5 years building out best-in-class player engagement and analytics tools for Unity Technologies. " +
                "During my time there, I worked across a whole range of disciplines, from reporting on big data in Snowflake to developing a highly available decision engine, serving targeted content to thousands of players every second.",
            link: {
                url: "https://dashboard.unity3d.com/gaming/login",
                text: "Visit Unity Dashboard",
                icon: "fa-brands fa-unity"
            }
        }
    ]

    return (
        <div className="ProjectsPage">
            { projects.map((project, idx) =>
                <div className={`project ${idx%2===0?"left":"right"}`} key={project.name}>
                    <div className="heading">
                        <div className="title">
                            <h1 className="name">{ project.name }</h1>
                            <h3 className="subtitle">{ project.subtitle }</h3>
                        </div>
                        <div className="technology">
                            { project.technologies.map(chip =>
                                <div className="chip" key={chip}>{ chip }</div>
                            )}
                        </div>
                    </div>
                    <p className="description">{ project.description }</p>
                    <a className="project-link" href={ project.link.url } target="_blank" rel="noreferrer">
                        <h3>{ project.link.text } &nbsp;<i className={ project.link.icon }></i></h3>
                    </a>
                </div>
            )}
            <div className="filler"></div>
        </div>
    )

}