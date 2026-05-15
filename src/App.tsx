import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GamingTiers from './components/GamingTiers';
import Billiards from './components/Billiards';
import FuelMenu from './components/FuelMenu';
import Dashboard from './components/Dashboard';
import AuthModal from './components/AuthModal';
import Location from './components/Location';
import { useState, useEffect } from 'react';
import { useAppContext } from './context/AppContext';

function Main() {
  const { isAuthenticated } = useAppContext();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');

  // Automatically switch to dashboard on login
  useEffect(() => {
    if (isAuthenticated) {
      setView('dashboard');
    } else {
      setView('landing');
    }
  }, [isAuthenticated]);

  const handleNavigate = (target: 'landing' | 'dashboard') => {
    setView(target);
  };

  return (
    <div className="relative min-h-screen">
      <Navbar 
        onLoginClick={() => setIsAuthModalOpen(true)} 
        onNavigate={handleNavigate}
        currentView={view}
      />
      
      <main>
        {view === 'dashboard' && isAuthenticated ? (
          <Dashboard />
        ) : (
          <>
            <Hero onAction={() => setIsAuthModalOpen(true)} />
            <GamingTiers />
            <Billiards />
            <FuelMenu />
            <Location />
          </>
        )}
      </main>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}
