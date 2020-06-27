import React, {
	useCallback,
	useMemo,
	memo
} from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import {
	makeStyles, createStyles, Theme
} from '@material-ui/core/styles';

// Material UI
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

// Material UI Icons
import CastIcon from '@material-ui/icons/Cast';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SchoolIcon from '@material-ui/icons/School';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import HomeIcon from '@material-ui/icons/Home';

// Modules
import { clearBoardsRelatedState } from '../../modules/board';

// Snippets
import { getCategoryNameByCategoryId } from '../../snippet/board';

// Logo Image
import Logo from '../../../public/logo.png';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: {
			boxShadow: 'none',
			borderBottom: `1px solid ${theme.palette.grey['50']}`
		},
		toolbar: {
			height: 80
		},
		chip: {
			marginLeft: theme.spacing(1),
			color: 'white'
		},
		paper: {
			border: 'none',
			borderBottom: `1px solid ${theme.palette.grey['50']}`
		},
		logoBox: {
			padding: theme.spacing(3, 0)
		},
		logo: {
			verticalAlign: 'middle',
			cursor: 'pointer'
		},
		tabsIndicator: {
			height: 5
		},
		tab: {
			minWidth: 72
		},
		indicator: {
			'& *': {
				fontFamily: 'NanumSquareRoundEB'
			},
			'& .MuiTabs-indicator': {
				height: 5
			}
		}
	})
);

type ScrollProps = {
	window?: () => Window;
	children: React.ReactElement;
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
	case 'baseball_new9':
		categoryIcon = <SportsBaseballIcon />;
		break;
	default:
		categoryIcon = <CastIcon />;
		break;
	}

	return categoryIcon;
}

function Header() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const router = useRouter();
	const { route, asPath, query: { id } } = router;
	const activatedTab = useMemo(() => ((route === '/board/[id]') ? asPath : '/'), [route, asPath]);
	const isBoardDetail = useMemo(() => (route === '/board/[id]/[detail]'), [route]);
	const isPolicy = useMemo(() => (route === '/policy' || route === '/privacy'), [route]);

	const handleTabChange = useCallback((event: React.ChangeEvent<{}>, newValue: string) => {
		const isIndexRoute: boolean = newValue === '/' && true;
		dispatch(clearBoardsRelatedState());

		if (isIndexRoute) {
			router.push({
				pathname: '/'
			}).then();
		} else {
			const boardId: string = newValue.split('/')[2];

			router.push({
				pathname: '/board/[id]',
				query: {
					id: boardId
				}
			}, newValue).then();
		}
	}, [dispatch, router]);

	const handleChip = useCallback(() => {
		const categoryId = typeof id === 'string' ? id : '';

		router.push({
			pathname: '/board/[id]',
			query: {
				id: categoryId
			}
		}, `/board/${categoryId}`).then();
	}, [router, id]);

	const handleLogo = useCallback(() => {
		dispatch(clearBoardsRelatedState());

		router.push({
			pathname: '/'
		}).then();
	}, [dispatch, router]);

	return (
		<>
			{!isBoardDetail ? (
				<AppBar className={classes.appBar} position={'static'} color={'inherit'}>
					<Container>
						<Box className={classes.logoBox}>
							<Box component={'span'} onClick={handleLogo}>
								<img className={classes.logo} src={Logo} alt={'Logo'} />
							</Box>
						</Box>
					</Container>
				</AppBar>
			) : (
				<>
					<HideOnScroll>
						<AppBar className={classes.appBar} color={'inherit'}>
							<Toolbar disableGutters={false}>
								<Container>
									<Box className={classes.logoBox}>
										<Box component={'span'} onClick={handleLogo}>
											<img className={classes.logo} src={Logo} alt={'Logo'} />
										</Box>
										<Chip
											className={classes.chip}
											color={'primary'}
											label={getCategoryNameByCategoryId(id)}
											icon={getCategoryIconByCategoryId(id)}
											onClick={handleChip}
										/>
									</Box>
								</Container>
							</Toolbar>
						</AppBar>
					</HideOnScroll>
					<Toolbar className={classes.toolbar} />
				</>
			)}
			{!isBoardDetail && !isPolicy && (
				<Box>
					<Paper className={classes.paper} variant={'outlined'} square>
						<Container>
							<Tabs
								indicatorColor={'primary'}
								textColor={'primary'}
								value={activatedTab}
								onChange={handleTabChange}
								className={classes.indicator}
							>
								<Tab icon={<HomeIcon />} value={'/'} />
								<Tab label={'일간 개념글'} value={'/board/daily_popular'} />
								<Tab label={'인터넷방송'} value={'/board/ib_new1'} />
								<Tab label={'스트리머'} value={'/board/stream'} />
								<Tab label={'이슈'} value={'/board/issuezoom'} />
								<Tab label={'수능'} value={'/board/exam_new'} />
								<Tab label={'헬스'} value={'/board/extra'} />
								<Tab label={'국내야구'} value={'/board/baseball_new9'} />
							</Tabs>
						</Container>
					</Paper>
				</Box>
			)}
		</>
	);
}

export default memo(Header);
