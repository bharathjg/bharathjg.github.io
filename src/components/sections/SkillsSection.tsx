"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiServer, FiDatabase, FiTool } from 'react-icons/fi';

// Skill categories with their respective skills
const skillCategories = [
  {
    name: 'Frontend',
    icon: FiLayers,
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Vue.js', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Sass/SCSS', level: 80 },
    ],
  },
  {
    name: 'Backend',
    icon: FiServer,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'Django', level: 65 },
      { name: 'GraphQL', level: 75 },
      { name: 'REST API', level: 90 },
      { name: 'Authentication', level: 85 },
    ],
  },
  {
    name: 'Database',
    icon: FiDatabase,
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Redis', level: 65 },
      { name: 'Firebase', level: 75 },
      { name: 'Prisma', level: 70 },
    ],
  },
  {
    name: 'Tools & Others',
    icon: FiTool,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 75 },
      { name: 'AWS', level: 65 },
      { name: 'Testing', level: 80 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Agile/Scrum', level: 80 },
    ],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);
  
  const currentCategory = skillCategories.find((category) => category.name === activeCategory);
  
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:gap-4">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              className={`flex items-center px-4 py-2 transition-colors rounded-full ${
                activeCategory === category.name
                  ? 'bg-primary-light text-white dark:bg-primary-dark'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills Display */}
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="mb-8 text-2xl font-semibold text-center">
            <span className="mr-2">{activeCategory}</span>
            <span className="text-primary-light dark:text-primary-dark">Skills</span>
          </h3>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {currentCategory?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="h-2 rounded-full bg-primary-light dark:bg-primary-dark"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 