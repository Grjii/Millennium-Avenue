import React from 'react';
import { motion } from 'motion/react';

export default function Billiards() {
  return (
    <section id="billiards" className="py-24 px-4 bg-obsidian relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-cyber-gold/20 rounded-sm translate-x-4 translate-y-4" />
            <img 
              src="https://images.unsplash.com/photo-1511850311311-01a075c390b3?auto=format&fit=crop&q=80&w=1200" 
              alt="Billiards Table"
              className="w-full rounded-sm relative z-10 glow-gold opacity-80"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-dark-card border border-cyber-gold/30 rounded overflow-hidden shrink-0">
               <img 
                src="https://images.unsplash.com/photo-1533055640609-24b498dfd74c?auto=format&fit=crop&q=80&w=200" 
                alt="Rack"
                className="w-full h-full object-cover grayscale opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-cyber-gold font-bold tracking-[0.4em] uppercase block">The Analog Break</span>
              <h2 className="text-5xl font-display font-bold leading-none tracking-tighter">THE BILLIARDS HALL</h2>
            </div>
          </div>

          <p className="text-lg text-white/60 mb-8 leading-relaxed font-medium">
            Step away from the pixels and experience the tactile precision of our custom-built 
            tables. Clad in premium black wool and surrounded by obsidian elegance.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="relative group overflow-hidden rounded-xl border border-cyber-gold/20 h-32 flex items-end p-6">
               <img 
                src="https://images.unsplash.com/photo-1528629202424-284a5cc5c71a?auto=format&fit=crop&q=80&w=400" 
                alt="Aramith"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="relative z-10 w-full">
                <span className="text-cyber-gold font-display text-2xl block mb-0.5">PREMIUM</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Aramith Ball Sets</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl border border-cyber-gold/20 h-32 flex items-end p-6">
               <img 
                src="https://images.unsplash.com/photo-1593789382576-54f483574d29?auto=format&fit=crop&q=80&w=400" 
                alt="Cues"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="relative z-10 w-full">
                <span className="text-cyber-gold font-display text-2xl block mb-0.5">CRAFT</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Handmade Cues</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-white/30 italic">
            *Billiards rates same as PS4 Lounge. Included for VIP Vault members.
          </p>
        </div>
      </div>
    </section>
  );
}
