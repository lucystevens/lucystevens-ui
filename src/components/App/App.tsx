import {Outlet, Link, useLocation} from "react-router-dom";
import './App.scss';
import React from "react";

export const App: React.FC = () => {

    let location = useLocation()
    let basePath = location.pathname.substring(1).split("/")[0]

    let links = [
        { to: "", text: "About me" },
        { to: "services", text: "Services" },
        { to: "projects", text: "Projects" },
        //{ to: "chat", text: "Let's Chat" }
    ]

  return (
        <div className="App">
            <div className="navbar">
                { links.map(link =>
                    <Link to={link.to}
                          key={link.to}
                          className={`navlink ${link.to === basePath? "active" : ""}`}>
                        {link.text}
                    </Link>
                )}
                <a className="navlink" href="mailto:lcm.stevens96@gmail.com" target="_blank" rel="noreferrer">
                    Let's Chat
                </a>
            </div>
            <Outlet />
        </div>
  );
}

export default App;

