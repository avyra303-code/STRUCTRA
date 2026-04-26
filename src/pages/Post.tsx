import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import Section from '../components/Section';
import { BLOG_POSTS, RESOURCES } from '../data/mockData';
import { Clock, Calendar, ArrowLeft, Share2, Bookmark } from 'lucide-react';

export default function Post() {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-10">
        <div>
          <h1 className="text-4xl font-display mb-4">Post not found.</h1>
          <Link to="/blog" className="text-primary font-bold underline">Return to blog</Link>
        </div>
      </div>
    );
  }

  const recommendedTools = RESOURCES.filter(r => r.type === 'Tool' || r.type === 'Setup').slice(0, 2);

  return (
    <div className="bg-bg min-h-screen">
      {/* Post Header */}
      <div className="bg-primary pt-32 pb-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src={post.coverImage} className="w-full h-full object-cover blur-3xl scale-110" referrerPolicy="no-referrer" alt="" />
        </div>
        
        <div className="section-container relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-secondary text-xs font-bold uppercase tracking-widest transition-colors mb-12">
            <ArrowLeft size={14} /> Back to Repository
          </Link>
          
          <div className="flex items-center justify-center gap-4 text-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            <span>{post.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl text-white max-w-4xl mx-auto mb-10 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-8 text-white/40 text-xs font-medium">
             <div className="flex items-center gap-2"><Calendar size={16} /> {post.date}</div>
             <div className="flex items-center gap-2"><Clock size={16} /> {post.readingTime}</div>
          </div>
        </div>
      </div>

      {/* Content wrapper */}
      <div className="max-w-4xl mx-auto px-6 -mt-24 relative z-20 pb-32">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl shadow-primary/5 min-h-[500px]">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full aspect-video object-cover rounded-2xl mb-12 shadow-lg"
            referrerPolicy="no-referrer"
          />
          
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-p:text-charcoal/70 prose-p:leading-loose">
            <Markdown>{post.content}</Markdown>
          </div>

          <div className="mt-20 pt-10 border-t border-charcoal/5 flex flex-wrap items-center justify-between gap-6">
             <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest">Share this concept:</span>
                <button className="p-2.5 rounded-full bg-bg text-primary hover:bg-primary hover:text-white transition-all"><Share2 size={16} /></button>
                <button className="p-2.5 rounded-full bg-bg text-primary hover:bg-primary hover:text-white transition-all"><Bookmark size={16} /></button>
             </div>

             <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-bg text-charcoal/50 text-[10px] font-bold rounded-full">#productivity</span>
                <span className="px-3 py-1 bg-bg text-charcoal/50 text-[10px] font-bold rounded-full">#discipline</span>
                <span className="px-3 py-1 bg-bg text-charcoal/50 text-[10px] font-bold rounded-full">#design</span>
             </div>
          </div>
        </div>

        {/* Recommended Tools Section */}
        <div className="mt-20 bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl text-primary mb-8">Recommended Assets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recommendedTools.map(tool => (
                <a key={tool.id} href={tool.link} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl flex gap-6 hover:shadow-xl transition-all group">
                   <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden">
                      <img src={tool.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" alt={tool.title} />
                   </div>
                   <div className="flex flex-col justify-center">
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-1">{tool.type}</span>
                      <h4 className="font-bold text-primary mb-1">{tool.title}</h4>
                      <p className="text-xs text-charcoal/50 line-clamp-2">{tool.description}</p>
                   </div>
                </a>
              ))}
            </div>
            <div className="mt-10 text-center">
               <Link to="/resources" className="text-sm font-bold text-primary underline">Browse all resources</Link>
            </div>
        </div>
      </div>
    </div>
  );
}
