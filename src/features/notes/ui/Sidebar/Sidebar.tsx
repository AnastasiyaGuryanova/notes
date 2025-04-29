import { FC } from 'react';
import { AppShell, useMantineTheme, Box } from '@mantine/core';
import { useFilteredNotes } from 'Features/notes';
import { AddNoteButton } from './AddNoteButton';
import { NoteList } from './NoteList';
import { SearchBox } from './SearchBox';

export const Sidebar: FC = () => {
	const theme = useMantineTheme();
	const { filteredNotes, searchQuery, setSearchQuery } = useFilteredNotes();

	return (
		<AppShell.Navbar
			p="md"
			bg="myColor.7"
			c="myColor.9"
			style={{
				display: 'flex',
				flexDirection: 'column',
				borderColor: theme.colors.myColor[9],
			}}
		>
			<SearchBox searchQuery={searchQuery} onSearchChange={setSearchQuery} />

			<Box style={{ flex: 1, overflow: 'auto' }}>
				<NoteList notes={filteredNotes} />
			</Box>

			<AddNoteButton />
		</AppShell.Navbar>
	);
};
