import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[#0e0e10] text-center">
      <h1 className="mb-12 text-4xl font-bold tracking-tight text-white md:text-6xl">
        Select Concept
      </h1>
      
      <div className="flex flex-col gap-8 md:flex-row">
        <Link to="/concept-1">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex h-64 w-64 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-purple-500/50"
          >
             <h2 className="text-2xl font-bold text-white group-hover:text-purple-400">Concept 1</h2>
             <p className="mt-2 text-sm text-gray-400">Original Design</p>
          </motion.div>
        </Link>

        <Link to="/concept-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex h-64 w-64 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-green-500/50"
          >
             <h2 className="text-2xl font-bold text-white group-hover:text-green-400">Concept 2</h2>
             <p className="mt-2 text-sm text-gray-400">System Log Style</p>
          </motion.div>
        </Link>
        
        <Link to="/concept-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex h-64 w-64 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-purple-500/50"
          >
             <h2 className="text-2xl font-bold text-white group-hover:text-purple-400">Concept 3</h2>
             <p className="mt-2 text-sm text-gray-400">Clone of C1</p>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
