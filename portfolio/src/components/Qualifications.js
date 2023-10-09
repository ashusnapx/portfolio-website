import { LucideSchool2 } from 'lucide-react';
import React, {useEffect} from 'react';


const qualificationsData = [
    {
        year: '2020 - 2024 (Expected) and 8.16 / 10 CGPA',
        institution: 'Jabalpur Engineering College, Jabalpur',
        description: 'Bachelor of Technology in Information Technology',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Jabalpur_Engineering_College_%28JEC%29%27s_logo.png', // Replace with actual image URL
    },
    {
        year: '2017 - 2019 and secured (beep-boop)%',
        institution: 'Lal Bahadur Shastri Sr. Sec. School, Kota',
        description: 'Completed class 12th - (PCM) ',
        imageSrc: 'https://pbs.twimg.com/profile_images/1295831328/Logo_LBS_Group_copy_400x400.jpg', // Replace with actual image URL
    },
    {
        year: '2012 - 2017 and secured 9.60 / 10 CGPA',
        institution: 'Delhi Public School, Vindhyanagar',
        description: 'Completed class 10th',
        imageSrc: 'https://www.dpsjhakri.com/images/dps_logo1.png', // Replace with actual image URL
    },
    // Add more qualifications...
];

const Qualifications = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 );
    }, [] );
    
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
                <div className='flex justify-center space-x-2'>
                    <h1 className="text-4xl font-bold text-black/50 mb-10">Qualifications</h1>
                    <LucideSchool2 className='w-10 h-10 text-black/50 mb-10'/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {qualificationsData.map( ( qualification, index ) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
                        >
                            <div className="w-20 h-20 mx-auto mb-4 relative overflow-hidden rounded-full">
                                {qualification.imageSrc && (
                                    <img
                                        src={qualification.imageSrc}
                                        alt={qualification.institution}
                                        className="object-cover w-full h-full"
                                    />
                                )}
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {qualification.institution}
                                </h3>
                                <p className="text-gray-600 mb-1">{qualification.year}</p>
                                <p className="text-gray-800">{qualification.description}</p>
                            </div>
                        </div>
                    ) )}
                </div>
            </div>
        </div>
    );
};

export default Qualifications;
