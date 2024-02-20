import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaNodeJs,
} from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { AiFillDatabase } from 'react-icons/ai';
import { CakeIcon, LucideGithub, LucideHammer, LucideInstagram, LucideLinkedin, LucideTwitter } from 'lucide-react';
import {
  SiPandas,
  SiPlotly,
  SiNumpy,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';

import {
  LucideBadge,
  LucideMousePointerClick,
  LucidePhoneCall,
} from 'lucide-react';

export const projectsData = [
  {
    id: 0,
    name: 'Know About Your Food',
    imageSrc:
      'https://i.postimg.cc/nz3zBkKx/Screenshot-2024-01-22-at-11-46-59-PM.png',
    techStacks: 'Python, Google Gemini Vision Pro, Streamlit',
    // description: 'A project description goes here.',
    githubLink: 'https://github.com/ashusnapx/know-the-ingredient',
    liveLink: 'https://know-your-food-ashusnapx.streamlit.app/',
  },
  {
    id: 0,
    name: 'AI Instagram Caption Generator',
    imageSrc:
      'https://i.postimg.cc/hjvk4njn/Screenshot-2024-01-22-at-3-42-41-PM.png',
    techStacks: 'Python, Google Gemini Vision Pro, Streamlit',
    // description: 'A project description goes here.',
    githubLink: 'https://github.com/ashusnapx/ai-instagram-caption',
    liveLink: 'https://ai-instagram-caption-ashusnapx.streamlit.app/',
  },
  {
    id: 1,
    name: 'AI Coal Mines Laws',
    imageSrc:
      'https://i.postimg.cc/6pGxntLp/Screenshot-2024-01-22-at-3-33-22-PM.png',
    techStacks: 'Python, Google Gemini Pro, Streamlit',
    // description: 'A project description goes here.',
    githubLink: 'https://github.com/ashusnapx/gemini-mining',
    liveLink: 'https://dgms-gemini-ashusnapx.streamlit.app/',
  },
  {
    id: 2,
    name: 'Chatbot',
    imageSrc:
      'https://i.postimg.cc/q7brn5HL/Screenshot-2024-01-21-at-11-18-23-AM.png', // Replace with actual image URL
    techStacks: 'Pyhton, Google Generative AI, Streamlit',
    // description: 'A project description goes here.',
    githubLink: 'https://github.com/ashusnapx/gemini-chatbot',
    liveLink: 'https://ashusnapx-gemini-chatbot-main-b5ybtn.streamlit.app/',
  },
  {
    id: 3,
    name: 'Airbnb Clone',
    imageSrc:
      'https://i.postimg.cc/nc7XGF4S/Screenshot-2023-10-07-at-1-03-54-AM.png', // Replace with actual image URL
    techStacks: 'React, Tailwind CSS, Supabase, OAuth',
    // description: 'A project description goes here.',
    githubLink: 'https://github.com/ashusnapx/airbnb-x-oyo',
    liveLink: 'https://airbnb-by-ashusnapx.vercel.app/',
  },
  {
    id: 4,
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
    id: 5,
    name: 'Youtube Playlist Checklist',
    imageSrc:
      'https://i.postimg.cc/Gpp3VdDC/Screenshot-2023-10-01-at-1-11-58-AM.png', // Replace with actual image URL
    techStacks: 'React, Tailwind CSS',
    // description: 'Another project description.',
    githubLink: 'https://github.com/ashusnapx/checklist-app',
    liveLink: 'https://youtube-playlist-checklist.vercel.app/',
  },
  {
    id: 6,
    name: 'Youtube Playlist Analytics',
    imageSrc:
      'https://i.postimg.cc/L6dbbDP4/Screenshot-2023-10-07-at-1-10-10-AM.png', // Replace with actual image URL
    techStacks: 'Python, Django, [Revamped UI]',
    // description: 'Another project description.',
    githubLink: 'https://github.com/ashusnapx/youtube-playlist-length',
    liveLink: 'https://yt-playlist-length-4nzq.onrender.com/',
  },
  {
    id: 7,
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
    id: 7,
    name: 'Restaurant Website',
    imageSrc:
      'https://i.postimg.cc/BQ7BZDJC/Screenshot-2023-08-30-at-4-43-05-PM.png', // Replace with actual image URL
    techStacks: 'HTML, CSS',
    // description: 'Another project description.',
    githubLink: 'https://github.com/ashusnapx/ashufoodlove.github.io',
    liveLink: 'https://ashusnapx.github.io/ashufoodlove.github.io/',
  },
];

export const linksData = [
  {
    name: 'Leetcode',
    link: 'https://leetcode.com/dollarSign/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/2560px-LeetCode_Logo_black_with_text.svg.png',
    description:
      'Contest rating: 1452 | Questions solved: 204+ | Contests given: 27 --> Its an online coding platform which offers various level problems. ',
  },
  {
    name: 'Coding Ninjas',
    link: 'https://www.codingninjas.com/studio/profile/ashusnapx',
    logo: 'https://asset.brandfetch.io/idQVGbrvGL/idFrWdCkB5.png',
    description:
      'Online coding and programming courses platform and i also worked as teaching assistant.',
  },
  {
    name: 'Github',
    link: 'https://github.com/ashusnapx',
    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png',
    description:
      'Web-based platform for version control and collaboration on software projects. Love this tool.',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ashusnapx/',
    logo: 'https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png',
    description:
      'Professional networking platform for connecting with colleagues and potential employers. ',
  },
  {
    name: 'X (Previously Twitter)',
    link: 'https://twitter.com/ashusnapx',
    logo: 'https://img.freepik.com/premium-vector/twitter-new-logo-twitter-x-twitter-logo-vinnitsa-ukraine-july-25-2023_230281-303.jpg?w=2000',
    description:
      'Love this platforms due to its networking capabilities. And i am very active here, beacause of people.',
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@ashusnapx',
    logo: 'https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png',
    description:
      'Blogging platform for sharing articles and stories on various topics. I love writing and express my thoughts while learning.',
  },
  {
    name: 'Hashnode',
    link: 'https://hashnode.com/@ashusnapx',
    logo: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1675531271955/ALEtNA1cM.png?auto=compress',
    description:
      'Community-driven platform for developers to write and share technical articles. ',
  },
  // ... (other links)
];

export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: LucideHammer,
    skills: [
      { icon: FaCode, label: 'C' },
      { icon: FaCode, label: 'C++' },
      { icon: FaPython, label: 'Python' },
      { icon: DiJavascript1, label: 'JavaScript' },
      { icon: TbBrandTypescript, label: 'Typescript' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: FaReact,
    skills: [
      { icon: FaHtml5, label: 'HTML/HTML5' },
      { icon: FaCss3Alt, label: 'CSS/CSS3' },
      { icon: FaReact, label: 'ReactJS' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend Development',
    icon: FaNodeJs,
    skills: [
      { icon: FaNodeJs, label: 'Node.js' },
      { icon: SiExpress, label: 'Express.js' },
      { icon: SiMongodb, label: 'MongoDB' },
      { icon: CakeIcon, label: 'Bun.js' },
    ],
  },
  {
    title: 'Data Analysis',
    icon: AiFillDatabase,
    skills: [
      { icon: SiNumpy, label: 'Numpy' },
      { icon: SiPandas, label: 'Pandas' },
      { icon: AiFillDatabase, label: 'Bokeh' },
      { icon: SiPlotly, label: 'Plotly' },
    ],
  },
];

export const navigationItems = [
  { to: '/skills', text: 'SKILLS', icon: LucideHammer },
  { to: '/projects', text: 'PROJECTS', icon: LucideBadge },
  {
    to: '/important-links',
    text: 'IMPORTANT LINKS',
    icon: LucideMousePointerClick,
  },
  // { to: '/qualifications', text: 'QUALIFICATIONS', icon: LucideSchool },
  { to: '/contact', text: 'CONTACT', icon: LucidePhoneCall },
];

export const socialMediaLinks = [
  {
    href: 'https://twitter.com/ashusnapx',
    icon: LucideTwitter,
    color: 'text-blue-400 hover:text-blue-500',
  },
  {
    href: 'https://instagram.com/ashusnapx',
    icon: LucideInstagram,
    color: 'text-pink-300 hover:text-pink-400',
  },
  {
    href: 'https://linkedin.com/in/ashusnapx',
    icon: LucideLinkedin,
    color: 'text-blue-400 hover:text-blue-500',
  },
  {
    href: 'https://github.com/ashusnapx',
    icon: LucideGithub,
    color: 'text-gray-500 hover:text-gray-600',
  },
];