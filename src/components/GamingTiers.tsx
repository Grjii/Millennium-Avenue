import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Gamepad2, ShieldCheck, Zap } from 'lucide-react';
import { GamingTier } from '../types';

const tiers: GamingTier[] = [
  {
    id: 'arena',
    name: 'THE ARENA',
    description: 'High-performance rigs for competitive play.',
    rate: 10,
    per: 'hour',
    features: ['RTX 4090 Rigs', '240Hz Monitors', 'Ergonomic Chairs', 'Full Stadium Access'],
    color: 'cyber-cyan',
    accent: '#06b6d4'
  },
  {
    id: 'lounge',
    name: 'PS4 LOUNGE',
    description: 'Relaxed atmosphere for casual session.',
    rate: 8,
    per: 'hour',
    features: ['PS5 Consoles', '4K OLED TVs', 'Premium Sofas', 'Local Multiplayer'],
    color: 'blue-500',
    accent: '#3b82f6'
  },
  {
    id: 'vip',
    name: 'THE VIP VAULT',
    description: 'Elite gaming sanctuary with premium hardware.',
    rate: 25,
    per: 'hour',
    features: [
      'Dual-Station Private Suites',
      'High-End PC Config (RTX 5090)', 
      'Pro Gaming Peripherals', 
      'Ultra-Private Soundproof Booths', 
      'Premium Ergonomic Seating'
    ],
    color: 'cyber-gold',
    accent: '#fbbf24'
  }
];

export default function GamingTiers() {
  return (
    <section id="arena" className="py-24 px-4 bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold tracking-[0.4em] text-cyber-cyan mb-4 uppercase">Hardware Specifications</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">ESTABLISHED TIERS</h3>
          <p className="mt-4 text-white/30 text-[10px] uppercase tracking-[0.2em]">Rates are per terminal session. Select tier at any kiosk station.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`bg-dark-card border border-white/5 rounded-xl p-8 flex flex-col relative overflow-hidden group transition-all ${
                tier.id === 'vip' ? 'border-cyber-gold/50 shadow-[0_0_30px_rgba(251,191,36,0.1)]' : 'border-cyan-900/30'
              }`}
            >
              {tier.id === 'vip' && (
                <div className="absolute top-0 right-0 px-4 py-1 bg-cyber-gold text-black text-[10px] font-black uppercase tracking-widest">
                  Premium
                </div>
              )}
              
              <div className={`h-0.5 w-12 mb-8 ${
                tier.id === 'vip' ? 'bg-cyber-gold' : 
                tier.id === 'lounge' ? 'bg-blue-500' : 'bg-cyber-cyan'
              }`} />

              <h4 className="text-xl font-bold uppercase tracking-[0.2em]">{tier.name}</h4>
              <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest italic">{tier.description}</p>

              <div className="my-10">
                <span className="text-5xl font-mono tracking-tighter font-bold">{tier.rate}</span>
                <span className={`font-black ml-3 text-xs uppercase tracking-widest ${
                  tier.id === 'vip' ? 'text-cyber-gold' : 
                  tier.id === 'lounge' ? 'text-blue-500' : 'text-cyber-cyan'
                }`}>
                  Credits / Hr
                </span>
              </div>

              <ul className="text-[11px] space-y-4 text-white/60 mb-6">
                {tier.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3">
                    <Zap className={`w-3 h-3 mt-0.5 shrink-0 ${
                      tier.id === 'vip' ? 'text-cyber-gold' : 
                      tier.id === 'lounge' ? 'text-blue-500' : 'text-cyber-cyan'
                    }`} />
                    <span className="uppercase tracking-widest leading-relaxed font-bold">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
