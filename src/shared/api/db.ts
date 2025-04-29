import Dexie, { Table } from 'dexie';
import { User } from 'Entities/User';
import { Note } from 'Entities/Note';

class NotesDB extends Dexie {
	users!: Table<User>;
	notes!: Table<Note>;

	constructor() {
		super('notesDB');
		this.version(1).stores({
			users: '++id, email, password',
			notes: '++id, userId, title, content, updatedAt',
		});
	}
}

export const db = new NotesDB();
