import { motion } from 'framer-motion';
import { Cpu, Gamepad2, Globe, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const tracks = [
  {
    title: 'DeFi & Payments',
    description:
      'Build the next generation of financial primitives and payment rails.',
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
    gradient: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    title: 'Consumer Apps',
    description:
      'Create social, commerce, or utility apps that reach millions.',
    icon: <Globe className="h-8 w-8 text-blue-400" />,
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Gaming & Metaverse',
    description:
      'Immersive experiences powered by high-performance infrastructure.',
    icon: <Gamepad2 className="h-8 w-8 text-purple-400" />,
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Infrastructure',
    description: 'Tools, bridges, and protocols that power the ecosystem.',
    icon: <Cpu className="h-8 w-8 text-green-400" />,
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
];

export function Features() {
  return (
    <section id="tracks" className="relative bg-[#0e0e10] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Hackathon Tracks
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Choose your path and build innovative solutions across four key
            pillars.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-white/20 hover:bg-white/10'
              )}
            >
              <div
                className={cn(
                  'absolute -top-20 -right-20 h-[200px] w-[200px] rounded-full bg-gradient-to-br opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100',
                  track.gradient
                )}
              />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-fit rounded-xl border border-white/5 bg-white/10 p-3 backdrop-blur-sm">
                  {track.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {track.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-400">
                    {track.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
