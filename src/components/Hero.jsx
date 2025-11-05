import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Cyber gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.25),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(16,185,129,0.15),transparent_50%)]" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center md:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-medium tracking-widest text-zinc-200">FUTURISTIC ELEARNING</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="mt-6 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text font-extrabold tracking-tight text-transparent"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
          >
            SKILL UP
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg"
          >
            Level up your future with immersive, interactive learning. Explore courses built for the next era of creators, developers, and innovators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="#courses"
              className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500/90 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <PlayCircle className="h-5 w-5 text-emerald-300" />
              Watch Demo
            </a>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
