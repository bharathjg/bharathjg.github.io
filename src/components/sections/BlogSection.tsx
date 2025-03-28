"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Building Accessible Web Applications',
    excerpt: 'A comprehensive guide to creating web applications that are accessible to all users, regardless of ability or disability.',
    date: 'March 15, 2024',
    category: 'Web Development',
    image: '/images/blog1.jpg',
    url: '#',
  },
  {
    id: 2,
    title: 'React Performance Optimization Techniques',
    excerpt: 'Learn how to optimize your React applications for better performance with these practical techniques and best practices.',
    date: 'February 28, 2024',
    category: 'React',
    image: '/images/blog2.jpg',
    url: '#',
  },
  {
    id: 3,
    title: 'Introduction to TypeScript for JavaScript Developers',
    excerpt: 'A beginner-friendly guide to TypeScript, exploring its benefits and how it can improve your JavaScript development workflow.',
    date: 'January 20, 2024',
    category: 'TypeScript',
    image: '/images/blog3.jpg',
    url: '#',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <h2 className="section-title">From My Blog</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700">
                  {/* This is a placeholder for the image. In a real project, you'd use actual images */}
                  <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                    Blog Image
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <FiCalendar className="mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                
                <h3 className="mb-3 text-xl font-semibold">
                  <Link href={post.url} className="transition-colors hover:text-primary-light dark:hover:text-primary-dark">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={post.url}
                  className="inline-flex items-center text-sm font-medium text-primary-light transition-colors hover:text-blue-600 dark:text-primary-dark dark:hover:text-blue-400"
                >
                  <span>Read More</span>
                  <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="#" className="btn btn-primary">
            <span>View All Posts</span>
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
} 