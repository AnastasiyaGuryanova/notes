import { FC } from 'react';
import { Text, Box, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ErrorComponentProps } from './ErrorComponent.types';

export const ErrorComponent: FC<ErrorComponentProps> = ({
	text = 'Произошла ошибка. Попробуйте позже.',
	onRetry,
	showRetry = false,
}) => {
	const isSmallScreen = useMediaQuery('(max-width: 768px)');

	return (
		<Box
			component="div"
			style={isSmallScreen ? { margin: '0' } : { margin: '15px 0' }}
		>
			<Text>{text}</Text>
			{showRetry && onRetry && <Button onClick={onRetry}>Повторить</Button>}
		</Box>
	);
};
