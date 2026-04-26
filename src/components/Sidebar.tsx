import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Compass, Feather, User, BookMarked, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Sidebar({ isOpen, onClose }: { isOpen?: boolean, onClose?: () => void }) {
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/', id: '01', icon: Compass },
    { name: 'BLOG', path: '/blog', id: '02', icon: Feather },
    { name: 'RESOURCES', path: '/resources', id: '03', icon: BookMarked },
    { name: 'ABOUT', path: '/about', id: '04', icon: User },
  ];

  const content = (
    <div className="h-full flex flex-col p-8 justify-between bg-primary text-bg">
      <div>
        <div className="mb-12 relative">
          {onClose && (
            <button onClick={onClose} className="absolute -top-2 -right-2 p-2 md:hidden">
              <X size={20} />
            </button>
          )}
          <h1 className="text-2xl font-serif font-semibold tracking-tighter uppercase mb-1">Structra</h1>
          <p className="text-[10px] tracking-[0.2em] opacity-50 font-bold uppercase transition-opacity">Systems for Growth</p>
        </div>

        <nav className="space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={cn(
                "block text-sm font-medium tracking-wide transition-all group",
                location.pathname === link.path 
                  ? "border-b border-secondary/20 pb-2 text-white" 
                  : "opacity-50 hover:opacity-100"
              )}
            >
              <span className="text-[10px] mr-3 opacity-30 group-hover:opacity-60 transition-opacity">{link.id} —</span>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/5">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-3 opacity-70">The Mission</h3>
        <p className="text-xs leading-relaxed opacity-60">
          A focused space for disciplined creators. We design systems to bridge the gap between where you are and where you want to be.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-72 h-screen sticky top-0 flex-shrink-0 flex-col overflow-y-auto">
        {content}
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={onClose} />
          <motion.aside 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute left-0 top-0 bottom-0 w-72 shadow-2xl"
          >
            {content}
          </motion.aside>
        </div>
      )}
    </>
  );
}
