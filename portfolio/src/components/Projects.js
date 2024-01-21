import { LucideProjector } from 'lucide-react';
import { useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProgressiveImage from 'react-progressive-graceful-image';


const projectsData = [
  {
    id: 0,
    name: 'Chatbot',
    imageSrc:
      'https://i.postimg.cc/q7brn5HL/Screenshot-2024-01-21-at-11-18-23-AM.png', // Replace with actual image URL
    techStacks: 'Pyhton, Google Generative AI, Streamlit',
    // description: 'A project description goes here.',
    githubLink: 'https://github.com/ashusnapx/gemini-chatbot',
    liveLink: 'https://ashusnapx-gemini-chatbot-main-b5ybtn.streamlit.app/',
  },
  {
    id: 1,
    name: 'Airbnb Clone',
    imageSrc:
      'https://i.postimg.cc/nc7XGF4S/Screenshot-2023-10-07-at-1-03-54-AM.png', // Replace with actual image URL
    techStacks: 'React, Tailwind CSS, Supabase, OAuth',
    // description: 'A project description goes here.',
    githubLink: 'https://github.com/ashusnapx/airbnb-x-oyo',
    liveLink: 'https://airbnb-by-ashusnapx.vercel.app/',
  },
  {
    id: 2,
    name: 'Swiggie - Food Ordering App',
    imageSrc:
      'https://i.postimg.cc/8zd9ntRC/Screenshot-2023-08-30-at-4-39-38-PM.png', // Replace with actual image URL
    techStacks:
      'React, Tailwind CSS, React router dom, Redux toolkit, [Please enable CORS]',
    // description: 'Another project description.',
    githubLink:
      'https://github.com/ashusnapx/react-final-revision/tree/main/DAY%20-%204',
    liveLink: 'https://swiggie.vercel.app/',
  },
  {
    id: 3,
    name: 'Youtube Playlist Checklist',
    imageSrc:
      'https://i.postimg.cc/Gpp3VdDC/Screenshot-2023-10-01-at-1-11-58-AM.png', // Replace with actual image URL
    techStacks: 'React, Tailwind CSS',
    // description: 'Another project description.',
    githubLink: 'https://github.com/ashusnapx/checklist-app',
    liveLink: 'https://youtube-playlist-checklist.vercel.app/',
  },
  {
    id: 4,
    name: 'Youtube Playlist Analytics',
    imageSrc:
      'https://i.postimg.cc/L6dbbDP4/Screenshot-2023-10-07-at-1-10-10-AM.png', // Replace with actual image URL
    techStacks: 'Python, Django, [Revamped UI]',
    // description: 'Another project description.',
    githubLink: 'https://github.com/ashusnapx/youtube-playlist-length',
    liveLink: 'https://yt-playlist-length-4nzq.onrender.com/',
  },
  {
    id: 5,
    name: 'Portfolio Website',
    imageSrc:
      'https://i.postimg.cc/mrLXp9yf/Screenshot-2023-08-30-at-4-44-36-PM.png', // Replace with actual image URL
    techStacks: 'React, Tailwind CSS, React router dom',
    // description: 'Another project description.',
    githubLink:
      'https://github.com/ashusnapx/portfolio-website/tree/main/portfolio',
    liveLink: 'https://ashusnapx.vercel.app/',
  },
  {
    id: 6,
    name: 'Restaurant Website',
    imageSrc:
      'https://i.postimg.cc/BQ7BZDJC/Screenshot-2023-08-30-at-4-43-05-PM.png', // Replace with actual image URL
    techStacks: 'HTML, CSS',
    // description: 'Another project description.',
    githubLink: 'https://github.com/ashusnapx/ashufoodlove.github.io',
    liveLink: 'https://ashusnapx.github.io/ashufoodlove.github.io/',
  },
  // Add more projects...
];

const Projects = () => {
  useEffect( () => {
    window.scrollTo( 0, 0 );
  }, [] );

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="container mx-auto py-12 px-4">
        <div className='flex space-x-2 items-center justify-center'>
          <h1 className="text-4xl text-center font-bold text-black/50 mb-8">Projects</h1>
          <LucideProjector className=" text-black/50 mb-8 w-10 h-9 " />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map( ( project ) => (
            <div key={project.id} className="bg-white rounded-md shadow-md p-4 ">
              <ProgressiveImage
                delay={300}
                src={project.imageSrc}
                placeholder="tiny-image.jpg"
              >
                {( src, loading ) => (
                  <img
                    src={src}
                    alt={project.name}
                    loading={loading ? 'lazy' : 'eager'}
                    className="w-full h-48 object-cover rounded-md mb-4 shadow-xl"
                  />
                )}
              </ProgressiveImage>
              <h2 className="text-xl font-semibold mb-2 text-black">
                {project.name}
              </h2>
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






