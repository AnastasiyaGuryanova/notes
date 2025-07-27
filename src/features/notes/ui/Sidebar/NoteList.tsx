import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Note } from 'Entities/Note';
import { useSidebar } from 'Features/notes';
import { NoteItem } from './NoteItem';

interface NoteListProps {
	notes: Note[];
}

export const NoteList: FC<NoteListProps> = ({ notes }) => {
	const navigate = useNavigate();
	const { close } = useSidebar();
	const isMobile = useMediaQuery('(max-width: 767px)');

	const handleNoteClick = (noteId: number) => {
		if (noteId !== undefined) {
			navigate(`/notes/${noteId}`);
			if (isMobile) {
				close();
			}
		}
	};

	return (
		<Box>
			{notes.map((note) => (
				<NoteItem key={note.id} note={note} onNoteClick={handleNoteClick} />
			))}
		</Box>
	);
};
