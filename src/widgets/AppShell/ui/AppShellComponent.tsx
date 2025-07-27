import { FC, ReactNode } from 'react';
import { AppShell } from '@mantine/core';
import { useSidebar } from 'Features/notes';
import { Header } from 'Widgets/Header';

interface AppShellComponentProps {
	children: ReactNode;
}

export const AppShellComponent: FC<AppShellComponentProps> = ({ children }) => {
	const { opened, toggle } = useSidebar();

	return (
		<AppShell
			color="myColor.9"
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: 'sm',
				collapsed: { mobile: !opened },
			}}
			padding="md"
		>
			<Header opened={opened} toggle={toggle} />

			{children}
		</AppShell>
	);
};
