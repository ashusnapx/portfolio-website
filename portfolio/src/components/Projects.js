import { LucideProjector } from 'lucide-react';
import { useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProgressiveImage from 'react-progressive-graceful-image';
import { projectsData } from '../constants/constants';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='relative min-h-screen bg-gray-100'>
      <div className='container mx-auto py-12 px-4'>
        <div className='flex space-x-2 items-center justify-center'>
          <h1 className='text-4xl text-center font-bold text-black/50 mb-8'>
            Projects
          </h1>
          <LucideProjector className=' text-black/50 mb-8 w-10 h-9 ' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className='bg-white rounded-md shadow-md p-4 '
            >
              <img
                src={project.imageSrc}
                alt={project.name}
                className='w-full h-48 object-cover rounded-md mb-4 shadow-xl'
                decoding='async'
              />
              <h2 className='text-xl font-semibold mb-2 text-black'>
                {project.name}
              </h2>
              <p className='text-gray-500 mb-2'>{project.techStacks}</p>
              <p className='text-gray-800'>{project.description}</p>
              <div className='mt-4 flex space-x-4'>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'
                >
                  <FaGithub className='mr-2' /> GitHub
                </a>
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300'
                >
                  <FaExternalLinkAlt className='mr-2' /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
