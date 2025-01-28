import { createContext } from 'react';
import { NotesContextType } from 'features/notes';

export const NotesContext = createContext<NotesContextType | undefined>(undefined);
