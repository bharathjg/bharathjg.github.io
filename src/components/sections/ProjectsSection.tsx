"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with product catalog, user authentication, shopping cart, and payment integration.',
    image: '/images/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com/johndoe/ecommerce-platform',
    demo: 'https://ecommerce-platform-demo.vercel.app',
    features: [
      'User authentication and profile management',
      'Product search and filtering capabilities',
      'Shopping cart and checkout process',
      'Payment integration with Stripe',
      'Order tracking and history',
      'Admin dashboard for product management',
    ],
    longDescription: 'This e-commerce platform provides a complete solution for online stores, offering a seamless shopping experience. Built with a React frontend and Node.js backend, it includes features like user authentication, product catalog with search and filter options, shopping cart functionality, secure checkout with Stripe, and order tracking. The admin dashboard allows for easy management of products, orders, and user accounts.',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, task assignment, and progress tracking.',
    image: '/images/project2.jpg',
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/johndoe/task-management-app',
    demo: 'https://task-management-app-demo.vercel.app',
    features: [
      'User authentication with multiple sign-in methods',
      'Create, assign, and track tasks',
      'Real-time updates using Firebase',
      'Collaborative workspaces for teams',
      'Task filtering and sorting options',
      'Mobile-responsive design',
    ],
    longDescription: 'This task management application helps teams collaborate effectively by providing a centralized platform for task creation, assignment, and tracking. Built with React and TypeScript for type safety, it leverages Firebase for real-time database and authentication. The app features a clean, intuitive UI designed with Tailwind CSS, making it accessible on both desktop and mobile devices. Users can create workspaces, invite team members, assign tasks, and track progress in real-time.',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that provides real-time weather information, forecasts, and historical data visualization.',
    image: '/images/project3.jpg',
    tags: ['JavaScript', 'Vue.js', 'Chart.js', 'Weather API'],
    github: 'https://github.com/johndoe/weather-dashboard',
    demo: 'https://weather-dashboard-demo.vercel.app',
    features: [
      'Current weather conditions for any location',
      '7-day weather forecast',
      'Interactive charts for temperature, humidity, and wind',
      'Location search with autocomplete',
      'Save favorite locations',
      'Responsive design for all devices',
    ],
    longDescription: 'The Weather Dashboard provides users with comprehensive weather information for locations worldwide. Built with Vue.js and integrated with a third-party weather API, it displays current conditions, hourly updates, and a 7-day forecast. The application features interactive charts created with Chart.js to visualize temperature trends, precipitation probability, and other weather metrics. Users can search for locations, save favorites for quick access, and toggle between metric and imperial units.',
  },
  {
    id: 4,
    title: 'Fitness Tracker',
    description: 'A fitness tracking application that allows users to log workouts, track progress, and set fitness goals.',
    image: '/images/project4.jpg',
    tags: ['React Native', 'GraphQL', 'Node.js', 'MongoDB'],
    github: 'https://github.com/johndoe/fitness-tracker',
    demo: 'https://fitness-tracker-demo.vercel.app',
    features: [
      'Workout logging and tracking',
      'Progress visualization with charts',
      'Custom workout plan creation',
      'Goal setting and achievement tracking',
      'Integration with fitness wearables',
      'Nutrition tracking and recommendations',
    ],
    longDescription: 'This fitness tracking application helps users maintain a healthy lifestyle by providing tools to log workouts, track progress, and set fitness goals. Developed with React Native for cross-platform compatibility, it uses GraphQL for efficient data fetching and a Node.js backend with MongoDB for data storage. The app features interactive progress charts, customizable workout plans, and integration capabilities with popular fitness wearables. Additionally, it includes a nutrition tracker that provides dietary recommendations based on user goals.',
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  // Open project modal
  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  // Close project modal
  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700">
                  {/* This is a placeholder for the image. In a real project, you'd use actual images */}
                  <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                    Project Image
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{project.description}</p>
                
                <div className="flex flex-wrap mb-4 gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium text-primary-light bg-primary-light/10 rounded dark:text-primary-dark dark:bg-primary-dark/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="btn btn-primary text-sm py-2 px-4"
                  >
                    View Details
                  </button>
                  
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 text-gray-700 transition-colors bg-gray-100 rounded-full dark:text-gray-400 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                      aria-label="GitHub"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 text-gray-700 transition-colors bg-gray-100 rounded-full dark:text-gray-400 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl dark:bg-gray-800"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <h3 className="text-xl font-bold">{selectedProject.title}</h3>
              <button
                onClick={closeProjectModal}
                className="p-2 text-gray-600 rounded-full hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Project Image */}
              <div className="relative h-56 mb-6 overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-700">
                <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                  Project Image
                </div>
              </div>
              
              {/* Project Description */}
              <p className="mb-6 text-gray-700 dark:text-gray-300">{selectedProject.longDescription}</p>
              
              {/* Project Features */}
              <div className="mb-6">
                <h4 className="mb-3 text-lg font-semibold">Key Features</h4>
                <ul className="pl-5 space-y-2 list-disc">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="mb-3 text-lg font-semibold">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-medium text-primary-light bg-primary-light/10 rounded-full dark:text-primary-dark dark:bg-primary-dark/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>View Live Demo</span>
                  <FiExternalLink className="ml-2" />
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <span>View Code</span>
                  <FiGithub className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}