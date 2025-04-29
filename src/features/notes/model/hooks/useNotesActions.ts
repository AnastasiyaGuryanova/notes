import { getNotesByUser, createNote, deleteNote, updateNote } from 'Entities/Note';

export const useNotesActions = () => {
	const fetchNotes = async (userId: string) => {
		return await getNotesByUser(userId);
	};

	const createNewNote = async (
		userId: string,
		title: string,
		content: string = ''
	): Promise<number> => {
		const newNoteId = await createNote(userId, title, content);
		return newNoteId;
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
