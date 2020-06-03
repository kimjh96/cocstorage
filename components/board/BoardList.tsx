import React, { memo } from 'react';
import Link from 'next/link';
import {
	createStyles, fade, makeStyles, Theme, useTheme
} from '@material-ui/core/styles';
import moment from 'moment';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Material UI
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Hidden from '@material-ui/core/Hidden';
import Grow from '@material-ui/core/Grow';
import Pagination from '@material-ui/lab/Pagination';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import DialogActions from '@material-ui/core/DialogActions';
import SSRLink from '@material-ui/core/Link';

// Material UI Labs
import Skeleton from '@material-ui/lab/Skeleton';

// Material UI Icons
import ImageIcon from '@material-ui/icons/Image';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';

// Components
import GoogleAdSense from '../common/GoogleAdSense';

// Custom Hooks
import useBoard from '../../hooks/useBoard';

// Modules
import { Board } from '../../src/modules/boardDetail';

// Snippets
import { getSearchTypeLabelByType } from '../../src/snippet/board';

moment.locale('ko');

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& a': {
				textDecoration: 'none',
				color: 'inherit'
			},
			'& a:hover': {
				textDecoration: 'none',
				color: 'inherit'
			},
			'& a:visited': {
				color: theme.palette.grey.A200,
				'& *': {
					color: theme.palette.grey.A200
				}
			}
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
			padding: theme.spacing(2),
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
		grid: {
			alignItems: 'center',
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(0, 3),
				borderBottom: `1px solid ${theme.palette.grey.A100}`
			},
			[theme.breakpoints.down('xs')]: {
				padding: theme.spacing(0, 2)
			}
		},
		gridSkeleton: {
			alignItems: 'center',
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(0, 3)
			},
			[theme.breakpoints.down('xs')]: {
				padding: theme.spacing(0, 2)
			}
		},
		gridAd: {
			width: '100%',
			paddingTop: theme.spacing(0.7),
			textAlign: 'center',
			borderBottom: `1px solid ${theme.palette.grey.A100}`,
			backgroundColor: theme.palette.grey['50'],
			'& ins': {
				marginLeft: '0 !important'
			}
		},
		gridItem: {
			padding: theme.spacing(3, 0, 0, 0)
		},
		gridItemWriterInfo: {
			textAlign: 'center',
			color: theme.palette.grey.A200
		},
		gridItemWriterInfoBox: {
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(1, 0, 0, 0),
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(0, 0, 0.5, 0)
			}
		},
		gridItemWriterInfoBoxSkeleton: {
			display: 'flex',
			paddingBottom: theme.spacing(0.5),
			[theme.breakpoints.down('md')]: {
				'& > div:first-child': {
					marginLeft: 0
				}
			}
		},
		gridBox: {
			display: 'flex',
			justifyContent: 'center'
		},
		commentCountBox: {
			color: theme.palette.grey.A200
		},
		nickname: {
			minWidth: 80,
			maxWidth: 80,
			[theme.breakpoints.down('sm')]: {
				minWidth: 'auto',
				marginRight: theme.spacing(2)
			}
		},
		registerDate: {
			minWidth: 100,
			maxWidth: 100,
			[theme.breakpoints.down('sm')]: {
				minWidth: 'auto',
				marginRight: theme.spacing(2)
			}
		},
		thumbs: {
			minWidth: 80,
			maxWidth: 80,
			[theme.breakpoints.down('sm')]: {
				minWidth: 'auto',
				marginRight: theme.spacing(2)
			}
		},
		view: {
			minWidth: 80,
			maxWidth: 80,
			[theme.breakpoints.down('sm')]: {
				minWidth: 'auto',
				marginRight: theme.spacing(2)
			}
		},
		search: {
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.primary.main, 0.7),
			'&:hover': {
				backgroundColor: fade(theme.palette.primary.main, 1)
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
				backgroundColor: fade(theme.palette.primary.main, 1)
			}
		},
		inputRoot: {
			width: '100%',
			color: 'inherit'
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '20ch',
				'&:focus': {
					width: '28ch'
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
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const {
		categoryId,
		boardList,
		pagination,
		pending,
		count,
		searchState,
		dialogState,
		dummyBoardArray,
		onHandleSearchTypeSelect,
		onHandleSearchValueInput,
		onHandleSearchValueInputKey,
		onHandleDialog,
		onHandlePagination,
		onHandleBoardClickCount
	} = useBoard();

	return (
		<Box className={classes.root}>
			{pending && (
				<Grow in>
					<Box>
						{dummyBoardArray.map((index) => (
							<Grid key={`dummy-board-${index}`} className={classes.gridSkeleton} container>
								<Grid item xs={12} md={7}>
									<Box display={'flex'} alignItems={'center'} pb={0.5}>
										<Box flexGrow={1}>
											<Skeleton height={35} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={35} animation={'wave'} />
										</Box>
										<Box minWidth={20} ml={1}>
											<Skeleton height={35} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
								<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
									<Box className={classes.gridItemWriterInfoBoxSkeleton}>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={35} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={35} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={35} animation={'wave'} />
										</Box>
										<Box flexGrow={1} ml={1}>
											<Skeleton height={35} animation={'wave'} />
										</Box>
									</Box>
								</Grid>
							</Grid>
						))}
						<Box display={'flex'} justifyContent={'center'} p={2} pt={0}>
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
					</Box>
				</Grow>
			)}
			{!pending && (
				<>
					<Grow in>
						<Box>
							{boardList.map((item: Board, index) => {
								if ((index) === 5 && isMobile) {
									return (
										<Box key={`board-${item.id}`}>
											<Link href={'/board/[id]/[detail]'} as={`/board/${categoryId}/${item.id}`}>
												<a>
													<Grid className={classes.grid} container alignItems={'center'}>
														<Grid item xs={12} md={7}>
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
														</Grid>
														<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
															<Box className={classes.gridItemWriterInfoBox}>
																<Box className={classes.nickname}>
																	<Typography noWrap variant={'subtitle2'}>
																		{item.nickname}
																	</Typography>
																</Box>
																<Box className={classes.registerDate}>
																	{getRegisterDate(item.register_date)}
																</Box>
																<Box className={classes.thumbs}>
																	<ThumbUpAltIcon className={classes.icon} fontSize={'small'} /> {Number(item.up).toLocaleString()}
																</Box>
																<Box className={classes.view}>
																	<VisibilityIcon className={classes.icon} fontSize={'small'} /> {Number(item.view).toLocaleString()}
																</Box>
															</Box>
														</Grid>
													</Grid>
												</a>
											</Link>
											<Grid key={`board-ad-${item.id}`} className={classes.gridAd} container justify={'center'}>
												<GoogleAdSense
													html={'<ins class="adsbygoogle"'
													+ 'style="display:inline-block;width:320px;height:100px"'
													+ 'data-ad-client="ca-pub-5809905264951057"'
													+ 'data-ad-slot="2449792225"></ins>'}
												/>
											</Grid>
										</Box>
									);
								}
								return (
									count >= 7 ? (
										<SSRLink key={`board-${item.id}`} href={`/board/${categoryId}/${item.id}`}>
											<Grid className={classes.grid} container onClick={onHandleBoardClickCount}>
												<Grid item xs={12} md={7}>
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
												</Grid>
												<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
													<Box className={classes.gridItemWriterInfoBox}>
														<Box className={classes.nickname}>
															<Typography noWrap variant={'subtitle2'}>
																{item.nickname}
															</Typography>
														</Box>
														<Box className={classes.registerDate}>
															{getRegisterDate(item.register_date)}
														</Box>
														<Box className={classes.thumbs}>
															<ThumbUpAltIcon className={classes.icon} fontSize={'small'} /> {Number(item.up).toLocaleString()}
														</Box>
														<Box className={classes.view}>
															<VisibilityIcon className={classes.icon} fontSize={'small'} /> {Number(item.view).toLocaleString()}
														</Box>
													</Box>
												</Grid>
											</Grid>
										</SSRLink>
									) : (
										<Link key={`board-${item.id}`} href={'/board/[id]/[detail]'} as={`/board/${categoryId}/${item.id}`}>
											<a>
												<Grid className={classes.grid} container onClick={onHandleBoardClickCount}>
													<Grid item xs={12} md={7}>
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
													</Grid>
													<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
														<Box className={classes.gridItemWriterInfoBox}>
															<Box className={classes.nickname}>
																<Typography noWrap variant={'subtitle2'}>
																	{item.nickname}
																</Typography>
															</Box>
															<Box className={classes.registerDate}>
																{getRegisterDate(item.register_date)}
															</Box>
															<Box className={classes.thumbs}>
																<ThumbUpAltIcon className={classes.icon} fontSize={'small'} /> {Number(item.up).toLocaleString()}
															</Box>
															<Box className={classes.view}>
																<VisibilityIcon className={classes.icon} fontSize={'small'} /> {Number(item.view).toLocaleString()}
															</Box>
														</Box>
													</Grid>
												</Grid>
											</a>
										</Link>
									)
								);
							})}
						</Box>
					</Grow>
					<Hidden xsUp>
						<Box>
							<Grid container>
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
						size={isMobile ? 'small' : 'medium'}
						siblingCount={isMobile ? 0 : 2}
					/>
				</>
			)}
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
		</Box>
	);
}

export default memo(BoardList);
