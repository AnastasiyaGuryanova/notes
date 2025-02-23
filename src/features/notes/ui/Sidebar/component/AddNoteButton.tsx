import { FC } from 'react';
import { Text, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconPlus } from '@tabler/icons-react';
import { Button } from 'shared/ui';

export const AddNoteButton: FC = () => {
	const navigate = useNavigate();

	const handleAddNote = () => {
		navigate('/notes/new');
	};

	return (
		<Button fullWidth variant="filled" onClick={handleAddNote}>
			<Group gap="xs">
				<IconPlus size={20} />
				<Text>Создать заметку</Text>
			</Group>
		</Button>
	);
};
