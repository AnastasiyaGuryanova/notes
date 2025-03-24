import { FC } from 'react';
import { Box, Loader as MantineLoader, Text } from '@mantine/core';
import { CustomLoaderProps } from './Loader.types';

export const Loader: FC<CustomLoaderProps> = ({ text = 'Загрузка...', size = 40 }) => {
	return (
		<Box component="div" ta="center">
			<MantineLoader size={size} mt="" color="myColor.3" />
			{text && <Text c="myColor.3">{text}</Text>}
		</Box>
	);
};
