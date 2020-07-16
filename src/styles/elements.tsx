import styled from 'styled-components';
import theme from 'styled-theming';
import { darkColors } from './colors';

const backgroundColor = theme.variants('mode', 'variant', {
	disabled: { dark: 'darkgray' },
	primary: { dark: 'darkblue' },
});
const color = theme.variants('mode', 'variant', {
	disabled: { dark: darkColors.color },
	primary: { dark: darkColors.color },
});

export const Button = styled.button`
	background-color: ${backgroundColor};
	color: ${color};
	padding: 10px;
	margin: 6px;
	border: none;
	border-radius: 6px;
	font-size: 1.2em;
`;
