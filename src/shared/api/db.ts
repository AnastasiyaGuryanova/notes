import Dexie, { Table } from 'dexie';
import { User } from 'entities/User';
import { Note } from 'entities/Note';

class NotesDB extends Dexie {
	users!: Table<User>;
	notes!: Table<Note>;

	constructor() {
		super('notesDB');
		this.version(1).stores({
			users: '++id, email, password',
			notes: '++id, title, content, updatedAt',
		});
	}
}

export const db = new NotesDB();
