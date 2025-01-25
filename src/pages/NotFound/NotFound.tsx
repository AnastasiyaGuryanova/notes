import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container, Title } from '@mantine/core';

export const NotFound: FC = () => {
	return (
		<Container>
			<Title order={2}>Страница не найдена</Title>
			<Link
				to="/"
				className="link"
				onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'blue')}
				onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'red')}
			>
				Вернуться на главную
			</Link>
		</Container>
	);
};
