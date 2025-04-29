import { FC, useState } from 'react';
import {
	AuthContextType,
	AuthProviderProps,
	authStorage,
	AuthContext,
} from 'Features/auth';
import { createUser, User, validateUser, getUserByEmail } from 'Entities/User';

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(() =>
		authStorage.getUserFromLocalStorage()
	);

	const signin = async (email: string, password: string, callback: VoidFunction) => {
		const validUser = await validateUser(email, password);

		if (!validUser) {
			const existingUser = await getUserByEmail(email);
			if (!existingUser) {
				throw new Error('Неверный email пользователя');
			}
			throw new Error('Пароль неверный');
		}
		setUser(validUser);
		authStorage.saveUserToLocalStorage(validUser);
		callback();
	};

	const signup = async (email: string, password: string, callback: VoidFunction) => {
		const existingUser = await getUserByEmail(email);
		if (existingUser) {
			throw new Error('Данный пользователь уже существует');
		}

		const newUser = await createUser(email, password);
		if (newUser) {
			setUser(newUser);
			authStorage.saveUserToLocalStorage(newUser);
			callback();
		} else {
			throw new Error('Регистрация не удалась');
		}
	};

	const signout = (callback: VoidFunction) => {
		setUser(null);
		authStorage.removeUserFromLocalStorage();
		callback();
	};

	const value: AuthContextType = {
		user,
		signin,
		signup,
		signout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
