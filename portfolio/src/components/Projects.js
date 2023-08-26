import React from 'react';

const projectsData = [
  {
    id: 1,
    name: 'BoardPro+',
    imageSrc: 'https://camo.githubusercontent.com/42b5b898dc83fea96ab26cfaad090fbb3c6ff091e63bdbf17df96c7ae6d4a6e5/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f732f656b32373478386a30697a787534782f5472656c6c6f2532304d61696e253230506167652e706e673f646c3d30', // Replace with actual image URL
    techStacks: 'React, Tailwind CSS',
    description: 'A project description goes here.',
  },
  {
    id: 2,
    name: 'Swiggie - Food Ordering App',
    imageSrc: 'https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food.jpg', // Replace with actual image URL
    techStacks: 'React, Tailwind CSS, React router dom, Redux toolkit',
    description: 'Another project description.',
  },
  {
    id: 3,
    name: 'Portfolio Website',
    imageSrc: 'https://i.postimg.cc/XvjJjH6B/Screenshot-2023-08-26-at-5-03-07-PM.png', // Replace with actual image URL
    techStacks: 'React, Tailwind CSS, React router dom',
    description: 'Another project description.',
  },
  // Add more projects...
];

const Projects = () => {
  return (
    <div className="relative min-h-screen bg-black/90">
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
            </div>
          ) )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
