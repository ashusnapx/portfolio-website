import React, { lazy, Suspense } from 'react';
import './App.css';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy-loaded components
const Home = lazy(() => import('./components/Home'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Qualifications = lazy(() => import('./components/Qualifications'));
const Contact = lazy(() => import('./components/Contact'));
const ImportantLinks = lazy(() => import('./components/ImportantLinks'));
// const AiArtWork = lazy(() => import('./components/AiArtWork'));

function App() {
  return (
    <div className='bg-gray-100 min-h-screen antialiased grainy font-montserrat'>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/skills', element: <Skills /> },
      { path: '/projects', element: <Projects /> },
      // { path: '/qualifications', element: <Qualifications /> },
      { path: '/contact', element: <Contact /> },
      { path: '/important-links', element: <ImportantLinks /> },
    ],
  },
]);

export default appRouter;
