export interface User {
  id: string;
  name: string;
  username: string;
  balance: number;
  tier: 'Citizen' | 'Elite' | 'Legend';
  avatar?: string;
}

export interface GamingTier {
  id: string;
  name: string;
  description: string;
  rate: number;
  per: 'hour';
  features: string[];
  color: string;
  accent: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Drinks' | 'Snacks' | 'Meals';
  image: string;
}

export interface AppState {
  user: User | null;
  isAuthenticated: boolean;
}
