import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";import './index.css';
import {HomePage, ProjectsPage, ServicesPage} from "./components/pages";


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
                path: "/services",
                element: <ServicesPage />
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
