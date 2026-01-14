import { motion, AnimatePresence } from 'framer-motion';

import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const themes = {
  purple: {
    bg: '#000000', // Pure Black
    label: 'Purple',
    // Gradient from Violet to Indigo matching the logo style
    titleGradient: 'from-[#a78bfa] via-[#6366f1] to-[#a78bfa]',
    badgeStyle:
      'border-violet-500/50 bg-black text-[#a78bfa] font-mono tracking-widest',
    accentColor: 'text-[#a78bfa]',
    scrollBorder: 'border-violet-500/50',
    scrollDot: 'bg-violet-500',
    checkColor: 'text-violet-500',
    subtitleDropShadow: 'drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]',
  },
  black: {
    bg: '#000000',
    label: 'Black',
    titleGradient: 'from-gray-100 via-gray-400 to-gray-100',
    badgeStyle: 'border-white/20 bg-white/5 text-gray-200',
    accentColor: 'text-white',
    scrollBorder: 'border-white/20',
    scrollDot: 'bg-white',
    checkColor: 'text-white',
    subtitleDropShadow: 'drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]',
  },
  'dark-blue': {
    bg: '#020617',
    label: 'Dark Blue',
    titleGradient: 'from-cyan-100 via-blue-400 to-cyan-100',
    badgeStyle: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
    accentColor: 'text-blue-300',
    scrollBorder: 'border-blue-500/30',
    scrollDot: 'bg-blue-500',
    checkColor: 'text-blue-400',
    subtitleDropShadow: 'drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]',
  },
  green: {
    bg: '#000000', // Pure Black
    label: 'Green',
    titleGradient: 'from-green-500 via-green-200 to-green-500', // Matrix high-contrast green
    badgeStyle:
      'border-green-500/50 bg-black text-green-400 font-mono tracking-widest', // Added font-mono for terminal feel
    accentColor: 'text-green-400',
    scrollBorder: 'border-green-500/50',
    scrollDot: 'bg-green-500',
    checkColor: 'text-green-500',
    subtitleDropShadow: 'drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]', // Added font-mono
  },
};

type ThemeKey = keyof typeof themes;

export function CubeHero() {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('purple');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const theme = themes[currentTheme];

  return (
    <section
      className="relative h-screen w-full overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Theme Dropdown */}
      <div className="absolute top-24 right-6 z-50">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10"
          >
            {theme.label}
            <ChevronDown
              className={`h-4 w-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-white/10 bg-black/90 py-1 backdrop-blur-xl"
              >
                {(
                  Object.entries(themes) as [
                    ThemeKey,
                    (typeof themes)[ThemeKey],
                  ][]
                ).map(([key, t]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setCurrentTheme(key);
                      setIsDropdownOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/10 hover:text-white ${currentTheme === key
                        ? `bg-white/5 ${t.accentColor}`
                        : 'text-gray-300'
                      }`}
                  >
                    {t.label}
                    {currentTheme === key && (
                      <Check className={`ml-auto h-4 w-4 ${t.checkColor}`} />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Animated Hackathon Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/interactivecubes-IANiTeEwiG2mfl6MMeglicTI/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ width: '100%', height: '100%', border: 'none' }}
          className="h-full w-full"
        ></iframe>
      </div>

      {/* Content Overlay */}
      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
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
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold tracking-widest uppercase backdrop-blur-md transition-colors duration-500 ${theme.badgeStyle}`}
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
              className={`relative inline-block bg-gradient-to-r bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,255,255,0.2)] transition-all duration-700 ${theme.titleGradient}`}
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
            className={`mx-auto mb-10 max-w-2xl text-xl leading-relaxed font-medium text-white/90 transition-all duration-500 sm:text-2xl ${theme.subtitleDropShadow}`}
          >
            We take a snapshot of the 5-day average closing price.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="pointer-events-auto mb-10 flex flex-wrap justify-center gap-8"
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
          <div
            className={`h-10 w-6 rounded-full border-2 p-1 transition-colors duration-500 ${theme.scrollBorder}`}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`mx-auto h-2 w-2 rounded-full transition-colors duration-500 ${theme.scrollDot}`}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
