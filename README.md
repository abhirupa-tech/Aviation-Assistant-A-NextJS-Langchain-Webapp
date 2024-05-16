A Parallax Based UX Effect creating Parallax with gsap in Nextjs.

Certainly! Let's get started with setting up Next.js, installing GSAP, and adding ScrollTrigger. Here are the step-by-step instructions:

1. **Setting Up Next.js**:
   - First, ensure you have Node.js 18.17 or later installed on your system.
   - To create a new Next.js app, open your terminal and run:
     ```
     npx create-next-app@latest
     ```
   - Follow the prompts to configure your project (e.g., project name, TypeScript, ESLint, Tailwind CSS, etc.). Next.js now ships with TypeScript, ESLint, and Tailwind CSS by default⁹.
   - Optionally, you can create a `src/` directory in your project to separate your application's code from configuration files.

2. **Manual Installation of Next.js** (if needed):
   - If you prefer manual installation, install the required packages:
     ```
     npm install next@latest react@latest react-dom@latest
     ```
   - Add the following scripts to your `package.json`:
     ```json
     {
       "scripts": {
         "dev": "next dev",
         "build": "next build",
         "start": "next start",
         "lint": "next lint"
       }
     }
     ```
   - Next.js uses file-system routing, so structure your files accordingly⁹.

3. **Installing GSAP**:
   - To install GSAP, use npm or yarn:
     ```
     npm install gsap
     ```
     or
     ```
     yarn add gsap
     ```

4. **Installing ScrollTrigger**:
   - ScrollTrigger is part of GSAP. You don't need to install it separately.
   - Register ScrollTrigger with GSAP in your code:
     ```javascript
     import { gsap } from 'gsap';
     import ScrollTrigger from 'gsap/ScrollTrigger';

     gsap.registerPlugin(ScrollTrigger);
     ```

5. **Using ScrollTrigger**:
   - Create animations linked to scroll events. For example:
     ```javascript
     gsap.to('.box', {
       scrollTrigger: '.box', // Start animation when .box enters the viewport
       x: 500, // Example animation property
     });
     ```
   - You can also create more advanced animations using timelines and labels⁵.

Remember to adjust the paths and configurations according to your project's needs. Happy coding! 🚀
