import { ReactNode } from 'react';
import { SidebarContext } from 'Features/notes';
import { useDisclosure } from '@mantine/hooks';

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
	const [opened, { toggle, close }] = useDisclosure(false);

	return (
		<SidebarContext.Provider value={{ opened, toggle, close }}>
			{children}
		</SidebarContext.Provider>
	);
};
