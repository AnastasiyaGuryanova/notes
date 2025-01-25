import { lazy } from 'react';
import { internalPaths } from 'shared/constants';
import { RouteConfig } from './routes.types';
import { SuspenseWithLoader } from './SuspenseWithLoader';

const Notes = lazy(() =>
	import('pages/Notes/Notes').then((module) => ({
		default: module.Notes,
	}))
);
const Login = lazy(() =>
	import('pages/Login/Login').then((module) => ({
		default: module.Login,
	}))
);
const NotFound = lazy(() =>
	import('pages/NotFound/NotFound').then((module) => ({
		default: module.NotFound,
	}))
);

export const routesConfig: RouteConfig[] = [
	{
		path: internalPaths.notes,
		element: (
			<SuspenseWithLoader>
				<Notes />
			</SuspenseWithLoader>
		),
		isPrivate: true,
	},
	{
		path: internalPaths.login,
		element: (
			<SuspenseWithLoader>
				<Login />
			</SuspenseWithLoader>
		),
	},
	{
		path: internalPaths.notFound,
		element: (
			<SuspenseWithLoader>
				<NotFound />
			</SuspenseWithLoader>
		),
	},
];
