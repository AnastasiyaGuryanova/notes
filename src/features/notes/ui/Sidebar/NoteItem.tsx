import { FC } from 'react';
import { Box, Text } from '@mantine/core';
import { Note } from 'Entities/Note';
import { formatDateTimeNoSeconds } from 'Shared/utils';

interface NoteItemProps {
	note: Note;
	onNoteClick: (noteId: number) => void;
}

export const NoteItem: FC<NoteItemProps> = ({ note, onNoteClick }) => (
	<Box
		bg="myColor.3"
		style={{
			padding: '0.5rem',
			marginBottom: '0.5rem',
			border: '1px solid ',
			borderRadius: '5px',
			cursor: 'pointer',
		}}
		onClick={() => onNoteClick(note.id as number)}
	>
		<Text
			style={{
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
			}}
		>
			{note.title}
		</Text>

		<Text size="xs">{formatDateTimeNoSeconds(note.updatedAt)}</Text>
	</Box>
);
