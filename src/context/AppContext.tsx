import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, MenuItem, AppState } from '../types';

interface AppContextType extends AppState {
  login: (username: string) => void;
  logout: () => void;
  topUp: (amount: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username: string) => {
    // Mock login logic with username
    const mockUser: User = {
      id: 'usr_1',
      name: username,
      username: username,
      balance: 25,
      tier: 'Citizen',
    };
    setUser(mockUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const topUp = (amount: number) => {
    setUser(prev => {
      if (!prev) return null;
      return { ...prev, balance: prev.balance + amount };
    });
  };

  return (
    <AppContext.Provider value={{ 
      user, 
      isAuthenticated, 
      login, 
      logout, 
      topUp 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
