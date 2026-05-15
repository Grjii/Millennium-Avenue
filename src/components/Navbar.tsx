import React from 'react';
import { motion } from 'motion/react';
import { Layout, User, Wallet, LogOut, Menu as MenuIcon, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Navbar({ 
  onLoginClick, 
  onNavigate,
  currentView
}: { 
  onLoginClick: () => void;
  onNavigate: (target: 'landing' | 'dashboard') => void;
  currentView: 'landing' | 'dashboard';
}) {
  const { isAuthenticated, user, logout } = useAppContext();
  const [isOpen, setIsOpen] = React.useState(false);

  const [showLogoutConfirm, setShowLogoutConfirm] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-nav border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-cyber-cyan flex items-center justify-center rounded shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:scale-105 transition-transform">
              <span className="text-black font-black text-xl">M</span>
            </div>
            <span className="font-display text-xl font-bold tracking-tighter italic">
              MILLENNIUM <span className="text-cyber-cyan font-light italic">AVENUE</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#arena" onClick={() => onNavigate('landing')} className="text-[10px] font-bold text-white/50 hover:text-cyber-cyan transition-colors uppercase tracking-[0.2em]">Arena</a>
            <a href="#billiards" onClick={() => onNavigate('landing')} className="text-[10px] font-bold text-white/50 hover:text-cyber-cyan transition-colors uppercase tracking-[0.2em]">Billiards</a>
            <a href="#menu" onClick={() => onNavigate('landing')} className="text-[10px] font-bold text-white/50 hover:text-cyber-cyan transition-colors uppercase tracking-[0.2em]">Fuel</a>
            <a 
              href="#location" 
              onClick={() => onNavigate('landing')} 
              className="text-[10px] font-bold text-white/50 hover:text-cyber-cyan transition-colors uppercase tracking-[0.2em]"
            >
              Location
            </a>

            {isAuthenticated ? (
              <div className="flex items-center gap-6 pl-6 border-l border-white/10">
                <button 
                  onClick={() => onNavigate('dashboard')}
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${currentView === 'dashboard' ? 'text-cyber-cyan' : 'text-white/50 hover:text-white'}`}
                >
                  Dashboard
                </button>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Wallet</span>
                  <span className="text-lg font-mono text-cyber-cyan font-bold leading-none">${user?.balance.toFixed(2)}</span>
                </div>
                
                {showLogoutConfirm ? (
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => {
                        logout();
                        setShowLogoutConfirm(false);
                      }}
                      className="px-3 py-1.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-sm animate-pulse"
                    >
                      CONFIRM
                    </button>
                    <button 
                      onClick={() => setShowLogoutConfirm(false)}
                      className="text-[9px] text-white/40 uppercase font-bold hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setShowLogoutConfirm(true)}
                    className="px-4 py-1.5 border border-red-500/30 text-red-500 text-[10px] font-bold uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all rounded-sm"
                  >
                    Log Out
                  </button>
                )}
              </div>
            ) : (
              <button 
                onClick={onLoginClick}
                className="px-6 py-2 bg-cyber-cyan text-black font-bold rounded shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:bg-cyan-400 transition-all uppercase text-xs tracking-tighter"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-b border-white/5 px-4 py-8 flex flex-col gap-6"
        >
          <a href="#arena" onClick={() => { onNavigate('landing'); setIsOpen(false); }} className="text-lg font-medium tracking-widest">ARENA</a>
          <a href="#billiards" onClick={() => { onNavigate('landing'); setIsOpen(false); }} className="text-lg font-medium tracking-widest">BILLIARDS</a>
          <a href="#menu" onClick={() => { onNavigate('landing'); setIsOpen(false); }} className="text-lg font-medium tracking-widest">FUEL</a>
          <a 
            href="#location" 
            onClick={() => { onNavigate('landing'); setIsOpen(false); }} 
            className="text-lg font-medium tracking-widest"
          >
            LOCATION
          </a>
          {isAuthenticated ? (
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => { onNavigate('dashboard'); setIsOpen(false); }}
                className={`text-lg font-medium text-left ${currentView === 'dashboard' ? 'text-cyber-cyan' : ''}`}
              >
                DASHBOARD
              </button>
              <div className="flex justify-between items-center p-4 glass rounded-lg">
                <span className="text-white/40">WALLET</span>
                <span className="text-cyber-cyan font-display text-xl">${user?.balance.toFixed(2)}</span>
              </div>
              {showLogoutConfirm ? (
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                      setShowLogoutConfirm(false);
                    }}
                    className="w-full py-4 bg-red-600 text-white font-black uppercase tracking-[0.2em] rounded"
                  >
                    CONFIRM TERMINATION
                  </button>
                  <button 
                    onClick={() => setShowLogoutConfirm(false)}
                    className="text-white/40 text-[10px] font-bold uppercase tracking-widest text-center"
                  >
                    GO BACK
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setShowLogoutConfirm(true)} 
                  className="text-red-500 font-bold uppercase tracking-widest text-left"
                >
                  Logout
                </button>
              )}
            </div>
          ) : (
            <button 
              onClick={() => { onLoginClick(); setIsOpen(false); }}
              className="py-4 bg-cyber-cyan text-black font-bold"
            >
              LOGIN
            </button>
          )}
        </motion.div>
      )}
    </nav>
  );
}
