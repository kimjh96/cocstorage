import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// Material UI
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'&::after': {
				content: '"AD"',
				display: 'block',
				padding: theme.spacing(3),
				textAlign: 'center',
				fontSize: 18,
				fontWeight: 700,
				color: theme.palette.grey.A200
			}
		}
	})
);

function GoogleAD() {
	const classes = useStyles();

	return (
		<Box className={classes.root} />
	);
}

export default GoogleAD;
