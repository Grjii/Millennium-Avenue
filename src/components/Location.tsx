import React from 'react';
import { motion } from 'motion/react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { Instagram, Twitter, Youtube, Globe, MapPin, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="min-h-screen bg-obsidian py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Contact & Socials Side */}
        <div className="lg:col-span-1 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-card border border-white/5 rounded-2xl p-8"
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-cyber-cyan mb-4 font-bold">Base of Operations</h2>
            <h3 className="text-4xl font-display font-bold mb-6 italic tracking-tighter">SECURE LINK</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-cyber-cyan w-5 h-5 shrink-0 mt-1" />
                <div>
                  <h4 className="text-[10px] uppercase font-black text-white/40 tracking-widest mb-1">Vector Coordinates</h4>
                  <p className="text-sm font-bold">Millennium Avenue Shopping Center, Nad Al Hammar Rd, Dubai</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-cyber-cyan w-5 h-5 shrink-0 mt-1" />
                <div>
                  <h4 className="text-[10px] uppercase font-black text-white/40 tracking-widest mb-1">Secure Line</h4>
                  <p className="text-sm font-bold">+971 4 000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-cyber-cyan w-5 h-5 shrink-0 mt-1" />
                <div>
                  <h4 className="text-[10px] uppercase font-black text-white/40 tracking-widest mb-1">Direct Uplink</h4>
                  <p className="text-sm font-bold">hq@millenniumavenue.com</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-8 mt-12">
              <h4 className="text-[10px] uppercase font-black text-white/40 tracking-widest mb-6 text-center">Social Matrix Connections</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Instagram, label: 'INSTAGRAM', link: '#', color: 'hover:text-pink-500' },
                  { icon: Twitter, label: 'TWITTER / X', link: '#', color: 'hover:text-cyan-400' },
                  { icon: Youtube, label: 'YOUTUBE', link: '#', color: 'hover:text-red-500' },
                  { icon: Globe, label: 'LINKTREE', link: '#', color: 'hover:text-green-500' },
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.link}
                    className={`bg-black/40 border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 group transition-all hover:bg-black/60 hover:border-white/20`}
                  >
                    <social.icon className={`w-6 h-6 transition-colors ${social.color}`} />
                    <span className="text-[8px] font-black tracking-widest opacity-40 group-hover:opacity-100">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Side */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-dark-card border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative min-h-[500px] lg:min-h-0"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8146582842505!2d55.34289617593187!3d25.276819528470124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ced3b9fb181%3A0x96cee3518e1a997e!2sMillennium%20Avenue!5e0!3m2!1sen!2sae!4v1778764322802!5m2!1sen!2sae" 
            className="w-full h-full border-0 transition-opacity" 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
            <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center justify-between max-w-sm ml-auto shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-cyber-cyan/20 flex items-center justify-center">
                   <MapPin className="w-4 h-4 text-cyber-cyan" />
                </div>
                <div className="pr-4">
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Launch Uplink</p>
                  <p className="text-xs font-bold leading-none">Directions</p>
                </div>
              </div>
              <a 
                href="https://maps.app.goo.gl/9ZpZ_YOUR_DYNAMIC_LINK" 
                target="_blank" 
                rel="noopener"
                className="pointer-events-auto bg-cyber-cyan text-black px-4 py-2 rounded text-[9px] font-black uppercase tracking-widest hover:bg-cyan-400 transition-all"
              >
                GO
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
