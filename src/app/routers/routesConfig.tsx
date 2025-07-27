import { lazy } from 'react';
import { internalPaths } from 'Shared/constants';
import { RouteConfig } from './routes.types';
import { SuspenseWithLoader } from './SuspenseWithLoader';

const Notes = lazy(() =>
	import('Pages/Notes/Notes').then((module) => ({
		default: module.Notes,
	}))
);
const Login = lazy(() =>
	import('Pages/Login/Login').then((module) => ({
		default: module.Login,
	}))
);
const NotFound = lazy(() =>
	import('Pages/NotFound/NotFound').then((module) => ({
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
		path: internalPaths.notesCard,
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
