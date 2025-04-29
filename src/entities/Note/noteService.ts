import { db } from 'Shared/api';
import { Note } from './noteModel';

export const getNotesByUser = async (userId: string): Promise<Note[]> => {
	return await db.notes.where('userId').equals(userId).toArray();
};

export const createNote = async (
	userId: string,
	title: string,
	content: string
): Promise<number> => {
	const newNoteId = await db.notes.add({
		userId,
		title,
		content,
		updatedAt: new Date(),
	});
	return newNoteId;
};

export const updateNote = async (
	id: number,
	title: string,
	content: string
): Promise<void> => {
	await db.notes.update(id, { title, content, updatedAt: new Date() });
};

export const deleteNote = async (id: number): Promise<void> => {
	await db.notes.delete(id);
};
