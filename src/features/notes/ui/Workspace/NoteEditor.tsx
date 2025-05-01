import { FC, useState } from 'react';
import { Stack, Flex, ActionIcon } from '@mantine/core';
import { useNotes, useNoteEditor } from 'Features/notes';
import { Note } from 'Entities/Note';
import { EditorContent } from '@tiptap/react';
import { EditableTitle } from './EditableTitle';
import { MenuBar } from './MenuBar';
import { IconX } from '@tabler/icons-react';
import './styles/editorStyles.css';

export const NoteEditor: FC<{ note: Note; onClose: () => void }> = ({
	note,
	onClose,
}) => {
	const { updateNoteById } = useNotes();
	const editor = useNoteEditor(note, updateNoteById);
	const [isTitleEditing, setIsTitleEditing] = useState(false);

	const handleTitleChange = (newTitle: string) => {
		if (note.id) {
			updateNoteById(note.id, newTitle, note.content);
		}
	};

	if (!editor) return null;

	return (
		<Stack gap="md">
			<Flex justify="space-between" align="center">
				<EditableTitle
					title={note.title}
					onTitleChange={handleTitleChange}
					onSave={() => setIsTitleEditing(false)}
					setIsTitleEditing={setIsTitleEditing}
				/>
				<ActionIcon
					onClick={onClose}
					color="red.7"
					variant="outline"
					disabled={isTitleEditing}
					title="Закрыть"
				>
					<IconX size={18} />
				</ActionIcon>
			</Flex>

			<MenuBar editor={editor} isTitleEditing={isTitleEditing} />

			<EditorContent
				editor={editor}
				style={{
					padding: '16px',
					minHeight: '300px',
					fontSize: '16px',
				}}
			/>
		</Stack>
	);
};
