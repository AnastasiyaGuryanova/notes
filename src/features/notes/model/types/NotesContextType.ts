import { Note } from 'Entities/Note';

export interface NotesContextType {
	notes: Note[];
	refreshNotes: () => void;
	addNote: (title: string, content: string) => Promise<number | undefined>;
	deleteNoteById: (noteId: number) => Promise<void>;
	updateNoteById: (noteId: number, title: string, content: string) => Promise<void>;
}

export interface NotesProviderProps {
	children: React.ReactNode;
}
