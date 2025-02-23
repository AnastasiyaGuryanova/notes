import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core';
import { Note } from 'entities/Note';
import { NoteItem } from './NoteItem';

interface NoteListProps {
	notes: Note[];
}

export const NoteList: FC<NoteListProps> = ({ notes }) => {
	const navigate = useNavigate();

	const handleNoteClick = (noteId: number) => {
		if (noteId !== undefined) {
			navigate(`/notes/${noteId}`);
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
