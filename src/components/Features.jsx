import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Brain, Sparkles, Shield } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Accelerated Learning',
    desc: 'Bite-sized lessons, hands-on projects, and real-world simulations to learn faster.',
    glow: 'from-emerald-400/20 to-transparent',
  },
  {
    icon: Brain,
    title: 'AI-Powered Guidance',
    desc: 'Personalized paths, smart feedback, and adaptive content tuned to your goals.',
    glow: 'from-purple-400/20 to-transparent',
  },
  {
    icon: Sparkles,
    title: 'Immersive 3D',
    desc: 'Interact with futuristic 3D scenes and visualizations that bring concepts to life.',
    glow: 'from-pink-400/20 to-transparent',
  },
  {
    icon: Shield,
    title: 'Verified Certificates',
    desc: 'Showcase your skills with verifiable certificates recognized by top teams.',
    glow: 'from-blue-400/20 to-transparent',
  },
];

const Features = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20" id="features">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Why Skill Up?</h2>
        <p className="mt-3 text-zinc-400">A platform engineered for the next generation of builders.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-5 backdrop-blur"
            >
              <div className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${f.glow} opacity-40 blur-2xl`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-5 w-5 text-emerald-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
