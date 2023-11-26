import { LucideExternalLink, LucideLink, LucideLink2, LucideMousePointerClick } from 'lucide-react';
import React, { useEffect } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const linksData = [
    {
        name: 'Leetcode',
        link: 'https://leetcode.com/dollarSign/',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/2560px-LeetCode_Logo_black_with_text.svg.png',
        description: 'Contest rating: 1452 | Questions solved: 204+ | Contests given: 27 --> Its an online coding platform which offers various level problems. ',
    },
    {
        name: 'Coding Ninjas',
        link: 'https://www.codingninjas.com/studio/profile/ashusnapx',
        logo: 'https://asset.brandfetch.io/idQVGbrvGL/idFrWdCkB5.png',
        description: 'Online coding and programming courses platform and i also worked as teaching assistant.',
    },
    {
        name: 'Github',
        link: 'https://github.com/ashusnapx',
        logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png',
        description: 'Web-based platform for version control and collaboration on software projects. Love this tool.',
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ashusnapx/',
        logo: 'https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png',
        description: 'Professional networking platform for connecting with colleagues and potential employers. ',
    },
    {
        name: 'X (Previously Twitter)',
        link: 'https://twitter.com/ashusnapx',
        logo: 'https://img.freepik.com/premium-vector/twitter-new-logo-twitter-x-twitter-logo-vinnitsa-ukraine-july-25-2023_230281-303.jpg?w=2000',
        description: 'Love this platforms due to its networking capabilities. And i am very active here, beacause of people.',
    },
    {
        name: 'Medium',
        link: 'https://medium.com/@ashusnapx',
        logo: 'https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png',
        description: 'Blogging platform for sharing articles and stories on various topics. I love writing and express my thoughts while learning.',
    },
    {
        name: 'Hashnode',
        link: 'https://hashnode.com/@ashusnapx',
        logo: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1675531271955/ALEtNA1cM.png?auto=compress',
        description: 'Community-driven platform for developers to write and share technical articles. ',
    },
    // ... (other links)
];

const ImportantLinks = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 );
    }, [] );
    return (
        <div className="bg-gray-100 min-h-screen py-16 flex flex-col">
            <div className="container mx-auto text-center">
                <div className='flex items-center justify-center space-x-2'>
                    <h1 className="text-4xl font-bold text-black/50 mb-10">Important Links</h1>
                    <LucideMousePointerClick className='w-10 h-9 text-black/50 mb-10'/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {linksData.map( ( link ) => (
                        <div key={link.name} className="bg-white rounded-md shadow-md p-6 flex flex-col">
                            <div className="h-20 mb-4 flex items-center justify-center">
                                <img src={link.logo} alt={link.name} className="h-full  p-1 rounded-md" />
                            </div>
                            <h2 className="text-xl font-semibold mb-2 text-black">{link.name}</h2>
                            <p className="text-gray-500 mb-4 line-clamp-3">{link.description}</p>
                            <a
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md justify-center hover:bg-blue-600 transition duration-300"
                            >
                                <LucideLink2 className='mr-2'/> Link to {link.name}'s profile
                            </a>
                        </div>
                    ) )}
                </div>
            </div>
        </div>
    );
};

export default ImportantLinks;
