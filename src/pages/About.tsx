import Section from '../components/Section';
import { ArrowRight, User, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* About Header */}
      <section className="bg-primary py-32 text-center">
        <div className="section-container">
          <span className="text-secondary text-[10px] font-bold tracking-[0.3em] uppercase block mb-6">Inside Structra</span>
          <h1 className="text-5xl md:text-7xl text-white mb-8">The Philosophy</h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Why we believe in discipline, aesthetic workspaces, and the power of radical focus.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
               <img 
                src="https://picsum.photos/seed/about/800/1000" 
                alt="Creator Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl text-primary font-display font-medium mb-10 leading-tight">
              We don't just write blogs. <br /> We build frameworks.
            </h2>
            <div className="space-y-6 text-charcoal/70 leading-relaxed text-lg">
              <p>
                Structra started as a personal quest to find a balance between high-intensity creativity and the need for structured calm. We realized that for the modern "self-creator," motivation is often the bottleneck.
              </p>
              <p>
                Our mission is to replace motivation with systems. We believe that when your environment is designed for focus, and your routines are anchored in discipline, growth becomes the default state.
              </p>
              <p>
                Join us in exploring the intersection of aesthetic living and ruthless productivity. It's not about doing more; it's about being more intentional with everything you do.
              </p>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-bg flex items-center justify-center text-primary">
                   <User size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest">Founded by</span>
                  <span className="font-bold text-primary">Aidan Rossi</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-bg flex items-center justify-center text-primary">
                   <Sparkles size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest">Community</span>
                  <span className="font-bold text-primary">5k+ Creators</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <section className="bg-bg py-24 md:py-32">
        <div className="section-container">
           <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl text-primary mb-4">Core Principles</h2>
              <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Essentialism", desc: "If it's not a 'hell yes', it's a no. We focus strictly on what moves the needle." },
                { title: "Precision", desc: "Every tool, every setup choice, and every word is curated for a specific outcome." },
                { title: "Consistency", desc: "Sustainable rhythm beats short-term intensity. Every system is built for the long game." }
              ].map((val, i) => (
                <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-charcoal/5 hover:scale-105 transition-transform">
                   <h3 className="text-2xl font-display font-medium text-primary mb-4">{val.title}</h3>
                   <p className="text-charcoal/60 leading-relaxed text-sm">{val.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <Section className="bg-white text-center">
        <h2 className="text-4xl md:text-6xl text-primary mb-12">Built for the <br /> disciplined mind.</h2>
        <Link to="/blog" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-secondary font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
           EXPLORE THE SYSTEMS <ArrowRight size={20} />
        </Link>
      </Section>
    </div>
  );
}
