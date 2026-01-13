import { Github, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0e0e10] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold text-white">MONAD</span>
            <p className="text-sm text-gray-400">
              © 2026 Monad Labs. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Code of Conduct
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="rounded-full bg-white/5 p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-full bg-white/5 p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-full bg-white/5 p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
