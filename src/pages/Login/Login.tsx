import { FC, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Box, Title, Anchor } from '@mantine/core';
import { useAuth, SigninForm, SignupForm } from 'Features/auth';
import { SigninUserType, SignupUserType } from 'Shared/types';
import { internalPaths } from 'Shared/constants';

export const Login: FC = () => {
	const [isSignup, setIsSignup] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();
	const auth = useAuth();

	if (auth.user) {
		return <Navigate to="/notes" />;
	}
	const from = auth.user ? internalPaths.notes : internalPaths.login;

	const handleSignin = async (formData: SigninUserType) => {
		try {
			setError(null);
			await auth.signin(formData.email, formData.password, () => {
				navigate(from, { replace: true });
			});
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Ошибка входа');
		}
	};

	const handleSignup = async (formData: SignupUserType) => {
		try {
			setError(null);
			await auth.signup(formData.email, formData.password, () => {
				setIsSignup(false);
				navigate(from, { replace: true });
			});
		} catch (err) {
			setError(
				err instanceof Error ? err.message : 'Неизвестная ошибка при регистрации'
			);
		}
	};

	const handleErrorReset = () => {
		setError(null);
	};

	return (
		<Box
			c="myColor.4"
			bg="myColor.9"
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
			}}
		>
			<Title
				style={{
					alignItems: 'center',
				}}
			>
				{isSignup ? 'Регистрация' : 'Вход'}
			</Title>

			{isSignup ? (
				<SignupForm
					onSubmit={handleSignup}
					error={error}
					onErrorReset={handleErrorReset}
				/>
			) : (
				<SigninForm
					onSubmit={handleSignin}
					error={error}
					onErrorReset={handleErrorReset}
				/>
			)}

			<Anchor
				component="button"
				size="sm"
				onClick={() => setIsSignup(!isSignup)}
				c="myColor.4"
				style={{
					marginTop: '1rem',
					cursor: 'pointer',
				}}
			>
				{isSignup
					? 'Уже есть аккаунт? Войти'
					: 'Нет аккаунта? Зарегистрироваться'}
			</Anchor>
		</Box>
	);
};
