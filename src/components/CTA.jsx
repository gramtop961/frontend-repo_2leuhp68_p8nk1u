import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 text-center backdrop-blur-xl md:p-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.25),transparent_50%)]" />
        <div className="relative z-10">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2">
            <Rocket className="h-4 w-4 text-emerald-300" />
            <span className="text-xs font-semibold tracking-wider text-emerald-200">LAUNCH YOUR JOURNEY</span>
          </div>
          <h3 className="mt-5 text-2xl font-bold text-white md:text-3xl">Join Skill Up today</h3>
          <p className="mx-auto mt-3 max-w-xl text-zinc-300">
            Start learning with animated lessons, 3D experiences, and community challenges.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
            >
              Get Started Free
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
