import { FC } from 'react';
import { Group, Modal as MantineModal } from '@mantine/core';
import { Button } from 'Shared/ui';
import { ModalProps } from './Modal.types';

export const Modal: FC<ModalProps> = ({ opened, onClose, onConfirm, message }) => {
	return (
		<MantineModal
			opened={opened}
			onClose={onClose}
			title={message}
			c="myColor.9"
			styles={{
				content: {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				},
				header: {
					width: '100%',
				},
			}}
		>
			<Group mt="md">
				<Button c="myColor.0" color="red.7" onClick={onConfirm}>
					Удалить
				</Button>
			</Group>
		</MantineModal>
	);
};
