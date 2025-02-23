import { getNotesByUser, createNote, deleteNote, updateNote } from 'entities/Note';

export const useNotesActions = () => {
	const fetchNotes = async (userId: string) => {
		return await getNotesByUser(userId);
	};

	const createNewNote = async (userId: string, title: string) => {
		await createNote(userId, title, '');
	};

	const removeNote = async (noteId: number) => {
		await deleteNote(noteId);
	};

	const modifyNote = async (noteId: number, title: string, content: string) => {
		await updateNote(noteId, title, content);
	};

	return {
		fetchNotes,
		createNewNote,
		removeNote,
		modifyNote,
	};
};
