import { useContext } from 'react';
import { SidebarContextType, SidebarContext } from 'features/notes';

export const useSidebar = (): SidebarContextType => {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error('useSidebar must be used within a SidebarProvider');
	}
	return context;
};
