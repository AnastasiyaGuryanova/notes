import { Sidebar, Workspace } from 'Features/notes';
import { AppShellComponent } from 'Widgets/AppShell';

export const Notes = () => {
	return (
		<AppShellComponent>
			<Sidebar />
			<Workspace />
		</AppShellComponent>
	);
};
