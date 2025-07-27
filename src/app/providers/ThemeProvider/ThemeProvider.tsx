import '@mantine/core/styles.css';

import { FC, ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from './globalStyles';

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
