import React from 'react';
import img_1 from '../images/img_1.png';
import img_2 from '../images/img_2.png';
import img_3 from '../images/img_3.png';
import img_4 from '../images/img_4.png';
import img_5 from '../images/img_5.png';
import img_6 from '../images/img_6.png';
import img_7 from '../images/img_7.png';
import img_8 from '../images/img_8.png';
import img_9 from '../images/img_9.png';
import img_10 from '../images/img_10.png';
import { useEffect } from 'react';

const AiArtWork = () => {
    const imageLinks = [
        img_1,
        img_9,
        img_10,
        img_3,
        img_4,
        img_5,
        img_6,
        img_7,
        img_8,
        img_2,
        // Add more image links as needed
    ];
    useEffect( () => {
        window.scrollTo( 0, 0 );
    }, [] );

    return (
        <div className="py-16 bg-black min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="mb-8 text-4xl font-bold text-white">AI Artwork</h1>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {imageLinks.map( ( link, index ) => (
                        <div
                            key={index}
                            className="relative overflow-hidden p-4 rounded-md shadow-md bg-white"
                        >
                            <img
                                src={link}
                                alt={`AI Artwork ${ index + 1 }`}
                                className="w-full h-auto"
                                loading="lazy"
                            />
                        </div>
                    ) )}
                </div>
            </div>
        </div>
    );
};

export default AiArtWork;
