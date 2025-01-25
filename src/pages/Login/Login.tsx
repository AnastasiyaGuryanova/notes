import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Title, Anchor } from '@mantine/core';
import { useAuth, SigninForm, SignupForm } from 'features/auth';
import { SigninUserType, SignupUserType } from 'shared/types';
import { internalPaths } from 'shared/constants';

export const Login: FC = () => {
	const [isSignup, setIsSignup] = useState(false);
	const navigate = useNavigate();
	const auth = useAuth();
	const location = useLocation();

	const from = location.state?.from || internalPaths.notes;

	const handleSignin = (formData: SigninUserType) => {
		auth.signin(formData.email, formData.password, () => {
			navigate(from, { replace: true });
		});
	};

	const handleSignup = (formData: SignupUserType) => {
		auth.signup(formData.email, formData.password, () => {
			setIsSignup(false);
			navigate(from, { replace: true });
		});
	};

	return (
		<Box
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
				<SignupForm onSubmit={handleSignup} />
			) : (
				<SigninForm onSubmit={handleSignin} />
			)}

			<Anchor
				component="button"
				size="sm"
				onClick={() => setIsSignup(!isSignup)}
				style={{
					marginTop: '1rem',
					cursor: 'pointer',
					color: 'gray',
				}}
			>
				{isSignup
					? 'Уже есть аккаунт? Войти'
					: 'Нет аккаунта? Зарегистрироваться'}
			</Anchor>
		</Box>
	);
};
