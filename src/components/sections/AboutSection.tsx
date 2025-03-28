"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCoffee, FiLayers, FiUsers } from 'react-icons/fi';

const features = [
  {
    name: 'Full-Stack Development',
    description:
      'Experienced in both frontend and backend technologies, with a focus on creating seamless user experiences.',
    icon: FiLayers,
  },
  {
    name: 'User-Centered Design',
    description:
      'Passionate about creating intuitive interfaces that prioritize user needs and accessibility.',
    icon: FiUsers,
  },
  {
    name: 'Clean Code',
    description:
      'Advocate for writing maintainable, scalable, and well-documented code following best practices.',
    icon: FiCode,
  },
  {
    name: 'Continuous Learning',
    description:
      'Always exploring new technologies and methodologies to enhance development skills and knowledge.',
    icon: FiCoffee,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm a passionate Software Engineer with 3 years of professional experience, specializing in web development and software solutions. My journey in tech began with a Computer Science degree, followed by hands-on experience at innovative startups and established companies.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I enjoy tackling complex problems and transforming ideas into elegant, functional applications. My approach combines technical expertise with creativity, ensuring solutions that are both robust and user-friendly.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                When I'm not coding, you can find me exploring hiking trails, reading tech blogs, or experimenting with new cooking recipes. I believe in continuous learning and staying updated with the latest industry trends.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800"
                >
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 text-white bg-primary-light rounded-md dark:bg-primary-dark">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 