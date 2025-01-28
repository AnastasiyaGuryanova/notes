import { User } from 'entities/User';

export interface AuthContextType {
	user: User | null;
	signin: (email: string, password: string, callback: VoidFunction) => void;
	signup: (email: string, password: string, callback: VoidFunction) => void;
	signout: (callback: VoidFunction) => void;
}

export interface AuthProviderProps {
	children: React.ReactNode;
}
