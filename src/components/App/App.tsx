import { Outlet, Link } from "react-router-dom";
import './App.scss';
import React from "react";

export const App: React.FC = () => {

  return (
        <div className="App">
            <Outlet />
            <div className="navbar">
                <Link to={"about"} className="navlink about">About me</Link>
                <Link to={"services"} className="navlink services">Services</Link>
                <Link to={"projects"} className="navlink projects">Projects</Link>
                <Link to={"chat"} className="navlink chat">Let's Chat</Link>
            </div>
        </div>
  );
}

export default App;

