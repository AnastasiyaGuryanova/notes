import { User } from 'Entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'Features/auth';

const getUserFromLocalStorage = (): User | null => {
	const storedUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
	return storedUser ? JSON.parse(storedUser) : null;
};

const saveUserToLocalStorage = (user: User) => {
	localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
};

const removeUserFromLocalStorage = () => {
	localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
};

export const authStorage = {
	getUserFromLocalStorage,
	saveUserToLocalStorage,
	removeUserFromLocalStorage,
};
