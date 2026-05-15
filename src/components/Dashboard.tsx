import React from 'react';
import { motion } from 'motion/react';
import { 
  Wallet, 
  QrCode, 
  TrendingUp, 
  History, 
  Star, 
  CreditCard, 
  ChevronRight, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Dashboard() {
  const { user, topUp } = useAppContext();
  const [isTopUpOpen, setIsTopUpOpen] = React.useState(false);

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen bg-obsidian text-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        
        {/* Terminal Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-card border border-cyan-900/50 rounded-xl p-8 shadow-inner relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/5 blur-3xl rounded-full pointer-events-none" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div className="relative z-10">
              <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-1">
                Terminal <span className="text-cyber-cyan">Ready.</span>
              </h3>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
                System Link: <span className="text-white">{user?.username}</span>
              </p>
            </div>
            
            <div className="flex items-center gap-8 bg-black/40 p-4 border border-white/5 rounded-lg shrink-0">
               <div>
                  <p className="text-[9px] text-white/30 uppercase tracking-widest font-bold mb-1 ml-1">Current Credit</p>
                  <p className="text-4xl font-mono font-bold tracking-tighter text-white leading-none">${user?.balance.toFixed(2)}</p>
               </div>
               <button 
                onClick={() => setIsTopUpOpen(true)}
                className="px-8 py-3 bg-cyber-cyan text-black font-black uppercase text-xs tracking-widest rounded shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-400 transition-all"
               >
                 Top-Up
               </button>
            </div>
          </div>
        </motion.div>

        {/* Terminal Sessions */}
        <div className="grid grid-cols-1 gap-4">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-card border border-white/5 rounded-xl p-6"
           >
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8 font-bold flex items-center gap-2">
                <History className="w-3 h-3" /> Terminal Session History
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   { type: 'LOGOUT', time: '16:45', date: 'MAY 13', station: '04' },
                   { type: 'LOGIN',  time: '14:22', date: 'MAY 13', station: '04' },
                   { type: 'LOGOUT', time: '12:12', date: 'MAY 12', station: '01' },
                   { type: 'LOGIN',  time: '10:05', date: 'MAY 12', station: '01' }
                 ].map((log, idx) => (
                   <div key={idx} className="flex justify-between items-center py-3 px-4 bg-black/20 border border-white/5 rounded-lg opacity-60 hover:opacity-100 transition-opacity">
                      <div className="flex items-center gap-3">
                        <div className={`w-1 h-1 rounded-full ${log.type === 'LOGIN' ? 'bg-green-500' : 'bg-red-500'}`} />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest">{log.type}</p>
                          <p className="text-[9px] text-white/30 uppercase font-bold">{log.date} • Terminal #{log.station}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-mono text-white/80">{log.time}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </motion.div>
        </div>

        <TopUpModal 
          isOpen={isTopUpOpen} 
          onClose={() => setIsTopUpOpen(false)} 
        />
      </div>
    </div>
  );
}

function TopUpModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { user, topUp } = useAppContext();
  const [amount, setAmount] = React.useState('50');
  const [targetAccount, setTargetAccount] = React.useState<'regular' | 'vip'>('regular');
  const [paymentMethod, setPaymentMethod] = React.useState<'apple' | 'card'>('apple');
  const [error, setError] = React.useState<string | null>(null);
  
  const presets = [20, 50, 100, 200];
  const minAmount = targetAccount === 'vip' ? 20 : 10;

  React.useEffect(() => {
    if (parseFloat(amount) < minAmount) {
      setError(`Minimum top-up for ${targetAccount.toUpperCase()} is $${minAmount}`);
    } else {
      setError(null);
    }
  }, [amount, targetAccount, minAmount]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-obsidian/95 backdrop-blur-xl" onClick={onClose} />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-xl bg-dark-card border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)]"
      >
        {/* Header Section */}
        <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-transparent border-b border-white/5">
           <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-black italic uppercase tracking-tighter">Injection Terminal</h2>
                <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mt-1">Funding: <span className="text-cyber-cyan">{user?.username}</span></p>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-white/30 uppercase font-bold tracking-widest mb-1">Current Sync</p>
                <p className="text-2xl font-mono font-bold">${user?.balance.toFixed(2)}</p>
              </div>
           </div>
        </div>

        <div className="p-8 space-y-8">
           {/* Account Tier Selection */}
           <div className="space-y-3">
              <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest block ml-1">Target Account Tier</label>
              <div className="grid grid-cols-2 gap-3">
                 <button 
                  onClick={() => setTargetAccount('regular')}
                  className={`p-4 border rounded flex flex-col items-center gap-1 transition-all ${
                    targetAccount === 'regular' 
                      ? 'bg-cyber-cyan/10 border-cyber-cyan text-cyber-cyan' 
                      : 'bg-white/5 border-white/5 text-white/40 hover:border-white/20'
                  }`}
                 >
                   <span className="text-xs font-black uppercase tracking-widest">Regular</span>
                   <span className="text-[9px] uppercase font-bold opacity-60">10 CR/H Rate</span>
                 </button>
                 <button 
                  onClick={() => setTargetAccount('vip')}
                  className={`p-4 border rounded flex flex-col items-center gap-1 transition-all ${
                    targetAccount === 'vip' 
                      ? 'bg-cyber-gold/10 border-cyber-gold text-cyber-gold' 
                      : 'bg-white/5 border-white/5 text-white/40 hover:border-white/20'
                  }`}
                 >
                   <span className="text-xs font-black uppercase tracking-widest">VIP Lounge</span>
                   <span className="text-[9px] uppercase font-bold opacity-60">25 CR/H Rate</span>
                 </button>
              </div>
           </div>

           {/* Amount Input */}
           <div className="space-y-4">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Injection Amount</label>
                <div className="flex gap-2">
                   {presets.map(p => (
                     <button 
                      key={p}
                      onClick={() => setAmount(p.toString())}
                      className={`px-3 py-1 text-[9px] font-bold border rounded-full transition-all ${
                        amount === p.toString() ? 'bg-white text-black border-white' : 'text-white/40 border-white/10 hover:border-white/40'
                      }`}
                     >
                       ${p}
                     </button>
                   ))}
                </div>
              </div>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-mono text-white/20">$</span>
                <input 
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className={`w-full bg-black/40 border rounded-xl py-6 px-12 text-3xl font-mono font-bold text-white outline-none transition-all placeholder:text-white/5 ${
                    error ? 'border-red-500/50' : 'border-white/5 focus:border-cyber-cyan'
                  }`}
                  placeholder="0.00"
                />
              </div>
              {error && (
                <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{error}</p>
              )}
           </div>

           {/* Payment Method */}
           <div className="space-y-4">
              <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest block ml-1">Payment Method</label>
              <div className="flex gap-4">
                 <button 
                  onClick={() => setPaymentMethod('apple')}
                  className={`flex-1 p-5 border rounded-xl flex items-center justify-center gap-3 transition-all ${
                    paymentMethod === 'apple' ? 'bg-white text-black border-white' : 'bg-white/5 border-white/5 text-white/60 hover:border-white/20'
                  }`}
                 >
                   <Zap className="w-5 h-5 fill-current" />
                   <span className="text-xs font-black uppercase tracking-widest">Apple Pay</span>
                 </button>
                 <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`flex-1 p-5 border rounded-xl flex items-center justify-center gap-3 transition-all ${
                    paymentMethod === 'card' ? 'bg-cyber-cyan border-cyber-cyan text-black' : 'bg-white/5 border-white/5 text-white/60 hover:border-white/20'
                  }`}
                 >
                   <CreditCard className="w-5 h-5" />
                   <span className="text-xs font-black uppercase tracking-widest">Debit/Credit</span>
                 </button>
              </div>

              {paymentMethod === 'card' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-3 pt-2"
                >
                   <input 
                    type="text" 
                    placeholder="CARD NUMBER" 
                    className="w-full bg-black/40 border border-white/5 rounded py-3 px-4 text-xs font-mono tracking-widest focus:border-cyber-cyan outline-none"
                   />
                   <div className="grid grid-cols-2 gap-3">
                      <input 
                        type="text" 
                        placeholder="MM/YY" 
                        className="bg-black/40 border border-white/5 rounded py-3 px-4 text-xs font-mono tracking-widest focus:border-cyber-cyan outline-none"
                      />
                      <input 
                        type="text" 
                        placeholder="CVV" 
                        className="bg-black/40 border border-white/5 rounded py-3 px-4 text-xs font-mono tracking-widest focus:border-cyber-cyan outline-none"
                      />
                   </div>
                </motion.div>
              )}
           </div>

           {/* Finalize button */}
           <div className="pt-4">
              <button 
                disabled={!!error}
                onClick={() => { topUp(parseFloat(amount) || 0); onClose(); }}
                className={`w-full py-5 bg-cyber-cyan text-black font-black uppercase text-sm tracking-[0.3em] rounded-xl shadow-[0_10px_40px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-30 disabled:hover:scale-100 disabled:shadow-none`}
              >
                Execute Transaction
              </button>
              <button 
                onClick={onClose}
                className="w-full py-4 text-[10px] font-bold text-red-500 hover:text-red-400 transition-colors uppercase tracking-[0.2em] mt-2 underline"
              >
                Abort Link
              </button>
           </div>
        </div>
      </motion.div>
    </div>
  );
}

