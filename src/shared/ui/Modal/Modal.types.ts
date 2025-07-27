export type ModalProps = {
	opened: boolean;
	onClose: () => void;
	onConfirm: () => void;
	message: string;
};
