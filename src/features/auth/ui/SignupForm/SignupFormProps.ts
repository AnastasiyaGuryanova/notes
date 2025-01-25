export interface SignupFormProps {
	onSubmit: (formData: {
		email: string;
		password: string;
		confirmPassword: string;
	}) => void;
}
