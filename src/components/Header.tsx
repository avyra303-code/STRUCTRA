import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const location = useLocation();
  
  return (
    <header className="h-20 border-b border-accent/20 flex items-center justify-between px-6 md:px-10 bg-white/50 backdrop-blur-md sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-primary"
        >
          <Menu size={24} />
        </button>
        <div className="hidden md:flex space-x-8 text-[11px] font-bold uppercase tracking-widest text-charcoal/40">
          <Link to="/blog" className={location.pathname === '/blog' ? 'text-primary' : 'hover:text-primary transition-colors'}>Productivity</Link>
          <Link to="/blog" className="hover:text-primary transition-colors">Routines</Link>
          <Link to="/blog" className="hover:text-primary transition-colors">Self-Improvement</Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/blog" className="btn-primary">
          Read Latest
        </Link>
      </div>
    </header>
  );
}
