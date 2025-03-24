import { Sidebar, Workspace } from 'features/notes';
import { AppShellComponent } from 'widgets/AppShell';

export const Notes = () => {
	return (
		<AppShellComponent>
			<Sidebar />
			<Workspace />
		</AppShellComponent>
	);
};
