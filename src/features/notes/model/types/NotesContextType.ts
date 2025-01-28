import { Note } from 'entities/Note';

export interface NotesContextType {
	notes: Note[];
	selectedNote: Note | null;
	setSelectedNote: (note: Note | null) => void;
	refreshNotes: () => void;
	addNote: (title: string) => Promise<void>;
	deleteSelectedNote: () => Promise<void>;
	updateSelectedNote: (content: string) => Promise<void>;
}

export interface NotesProviderProps {
	children: React.ReactNode;
}
