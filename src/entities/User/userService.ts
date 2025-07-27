import { db } from 'Shared/api/db';
import { User } from './userModel';

export const createUser = async (email: string, password: string): Promise<User> => {
	const existingUser = await db.users.where('email').equals(email).first();
	if (existingUser) {
		throw new Error('User already exists');
	}

	const userId = await db.users.add({ email, password });
	return { id: userId.toString(), email, password };
};

export const getUserByEmail = async (email: string): Promise<User | undefined> => {
	return await db.users.where('email').equals(email).first();
};

export const validateUser = async (
	email: string,
	password: string
): Promise<User | null> => {
	const user = await getUserByEmail(email);
	if (user && user.password === password) {
		return user;
	}
	return null;
};
