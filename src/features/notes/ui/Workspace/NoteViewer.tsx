import { FC, useState } from 'react';
import { marked } from 'marked';
import { Flex, Box, Stack, ActionIcon } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { Note } from 'Entities/Note';
import { useNotes } from 'Features/notes';
import { EditableTitle } from './EditableTitle';
import { Modal } from 'Shared/ui';
import './styles/editorStyles.css';

export const NoteViewer: FC<{ note: Note; onEdit: () => void }> = ({ note, onEdit }) => {
	const { updateNoteById, deleteNoteById } = useNotes();
	const [isTitleEditing, setIsTitleEditing] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);

	const handleTitleChange = (newTitle: string) => {
		if (note.id) {
			updateNoteById(note.id, newTitle, note.content);
		}
	};

	const handleDelete = async () => {
		if (note?.id) {
			await deleteNoteById(note.id);
			setDeleteModalOpen(false);
		}
	};

	const markdown = marked(note.content);

	return (
		<>
			<Stack gap="md">
				<Flex justify="space-between" align="center">
					<EditableTitle
						title={note.title}
						onTitleChange={handleTitleChange}
						onSave={() => setIsTitleEditing(false)}
						setIsTitleEditing={setIsTitleEditing}
					/>
					<Flex gap="xs" justify="space-between" align="center">
						<ActionIcon
							onClick={onEdit}
							disabled={isTitleEditing}
							color="blue"
							variant="outline"
							title="Редактировать"
						>
							<IconPencil size={18} />
						</ActionIcon>
						<ActionIcon
							onClick={() => setDeleteModalOpen(true)}
							disabled={isTitleEditing}
							color="red.7"
							variant="outline"
							title="Удалить"
						>
							<IconTrash size={18} />
						</ActionIcon>
					</Flex>
				</Flex>

				<Box
					className="markdown-content"
					dangerouslySetInnerHTML={{ __html: markdown }}
				/>
			</Stack>

			<Modal
				opened={deleteModalOpen}
				onClose={() => setDeleteModalOpen(false)}
				onConfirm={handleDelete}
				message="Вы уверены, что хотите удалить эту заметку?"
			/>
		</>
	);
};
