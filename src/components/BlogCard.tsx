import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { Clock, ArrowRight } from 'lucide-react';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link to={`/blog/${post.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-4 text-charcoal/40 text-[10px] font-bold uppercase tracking-widest">
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-charcoal/20 rounded-full" />
          <span className="flex items-center gap-1"><Clock size={12} /> {post.readingTime}</span>
        </div>
        <h3 className="font-display font-bold text-xl text-primary group-hover:text-primary/70 transition-colors leading-tight">
          {post.title}
        </h3>
        <p className="text-charcoal/60 text-sm line-clamp-2 leading-relaxed">
          {post.description}
        </p>
        <div className="pt-2 flex items-center gap-2 text-xs font-bold text-primary group-hover:gap-4 transition-all">
          READ MORE <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}
