import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'Features/auth';
import { internalPaths } from 'Shared/constants';
import { PrivateRouteProps } from './routes.types';

export const PrivateRoute: FC<PrivateRouteProps> = ({ element }) => {
	const auth = useAuth();
	const location = useLocation();

	if (auth.user === null) {
		return (
			<Navigate
				to={internalPaths.login}
				state={{ from: location.pathname }}
				replace
			/>
		);
	}

	return element;
};
