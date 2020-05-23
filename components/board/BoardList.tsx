import React, { useEffect, memo } from 'react';
import Link from 'next/link';
import {
	createStyles, fade, makeStyles, Theme
} from '@material-ui/core/styles';
import moment from 'moment';

// Material UI
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Grow from '@material-ui/core/Grow';
import Pagination from '@material-ui/lab/Pagination';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import DialogActions from '@material-ui/core/DialogActions';
import Hidden from '@material-ui/core/Hidden';

// Material UI Colors
import { grey } from '@material-ui/core/colors';

// Material UI Labs
import Skeleton from '@material-ui/lab/Skeleton';

// Material UI Icons
import ImageIcon from '@material-ui/icons/Image';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';

// Custom Hooks
import useBoard from '../../hooks/useBoard';

// Modules
import { Board } from '../../src/modules/boardDetail';

// Snippets
import { getSearchTypeLabelByType } from '../../src/snippet/board';

moment.locale('ko');

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			display: 'flex',
			height: '100%',
			flexDirection: 'column',
			justifyContent: 'flex-end',
		},
		typography: {
			display: 'flex',
			alignItems: 'center',
			color: 'white',
			fontWeight: 700
		},
		icon: {
			verticalAlign: 'middle'
		},
		pagination: {
			padding: theme.spacing(2, 2, 0, 2),
			'& > ul': {
				justifyContent: 'center',
				'& *': {
					color: 'rgba(0, 0, 0, 0.5)'
				},
				'& .Mui-selected': {
					color: 'white'
				}
			}
		},
		paginationSkeleton: {
			padding: theme.spacing(2),
			'& > ul': {
				textAlign: 'center',
				padding: 0,
				'& > li': {
					display: 'inline-block',
					padding: 0
				}
			}
		},
		gridItem: {
			padding: theme.spacing(3, 0)
		},
		gridItemBoardInfo: {
			'& > a': {
				textDecoration: 'none',
				color: 'inherit'
			},
			'& > a:visited': {
				color: grey.A200,
				'& *': {
					color: grey.A200
				}
			}
		},
		gridItemWriterInfo: {
			textAlign: 'center',
			color: grey.A200
		},
		gridBox: {
			display: 'flex',
			justifyContent: 'flex-end'
		},
		commentCountBox: {
			color: grey.A200
		},
		search: {
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.primary.main, 0.7),
			'&:hover': {
				backgroundColor: fade(theme.palette.primary.main, 0.5)
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
			backgroundColor: fade(theme.palette.primary.main, 0.7),
			color: 'white',
			'&:hover': {
				backgroundColor: fade(theme.palette.primary.main, 0.5)
			}
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

function getRegisterDate(date: string | null) {
	const isToday: boolean = moment().diff(date, 'days') === 0;
	let formattedDate: string | null = null;

	if (isToday) {
		formattedDate = moment(date).format('hh:mm');
	} else {
		formattedDate = moment(date).format('YYYY-MM-DD');
	}

	return formattedDate;
}

function BoardList() {
	const classes = useStyles();
	const {
		categoryId,
		boardList,
		pagination,
		pending,
		onHandlePagination,
		searchState,
		dialogState,
		onHandleSearchTypeSelect,
		onHandleSearchValueInput,
		onHandleSearchValueInputKey,
		onHandleDialog
	} = useBoard();

	return (
		<Container>
			<Grid container>
				{pending ? (
					<Grow in>
						<Grid item xs={12} md={9}>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Grid container alignItems={'center'}>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box display={'flex'} pb={0.5}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={30} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
							<Box display={'flex'} justifyContent={'center'}>
								<Box ml={1}>
									<Skeleton width={30} height={40} animation={'wave'} />
								</Box>
								<Box ml={1}>
									<Skeleton width={30} height={40} animation={'wave'} />
								</Box>
								<Box ml={1}>
									<Skeleton width={30} height={40} animation={'wave'} />
								</Box>
								<Box ml={1}>
									<Skeleton width={30} height={40} animation={'wave'} />
								</Box>
								<Box ml={1}>
									<Skeleton width={30} height={40} animation={'wave'} />
								</Box>
							</Box>
						</Grid>
					</Grow>
				) : (
					<Grid item xs={12} md={9}>
						<Grow in>
							<Box>
								{boardList.map((item: Board) => (
									<Grid key={`board-${item.id}`} container alignItems={'center'}>
										<Grid className={classes.gridItemBoardInfo} item xs={12} md={7}>
											<Link href={'/board/[id]/[detail]'} as={`/board/${categoryId}/${item.id}`}>
												<a>
													<Box display={'flex'} alignItems={'center'} p={1} pl={0}>
														<Typography noWrap variant={'subtitle2'}>
															{item.subject}
														</Typography>
														<Typography variant={'subtitle2'}>
															{item.image && <Box pl={0.5}><ImageIcon className={classes.icon} fontSize={'small'} color={'primary'} /></Box>}
														</Typography>
														<Typography variant={'subtitle2'}>
															<Box className={classes.commentCountBox} pl={0.5}>{`[${Number(item.commentCount).toLocaleString()}]`}</Box>
														</Typography>
													</Box>
												</a>
											</Link>
										</Grid>
										<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
											<Box display={'flex'} p={1} pl={0} pr={0}>
												<Box minWidth={80} maxWidth={80}>
													<Typography noWrap variant={'subtitle2'}>
														{item.nickname}
													</Typography>
												</Box>
												<Box minWidth={100}>
													{getRegisterDate(item.register_date)}
												</Box>
												<Box minWidth={80}>
													<ThumbUpAltIcon className={classes.icon} fontSize={'small'} /> {Number(item.up).toLocaleString()}
												</Box>
												<Box minWidth={80}>
													<VisibilityIcon className={classes.icon} fontSize={'small'} /> {Number(item.view).toLocaleString()}
												</Box>
											</Box>
										</Grid>
									</Grid>
								))}
							</Box>
						</Grow>
						<Hidden xsUp>
							<Box>
								<Grid container justify={'center'}>
									<Grid className={classes.gridItem} item xs={12}>
										<Box className={classes.gridBox}>
											<Box>
												<Button
													className={classes.searchButton}
													color={'inherit'}
													onClick={onHandleDialog}
												>
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
									</Grid>
								</Grid>
							</Box>
						</Hidden>
						<Pagination
							className={classes.pagination}
							page={pagination.page}
							count={pagination.pageCount}
							color={'primary'}
							shape={'rounded'}
							onChange={onHandlePagination}
						/>
					</Grid>
				)}
				<Grid item xs={12} md={3}>
					<Box border={1}>
						{'AD'}
					</Box>
				</Grid>
			</Grid>
			<Hidden xsUp>
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
			</Hidden>
		</Container>
	);
}

export default memo(BoardList);
