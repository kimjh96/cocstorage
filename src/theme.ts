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
		},
		grey: {
			50: '#EAEAEA'
		}
	},
	typography: {
		fontFamily: 'NanumSquareRoundR',
		h5: {
			fontFamily: 'NanumSquareRoundEB'
		}
	},
	overrides: {
		MuiInput: {
			underline: {
				'&:hover:not($disabled):before': {
					borderBottomColor: '#8EC5FC'
				}
			}
		}
	}
});

export default theme;
