import { FC, ChangeEvent, useState, useEffect } from 'react';
import { Modal as MantineModal, TextInput, Group } from '@mantine/core';
import { Button } from 'Shared/ui';
import { TextInputModalProps } from './TextInputModal.types';

export const TextInputModal: FC<TextInputModalProps> = ({
	opened,
	onClose,
	onConfirm,
	title = 'Введите текст',
	initialValue = '',
	placeholder = 'Введите текст',
	buttonText = 'Подтвердить',
}) => {
	const [inputValue, setInputValue] = useState(initialValue);

	useEffect(() => {
		if (opened) {
			setInputValue(initialValue);
		}
	}, [opened, initialValue]);

	const handleConfirm = () => {
		if (inputValue.trim()) {
			onConfirm(inputValue);
			setInputValue('');
			onClose();
		}
	};

	return (
		<MantineModal
			opened={opened}
			onClose={onClose}
			title={title}
			color="myColor.9"
			c="myColor.7"
			radius="md"
		>
			<TextInput
				value={inputValue}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setInputValue(e.target.value)
				}
				placeholder={placeholder}
				mt="md"
				style={{ width: '100%' }}
			/>

			<Group
				mt="md"
				style={{
					width: '100%',
					justifyContent: 'center',
				}}
			>
				<Button
					c="myColor.8"
					color="myColor.3"
					onClick={handleConfirm}
					disabled={!inputValue.trim()}
				>
					{buttonText}
				</Button>
			</Group>
		</MantineModal>
	);
};
