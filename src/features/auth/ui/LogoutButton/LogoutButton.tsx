import { useNavigate } from 'react-router-dom';
import { IconLogout } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { useAuth } from 'Features/auth';

export const LogoutButton = () => {
	const auth = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		auth.signout(() => {
			navigate('/login', { replace: true });
		});
	};

	return (
		<ActionIcon
			onClick={handleLogout}
			variant="light"
			color="myColor.0"
			c="myColor.1"
			aria-label="Выход"
		>
			<IconLogout size={20} />
		</ActionIcon>
	);
};
