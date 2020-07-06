import React, { memo } from 'react';
import {
	createStyles, fade, makeStyles, Theme
} from '@material-ui/core/styles';

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import InputBase from '@material-ui/core/InputBase';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

// Material UI Icons
import SearchIcon from '@material-ui/icons/Search';
import CastIcon from '@material-ui/icons/Cast';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SchoolIcon from '@material-ui/icons/School';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';

// Custom Hooks
import useBoard from '../../hooks/useBoard';

// Snippets
import { getSearchTypeLabelByType, getCategoryNameByCategoryId } from '../../snippet/board';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			height: 200,
			background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
			[theme.breakpoints.down('md')]: {
				height: 'auto'
			}
		},
		container: {
			display: 'flex',
			height: '100%',
			flexDirection: 'column',
			justifyContent: 'flex-end'
		},
		typography: {
			display: 'flex',
			alignItems: 'center',
			color: 'white',
			fontWeight: 700,
			[theme.breakpoints.down('md')]: {
				fontSize: 22
			},
			[theme.breakpoints.down('xs')]: {
				fontSize: 20
			}
		},
		icon: {
			verticalAlign: 'middle'
		},
		gridItem: {
			padding: theme.spacing(3, 0)
		},
		gridBox: {
			display: 'flex',
			justifyContent: 'flex-end'
		},
		search: {
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			'&:hover': {
				backgroundColor: fade(theme.palette.common.white, 0.25)
			},
			marginLeft: theme.spacing(1),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: 'auto'
			},
			color: 'white'
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: '100%',
			position: 'absolute',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: 'white'
		},
		searchButton: {
			backgroundColor: 'rgba(255, 255, 255, 0.15)',
			color: 'white'
		},
		inputRoot: {
			color: 'inherit'
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch'
				}
			}
		},
		dialogContainer: {
			display: 'flex',
			minWidth: 120
		},
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120
		}
	})
);

function getCategoryIconByCategoryId(categoryId: string | string[]) {
	let categoryIcon = <CastIcon fontSize={'large'} />;

	switch (categoryId) {
	case 'daily_popular':
		categoryIcon = <WhatshotIcon fontSize={'large'} />;
		break;
	case 'ib_new1':
		categoryIcon = <CastIcon fontSize={'large'} />;
		break;
	case 'stream':
		categoryIcon = <PlayArrowIcon fontSize={'large'} />;
		break;
	case 'football_new6':
		categoryIcon = <SportsSoccerIcon fontSize={'large'} />;
		break;
	case 'issuezoom':
		categoryIcon = <CalendarTodayIcon fontSize={'large'} />;
		break;
	case 'exam_new':
		categoryIcon = <SchoolIcon fontSize={'large'} />;
		break;
	case 'extra':
		categoryIcon = <FitnessCenterIcon fontSize={'large'} />;
		break;
	case 'baseball_new9':
		categoryIcon = <SportsBaseballIcon fontSize={'large'} />;
		break;
	default:
		categoryIcon = <CastIcon fontSize={'large'} />;
		break;
	}

	return categoryIcon;
}

function BackgroundSearch() {
	const classes = useStyles();
	const {
		categoryId,
		searchState,
		dialogState,
		onHandleSearchTypeSelect,
		onHandleSearchValueInput,
		onHandleSearchValueInputKey,
		onHandleDialog
	} = useBoard();

	return (
		<Box className={classes.root}>
			<Container className={classes.container}>
				<Grid container justify={'space-between'}>
					<Grid className={classes.gridItem} item xs={6}>
						<Typography className={classes.typography} variant={'h5'} component={'h5'}>
							{getCategoryIconByCategoryId(categoryId)}
							<Box component={'span'} ml={1}>
								{getCategoryNameByCategoryId(categoryId)}
							</Box>
						</Typography>
					</Grid>
					<Grid className={classes.gridItem} item xs={6}>
						<Hidden mdDown>
							<Box className={classes.gridBox}>
								<Box>
									<Button className={classes.searchButton} color={'inherit'} onClick={onHandleDialog}>
										{getSearchTypeLabelByType(searchState.type)}
									</Button>
								</Box>
								<Box className={classes.search}>
									<Box className={classes.searchIcon}>
										<SearchIcon />
									</Box>
									<InputBase
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput
										}}
										onChange={onHandleSearchValueInput}
										onKeyUp={onHandleSearchValueInputKey}
										value={searchState.value}
										placeholder={'검색'}
									/>
								</Box>
							</Box>
						</Hidden>
					</Grid>
				</Grid>
			</Container>
			<Dialog disableBackdropClick disableEscapeKeyDown open={dialogState} onClose={onHandleDialog}>
				<DialogTitle>{'검색 조건'}</DialogTitle>
				<DialogContent>
					<form className={classes.dialogContainer}>
						<FormControl className={classes.formControl}>
							<Select
								labelId={'demo-dialog-select-label'}
								id={'demo-dialog-select'}
								value={searchState.type}
								onChange={onHandleSearchTypeSelect}
								input={<Input />}
							>
								<MenuItem value={'all'}>{'전체'}</MenuItem>
								<MenuItem value={'subject'}>{'제목'}</MenuItem>
								<MenuItem value={'nickname'}>{'닉네임'}</MenuItem>
								<MenuItem value={'content'}>{'내용'}</MenuItem>
							</Select>
						</FormControl>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={onHandleDialog} color={'primary'}>
						{'닫기'}
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
}

export default memo(BackgroundSearch);
