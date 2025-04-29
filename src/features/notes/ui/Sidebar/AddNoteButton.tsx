import { FC, useState } from 'react';
import { Text, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconPlus } from '@tabler/icons-react';
import { Button, TextInputModal } from 'Shared/ui';
import { useNotes } from 'Features/notes';

export const AddNoteButton: FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();
	const { addNote } = useNotes();

	const handleCreateNote = async (title?: string) => {
		if (title?.trim()) {
			try {
				const newNoteId = await addNote(title, '');

				if (newNoteId !== undefined) {
					setIsModalOpen(false);
					navigate(`/notes/${newNoteId}`);
				}
			} catch (error) {
				console.error('Ошибка при создании заметки:', error);
			}
		}
	};

	return (
		<>
			<Button fullWidth variant="filled" onClick={() => setIsModalOpen(true)}>
				<Group gap="xs">
					<IconPlus size={20} />
					<Text>Создать заметку</Text>
				</Group>
			</Button>

			<TextInputModal
				opened={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onConfirm={handleCreateNote}
				title="Создать заметку"
				placeholder="Введите название заметки"
				buttonText="Создать"
			/>
		</>
	);
};
