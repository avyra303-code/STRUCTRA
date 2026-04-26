import Section from '../components/Section';
import { RESOURCES } from '../data/mockData';
import { motion } from 'motion/react';
import { ExternalLink, Download, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Resources() {
  const tools = RESOURCES.filter(r => r.type === 'Tool');
  const templates = RESOURCES.filter(r => r.type === 'Template');
  const setups = RESOURCES.filter(r => r.type === 'Setup');

  const ResourceGrid = ({ items, title, icon: Icon }: { items: typeof RESOURCES, title: string, icon: any }) => (
    <div className="mb-20">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-secondary">
           <Icon size={20} />
        </div>
        <h2 className="text-2xl md:text-3xl text-primary font-display font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -5 }}
            className="group bg-white rounded-3xl overflow-hidden border border-charcoal/5 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all"
          >
            <div className="aspect-[4/5] overflow-hidden">
               <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="font-display font-bold text-xl text-primary">{item.title}</h3>
                {item.price && <span className="text-primary font-bold text-lg">{item.price}</span>}
              </div>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-8 h-12 line-clamp-2">
                {item.description}
              </p>
              <a 
                href={item.link} 
                className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm bg-bg text-primary group-hover:bg-primary group-hover:text-secondary transition-all"
              >
                {item.type === 'Template' ? <Download size={16} /> : <ExternalLink size={16} />}
                {item.type === 'Template' ? 'GET TEMPLATE' : 'VIEW TOOL'}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-bg min-h-screen">
      <section className="bg-primary py-32">
        <div className="section-container text-center">
          <span className="text-secondary text-[10px] font-bold tracking-[0.3em] uppercase block mb-6">Equipment</span>
          <h1 className="text-5xl md:text-7xl text-white mb-8">The Setup</h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-12">
            A curated selection of tools, templates, and physical assets that form the foundation of our discipline framework.
          </p>
        </div>
      </section>

      <Section className="!pt-12">
        <ResourceGrid items={templates} title="Notion Templates" icon={Download} />
        <ResourceGrid items={tools} title="Digital Tools" icon={ShoppingBag} />
        <ResourceGrid items={setups} title="Physical Setups" icon={ExternalLink} />
        
        {/* Banner CTA */}
        <div className="mt-10 bg-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-20 -mt-20" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-20 -mb-20" />
           
           <span className="relative z-10 text-secondary text-[10px] font-bold tracking-[0.4em] uppercase block mb-8">Coming Soon</span>
           <h2 className="relative z-10 text-3xl md:text-5xl text-white mb-10 max-w-lg mx-auto leading-tight">
             The Minimalist <br /> Stationery Collection
           </h2>
           <button className="relative z-10 px-8 py-5 bg-secondary text-primary font-bold rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto">
             GET NOTIFIED <ArrowRight size={20} />
           </button>
        </div>
      </Section>
    </div>
  );
}
