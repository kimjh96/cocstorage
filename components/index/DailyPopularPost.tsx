import React, { memo } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grow from '@material-ui/core/Grow';

// Material UI Labs
import Skeleton from '@material-ui/lab/Skeleton';

// Material UI Icons
import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

// Swiper
import Swiper from 'react-id-swiper';
import Image from '../../public/test.jpg';

// Custom Hooks
import useHome from '../../hooks/useHome';
import { Board } from '../../src/modules/home';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginTop: 20,
			marginBottom: 10
		},
		title: {
			fontWeight: 700,
			color: '#3d3d3d'
		},
		box: {
			padding: theme.spacing(2, 0),
			backgroundColor: '#eff1f5'
		},
		cardWrapper: {
			position: 'relative',
			'&:hover img': {
				transform: 'translate(-50%, -50%) scale(1.2)'
			}
		},
		cardWrapperInner: {
			position: 'relative',
			paddingTop: '100%',
			overflow: 'hidden'
		},
		cardCentered: {
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
				height: 'auto',
				backgroundSize: 'cover',
				transform: 'translate(-50%, -50%)',
				transition: 'all .5s'
			}
		},
		cardBackground: {
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
		cardBackgroundSkeleton: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			backgroundColor: '#eff1f5',
			cursor: 'default'
		},
		cardTitle: {
			color: 'white'
		},
		cardDescription: {
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			display: '-webkit-box',
			webkitBoxOrient: 'vertical',
			webkitLineClamp: 2,
			fontSize: '12px',
			color: '#888'
		},
		cardInfo: {
			color: '#888'
		},
		cardInfoViewCount: {
			textAlign: 'right',
			color: '#c7c7cc',
			'& svg': {
				verticalAlign: 'middle'
			}
		},
		cardInfoViewCountSkeleton: {
			marginLeft: 'auto'
		}
	})
);

const config = {
	slidesPerView: 'auto',
	spaceBetween: 15,
	breakpoints: {
		1200: {
			slidesPerView: 5
		},
		1024: {
			slidesPerView: 4
		},
		768: {
			slidesPerView: 3
		},
		640: {
			slidesPerView: 3
		},
		320: {
			slidesPerView: 2
		}
	},
	containerClass: 'customized-daily-swiper-container',
	wrapperClass: 'customized-daily-swiper-wrapper'
};

function DailyPopularPost() {
	const classes = useStyles();
	const { dailyPopularList, pending } = useHome();

	return (
		<>
			<Container className={classes.root}>
				<Typography className={classes.title} variant={'h6'} component={'h6'}>
					{'일간 개념글'}
				</Typography>
			</Container>
			<Box className={classes.box}>
				{pending ? (
					<Swiper {...config}>
						<Card square elevation={0}>
							<Link href={'/test'}>
								<Box className={classes.cardWrapper}>
									<Box className={classes.cardWrapperInner} />
									<Box className={classes.cardBackgroundSkeleton}>
										<Skeleton variant={'rect'} width={'100%'} height={'100%'} animation={'wave'} />
										<Typography noWrap className={classes.cardTitle} variant={'h6'} component={'h6'}>
											<Skeleton animation={'wave'} />
										</Typography>
										<Typography noWrap className={classes.cardTitle} variant={'h6'} component={'h6'}>
											<Skeleton animation={'wave'} />
										</Typography>
										<Grid container justify={'center'} className={classes.cardInfo}>
											<Grid item xs={6}>
												<Skeleton width={50} animation={'wave'} />
											</Grid>
											<Grid item xs={6} className={classes.cardInfoViewCount}>
												<Skeleton className={classes.cardInfoViewCountSkeleton} width={50} animation={'wave'} />
											</Grid>
										</Grid>
									</Box>
								</Box>
							</Link>
						</Card>
						<Card square elevation={0}>
							<Link href={'/test'}>
								<Box className={classes.cardWrapper}>
									<Box className={classes.cardWrapperInner} />
									<Box className={classes.cardBackgroundSkeleton}>
										<Skeleton variant={'rect'} width={'100%'} height={'100%'} animation={'wave'} />
										<Typography noWrap className={classes.cardTitle} variant={'h6'} component={'h6'}>
											<Skeleton animation={'wave'} />
										</Typography>
										<Typography noWrap className={classes.cardTitle} variant={'h6'} component={'h6'}>
											<Skeleton animation={'wave'} />
										</Typography>
										<Grid container justify={'center'} className={classes.cardInfo}>
											<Grid item xs={6}>
												<Skeleton width={50} animation={'wave'} />
											</Grid>
											<Grid item xs={6} className={classes.cardInfoViewCount}>
												<Skeleton className={classes.cardInfoViewCountSkeleton} width={50} animation={'wave'} />
											</Grid>
										</Grid>
									</Box>
								</Box>
							</Link>
						</Card>
						<Card square elevation={0}>
							<Link href={'/test'}>
								<Box className={classes.cardWrapper}>
									<Box className={classes.cardWrapperInner} />
									<Box className={classes.cardBackgroundSkeleton}>
										<Skeleton variant={'rect'} width={'100%'} height={'100%'} animation={'wave'} />
										<Typography noWrap className={classes.cardTitle} variant={'h6'} component={'h6'}>
											<Skeleton animation={'wave'} />
										</Typography>
										<Typography noWrap className={classes.cardTitle} variant={'h6'} component={'h6'}>
											<Skeleton animation={'wave'} />
										</Typography>
										<Grid container justify={'center'} className={classes.cardInfo}>
											<Grid item xs={6}>
												<Skeleton width={50} animation={'wave'} />
											</Grid>
											<Grid item xs={6} className={classes.cardInfoViewCount}>
												<Skeleton className={classes.cardInfoViewCountSkeleton} width={50} animation={'wave'} />
											</Grid>
										</Grid>
									</Box>
								</Box>
							</Link>
						</Card>
						<Card square elevation={0}>
							<Link href={'/test'}>
								<Box className={classes.cardWrapper}>
									<Box className={classes.cardWrapperInner} />
									<Box className={classes.cardBackgroundSkeleton}>
										<Skeleton variant={'rect'} width={'100%'} height={'100%'} animation={'wave'} />
										<Typography noWrap className={classes.cardTitle} variant={'h6'} component={'h6'}>
											<Skeleton animation={'wave'} />
										</Typography>
										<Typography noWrap className={classes.cardTitle} variant={'h6'} component={'h6'}>
											<Skeleton animation={'wave'} />
										</Typography>
										<Grid container justify={'center'} className={classes.cardInfo}>
											<Grid item xs={6}>
												<Skeleton width={50} animation={'wave'} />
											</Grid>
											<Grid item xs={6} className={classes.cardInfoViewCount}>
												<Skeleton className={classes.cardInfoViewCountSkeleton} width={50} animation={'wave'} />
											</Grid>
										</Grid>
									</Box>
								</Box>
							</Link>
						</Card>
						<Card square elevation={0}>
							<Link href={'/test'}>
								<Box className={classes.cardWrapper}>
									<Box className={classes.cardWrapperInner} />
									<Box className={classes.cardBackgroundSkeleton}>
										<Skeleton variant={'rect'} width={'100%'} height={'100%'} animation={'wave'} />
										<Typography noWrap className={classes.cardTitle} variant={'h6'} component={'h6'}>
											<Skeleton animation={'wave'} />
										</Typography>
										<Typography noWrap className={classes.cardTitle} variant={'h6'} component={'h6'}>
											<Skeleton animation={'wave'} />
										</Typography>
										<Grid container justify={'center'} className={classes.cardInfo}>
											<Grid item xs={6}>
												<Skeleton width={50} animation={'wave'} />
											</Grid>
											<Grid item xs={6} className={classes.cardInfoViewCount}>
												<Skeleton className={classes.cardInfoViewCountSkeleton} width={50} animation={'wave'} />
											</Grid>
										</Grid>
									</Box>
								</Box>
							</Link>
						</Card>
					</Swiper>
				) : (
					<Grow in>
						<Box>
							<Swiper {...config}>
								{dailyPopularList.map((item: Board) => (
									<Card key={`daily-popular-board-${item.id}`} square>
										<Link href={'/test'}>
											<Box className={classes.cardWrapper}>
												<Box className={classes.cardWrapperInner}>
													<Box className={classes.cardCentered}>
														{item.image ? <img src={item.image} alt={'Dummy Thumbnail'} /> : <img src={Image} alt={'Thumbnail'} />}
													</Box>
												</Box>
												<Box className={classes.cardBackground}>
													<Typography noWrap className={classes.cardTitle} variant={'h6'} component={'h6'}>
														{item.subject}
													</Typography>
													<Typography noWrap className={classes.cardDescription} variant={'subtitle1'}>
														{item.description}
													</Typography>
													<Grid container justify={'space-between'} className={classes.cardInfo}>
														<Grid item>
															{item.nickname}
														</Grid>
														<Grid item className={classes.cardInfoViewCount}>
															<Box component={'span'} marginRight={1} fontSize={12}>
																<ThumbUpAltIcon fontSize={'small'} />
																{' '}
																{Number(item.up).toLocaleString()}
															</Box>
															<Box component={'span'} fontSize={12}>
																<VisibilityIcon fontSize={'small'} />
																{' '}
																{Number(item.view).toLocaleString()}
															</Box>
														</Grid>
													</Grid>
												</Box>
											</Box>
										</Link>
									</Card>
								))}
							</Swiper>
						</Box>
					</Grow>
				)}
			</Box>
		</>
	);
}

export default memo(DailyPopularPost);
