import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import CourseShowcase from './components/CourseShowcase.jsx';
import CTA from './components/CTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <Features />
      <CourseShowcase />
      <CTA />
      <footer className="py-10 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Skill Up. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
