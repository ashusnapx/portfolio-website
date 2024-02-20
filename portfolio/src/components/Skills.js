import React, { useEffect } from 'react';
import { skillCategories } from '../constants/constants';
import { LucideHammer } from 'lucide-react';

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-gray-100 text-gray-800 overflow-hidden'>
      <div className='container mx-auto py-16'>
        <div className='flex items-center justify-center'>
          <h1 className='text-4xl font-bold mb-8 text-black/50 text-center'>
            My Skills
          </h1>
          <LucideHammer className='text-4xl font-bold mb-8 text-black/50 text-center w-10 h-8' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillCategories.map((category, index) => (
            <div key={index} className='bg-white/40 p-6 rounded-lg shadow-md'>
              <h2 className='text-2xl font-semibold mb-4 text-indigo-600'>
                {category.title}
              </h2>
              <ul className='list-disc pl-6 text-gray-800'>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className='mb-2 flex items-center'>
                    {React.createElement(skill.icon, { className: 'mr-2' })}
                    {skill.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
