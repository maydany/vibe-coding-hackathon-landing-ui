import { motion } from 'framer-motion';
import { HackathonBackground } from './HackathonBackground';


export function Hero() {


  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0f0f1a]">
      {/* Animated Hackathon Background */}
      <div className="absolute inset-0 z-0">
        <HackathonBackground />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          {/* Event Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold tracking-widest text-purple-300 uppercase backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Feb 15 - 17, 2026 • Virtual
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <motion.span
              className="relative inline-block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]"
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

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto mb-10 max-w-2xl text-xl font-medium leading-relaxed text-purple-200/90 drop-shadow-[0_0_10px_rgba(192,132,252,0.3)] sm:text-2xl"
          >
            We take a snapshot of the 5-day average closing price.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-10 flex flex-wrap justify-center gap-8"
          >
            {[
              { value: '$100K', label: 'Prize Pool' },
              { value: '48hrs', label: 'To Ship' },
              { value: '2000+', label: 'Hackers' },
              { value: '50+', label: 'Mentors' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>




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
          <span className="text-xs tracking-wider text-gray-500 uppercase">
            Scroll
          </span>
          <div className="h-10 w-6 rounded-full border-2 border-purple-500/30 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mx-auto h-2 w-2 rounded-full bg-purple-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
