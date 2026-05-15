import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Pizza, Beer, Search } from 'lucide-react';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  { id: 'm1', name: 'Cyber-Fuel Espresso', description: 'Double shot with liquid nitrogen froth.', price: 5, category: 'Drinks', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600' },
  { id: 'm2', name: 'Naked Nano-Burger', description: 'Wagyu beef, gold leaf, truffle aioli.', price: 18, category: 'Meals', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400' },
  { id: 'm3', name: 'Obsidian Fries', description: 'Black garlic dusted crispy fries.', price: 8, category: 'Snacks', image: 'https://images.unsplash.com/photo-1573082830648-971ef0768b42?auto=format&fit=crop&q=80&w=400' },
  { id: 'm4', name: 'Liquid Gold Lager', description: 'Premium honey-infused craft brew.', price: 7, category: 'Drinks', image: 'https://images.unsplash.com/photo-1514944651383-34f7210e7c01?auto=format&fit=crop&q=80&w=400' },
  { id: 'm5', name: 'Neon Sushi Roll', description: 'Fresh tuna with glowing roe.', price: 14, category: 'Meals', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=400' },
  { id: 'm10', name: 'Void Wings', description: 'Spicy glaze with blue cheese dip.', price: 12, category: 'Snacks', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc50a?auto=format&fit=crop&q=80&w=600' },
];

export default function FuelMenu() {
  const [activeCategory, setActiveCategory] = React.useState<MenuItem['category'] | 'All'>('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 px-4 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-cyber-cyan mb-4 font-bold">Fuel Your Session</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">THE FUEL MENU</h3>
          </div>

          <div className="relative w-full md:w-64">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
             <input 
              type="text" 
              placeholder="SEARCH FUEL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-card border border-white/5 rounded-full py-3 pl-12 pr-6 text-[10px] font-bold tracking-widest text-white focus:border-cyber-cyan outline-none transition-all placeholder:text-white/10"
             />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto">
            {['All', 'Drinks', 'Snacks', 'Meals'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all border ${
                  activeCategory === cat 
                  ? 'bg-cyber-cyan text-black border-cyber-cyan shadow-[0_0_15px_rgba(6,182,212,0.5)]' 
                  : 'bg-dark-card text-white/40 border-white/5 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[600px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-dark-card group rounded-xl overflow-hidden border border-white/5 hover:border-cyber-cyan/30 transition-all"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold uppercase tracking-tight group-hover:text-cyber-cyan transition-colors">{item.name}</h4>
                    <span className="text-cyber-cyan font-mono font-bold">${item.price}</span>
                  </div>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest italic">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
