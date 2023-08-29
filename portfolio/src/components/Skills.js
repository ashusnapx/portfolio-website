import React from 'react';
import { FaCode, FaHtml5, FaCss3Alt, FaReact, FaPython} from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { AiFillDatabase } from 'react-icons/ai';

const Skills = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-100">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Programming Languages</h2>
            <ul className="list-disc pl-6 text-gray-300">
              <li className="mb-2"><FaCode className="inline mr-2" /> C</li>
              <li className="mb-2"><FaCode className="inline mr-2" /> C++</li>
              <li className="mb-2"><FaPython className="inline mr-2" /> Python</li>
              <li><DiJavascript1 className="inline mr-2" /> JavaScript</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Front-End</h2>
            <ul className="list-disc pl-6 text-gray-300">
              <li className="mb-2"><FaHtml5 className="inline mr-2" /> HTML</li>
              <li className="mb-2"><FaCss3Alt className="inline mr-2" /> CSS</li>
              <li className="mb-2"><FaReact className="inline mr-2" /> ReactJS</li>
              <li><FaCss3Alt className="inline mr-2" /> Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Data Analysis</h2>
            <ul className="list-disc pl-6 text-gray-300">
              <li className="mb-2"><FaPython className="inline mr-2" /> Numpy</li>
              <li className="mb-2"><FaPython className="inline mr-2" /> Pandas</li>
              <li className="mb-2"><AiFillDatabase className="inline mr-2" /> Bokeh</li>
              <li><AiFillDatabase className="inline mr-2" /> Plotly</li>
            </ul>
          </div>
        </div>
        {/* ... */}
      </div>
    </div>
  );
};

export default Skills;
