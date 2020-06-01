import React, {
	useState,
	memo,
	useCallback,
	useMemo
} from 'react';
import { useRouter } from 'next/router';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Material UI
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import AppBar from '@material-ui/core/AppBar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

// Material UI Icons
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CastIcon from '@material-ui/icons/Cast';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SchoolIcon from '@material-ui/icons/School';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import MenuIcon from '@material-ui/icons/Menu';

// Images
import Logo from '../../public/logo.png';

// Snippets
import { getCategoryNameByCategoryId } from '../../src/snippet/board';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			borderTop: 0,
			borderLeft: 0,
			borderRight: 0,
			borderColor: `1px solid ${theme.palette.grey.A100}`,
			backgroundColor: 'white'
		},
		toolbar: {
			padding: theme.spacing(0, 3),
			[theme.breakpoints.down('xs')]: {
				padding: theme.spacing(0, 2)
			}
		},
		chip: {
			marginLeft: theme.spacing(1),
			color: 'white'
		},
		appBarLogoBox: {
			flexGrow: 1
		},
		appBarLogo: {
			maxWidth: 130,
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

type ScrollProps = {
	window?: () => Window;
	children: React.ReactElement;
};

type ListItemType = {
	label: string;
	icon: JSX.Element;
	categoryId: string;
};

function HideOnScroll(props: ScrollProps) {
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction={'down'} in={!trigger}>
			{children}
		</Slide>
	);
}

function getCategoryIconByCategoryId(categoryId: string | string[]) {
	let categoryIcon = <CastIcon />;

	switch (categoryId) {
	case 'daily_popular':
		categoryIcon = <WhatshotIcon />;
		break;
	case 'ib_new1':
		categoryIcon = <CastIcon />;
		break;
	case 'stream':
		categoryIcon = <PlayArrowIcon />;
		break;
	case 'football_new6':
		categoryIcon = <SportsSoccerIcon />;
		break;
	case 'issuezoom':
		categoryIcon = <CalendarTodayIcon />;
		break;
	case 'exam_new':
		categoryIcon = <SchoolIcon />;
		break;
	case 'extra':
		categoryIcon = <FitnessCenterIcon />;
		break;
	case 'baseball_new8':
		categoryIcon = <SportsBaseballIcon />;
		break;
	default:
		categoryIcon = <CastIcon />;
		break;
	}

	return categoryIcon;
}

function MobileHeader() {
	const classes = useStyles();
	const router = useRouter();
	const { route, query: { id } } = router;
	const [menuListState, setMenuListState] = useState<boolean>(false);
	const [listItems] = useState<ListItemType[]>([
		{
			label: '일간 개념글',
			icon: <WhatshotIcon className={classes.listItemIcon} />,
			categoryId: 'daily_popular'
		},
		{
			label: '인터넷방송',
			icon: <CastIcon className={classes.listItemIcon} />,
			categoryId: 'ib_new1'
		},
		{
			label: '스트리머',
			icon: <PlayArrowIcon className={classes.listItemIcon} />,
			categoryId: 'stream'
		},
		{
			label: '이슈',
			icon: <CalendarTodayIcon className={classes.listItemIcon} />,
			categoryId: 'issuezoom'
		},
		{
			label: '헬스',
			icon: <FitnessCenterIcon className={classes.listItemIcon} />,
			categoryId: 'extra'
		},
		{
			label: '수능',
			icon: <SchoolIcon className={classes.listItemIcon} />,
			categoryId: 'exam_new'
		},
		{
			label: '국내야구',
			icon: <SportsBaseballIcon className={classes.listItemIcon} />,
			categoryId: 'baseball_new8'
		}
	]);
	const isBoardDetail = useMemo(() => (route === '/board/[id]/[detail]'), [route]);

	const handleMenuList = (): void => {
		setMenuListState(!menuListState);
	};

	const handleChip = useCallback(() => {
		const categoryId = typeof id === 'string' ? id : '';

		router.push({
			pathname: '/board/[id]',
			query: {
				id: categoryId
			}
		}, `/board/${categoryId}`).then();
	}, [router, id]);

	const handleLogo = useCallback(() => (
		router.push({
			pathname: '/'
		})
	), [router]);

	const handleDrawer = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
		const categoryId: string = event.currentTarget.getAttribute('data-category-id') || '';

		router.push({
			pathname: '/board/[id]',
			query: {
				id: categoryId
			}
		}, `/board/${categoryId}`).then();

		setMenuListState(!menuListState);
	}, [router, menuListState]);

	return (
		<>
			<HideOnScroll>
				<AppBar className={classes.root} position={'fixed'} variant={'outlined'}>
					<Toolbar className={classes.toolbar}>
						<Box className={classes.appBarLogoBox}>
							<Box>
								<Box component={'span'} onClick={handleLogo}>
									<img className={classes.appBarLogo} src={Logo} alt={'Logo'} />
								</Box>
								{isBoardDetail && (
									<Chip
										className={classes.chip}
										color={'primary'}
										label={getCategoryNameByCategoryId(id)}
										icon={getCategoryIconByCategoryId(id)}
										onClick={handleChip}
										size={'small'}
									/>
								)}
							</Box>
						</Box>
						<IconButton edge={'end'} color={'inherit'} aria-label={'open drawer'} onClick={handleMenuList}>
							<MenuIcon color={'action'} />
						</IconButton>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar className={classes.toolbar} />
			<SwipeableDrawer anchor={'right'} onClose={handleMenuList} onOpen={handleMenuList} open={menuListState}>
				<div className={classes.list} role={'presentation'}>
					<List>
						{listItems.map((item) => (
							<ListItem button key={item.label} data-category-id={item.categoryId} onClick={handleDrawer}>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.label} />
							</ListItem>
						))}
					</List>
					<Divider />
				</div>
			</SwipeableDrawer>
		</>
	);
}

export default memo(MobileHeader);
