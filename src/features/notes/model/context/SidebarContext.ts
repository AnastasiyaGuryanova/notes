import { createContext } from 'react';
import { SidebarContextType } from 'Features/notes';

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
