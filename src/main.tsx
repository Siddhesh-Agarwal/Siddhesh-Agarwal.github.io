import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import ProjectsPage from './pages/Projects';
import HomePage from './pages/Home';
import SocialsPage from './pages/Socials';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/projects/",
        element: <ProjectsPage />
    },
    {
        path: "/social-links/",
        element: <SocialsPage />
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <Analytics />
        <SpeedInsights />
    </React.StrictMode>,
)
