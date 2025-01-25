import { SigninUserType } from 'shared';

export interface AuthContextType {
	user: SigninUserType | null;
	signin: (email: string, password: string, callback: VoidFunction) => void;
	signup: (email: string, password: string, callback: VoidFunction) => void;
	signout: (callback: VoidFunction) => void;
}

export interface AuthProviderProps {
	children: React.ReactNode;
}
