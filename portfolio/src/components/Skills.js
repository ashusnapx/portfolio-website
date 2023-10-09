import React, { useEffect } from 'react';
import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaNodeJs,
  FaServer,
  FaDatabase
} from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { AiFillDatabase } from 'react-icons/ai';
import { LucideHammer } from 'lucide-react';

const Skills = () => {
  useEffect( () => {
    window.scrollTo( 0, 0 );
  }, [] );

  return (
    <div className="bg-gray-100 text-gray-800 overflow-hidden">
      <div className="container mx-auto py-16">
        <div className='flex items-center justify-center'>
          <h1 className="text-4xl font-bold mb-8 text-black/50 text-center">
            My Skills
          </h1>
          <LucideHammer className="text-4xl font-bold mb-8 text-black/50 text-center w-10 h-8" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/40 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
              Programming Languages 
            </h2>
            <ul className="list-disc pl-6 text-gray-800">
              <li className="mb-2 flex items-center">
                <FaCode className="mr-2" /> C
              </li>
              <li className="mb-2 flex items-center">
                <FaCode className="mr-2" /> C++
              </li>
              <li className="mb-2 flex items-center">
                <FaPython className="mr-2" /> Python
              </li>
              <li className="flex items-center">
                <DiJavascript1 className="mr-2" /> JavaScript
              </li>
            </ul>
          </div>
          <div className="bg-white/40  p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Frontend Development</h2>
            <ul className="list-disc pl-6 text-gray-800">
              <li className="mb-2"><FaHtml5 className="inline mr-2" /> HTML/HTML5</li>
              <li className="mb-2"><FaCss3Alt className="inline mr-2" /> CSS/CSS3</li>
              <li className="mb-2"><FaReact className="inline mr-2" /> ReactJS</li>
              <li><FaCss3Alt className="inline mr-2" /> Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-white/40 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Backend Development</h2>
            <ul className="list-disc pl-6 text-gray-800">
              <li className="mb-2"><FaNodeJs className="inline mr-2" /> Node.js</li>
              <li className="mb-2"><FaServer className="inline mr-2" /> Express.js</li>
              <li className="mb-2"><FaDatabase className="inline mr-2" /> MongoDB</li>
            </ul>
          </div>
          <div className="bg-white/40 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Data Analysis</h2>
            <ul className="list-disc pl-6 text-gray-800">
              <li className="mb-2"><FaPython className="inline mr-2" /> Numpy</li>
              <li className="mb-2"><FaPython className="inline mr-2" /> Pandas</li>
              <li className="mb-2"><AiFillDatabase className="inline mr-2" /> Bokeh</li>
              <li><AiFillDatabase className="inline mr-2" /> Plotly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
