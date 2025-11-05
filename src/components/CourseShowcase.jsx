import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Full‑Stack Web in 30 Days',
    level: 'Beginner to Pro',
    color: 'from-emerald-500/20 via-emerald-500/10 to-transparent',
    tags: ['React', 'Node', 'APIs'],
  },
  {
    title: 'AI for Creators',
    level: 'Intermediate',
    color: 'from-purple-500/20 via-purple-500/10 to-transparent',
    tags: ['LLMs', 'Prompting', 'Agents'],
  },
  {
    title: '3D & Motion for Web',
    level: 'Advanced',
    color: 'from-cyan-500/20 via-cyan-500/10 to-transparent',
    tags: ['Three.js', 'Spline', 'Shaders'],
  },
];

const CourseCard = ({ title, level, color, tags }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
  >
    <div className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${color} opacity-60 blur-2xl transition duration-500 group-hover:opacity-80`} />
    <div className="relative z-10">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">{level}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>
      <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition group-hover:translate-x-0.5">
        Explore <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  </motion.div>
);

const CourseShowcase = () => {
  return (
    <section id="courses" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Featured Paths</h2>
        <p className="mt-3 text-zinc-400">Curated learning adventures designed to unlock your creative and technical superpowers.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
};

export default CourseShowcase;
