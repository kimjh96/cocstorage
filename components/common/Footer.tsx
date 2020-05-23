import React, { memo } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginTop: theme.spacing(2),
			padding: theme.spacing(2, 0),
			borderTop: '1px solid rgba(0, 0, 0, 0.12)'
		},
		leftBox: {
			textAlign: 'left'
		},
		rightBox: {
			textAlign: 'right'
		}
	})
);

function Footer() {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Container>
				<Grid container>
					<Grid item xs={6}>
						<Box className={classes.leftBox}>{'ⓒ 2020 개념글 저장소 All Rights Reserved.'}</Box>
					</Grid>
					<Grid item xs={6}>
						<Box className={classes.rightBox}>
							<Box component={'span'}>{'이용약관'}</Box>
							<Box component={'span'}>{'개인정보처리방침'}</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default memo(Footer);
