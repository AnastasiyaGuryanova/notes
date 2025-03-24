import { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { AuthProvider } from './AuthProvider';
import { NotesProvider } from './NotesContext';
import { SidebarProvider } from './SidebarContext';

export const withProviders = (children: ReactNode) => {
	return (
		<ThemeProvider>
			<AuthProvider>
				<SidebarProvider>
					<NotesProvider>{children}</NotesProvider>
				</SidebarProvider>
			</AuthProvider>
		</ThemeProvider>
	);
};
