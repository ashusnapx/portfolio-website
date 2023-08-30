import React from 'react';
import { FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    name: 'BoardPro+',
    imageSrc: 'https://camo.githubusercontent.com/42b5b898dc83fea96ab26cfaad090fbb3c6ff091e63bdbf17df96c7ae6d4a6e5/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f732f656b32373478386a30697a787534782f5472656c6c6f2532304d61696e253230506167652e706e673f646c3d30', // Replace with actual image URL
    techStacks: 'React, Tailwind CSS',
    // description: 'A project description goes here.',
    githubLink: 'https://github.com/ashusnapx/react-final-revision/tree/main/DAY%20-%204',
    liveLink:'https://boardpro-ashusnapx.vercel.app/'
  },
  {
    id: 2,
    name: 'Swiggie - Food Ordering App',
    imageSrc: 'https://i.postimg.cc/8zd9ntRC/Screenshot-2023-08-30-at-4-39-38-PM.png', // Replace with actual image URL
    techStacks: 'React, Tailwind CSS, React router dom, Redux toolkit',
    // description: 'Another project description.',
    githubLink: 'https://github.com/ashusnapx/react-final-revision/tree/main/DAY%20-%204',
    liveLink: 'https://swiggie.vercel.app/'
  },
  {
    id: 3,
    name: 'Portfolio Website',
    imageSrc: 'https://i.postimg.cc/mrLXp9yf/Screenshot-2023-08-30-at-4-44-36-PM.png', // Replace with actual image URL
    techStacks: 'React, Tailwind CSS, React router dom',
    // description: 'Another project description.',
    githubLink: 'https://github.com/ashusnapx/portfolio-website/tree/main/portfolio',
    liveLink: 'https://ashusnapx.vercel.app/'
  },
  {
    id: 4,
    name: 'Restaurant Website',
    imageSrc: 'https://i.postimg.cc/BQ7BZDJC/Screenshot-2023-08-30-at-4-43-05-PM.png', // Replace with actual image URL
    techStacks: 'HTML, CSS',
    // description: 'Another project description.',
    githubLink: 'https://github.com/ashusnapx/ashufoodlove.github.io',
    liveLink: 'https://ashusnapx.github.io/ashufoodlove.github.io/'
  },
  // Add more projects...
];

const Projects = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map( ( project ) => (
            <div key={project.id} className="bg-white rounded-md shadow-md p-4">
              <img
                src={project.imageSrc}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-500 mb-2">{project.techStacks}</p>
              <p className="text-gray-800">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live
                </a>
              </div>
            </div>
          ) )}
        </div>
      </div>
    </div>
  );
};

export default Projects;






