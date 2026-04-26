import { ArrowRight, Zap, Target, Layout, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { BLOG_POSTS } from '../data/mockData';
import BlogCard from '../components/BlogCard';
import { motion } from 'motion/react';
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';

export default function Home() {
  const featuredPosts = BLOG_POSTS.slice(0, 3);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    try {
      const subscribersCol = collection(db, 'subscribers');
      await addDoc(subscribersCol, {
        email,
        createdAt: serverTimestamp(),
        source: 'home_page'
      });
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      handleFirestoreError(error, OperationType.CREATE, 'subscribers');
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Sleek Interface Style */}
      <section className="relative px-6 md:px-10 py-12 md:py-24">
        <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] block mb-4">
                Est. 2024 — Minimalist Blog
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-primary mb-6">
                Build Discipline.<br />
                Design Your <span className="italic">Life.</span>
              </h1>
              <p className="text-lg md:text-xl text-charcoal/70 max-w-md leading-relaxed">
                Transform your chaotic creative process into a focused, high-output lifestyle system.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/blog" 
                  className="px-8 py-4 bg-primary text-secondary font-bold rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  READ THE BLOG <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/about" 
                  className="px-8 py-4 bg-white border border-accent text-primary font-bold rounded-full hover:bg-bg transition-all flex items-center justify-center"
                >
                  OUR PHILOSOPHY
                </Link>
              </div>

              <div className="pt-10 flex items-center space-x-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-bg ${i === 4 ? 'bg-secondary' : 'bg-primary'} grid place-items-center text-[10px] font-bold text-white relative z-[${4-i}]`}>
                      {i === 4 ? '+5k' : ''}
                    </div>
                  ))}
                </div>
                <p className="text-xs font-medium text-charcoal/60">
                  Creators building their systems today.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex flex-col space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="p-1 bg-white border border-accent/20 rounded-3xl shadow-aesthetic"
            >
              <div className="bg-primary/5 h-64 md:h-80 rounded-2xl overflow-hidden relative group">
                <img 
                  src="https://picsum.photos/seed/focus/800/800" 
                  alt="Aesthetic Setup" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-serif italic text-2xl">Aesthetic Setup 01</span>
                </div>
              </div>
            </motion.div>
            
            <div className="bg-white p-6 border border-accent/20 rounded-3xl flex items-center space-x-4 shadow-aesthetic">
              <div className="w-16 h-16 bg-primary text-secondary rounded-2xl flex-shrink-0 flex items-center justify-center font-serif font-bold text-xl">
                01
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1 uppercase tracking-tight text-primary">Master Your Workspace</h4>
                <p className="text-xs text-charcoal/50 leading-relaxed">The exact architecture of a deep work environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Pillars */}
      <Section className="bg-white border-y border-accent/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl mb-8 text-primary">
              Where focus meets <br /> <span className="italic">intentional</span> design.
            </h2>
            <p className="text-charcoal/60 text-lg leading-relaxed mb-12">
              Most blogs tell you what to do. We focus on the environment and systems that make "doing" inevitable. Structra is a framework for self-creators who want to master their time and their space.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Zap, title: "Peak Performance", desc: "Neuroscience-backed routines." },
                { icon: Target, title: "Radical Discipline", desc: "Systems that eliminate motivation." },
                { icon: Layout, title: "Aesthetic Setups", desc: "Visual harmony for mental clarity." },
                { icon: CheckCircle2, title: "Proven Frameworks", desc: "Used by 5,000+ creators." }
              ].map((pill, i) => (
                <div key={i} className="flex flex-col gap-3 group translate-y-0 hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-bg border border-accent/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors">
                    <pill.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-tight">{pill.title}</h4>
                    <p className="text-[11px] leading-relaxed text-charcoal/50">{pill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white shadow-primary/10">
              <img 
                src="https://picsum.photos/seed/minimalist/800/1000" 
                alt="Disciplined Lifestyle" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary p-10 rounded-[2.5rem] shadow-aesthetic hidden md:block border border-white/10">
              <span className="text-secondary text-6xl font-serif font-bold block mb-2 tracking-tighter">90%</span>
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed block max-w-[150px]">
                Reduction in friction through systems design.
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Posts */}
      <Section className="bg-bg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">Latest Insights</span>
            <h2 className="text-3xl md:text-5xl text-primary font-serif font-bold italic">The Repository</h2>
          </div>
          <Link to="/blog" className="text-charcoal/40 hover:text-primary flex items-center gap-2 text-xs font-bold transition-all uppercase tracking-widest">
            VIEW ALL POSTS <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Section>

      {/* CTA Section - Newsletter with Firestore */}
      <section className="bg-bg py-24 border-t border-accent/10">
        <div className="section-container">
          <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-secondary text-[10px] font-bold tracking-[0.4em] uppercase block mb-8">Weekly Dispatch</span>
              <h2 className="text-4xl md:text-6xl text-white mb-8 border-b border-white/10 pb-10">Ready to design <br /><span className="italic">your focus?</span></h2>
              <p className="text-white/50 text-lg mb-12">
                Join 5,000+ creators getting weekly deep work systems and setup inspiration.
              </p>
              
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 border border-secondary/20 p-8 rounded-3xl inline-flex flex-col items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-white font-bold text-xl">You're on the list.</h3>
                  <p className="text-white/40 text-sm">Welcome to the framework. Check your inbox soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    required
                    disabled={status === 'loading'}
                    className="px-8 py-5 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/20 focus:outline-none focus:border-secondary transition-all md:w-96 text-center sm:text-left disabled:opacity-50"
                  />
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-10 py-5 bg-secondary text-primary font-bold rounded-full hover:bg-white transition-all shadow-xl shadow-secondary/5 disabled:opacity-50 flex items-center justify-center gap-2 font-serif italic"
                  >
                    {status === 'loading' ? 'JOINING...' : 'JOIN THE CLUB'}
                  </button>
                </form>
              )}
              {status === 'error' && (
                <p className="text-red-400 mt-4 text-xs font-semibold uppercase tracking-widest">Something went wrong. Try again.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
