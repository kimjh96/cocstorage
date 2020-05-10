import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

// Material UI
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

// Components
import Header from './Header';
import MobileHeader from './MobileHeader';
import Footer from './Footer';

type LayoutProps = {
	children: JSX.Element | JSX.Element[];
};

const useStyles = makeStyles(() =>
	createStyles({
		root: { }
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
