import React from 'react'
import './ServicesPage.scss';

export const ServicesPage: React.FC = () => {

    const services = [
        {
            title: "Web development",
            description: "Whether you're looking for a sleek single-page app, or a feature-laden control panel, I can help you build the website you need.",
            icon: "fa-solid fa-globe"
        },
        {
            title: "API programming",
            description: "Got your UI sorted, but need some performant API services to do the heavy lifting? " +
                "From lightweight RESTful microservices, to complex data analytics jobs, I have the expertise to get your idea off the ground.",
            icon: "fa-solid fa-code"
        },
        {
            title: "Website Audit",
            description: "I offer a range of website auditing services, from user experience testing, to search engine optimisation reviews and security reports.",
            icon: "fa-solid fa-file-circle-check"
        }
    ]

    return (
        <div className="ServicesPage">
            <div className="services">
                { services.map(service =>
                    <div key={service.title} className="service">
                        <i className={service.icon}></i>
                        <h1 className="title">{service.title}</h1>
                        <p className="description">{service.description}</p>
                    </div>
                )}
            </div>
            <a className="get-in-touch" href="mailto:lcm.stevens96@gmail.com" target="_blank" rel="noreferrer">
                Get in touch today for a chat about your requirements.
            </a>
        </div>
    )

}