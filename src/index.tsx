import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";import './index.css';
import {HomePage, ProjectsPage} from "./components/pages";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "/about",
                element: <h1>About</h1>
            },
            {
                path: "/services",
                element: <h1>Services</h1>
            },
            {
                path: "/projects",
                element: <ProjectsPage />
            }
        ]
    }

]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
  document.getElementById('root')
);
