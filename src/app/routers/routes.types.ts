import { ReactElement, ReactNode } from 'react';

export interface RouteConfig {
	path: string;
	element: ReactElement;
	isPrivate?: boolean;
}

export interface SuspenseWithLoaderProps {
	children: ReactNode;
}

export interface PrivateRouteProps {
	element: JSX.Element;
}
