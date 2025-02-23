import { FC, useCallback, useEffect, useState } from 'react';
import { Note } from 'entities/Note';
import {
	useNotesActions,
	NotesProviderProps,
	NotesContext,
	NotesContextType,
} from 'features/notes';
import { useAuth } from 'features/auth';

export const NotesProvider: FC<NotesProviderProps> = ({ children }) => {
	const { user } = useAuth();
	const { fetchNotes, createNewNote, removeNote, modifyNote } = useNotesActions();
	const [notes, setNotes] = useState<Note[]>([]);

	useEffect(() => {
		if (user?.id) {
			refreshNotes();
		}
	}, [user?.id]);

	const refreshNotes = useCallback(async () => {
		if (!user?.id) return;
		const userNotes = await fetchNotes(user.id);
		setNotes(userNotes);
	}, [fetchNotes, user?.id]);

	const addNote = async (title: string) => {
		if (!user?.id) return;
		await createNewNote(user.id, title);
		await refreshNotes();
	};

	const deleteNoteById = async (noteId: number) => {
		await removeNote(noteId);
		await refreshNotes();
	};

	const updateNoteById = async (noteId: number, title: string, content: string) => {
		await modifyNote(noteId, title, content);
		await refreshNotes();
	};

	const value: NotesContextType = {
		notes,
		refreshNotes,
		addNote,
		deleteNoteById,
		updateNoteById,
	};

	return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
};
