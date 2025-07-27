import { Button as MantineButton } from '@mantine/core';
import { CustomButtonProps } from './Button.types';

export const Button = ({ ...props }: CustomButtonProps) => {
	return (
		<MantineButton {...props} type={props.type || 'button'}>
			{props.children}
		</MantineButton>
	);
};
