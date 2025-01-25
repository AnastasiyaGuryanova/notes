import { createContext } from 'react';
import { AuthContextType } from 'features';

export const AuthContext = createContext<AuthContextType | null>(null);
