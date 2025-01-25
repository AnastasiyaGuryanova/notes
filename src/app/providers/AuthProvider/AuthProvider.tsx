import { FC, useState } from 'react';
import {
	AuthContextType,
	AuthProviderProps,
	authStorage,
	AuthContext,
} from 'features/auth';
import { createUser, validateUser } from 'entities/User';
import { SigninUserType } from 'shared/types';

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<SigninUserType | null>(() =>
		authStorage.getUserFromLocalStorage()
	);

	const signin = async (email: string, password: string, callback: VoidFunction) => {
		const validUser = await validateUser(email, password);
		if (validUser) {
			setUser(validUser);
			authStorage.saveUserToLocalStorage(validUser);
			callback();
		} else {
			throw new Error('Invalid email or password');
		}
	};

	const signup = async (email: string, password: string, callback: VoidFunction) => {
		const newUser = await createUser(email, password);
		if (newUser) {
			setUser(newUser);
			authStorage.saveUserToLocalStorage(newUser);
			callback();
		} else {
			throw new Error('Registration failed');
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
