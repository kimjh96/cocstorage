import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#8EC5FC'
		},
		secondary: {
			main: '#E0C3FC'
		},
		error: {
			main: red.A400
		},
		background: {
			default: '#fff'
		}
	}
});

export default theme;
