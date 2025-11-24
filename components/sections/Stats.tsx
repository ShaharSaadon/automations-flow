'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import AnimatedCounter from '../ui/AnimatedCounter';
import { Activity, Bot, Zap, Timer } from 'lucide-react';

const stats = [
  {
    icon: Bot,
    value: 50,
    suffix: '+',
    decimals: 0,
    label: 'Active AI Agents',
    description: 'Deployed in production',
    unit: 'agents',
  },
  {
    icon: Zap,
    value: 350,
    suffix: 'K+',
    decimals: 0,
    label: 'Messages Processed',
    description: 'Monthly volume',
    unit: 'messages',
  },
  {
    icon: Activity,
    value: 99.9,
    suffix: '%',
    decimals: 1,
    label: 'System Uptime',
    description: 'Enterprise reliability',
    unit: 'uptime',
  },
  {
    icon: Timer,
    value: 7,
    prefix: '<',
    suffix: 's',
    decimals: 0,
    label: 'Avg. Response Time',
    description: 'Lightning-fast processing',
    unit: 'seconds',
  },
];

const Stats = () => {
  return (
    <section className="section-overlay-light py-16 md:py-24 relative overflow-hidden border-y border-violet-100/60">
      {/* Subtle accent lines for visual separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-200/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-200/50 to-transparent pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header - Scalability Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-neutral-900 mb-4">
            Engineered for <span className="text-[#685bff]">Scale</span>
          </h2>
          <p className="text-neutral-500 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Our infrastructure is designed to handle enterprise workloads with bank-grade security and zero downtime.
          </p>
        </motion.div>

        {/* Stats Grid - Clean & Minimal */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-5 bg-gradient-to-br from-violet-100 to-purple-100 border border-violet-200 rounded-xl group-hover:border-violet-300 group-hover:shadow-md transition-all duration-300"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-violet-600" />
                </motion.div>
                <div className="text-xs md:text-sm text-violet-600 font-medium mb-3 px-2">
                  {stat.label}
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-display text-neutral-900 mb-2 group-hover:text-violet-700 transition-colors">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                    duration={2.5}
                  />
                </div>
                <div className="text-[10px] md:text-xs text-neutral-500 px-2">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
