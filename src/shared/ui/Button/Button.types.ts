import { ButtonProps } from '@mantine/core';

export type CustomButtonProps = ButtonProps & {
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
};
