import { createContext } from 'react';
import { SidebarContextType } from 'features/notes';

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
