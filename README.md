# bharathjg.github.io
# Personal Portfolio Website

A modern, responsive personal portfolio website for software engineers, built with Next.js, TypeScript, and Tailwind CSS. This website showcases skills, projects, a blog section, and provides contact information.

## Features

- ✅ Modern, responsive design
- ✅ Dark/Light mode toggle
- ✅ Interactive animations with Framer Motion
- ✅ Customizable sections: Hero, About, Skills, Projects, Blog, Contact
- ✅ Project details modal
- ✅ Interactive skill progress bars
- ✅ Contact form with validation
- ✅ SEO optimized
- ✅ TypeScript for type safety

## Demo

[Live Demo](#) (Coming soon)

## Screenshots

![Light Mode](screenshot-light.png)
![Dark Mode](screenshot-dark.png)

## Technologies Used

- **Next.js** - React framework for server-rendered applications
- **TypeScript** - Static typing for JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information

Edit your personal information in the following files:

1. **Hero Section**: Update your name, title, and introduction in `src/components/sections/HeroSection.tsx`

2. **About Section**: Modify your bio and features in `src/components/sections/AboutSection.tsx`

3. **Skills Section**: Change the skills categories and skill levels in `src/components/sections/SkillsSection.tsx`

4. **Projects Section**: Update project information in `src/components/sections/ProjectsSection.tsx`

5. **Blog Section**: Edit blog posts in `src/components/sections/BlogSection.tsx`

6. **Contact Section**: Update your contact information in `src/components/sections/ContactSection.tsx`

7. **Footer**: Change your social media links in `src/components/layout/Footer.tsx`

### Theme & Colors

Customize the theme colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        light: '#3B82F6', // Change this for the main color (light mode)
        dark: '#60A5FA'   // Change this for the main color (dark mode)
      },
      secondary: {
        light: '#6EE7B7', // Change this for the accent color (light mode)
        dark: '#34D399'   // Change this for the accent color (dark mode)
      },
      // Other colors...
    },
  }
}
```

### Images

1. Replace the default profile image with your own:
   - Add your image to `public/images/profile.jpg`

2. Replace project images:
   - Add your project screenshots to `public/images/project1.jpg`, `public/images/project2.jpg`, etc.

3. Replace blog post images:
   - Add your blog images to `public/images/blog1.jpg`, `public/images/blog2.jpg`, etc.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contact Form Setup

To make the contact form functional, you need to set up a backend service. Here are some options:

1. **Formspree**: A simple and free solution. Sign up at [Formspree.io](https://formspree.io) and update the form action in `src/components/sections/ContactSection.tsx`.

2. **Custom API Route**: If you prefer a custom solution, create an API route in Next.js:
   - Create a file `src/app/api/contact/route.ts`
   - Implement email sending using a service like Nodemailer or SendGrid
   - Update the form submission handler in `src/components/sections/ContactSection.tsx`

## License

[MIT License](LICENSE)

## Acknowledgements

- [Inter Font](https://fonts.google.com/specimen/Inter) - The font used throughout the website
- [Montserrat Font](https://fonts.google.com/specimen/Montserrat) - Used for headings
- [React Icons](https://react-icons.github.io/react-icons/) - For beautiful icons
- [Tailwind CSS](https://tailwindcss.com) - For the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - For the smooth animations 