import { FC, useState } from 'react';
import { AppShell, useMantineTheme, Box } from '@mantine/core';
import { NoteList, SearchBox, AddNoteButton } from './component';
import { useNotes } from 'features/notes';

export const Sidebar: FC = () => {
	const { notes } = useNotes();
	const [searchQuery, setSearchQuery] = useState('');
	const theme = useMantineTheme();

	const filteredNotes = notes.filter((note) =>
		note.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<AppShell.Navbar
			p="md"
			style={{
				color: theme.colors.myColor[9],
				backgroundColor: theme.colors.myColor[7],
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
