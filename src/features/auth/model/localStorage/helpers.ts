import { SigninUserType } from 'shared';
import { LOCAL_STORAGE_USER_KEY } from 'features';

const getUserFromLocalStorage = (): SigninUserType | null => {
	const storedUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
	return storedUser ? JSON.parse(storedUser) : null;
};

const saveUserToLocalStorage = (user: SigninUserType) => {
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
