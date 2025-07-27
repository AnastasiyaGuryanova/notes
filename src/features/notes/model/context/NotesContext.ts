import { createContext } from 'react';
import { NotesContextType } from 'Features/notes';

export const NotesContext = createContext<NotesContextType | undefined>(undefined);
