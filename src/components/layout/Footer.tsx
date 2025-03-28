"use client";

import React from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/johndoe',
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/johndoe',
    icon: FiLinkedin,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/johndoe',
    icon: FiTwitter,
  },
  {
    name: 'Email',
    url: 'mailto:john.doe@example.com',
    icon: FiMail,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <Link href="/" className="text-xl font-bold font-heading">
              <span className="text-primary-light dark:text-primary-dark">John</span> Doe
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Software Engineer. Building digital experiences with passion and purpose.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="transition-colors text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 text-sm text-center text-gray-600 border-t border-gray-200 dark:text-gray-400 dark:border-gray-800">
          <p>© {currentYear} John Doe. All rights reserved.</p>
          <p className="mt-1">
            <span>Built with</span>{' '}
            <a 
              href="https://nextjs.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-primary-light dark:hover:text-primary-dark"
            >
              Next.js
            </a>{' '}
            <span>&</span>{' '}
            <a 
              href="https://tailwindcss.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-primary-light dark:hover:text-primary-dark"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
} 