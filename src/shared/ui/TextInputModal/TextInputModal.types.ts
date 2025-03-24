export type TextInputModalProps = {
	opened: boolean;
	onClose: () => void;
	onConfirm: (value: string) => void;
	title?: string;
	initialValue?: string;
	placeholder?: string;
	buttonText?: string;
};
