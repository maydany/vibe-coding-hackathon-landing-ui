import { motion } from 'framer-motion';
import { HackathonBackground } from './HackathonBackground';

export function HeroConcept2() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0f0f1a]">
      {/* Animated Hackathon Background */}
      <div className="absolute inset-0 z-0">
        <HackathonBackground />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Glass Container for text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl rounded-3xl border border-white/5 bg-black/20 p-12 backdrop-blur-sm"
        >
          {/* Event Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
             <span className="inline-flex items-center gap-3 rounded-full border border-purple-500/50 bg-purple-900/20 px-6 py-2 text-sm font-bold tracking-widest text-purple-200 uppercase shadow-[0_0_15px_rgba(168,85,247,0.3)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Feb 15 - 17, 2026 • Virtual
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-10 text-5xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <motion.span
              className="relative inline-block bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,85,247,0.6)]"
              animate={{
                backgroundPosition: ['0%', '200%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ backgroundSize: '200%' }}
            >
              Monad Hackathon
            </motion.span>
          </motion.h1>

          {/* Wrapper for Subtitle and Stats */}
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
             {/* System Log Subtitle */}
            {/* Snapshot Info - Glass Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative overflow-hidden rounded-full border border-purple-300/20 bg-white/5 px-8 py-3 backdrop-blur-md"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 opacity-50" />
              <p className="text-lg font-medium tracking-wide text-purple-100/90 sm:text-xl">
                We take a snapshot of the 5-day average closing price.
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div 
               initial={{ opacity: 0, width: 0 }}
               animate={{ opacity: 1, width: '100%' }}
               transition={{ delay: 0.6, duration: 0.8 }}
               className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
            />

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex w-full flex-wrap justify-between gap-8 px-4 font-mono"
            >
              {[
                { value: '$100K', label: 'PRIZE_POOL' },
                { value: '48HRS', label: 'TIME_LIMIT' },
                { value: '2000+', label: 'particp_count' },
                { value: '50+', label: 'MENTORS_ACTIVE' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-widest text-purple-400/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] text-purple-300/50 uppercase">
            Initialize Scroll
          </span>
          <div className="h-12 w-6 rounded-full border border-purple-500/20 bg-black/20 p-1 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mx-auto h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
