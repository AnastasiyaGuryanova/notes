import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNotes } from 'Features/notes';
import { AppShell } from '@mantine/core';
import { NoNoteSelected } from './NoNoteSelected';
import { NoteEditor } from './NoteEditor';
import { NoteViewer } from './NoteViewer';
import { PaperWrapper } from './PaperWrapper';

export const Workspace: FC = () => {
	const { id } = useParams<{ id: string }>();
	const { notes } = useNotes();
	const [isEditing, setIsEditing] = useState(false);

	const note = notes.find((n) => n.id === Number(id));

	useEffect(() => {
		setIsEditing(false);
	}, [id]);

	if (!note) {
		return (
			<AppShell.Main bg="myColor.0">
				<PaperWrapper>
					<NoNoteSelected />
				</PaperWrapper>
			</AppShell.Main>
		);
	}

	return (
		<AppShell.Main bg="myColor.0">
			<PaperWrapper>
				{isEditing ? (
					<NoteEditor note={note} onClose={() => setIsEditing(false)} />
				) : (
					<NoteViewer note={note} onEdit={() => setIsEditing(true)} />
				)}
			</PaperWrapper>
		</AppShell.Main>
	);
};
