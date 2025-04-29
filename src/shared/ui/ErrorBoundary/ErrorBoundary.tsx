import { Component, ReactNode } from 'react';
import { ErrorComponent } from 'Shared/ui';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		console.log('####: error', error);

		return {
			hasError: true,
		};
	}

	componentDidCatch(error: Error, errorInfo: { componentStack: string }): void {
		console.log('####: error', error);
		console.log('####: errorInfo', errorInfo);
	}

	render(): ReactNode {
		if (this.state.hasError) {
			return <ErrorComponent />;
		}

		return this.props.children;
	}
}
