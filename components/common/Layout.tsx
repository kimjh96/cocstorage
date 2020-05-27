import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Material UI
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

// Common Components
import Header from './Header';
import MobileHeader from './MobileHeader';
import Footer from './Footer';

type LayoutProps = {
	children: JSX.Element | JSX.Element[];
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			[theme.breakpoints.down('md')]: {
				backgroundColor: '#eff1f5'
			}
		}
	})
);

function Layout({ children }: LayoutProps) {
	const classes = useStyles();

	return (
		<>
			<Hidden mdDown>
				<Header />
			</Hidden>
			<Hidden lgUp>
				<MobileHeader />
			</Hidden>
			<Box maxWidth={'lg'} className={classes.root}>
				{children}
			</Box>
			<Footer />
		</>
	);
}

export default Layout;
