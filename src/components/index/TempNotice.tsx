import React from 'react';
import Link from 'next/link';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Material UI Components
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

// Images
import NoticeImg from '../../../public/notice.png';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginTop: theme.spacing(2),
			backgroundColor: 'white',
			cursor: 'pointer',
			'& a': {
				textDecoration: 'none',
				color: 'black',
				'&:hover': {
					textDecoration: 'none'
				}
			}
		},
		box: {
			display: 'flex',
			alignItems: 'center',
			width: '100%',
			border: `1px solid ${theme.palette.grey['50']}`,
			'& img': {
				width: '100%',
				maxWidth: 1080,
				margin: 'auto'
			}
		}
	})
);

function TempNotice() {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Link href={'/notice'} as={'/notice'}>
				<a>
					<Box className={classes.box}>
						<img src={NoticeImg} alt={'Notice Img'} />
					</Box>
				</a>
			</Link>
		</Container>
	);
}

export default TempNotice;
