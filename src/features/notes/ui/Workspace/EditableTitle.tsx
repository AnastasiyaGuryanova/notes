import { FC, useState } from 'react';
import { Title } from '@mantine/core';
import { TextInputModal } from 'Shared/ui';

interface EditableTitleProps {
	title: string;
	onTitleChange: (newTitle: string) => void;
	onSave: () => void;
	setIsTitleEditing: (isEditing: boolean) => void;
}

export const EditableTitle: FC<EditableTitleProps> = ({
	title,
	onTitleChange,
	onSave,
	setIsTitleEditing,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
		setIsTitleEditing(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setIsTitleEditing(false);
	};

	const handleTitleEdit = (newTitle: string) => {
		onTitleChange(newTitle);
		handleCloseModal();
		onSave();
	};

	return (
		<>
			<Title
				order={2}
				onClick={handleOpenModal}
				style={{
					cursor: 'pointer',
					padding: '8px 12px',
					maxWidth: '80%',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
				}}
			>
				{title || 'Без названия'}
			</Title>

			<TextInputModal
				opened={isModalOpen}
				onClose={handleCloseModal}
				onConfirm={handleTitleEdit}
				title="Редактировать название"
				initialValue={title}
				placeholder="Введите новое название"
				buttonText="Сохранить"
			/>
		</>
	);
};
