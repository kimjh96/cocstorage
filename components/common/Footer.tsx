import React, { memo } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: theme.spacing(2, 0),
			borderTop: '1px solid rgba(0, 0, 0, 0.12)',
			[theme.breakpoints.down('md')]: {
				marginTop: -1
			}
		},
		leftBox: {
			textAlign: 'left'
		},
		rightBox: {
			textAlign: 'right',
			[theme.breakpoints.down('md')]: {
				paddingTop: theme.spacing(1)
			}
		}
	})
);

function Footer() {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Container>
				<Grid container alignItems={'center'}>
					<Grid item xs={12} sm={6}>
						<Box className={classes.leftBox}>
							{'ⓒ 개념글 저장소 All Rights Reserved.'}
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Box className={classes.rightBox}>
							<Chip label={'이용약관'} size={'small'} variant={'outlined'} />
							<Chip label={'개인정보처리방침'} size={'small'} variant={'outlined'} />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default memo(Footer);
