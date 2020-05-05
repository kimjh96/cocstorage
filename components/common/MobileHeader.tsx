import React, { useState, memo } from 'react';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import StorageIcon from '@material-ui/icons/Storage';

import Box from '@material-ui/core/Box';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// Material UI Icons
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CastIcon from '@material-ui/icons/Cast';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SchoolIcon from '@material-ui/icons/School';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import InfoIcon from '@material-ui/icons/Info';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Logo Image
import Logo from '../../public/logo_m.png';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			background: 'linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)'
		},
		appBarLogoBox: {
			flexGrow: 1
		},
		appBarLogo: {
			verticalAlign: 'middle'
		},
		list: {
			width: 250,
			height: '100%',
			backgroundColor: 'inherit',
			color: 'inherit'
		},
		listItemIcon: {
			color: 'inherit'
		}
	})
);

type ListItemType = {
	label: string;
	icon: JSX.Element;
};

function MobileHeader(): JSX.Element {
	const classes = useStyles();
	const [menuListState, setMenuListState] = useState<boolean>(false);
	const [listItems] = useState<ListItemType[]>([
		{
			label: '일간 개념글',
			icon: <WhatshotIcon className={classes.listItemIcon} />
		},
		{
			label: '인터넷방송',
			icon: <CastIcon className={classes.listItemIcon} />
		},
		{
			label: '스트리머',
			icon: <PlayArrowIcon className={classes.listItemIcon} />
		},
		{
			label: '축구',
			icon: <SportsSoccerIcon className={classes.listItemIcon} />
		},
		{
			label: '이슈',
			icon: <CalendarTodayIcon className={classes.listItemIcon} />
		},
		{
			label: '헬스',
			icon: <FitnessCenterIcon className={classes.listItemIcon} />
		},
		{
			label: '수능',
			icon: <SchoolIcon className={classes.listItemIcon} />
		},
		{
			label: '야구',
			icon: <SportsBaseballIcon className={classes.listItemIcon} />
		}
	]);

	const list = (): JSX.Element => (
		<div className={classes.list} role={'presentation'}>
			<List>
				{listItems.map((item) => (
					<ListItem button key={item.label}>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText primary={item.label} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				<ListItem button key={'새로운 소식'}>
					<ListItemIcon>
						<InfoIcon className={classes.listItemIcon} />
					</ListItemIcon>
					<ListItemText primary={'새로운 소식'} />
				</ListItem>
			</List>
		</div>
	);

	const handleMenuList = (): void => {
		setMenuListState(!menuListState);
	};

	return (
		<>
			<AppBar position={'static'} className={classes.root}>
				<Toolbar>
					<Box className={classes.appBarLogoBox}>
						<img className={classes.appBarLogo} src={Logo} alt={'Logo'} />
					</Box>
					<IconButton edge={'end'} color={'inherit'} aria-label={'open drawer'} onClick={handleMenuList}>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<SwipeableDrawer anchor={'right'} onClose={handleMenuList} onOpen={handleMenuList} open={menuListState}>
				{list()}
			</SwipeableDrawer>
		</>
	);
}

export default memo(MobileHeader);
