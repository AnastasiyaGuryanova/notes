import { FC, ReactNode } from 'react';
import { Paper } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface PaperWrapperProps {
	children: ReactNode;
}

export const PaperWrapper: FC<PaperWrapperProps> = ({ children }) => {
	const isSmallScreen = useMediaQuery('(max-width: 768px)');

	if (isSmallScreen) {
		return <>{children}</>;
	}

	return (
		<Paper p="md" radius="md" bg="gray.0" withBorder>
			{children}
		</Paper>
	);
};
