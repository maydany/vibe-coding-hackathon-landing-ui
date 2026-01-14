export type ThemeKey = 'purple' | 'black' | 'dark-blue' | 'green';

export interface ThemeConfig {
  bg: string;
  label: string;
  titleGradient: string;
  badgeStyle: string;
  accentColor: string;
  scrollBorder: string;
  scrollDot: string;
  checkColor: string;
  subtitleDropShadow: string;
  // Canvas specific
  wordShadow: string;
  wordColor: (opacity: number) => string;
  bgShadow: string;
  bgRgb: (opacity: number) => string;
}

export const themes: Record<ThemeKey, ThemeConfig> = {
  purple: {
    // UI
    bg: '#000000', // Pure Black
    label: 'Purple',
    titleGradient: 'from-[#a78bfa] via-[#6366f1] to-[#a78bfa]',
    badgeStyle:
      'border-violet-500/50 bg-black text-[#a78bfa] font-mono tracking-widest',
    accentColor: 'text-[#a78bfa]',
    scrollBorder: 'border-violet-500/50',
    scrollDot: 'bg-violet-500',
    checkColor: 'text-violet-500',
    subtitleDropShadow: 'drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]',
    // Canvas
    wordShadow: '#a78bfa', // Violet-400 glow
    wordColor: (opacity: number) => `rgba(139, 92, 246, ${opacity})`, // Violet-500
    bgShadow: '#4c1d95',
    bgRgb: (opacity: number) => {
      const r = Math.floor(120 + opacity * 100);
      const g = Math.floor(70 + opacity * 80);
      const b = Math.floor(200 + opacity * 55);
      return `rgba(${r}, ${g}, ${b}, ${opacity * 0.9})`;
    },
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
    // Canvas
    wordShadow: '#ffffff', // White Glow
    wordColor: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
    bgShadow: '#cccccc',
    bgRgb: (opacity: number) => {
      const v = Math.floor(90 + opacity * 100);
      return `rgba(${v}, ${v}, ${v}, ${opacity * 0.8})`;
    },
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
    // Canvas
    wordShadow: '#60a5fa', // Blue-400 Glow
    wordColor: (opacity: number) => `rgba(59, 130, 246, ${opacity})`,
    bgShadow: '#1e40af',
    bgRgb: (opacity: number) => {
      const r = Math.floor(40 + opacity * 40);
      const g = Math.floor(80 + opacity * 60);
      const b = Math.floor(140 + opacity * 115);
      return `rgba(${r}, ${g}, ${b}, ${opacity * 0.8})`;
    },
  },
  green: {
    bg: '#000000', // Pure Black
    label: 'Green',
    titleGradient: 'from-green-500 via-green-200 to-green-500',
    badgeStyle:
      'border-green-500/50 bg-black text-green-400 font-mono tracking-widest',
    accentColor: 'text-green-400',
    scrollBorder: 'border-green-500/50',
    scrollDot: 'bg-green-500',
    checkColor: 'text-green-500',
    subtitleDropShadow: 'drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]',
    // Canvas
    wordShadow: '#00ff41', // Matrix Neon Green Glow
    wordColor: (opacity: number) => `rgba(34, 197, 94, ${opacity})`,
    bgShadow: '#008f11',
    bgRgb: (opacity: number) => {
      const g = Math.floor(100 + opacity * 155);
      return `rgba(0, ${g}, 0, ${opacity * 0.9})`;
    },
  },
};
