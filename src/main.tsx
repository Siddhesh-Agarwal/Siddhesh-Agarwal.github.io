import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import SocialLinks from './pages/SocialLinks';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/projects/",
        element: <Projects />,
    },
    {
        path: "/social-links/",
        element: <SocialLinks />,
    }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
