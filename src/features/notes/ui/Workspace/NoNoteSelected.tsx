import { FC } from 'react';
import { Box, Text, Center } from '@mantine/core';

export const NoNoteSelected: FC = () => {
	return (
		<Center h="100%">
			<Box>
				<Text size="lg" c="myColor.9" ta="center">
					Выберите или создайте заметку для начала работы
				</Text>
			</Box>
		</Center>
	);
};
