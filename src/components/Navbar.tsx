import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, Compass, Feather, User, BookMarked } from 'lucide-react';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Compass },
    { name: 'Blog', path: '/blog', icon: Feather },
    { name: 'About', path: '/about', icon: User },
    { name: 'Resources', path: '/resources', icon: BookMarked },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-charcoal/5">
      <div className="section-container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-secondary font-display font-bold text-lg">
            S
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-primary">STRUCTRA</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary" : "text-charcoal/60"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
          <Link 
            to="/blog" 
            className="px-5 py-2.5 bg-primary text-secondary text-xs font-bold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/10"
          >
            START HERE
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg border-b border-charcoal/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 text-lg font-medium p-3 rounded-xl",
                    location.pathname === link.path ? "bg-primary text-secondary" : "text-charcoal/60 hover:bg-charcoal/5"
                  )}
                >
                  <link.icon size={20} />
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-charcoal/10 my-2" />
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-primary text-secondary text-center font-bold rounded-2xl"
              >
                BROWSE BLOG
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
