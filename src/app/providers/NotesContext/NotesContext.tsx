import { FC, useCallback, useEffect, useState } from 'react';
import { Note } from 'Entities/Note';
import {
	useNotesActions,
	NotesProviderProps,
	NotesContext,
	NotesContextType,
} from 'Features/notes';
import { useAuth } from 'Features/auth';

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

	const addNote = async (
		title: string,
		content: string
	): Promise<number | undefined> => {
		if (!user?.id) return undefined;
		const newNoteId = await createNewNote(user.id, title, content);
		await refreshNotes();
		return newNoteId;
	};

	const deleteNoteById = async (noteId: number) => {
		await removeNote(noteId);
		setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
	};

	const updateNoteById = async (noteId: number, title: string, content: string) => {
		await modifyNote(noteId, title, content);
		setNotes((prevNotes) =>
			prevNotes.map((note) =>
				note.id === noteId
					? { ...note, title, content, updatedAt: new Date() }
					: note
			)
		);
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
