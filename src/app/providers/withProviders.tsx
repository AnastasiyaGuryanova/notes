import { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { AuthProvider } from './AuthProvider';
import { NotesProvider } from './NotesContext';

export const withProviders = (children: ReactNode) => {
	return (
		<ThemeProvider>
			<AuthProvider>
				<NotesProvider>{children}</NotesProvider>
			</AuthProvider>
		</ThemeProvider>
	);
};
