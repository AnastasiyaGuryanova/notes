import { AppShell, Burger, Group, Box, useMantineTheme } from '@mantine/core';
import { LogoutButton } from 'Features/auth';

interface HeaderProps {
	opened: boolean;
	toggle: () => void;
}

export const Header = ({ opened, toggle }: HeaderProps) => {
	const theme = useMantineTheme();

	return (
		<AppShell.Header
			style={{
				backgroundColor: theme.colors.myColor[9],
				border: 'none',
			}}
		>
			<Box
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					height: '100%',
					padding: 'md',
				}}
			>
				<Burger
					opened={opened}
					onClick={toggle}
					hiddenFrom="sm"
					size="md"
					color="myColor.0"
					style={{ marginLeft: '20px' }}
				/>

				<Group justify="flex-end" style={{ margin: '0 20px 0 auto' }}>
					<LogoutButton />
				</Group>
			</Box>
		</AppShell.Header>
	);
};
