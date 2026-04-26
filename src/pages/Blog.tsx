import { useState } from 'react';
import Section from '../components/Section';
import { BLOG_POSTS } from '../data/mockData';
import { Category } from '../types';
import BlogCard from '../components/BlogCard';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter } from 'lucide-react';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories: (Category | 'All')[] = ['All', 'Productivity', 'Routines', 'Aesthetic Setups', 'Self-Improvement'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-bg min-h-screen">
      {/* Blog Hero */}
      <section className="bg-primary pt-32 pb-20">
        <div className="section-container text-center">
          <span className="text-secondary text-[10px] font-bold tracking-[0.3em] uppercase block mb-6">Archive</span>
          <h1 className="text-5xl md:text-7xl text-white mb-8">The Repository</h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-12">
            A curated library of systems, setups, and routines for the focused life.
          </p>
          
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-secondary transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search concepts, tools, or systems..."
              className="w-full pl-16 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-secondary transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Categories & Grid */}
      <Section className="!pt-12">
        <div className="flex flex-col gap-12">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <div className="flex items-center gap-2 text-charcoal/40 mr-4 hidden md:flex">
              <Filter size={14} /> <span className="text-[10px] font-bold uppercase tracking-widest">Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all border ${
                  activeCategory === cat 
                    ? 'bg-primary text-secondary border-primary shadow-lg shadow-primary/10 scale-105' 
                    : 'bg-white text-charcoal/60 border-charcoal/5 hover:border-primary/20'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Results Info */}
          <div className="flex items-center justify-between border-b border-charcoal/5 pb-4">
            <span className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">
              Showing {filteredPosts.length} Results
            </span>
          </div>

          {/* Post Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16"
          >
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-charcoal/40 text-lg">No posts found matching your criteria.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setSearchTerm(''); }}
                className="mt-4 text-primary font-bold underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
