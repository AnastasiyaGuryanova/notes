import { FC } from 'react';
import { Box, TextInput, PasswordInput, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconAt } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { SigninFormProps } from './SigninForm.types';
import { Button } from 'Shared/ui';

export const SigninForm: FC<SigninFormProps> = ({
	onSubmit,
	error,
	onErrorReset,
}: SigninFormProps) => {
	const isSmallScreen = useMediaQuery('(max-width: 768px)');

	const form = useForm({
		initialValues: {
			email: '',
			password: '',
		},
		validate: {
			email: (value) =>
				/^\S+@\S+\.\S+$/.test(value) ? null : 'Введите корректный email.',
			password: (value) =>
				value.length >= 6 ? null : 'Пароль должен быть не менее 6 символов.',
		},
	});

	const icon = <IconAt size={24} />;

	return (
		<Box
			component="form"
			onSubmit={form.onSubmit((values) => onSubmit(values))}
			noValidate
			style={{
				width: isSmallScreen ? '300px' : '500px',
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<TextInput
				label="Ваш email"
				name="email"
				type="email"
				placeholder="Введите email"
				required
				leftSection={icon}
				{...form.getInputProps('email')}
				onChange={(event) => {
					form.getInputProps('email').onChange(event);
					onErrorReset();
				}}
			/>

			<PasswordInput
				label="Пароль"
				type="password"
				placeholder="Введите пароль"
				required
				{...form.getInputProps('password')}
				onChange={(event) => {
					form.getInputProps('password').onChange(event);
					onErrorReset();
				}}
			/>

			<Button type="submit">Войти</Button>

			{error && (
				<Text c="red" size="sm" ta="center">
					{error}
				</Text>
			)}
		</Box>
	);
};
