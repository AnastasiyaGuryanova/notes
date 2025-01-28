import { FC, useEffect, useState } from 'react';
import { Note } from 'entities/Note';
import { useNotesActions, NotesProviderProps, NotesContext } from 'features/notes';
import { useAuth } from 'features/auth';

interface NotesContextType {
	notes: Note[];
	selectedNote: Note | null;
	setSelectedNote: (note: Note | null) => void;
	refreshNotes: () => void;
	addNote: (title: string) => Promise<void>;
	deleteSelectedNote: () => Promise<void>;
	updateSelectedNote: (content: string) => Promise<void>;
}

export const NotesProvider: FC<NotesProviderProps> = ({ children }) => {
	const { user } = useAuth();
	const { fetchNotes, createNewNote, removeNote, modifyNote } = useNotesActions();

	const [notes, setNotes] = useState<Note[]>([]);
	const [selectedNote, setSelectedNote] = useState<Note | null>(null);

	useEffect(() => {
		if (user?.id) {
			refreshNotes();
		}
	}, [user?.id]);

	const refreshNotes = async () => {
		if (!user?.id) return;
		const userNotes = await fetchNotes(user.id);
		setNotes(userNotes);
	};

	const addNote = async (title: string) => {
		if (!user?.id) return;
		await createNewNote(user.id, title);
		await refreshNotes();
	};

	const deleteSelectedNote = async () => {
		if (selectedNote?.id) {
			await removeNote(selectedNote.id);
			setSelectedNote(null);
			await refreshNotes();
		}
	};

	const updateSelectedNote = async (content: string) => {
		if (selectedNote?.id) {
			await modifyNote(selectedNote.id, content);
			await refreshNotes();
		}
	};

	const value: NotesContextType = {
		notes,
		selectedNote,
		setSelectedNote,
		refreshNotes,
		addNote,
		deleteSelectedNote,
		updateSelectedNote,
	};

	return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
};
