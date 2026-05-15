import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero({ onAction }: { onAction: () => void }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070" 
          alt="Gaming Arena"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight">
            MILLENNIUM <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-cyan to-blue-500">
              AVENUE
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-header font-medium tracking-wide">
            Your ascension begins here. A premium destination where cutting-edge technology 
            meets sophisticated luxury. Login or top up to dominate.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={onAction}
              className="group relative px-8 py-4 bg-cyber-cyan text-obsidian font-black rounded-sm overflow-hidden flex items-center gap-3 transition-all hover:scale-105 glow-cyan"
            >
              <span className="relative z-10">ACCESS ACCOUNT</span>
              <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute top-0 -left-full w-full h-full bg-white/20 group-hover:left-0 transition-all duration-500 skew-x-12" />
            </button>
            <a 
              href="#menu"
              className="px-8 py-4 glass text-white font-bold rounded-sm border-white/10 hover:border-white/30 transition-all flex items-center gap-3"
            >
              <Play className="w-5 h-5 text-cyber-cyan" />
              VIEW MENU
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-cyber-cyan rounded-full" />
        </div>
      </div>
    </section>
  );
}
