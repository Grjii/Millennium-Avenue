import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, Loader2, Zap } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { login } = useAppContext();
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      login(username);
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian/95 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-md bg-dark-card p-10 rounded-xl relative z-10 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.1)]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-10">
              <h2 className="text-3xl font-display font-bold mb-2 tracking-tighter">AUTHENTICATION</h2>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Log in to your on-site terminal account.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-cyber-cyan uppercase tracking-widest pl-1">Protocol Username</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input 
                    type="text" 
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-black/40 border border-white/5 rounded-sm py-4 pl-12 pr-4 text-sm focus:border-cyber-cyan outline-none transition-colors font-mono"
                    placeholder="OPERATOR_ID"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-cyber-cyan uppercase tracking-widest pl-1">Security Keyphrase</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input 
                    type="password" 
                    required
                    className="w-full bg-black/40 border border-white/5 rounded-sm py-4 pl-12 pr-4 text-sm focus:border-cyber-cyan outline-none transition-colors"
                    placeholder="••••••••••••"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-cyber-cyan text-black font-black rounded shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    INITIALIZE LOGIN
                  </>
                )}
              </button>
            </form>

            <p className="mt-8 text-[9px] text-white/30 text-center uppercase tracking-widest leading-relaxed">
              Accounts must be created in-person <br /> at the reception lounge.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
