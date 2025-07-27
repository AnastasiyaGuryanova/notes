import {
	createTheme,
	Button,
	TextInput,
	PasswordInput,
	MantineColorsTuple,
	Title,
} from '@mantine/core';

const myColor: MantineColorsTuple = [
	'#f1f4fe',
	'#e4e6ed',
	'#c8cad3',
	'#a9adb9',
	'#9094a3',
	'#7f8496',
	'#777c91',
	'#656a7e',
	'#595e72',
	'#4a5167',
];

export const theme = createTheme({
	fontFamily: ' Roboto, Open Sans, sans-serif',
	colors: {
		myColor,
	},
	primaryColor: 'myColor',
	primaryShade: 9,

	components: {
		Button: Button.extend({
			defaultProps: {
				color: 'myColor.3',
				c: 'myColor.8',
				size: 'md',
			},
		}),

		Title: Title.extend({
			defaultProps: {
				c: 'myColor.6',
			},
		}),

		TextInput: TextInput.extend({
			defaultProps: {
				size: 'md',
			},
			styles: (theme) => ({
				input: {
					color: theme.colors.myColor[9],
				},
			}),
		}),

		PasswordInput: PasswordInput.extend({
			defaultProps: {
				size: 'md',
			},
			styles: (theme) => ({
				input: {
					color: theme.colors.myColor[9],
				},
			}),
		}),
	},
});
