import './App.css';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Qualifications from './components/Qualifications';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import ImportantLinks from './components/ImportantLinks';
import AiArtWork from './components/AiArtWork';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter( [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/skills', element: <Skills /> },
      { path: '/projects', element: <Projects /> },
      { path: '/qualifications', element: <Qualifications /> },
      { path: '/contact', element: <Contact /> },
      { path: '/imp-links', element: <ImportantLinks /> },
      {path:'/ai-artworks', element: <AiArtWork/>}
    ],
  },
] );

export default appRouter;
