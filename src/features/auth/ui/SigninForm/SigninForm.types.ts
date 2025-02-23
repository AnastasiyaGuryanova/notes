export type SigninFormProps = {
	onSubmit: (formData: { email: string; password: string }) => void;
	error: string | null;
	onErrorReset: () => void;
};
