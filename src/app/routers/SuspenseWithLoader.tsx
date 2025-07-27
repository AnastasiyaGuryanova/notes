import { Suspense, FC } from 'react';
import { Loader } from 'Shared/ui';
import { SuspenseWithLoaderProps } from './routes.types';

export const SuspenseWithLoader: FC<SuspenseWithLoaderProps> = ({ children }) => {
	return <Suspense fallback={<Loader />}>{children}</Suspense>;
};
