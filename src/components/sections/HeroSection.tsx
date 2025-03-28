"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen py-20 flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background-light to-white/70 dark:from-background-dark dark:to-black/70 z-10" />
        <div className="absolute top-[-20%] right-[-10%] w-3/4 h-3/4 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-[-20%] left-[-10%] w-3/4 h-3/4 bg-secondary-light/10 dark:bg-secondary-dark/10 rounded-full blur-3xl z-0" />
      </div>
      
      <div className="container relative z-20">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-primary-light dark:text-primary-dark">John Doe</span>
            </h1>
            <h2 className="mb-6 text-2xl font-medium text-gray-700 md:text-3xl dark:text-gray-300">
              Software Engineer
            </h2>
            <p className="max-w-lg mb-8 text-lg text-gray-600 dark:text-gray-400">
              Passionate about creating clean, efficient code and developing impactful software solutions. 
              With 3 years of professional experience building web applications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <FiArrowRight className="ml-2" />
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <span>Download Resume</span>
                <FiDownload className="ml-2" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 overflow-hidden border-4 border-white rounded-full shadow-xl md:w-80 md:h-80 dark:border-gray-800">
              <img
                src="/images/profile.jpg"
                alt="John Doe"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 