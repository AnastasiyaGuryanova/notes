import { Routes, Route } from 'react-router-dom';
import { routesConfig, PrivateRoute } from './routers';
import { withProviders } from './providers';
import { ErrorBoundary } from 'Shared/ui';

export const App = () => {
	return withProviders(
		<ErrorBoundary>
			<Routes>
				{routesConfig.map(({ path, element, isPrivate }) => (
					<Route
						key={path}
						path={path}
						element={isPrivate ? <PrivateRoute element={element} /> : element}
					/>
				))}
			</Routes>
		</ErrorBoundary>
	);
};
