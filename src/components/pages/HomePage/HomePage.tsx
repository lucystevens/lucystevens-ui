import React from 'react'
import './HomePage.scss'

export const HomePage: React.FC = () => {

    return (  
        <div className="HomePage">
            <div className="profile">
                <div className="image" 
                    style={{backgroundImage: "url('/images/lucy.png')"}}>
                </div>
                <div className="text">
                    <h1 className="name caps">Lucy Stevens</h1>
                    <h3 className="role caps">Full stack Software Engineer</h3>
                    <p className="subtitle">
                        An experienced full stack software engineer, specialising 
                        in designing and developing resilient systems using micro-services.
                    </p>
                    <div className="icons">
                        <a href="mailto:lcm.stevens96@gmail.com" target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a href="https://github.com/lucystevens" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>  
                        <a href="https://linkedin.com/in/lucycmstevens" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="/files/cv.pdf" download="Lucy Stevens CV.pdf">
                            <i className="fa-solid fa-download"></i>
                        </a>            
                    </div>

                </div>
            </div>

            <div className="section experience">
                <h2 className="title caps">Experience</h2>
                <div className="content">
                    <h5 className="title caps">
                        Senior Software Engineer • Unity (<i>merged from deltaDNA</i>) • July. 2018 - present
                    </h5>
                    <ul className="bullets">
                        <li>Oversaw the migration of key deltaDNA features to the new Unity Gaming Services platform.</li>
                        <li>Designed the architecture for the micro-service system powering customer charts and dashboards, using a federated pattern.</li>
                        <li>Implemented additional features allowing customers to directly query their data in our Snowflake warehouse using SQL in a web UI.</li>
                        <li>Technical owner for the deltaDNA campaign decision engine, a highly available service handling over 6000 requests per second, and implemented a successful migration in the analytics exports from VoltDB to Google Pub/Sub.</li>
                        <li>Worked on an initiative to discover, document and improve critical ETL tasks backing the analytics data platform.</li>
                    </ul>
                    <h5 className="title caps">
                        Software Developer • Ian Williams • Sept. 2016 - May 2018
                    </h5>
                    <ul className="bullets">
                        <li>Continued in a permanent position as a java software developer within the IT team following my software and web development apprenticeship.</li>
                        <li>Maintained and migrated legacy systems to a new framework, using Spring and Hibernate.</li>
                    </ul>
                </div>
            </div>

            <div className="section skills">
                <h2 className="title caps">Skills</h2>
                <div className="content">
                    <ul className="bullets">
                        <li>Significant experience building microservices and ETL tasks using Kotlin and other JVM languages.</li>
                        <li>Building functional websites for complex data interaction using React, Typescript, and Javascript.</li>
                        <li>Writing SQL queries to analyse large structured datasets in a performant manner.</li>
                        <li>Using data to identify, quantify, and design solutions for key customer problems.</li>
                        <li>Diligent in creating clear, detailed process and technical documentation, and sharing knowledge through the team via mentoring.</li>
                    </ul>
                </div>
            </div>

            <div className="section projects">
                <h2 className="title caps">Personal Projects</h2>
                <div className="content">
                    <h5 className="title caps">
                        Junction • Programmatic Reverse proxy • In Development
                    </h5>
                    <ul className="bullets">
                        <li>Created a programmatically updatable reverse proxy server designed to allow automation of deploys, without updating Apache or Haproxy configuration files.</li>
                        <li>Written in Kotlin, using Undertow as a HTTP server, with automatic SSL certificate renewal.</li>
                        <li>Proxied routes and domains updated on-the-fly via an API, and SSL certificates requested via an ACME server, for example LetsEncrypt</li>
                        <li>End-to-end integration tests use Pebble as a containerised acme server to verify the SSL renewal implementation.</li>
                    </ul>
                    <h5 className="title caps">
                        closetbrewingproject.co.uk • Website API & UI • Ongoing
                    </h5>
                    <ul className="bullets">
                        <li>Built website and backing API for Closet Brewing Project nanobrewery.</li>
						<li>Frontend written in Typescript using the React framework.</li>
						<li>Backing API written in Kotlin using Javalin as the HTTP server.</li>
						<li>Deployed using Docker containers which are automatically built and updated on the server using a GitHub actions CI/CD pipeline.</li>
                    </ul>
                </div>
            </div>

            <div className="section education">
                <h2 className="title caps">Education</h2>
                <div className="content">
                    <h5 className="title caps">
                        Apprenticeship
                    </h5>
                    <ul className="bullets">
                        <li>Level 3 Certificate in IT Systems & Principles</li>
						<li>L3 Diploma in IT Professional Competence</li>
                    </ul>
                    <h5 className="title caps">
                        A-Levels
                    </h5>
                    <ul className="bullets">
                        <li>Mathematics A*</li>
						<li>Physics A </li>
						<li>Further Mathematics B</li>
                    </ul>
                    <h5 className="title caps">
                        GCSEs
                    </h5>
                    <p className="body">
                        5 A*, 3 A and 2 B 
                    </p>
                </div>
            </div>

            <div className="section interests">
                <h2 className="title caps">Personal Interests</h2>
                <div className="content">
                    <p className="body">
                        Outside of the workplace I co-run a nano brewery,
                        Closet Brewing Project, with my partner. I started
                        home brewing in 2018, and gained our license to produce,
                        hold, and sell beer commercially in 2022. I love the
                        combination of creativity and scientific precision that
                        brewing requires, and we brew a variety of styles on a
                        semi-regular basis.
                    </p>

                    <p className="body">
                        I also enjoy a variety of outdoor activities including
                        kayaking down on Portobello beach, rock climbing in the
                        Highlands (and Islands), and cycling around Edinburgh’s
                        paths. I’m a huge fan of live music, and you’ll often find
                        me bobbing along in venues in Edinburgh and Glasgow.
                    </p>
                </div>
            </div>

        </div> 
    );

};