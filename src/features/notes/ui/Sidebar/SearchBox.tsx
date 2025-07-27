import { FC } from 'react';
import { TextInput, useMantineTheme } from '@mantine/core';

interface SearchBoxProps {
	searchQuery: string;
	onSearchChange: (value: string) => void;
}

export const SearchBox: FC<SearchBoxProps> = ({ searchQuery, onSearchChange }) => {
	const theme = useMantineTheme();

	return (
		<TextInput
			placeholder="Поиск заметок..."
			value={searchQuery}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
				onSearchChange(e.target.value)
			}
			mb="md"
			styles={{
				input: {
					backgroundColor: theme.colors.myColor[1],
				},
			}}
		/>
	);
};
