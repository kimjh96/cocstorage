import React, { memo } from 'react';
import Link from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import moment from 'moment';

// Material UI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';
import Grow from '@material-ui/core/Grow';

// Material UI Labs
import Skeleton from '@material-ui/lab/Skeleton';

// Material UI Icons
import MessageIcon from '@material-ui/icons/Message';
import VisibilityIcon from '@material-ui/icons/Visibility';

// Custom Hooks
import useHome from '../../hooks/useHome';

// Svgs
import DefaultImageSvg from '../../../styles/svgs/default_image.svg';

// Modules
import { Board } from '../../modules/boardDetail';

moment.locale('ko');

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(1),
			backgroundColor: 'white',
			[theme.breakpoints.down('md')]: {
				margin: 0,
				paddingTop: theme.spacing(1),
				paddingBottom: theme.spacing(0)
			}
		},
		title: {
			fontWeight: 700,
			color: '#3d3d3d',
			cursor: 'default'
		},
		container: {
			marginBottom: theme.spacing(2),
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(0)
			}
		},
		containerBox: {
			border: `1px solid ${theme.palette.grey['50']}`,
			backgroundColor: 'white',
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(0, 1),
				border: 'none'
			},
			[theme.breakpoints.down('xs')]: {
				padding: theme.spacing(0)
			}
		},
		gridItem: {
			cursor: 'pointer',
			transition: 'box-shadow',
			transitionDuration: '.3s',
			'&:hover': {
				boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px'
			},
			'& a': {
				width: '100%',
				textDecoration: 'none',
				color: 'inherit'
			},
			[theme.breakpoints.down('md')]: {
				'& ul': {
					padding: 0
				}
			}
		},
		gridItemSkeleton: {
			[theme.breakpoints.down('md')]: {
				'& ul': {
					padding: 0
				}
			}
		},
		statTypography: {
			'& svg': {
				verticalAlign: 'middle'
			}
		},
		writerTypographySkeleton: {
			display: 'flex'
		},
		statTypographySkeleton: {
			display: 'flex'
		},
		thumbnailBoxWrapper: {
			position: 'relative',
			width: '25%',
			minWidth: '102px'
		},
		thumbnailBoxWrapperInner: {
			position: 'relative',
			paddingTop: '75%',
			border: `1px solid ${theme.palette.grey['50']}`,
			overflow: 'hidden'
		},
		thumbnailBoxWrapperInnerSkeleton: {
			position: 'relative',
			paddingTop: '75%',
			overflow: 'hidden'
		},
		thumbnailBoxCentered: {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			transform: 'translate(50%, 50%)',
			'& img': {
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				maxWidth: '100%',
				height: '100%',
				transform: 'translate(-50%, -50%)'
			}
		},
		thumbnailBoxCenteredDefaultImage: {
			maxWidth: '50px !important'
		},
		thumbnailBoxCenteredSkeleton: {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0
		},
		boxBackground: {
			position: 'absolute',
			padding: theme.spacing(1.5),
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			backgroundImage: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, .8))',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end'
		},
		boxTitle: {
			color: 'white'
		},
		boxDescription: {
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			display: '-webkit-box',
			webkitBoxOrient: 'vertical',
			webkitLineClamp: 2,
			fontSize: '12px',
			color: '#888'
		},
		boxInfo: {
			color: '#888'
		},
		boxInfoViewCount: {
			textAlign: 'right',
			color: '#c7c7cc',
			'& svg': {
				verticalAlign: 'middle'
			}
		},
		boxDate: {
			'&::after': {
				content: '""',
				display: 'inline-block',
				margin: theme.spacing(1),
				width: 3,
				height: 3,
				border: `1px solid ${theme.palette.grey.A200}`,
				borderRadius: '50%',
				backgroundColor: theme.palette.grey.A200,
				verticalAlign: 'middle'
			}
		}
	})
);

function NewBoard() {
	const classes = useStyles();
	const { boardList, pending, dummyBoardArray } = useHome();

	return (
		<>
			<Container className={classes.root}>
				<Typography className={classes.title} variant={'h6'} component={'h6'}>
					{'새로운 개념글'}
				</Typography>
			</Container>
			<Container className={classes.container}>
				<Box className={classes.containerBox}>
					{pending && (
						<Grid container>
							{dummyBoardArray.map((index) => (
								<Grid key={`dummy-new-board-${index}`} className={classes.gridItemSkeleton} item xs={12} md={6}>
									<Grow in>
										<List>
											<ListItem>
												<Box className={classes.thumbnailBoxWrapper} marginRight={1}>
													<Box className={classes.thumbnailBoxWrapperInnerSkeleton}>
														<Box className={classes.thumbnailBoxCenteredSkeleton}>
															<Skeleton variant={'rect'} width={'100%'} height={'100%'} animation={'wave'} />
														</Box>
													</Box>
												</Box>
												<ListItemText>
													<Typography variant={'subtitle2'} gutterBottom>
														<Skeleton width={'100%'} animation={'wave'} />
													</Typography>
													<Typography className={classes.writerTypographySkeleton} variant={'body2'} color={'textSecondary'} gutterBottom>
														<Box component={'span'} marginRight={1}>
															<Skeleton width={50} animation={'wave'} />
														</Box>
														<Box component={'span'}>
															<Skeleton width={50} animation={'wave'} />
														</Box>
													</Typography>
													<Typography className={classes.statTypographySkeleton} variant={'body2'} color={'textSecondary'}>
														<Box component={'span'} marginRight={1}>
															<Skeleton width={50} animation={'wave'} />
														</Box>
														<Box component={'span'}>
															<Skeleton width={50} animation={'wave'} />
														</Box>
													</Typography>
												</ListItemText>
											</ListItem>
										</List>
									</Grow>
								</Grid>
							))}
						</Grid>
					)}
					{!pending && (
						<Grid container>
							{boardList.map((item: Board) => (
								<Grid key={`board-${item.id}`} className={classes.gridItem} item xs={12} md={6}>
									<Grow in>
										<List>
											<ListItem>
												<Link href={'/board/[id]/[detail]'} as={`/board/${item.category_id}/${item.id}`}>
													<a>
														<Box display={'flex'} alignItems={'center'}>
															<Box className={classes.thumbnailBoxWrapper} marginRight={1}>
																<Box className={classes.thumbnailBoxWrapperInner}>
																	<Box className={classes.thumbnailBoxCentered}>
																		{item.image ? <img src={item.image} alt={'Thumbnail'} /> : <img className={classes.thumbnailBoxCenteredDefaultImage} src={DefaultImageSvg} alt={'Default Thumbnail'} />}
																	</Box>
																</Box>
															</Box>
															<ListItemText>
																<Typography noWrap variant={'subtitle2'} gutterBottom>
																	{item.subject}
																</Typography>
																<Typography noWrap variant={'body2'} color={'textSecondary'} gutterBottom>
																	<Box className={classes.boxDate} component={'span'}>
																		{moment(item.register_date).startOf('hour').fromNow()}
																	</Box>
																	<Box component={'span'}>
																		{item.nickname}
																	</Box>
																</Typography>
																<Typography className={classes.statTypography} variant={'body2'} color={'textSecondary'}>
																	<Box component={'span'} marginRight={1} fontSize={12}>
																		<MessageIcon fontSize={'small'} /> {Number(item.commentCount).toLocaleString()}
																	</Box>
																	<Box component={'span'} fontSize={12}>
																		<VisibilityIcon fontSize={'small'} /> {Number(item.view).toLocaleString()}
																	</Box>
																</Typography>
															</ListItemText>
														</Box>
													</a>
												</Link>
											</ListItem>
										</List>
									</Grow>
								</Grid>
							))}
						</Grid>
					)}
				</Box>
			</Container>
		</>
	);
}

export default memo(NewBoard);
