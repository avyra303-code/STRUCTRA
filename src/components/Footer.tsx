import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary font-display font-bold text-xl">
                S
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">STRUCTRA</span>
            </Link>
            <p className="text-white/60 max-w-sm leading-relaxed mb-8">
              Building systems for the disciplined creator. Minimalist productivity, routines, and aesthetic lifestyles.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-white/60 hover:text-secondary transition-colors inline-flex items-center gap-1 group">Blog <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/resources" className="text-white/60 hover:text-secondary transition-colors inline-flex items-center gap-1 group">Resources <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-secondary transition-colors inline-flex items-center gap-1 group">About <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-secondary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-secondary transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-white/40 text-sm font-medium">
            © {new Date().getFullYear()} Structra. Designed for clarity & discipline.
          </p>
          <div className="flex items-center gap-6">
             <span className="text-white/20 text-[10px] tracking-[0.3em] font-bold uppercase">Stay Focused</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
