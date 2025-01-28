import { useContext } from 'react';
import { NotesContextType, NotesContext } from 'features/notes';

export const useNotes = (): NotesContextType => {
	const context = useContext(NotesContext);

	if (!context) {
		throw new Error('useNotes must be used within a NotesProvider');
	}
	return context;
};
