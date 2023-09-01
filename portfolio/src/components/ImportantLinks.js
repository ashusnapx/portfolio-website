import React,{useEffect} from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const linksData = [
    {
        name: 'Leetcode',
        link: 'https://leetcode.com/dollarSign/',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/2560px-LeetCode_Logo_black_with_text.svg.png',
        description: 'Contest rating: 1452 | Questions solved: 204+ | Contests given: 27',
    },
    {
        name: 'Coding Ninjas',
        link: 'https://www.codingninjas.com/studio/profile/ashusnapx',
        logo: 'https://asset.brandfetch.io/idQVGbrvGL/idFrWdCkB5.png',
        description: 'Online coding and programming courses platform',
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ashusnapx/',
        logo: 'https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png',
        description: 'Professional networking platform for connecting with colleagues and potential employers.',
    },
    {
        name: 'X (Previously Twitter)',
        link: 'https://twitter.com/ashu_snapx',
        logo: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/x_twitter-sixteen_nine.jpg',
        description: 'Love this platforms due to its networking capabilities.',
    },
    {
        name: 'Medium',
        link: 'https://medium.com/@ashusnapx',
        logo: 'https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png',
        description: 'Blogging platform for sharing articles and stories on various topics.',
    },
    {
        name: 'Hashnode',
        link: 'https://hashnode.com/@ashusnapx',
        logo: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1675531271955/ALEtNA1cM.png?auto=compress',
        description: 'Community-driven platform for developers to write and share technical articles.',
    },
    {
        name: 'Github',
        link: 'https://github.com/ashusnapx',
        logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png',
        description: 'Web-based platform for version control and collaboration on software projects.',
    },
    // ... (other links)
];

const ImportantLinks = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 );
    }, [] );
    return (
        <div className="min-h-screen bg-black py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white mb-8">Important Links</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {linksData.map( ( link ) => (
                        <div key={link.name} className="bg-white rounded-md shadow-md flex flex-col overflow-hidden">
                            <div className="text-center py-4">
                                <img src={link.logo} alt={link.name} className="w-2/3 mx-auto" />
                            </div>
                            <div className="px-6 pb-6">
                                <h2 className="text-xl font-semibold mb-2">{link.name}</h2>
                                <p className="text-gray-500 mb-4">{link.description}</p>
                                <a
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                                >
                                    <FaExternalLinkAlt className="mr-2" /> Link to Open
                                </a>
                            </div>
                        </div>
                    ) )}
                </div>
            </div>
        </div>
    );
};

export default ImportantLinks;
