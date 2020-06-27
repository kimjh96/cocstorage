import React, { useEffect, useState, memo } from 'react';
import {
	createStyles,
	makeStyles,
	Theme
} from '@material-ui/core/styles';
import moment from 'moment';

// Material UI
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Skeleton from '@material-ui/lab/Skeleton';
import RootRef from '@material-ui/core/RootRef';
import Grow from '@material-ui/core/Grow';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TransitionProps } from '@material-ui/core/transitions';

// Material UI Icons
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import ThumbDownAltSharpIcon from '@material-ui/icons/ThumbDownAltSharp';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

// Components
import GoogleAdSense from '../common/GoogleAdSense';

// Custom Hooks
import useBoardDetail from '../../hooks/useBoardDetail';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			backgroundColor: 'white'
		},
		subjectBox: {
			marginTop: theme.spacing(2),
			padding: theme.spacing(2, 0, 1, 0),
			color: theme.palette.grey.A700,
			[theme.breakpoints.down('md')]: {
				margin: 0,
				padding: theme.spacing(2, 2, 0, 2)
			}
		},
		subjectBoxTypography: {
			[theme.breakpoints.down('md')]: {
				fontSize: '1.2rem'
			}
		},
		writerInfoBox: {
			color: theme.palette.grey.A200,
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(1, 2, 0, 2)
			}
		},
		writerAvatar: {
			[theme.breakpoints.down('md')]: {
				width: theme.spacing(4),
				height: theme.spacing(4)
			}
		},
		otherInfoBox: {
			padding: theme.spacing(2, 0),
			border: '1px solid',
			borderColor: theme.palette.grey['50'],
			borderLeft: 'none',
			borderRight: 'none',
			[theme.breakpoints.down('md')]: {
				paddingLeft: theme.spacing(1),
				paddingRight: theme.spacing(1)
			}
		},
		otherInfoSkeletonBox: {
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(2, 0),
			border: '1px solid',
			borderColor: theme.palette.grey['50'],
			borderLeft: 'none',
			borderRight: 'none',
			[theme.breakpoints.down('md')]: {
				paddingLeft: theme.spacing(2),
				paddingRight: theme.spacing(2)
			}
		},
		adBox: {
			'& ins': {
				margin: theme.spacing(1, 0),
				marginLeft: '0 !important',
				textAlign: 'center'
			}
		},
		contentBox: {
			padding: theme.spacing(2, 0),
			'& img': {
				maxWidth: '100%'
			},
			'& video': {
				maxWidth: '100%'
			},
			'& iframe': {
				maxWidth: '100%'
			},
			[theme.breakpoints.down('md')]: {
				paddingLeft: theme.spacing(2),
				paddingRight: theme.spacing(2)
			}
		},
		recommendButtonGroup: {
			marginTop: theme.spacing(1),
			'& > button': {
				padding: theme.spacing(2),
				borderRadius: '0',
				borderColor: theme.palette.grey['50'],
				color: theme.palette.grey.A200
			}
		},
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: '#fff'
		}
	})
);

function SlideTransition(props: TransitionProps) {
	return <Slide {...props} direction={'up'} />;
}

function getAlterMessageByResponseBody(data: string | null): string | null {
	let alertMessage: string | null = null;

	switch (data) {
	case 'up':
		alertMessage = '추천을 누르셨습니다.';
		break;
	case 'up_rollback':
		alertMessage = '추천을 취소하셨습니다.';
		break;
	case 'down':
		alertMessage = '비추천을 누르셨습니다.';
		break;
	case 'down_rollback':
		alertMessage = '비추천을 취소하셨습니다.';
		break;
	case 'Already pressed the up button':
		alertMessage = '이미 추천을 누르셨습니다.';
		break;
	case 'Already pressed the down button':
		alertMessage = '이미 비추천을 누르셨습니다.';
		break;
	default:
		alertMessage = '알 수 없는 오류입니다.';
		break;
	}

	return alertMessage;
}

function BoardDetail() {
	const classes = useStyles();
	const {
		board: { data, pending },
		comment: { count: commentCount },
		recommend: { data: alertMessage, pending: backdropOpen, errorMessage },
		thumbsSnackBarOpen,
		errorThumbsSnackBarOpen,
		disabledRecommend,
		onHandleBoardDetailRecommend,
		onHandleCloseSnackBar,
		onHandleExitedSnackBar
	} = useBoardDetail();

	const [boardDetailState, setBoardDetailState] = useState<boolean>(false);

	useEffect(() => {
		if (!pending && data.content) {
			setBoardDetailState(true);
		}
	}, [pending, data.content]);

	return (
		<>
			{pending && (
				<Grow in>
					<Box className={classes.root}>
						<Box className={classes.subjectBox}>
							<Typography component={'h5'} variant={'h5'}>
								<Skeleton animation={'wave'} height={50} />
							</Typography>
						</Box>
						<Box className={classes.writerInfoBox} display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={2} pt={1} pb={1}>
							<Box display={'flex'} alignItems={'center'}>
								<Box><Skeleton variant={'circle'} animation={'wave'} width={35} height={35} /></Box>
								<Box ml={1}><Skeleton animation={'wave'} width={50} /></Box>
							</Box>
							<Box><Skeleton animation={'wave'} width={100} /></Box>
						</Box>
						<Box className={classes.otherInfoSkeletonBox}>
							<Box><Skeleton variant={'circle'} animation={'wave'} width={20} height={20} /></Box>
							<Box ml={1} mr={1}><Skeleton animation={'wave'} width={35} /></Box>
							<Box><Skeleton variant={'circle'} animation={'wave'} width={20} height={20} /></Box>
							<Box ml={1} mr={1}><Skeleton animation={'wave'} width={35} /></Box>
							<Box><Skeleton variant={'circle'} animation={'wave'} width={20} height={20} /></Box>
							<Box ml={1} mr={1}><Skeleton animation={'wave'} width={35} /></Box>
							<Box><Skeleton variant={'circle'} animation={'wave'} width={20} height={20} /></Box>
							<Box ml={1}><Skeleton animation={'wave'} width={35} /></Box>
						</Box>
						<Box className={classes.contentBox}>
							<Skeleton animation={'wave'} />
							<Skeleton animation={'wave'} />
							<Skeleton animation={'wave'} />
							<Box mt={1}>
								<Skeleton variant={'rect'} animation={'wave'} height={250} />
							</Box>
							<Box textAlign={'center'}>
								<Box>
									<Box maxWidth={150} m={'auto'} mt={1}>
										<Skeleton variant={'rect'} animation={'wave'} width={170} height={58} />
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Grow>
			)}
			{boardDetailState && (
				<Grow in>
					<Box className={classes.root}>
						<Box className={classes.subjectBox}>
							<Typography className={classes.subjectBoxTypography} component={'h5'} variant={'h5'}>
								{data.subject}
							</Typography>
						</Box>
						<Box className={classes.writerInfoBox} display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={2} pt={1} pb={1}>
							<Box display={'flex'} alignItems={'center'}>
								<Avatar className={classes.writerAvatar}>
									<PersonIcon />
								</Avatar>
								<Box ml={1}>{`${data.nickname} ${data.ip && `(${data.ip})`}`}</Box>
							</Box>
							<Box>{moment(data.register_date).format('YYYY. MM. DD HH:mm:ss')}</Box>
						</Box>
						<Box className={classes.otherInfoBox} display={'flex'} alignItems={'center'}>
							<Button startIcon={<MessageIcon />} disabled>
								{Number(commentCount).toLocaleString()}
							</Button>
							<Button startIcon={<VisibilityIcon />} disabled>
								{Number(data.view).toLocaleString()}
							</Button>
							<Button startIcon={<ThumbUpAltSharpIcon />} disabled>
								{Number(data.up).toLocaleString()}
							</Button>
							<Button startIcon={<ThumbDownAltSharpIcon />} disabled>
								{Number(data.down).toLocaleString()}
							</Button>
						</Box>
						<Box className={classes.adBox}>
							<GoogleAdSense
								html={'<ins class="adsbygoogle"'
								+ 'style="display:block"'
								+ 'data-ad-client="ca-pub-5809905264951057"'
								+ 'data-ad-slot="3990104603"'
								+ 'data-ad-format="auto"'
								+ 'data-full-width-responsive="true"></ins>'}
							/>
						</Box>
						<Box className={classes.contentBox}>
							<Box dangerouslySetInnerHTML={{ __html: data.content || '' }} />
							<Box textAlign={'center'}>
								<Box>
									<ButtonGroup className={classes.recommendButtonGroup}>
										<Button endIcon={<ThumbUpAltSharpIcon />} data-thumbs-type={'up'} onClick={onHandleBoardDetailRecommend} disabled={disabledRecommend}>
											{Number(data.up).toLocaleString()}
										</Button>
										<Button startIcon={<ThumbDownAltSharpIcon />} data-thumbs-type={'down'} onClick={onHandleBoardDetailRecommend} disabled={disabledRecommend}>
											{Number(data.down).toLocaleString()}
										</Button>
									</ButtonGroup>
								</Box>
							</Box>
						</Box>
					</Box>
				</Grow>
			)}
			<Snackbar
				open={thumbsSnackBarOpen}
				onClose={onHandleCloseSnackBar}
				onExited={onHandleExitedSnackBar}
				TransitionComponent={SlideTransition}
				autoHideDuration={1500}
			>
				<Alert icon={<ThumbsUpDownIcon fontSize={'inherit'} />} severity={'info'}>
					{getAlterMessageByResponseBody(alertMessage)}
				</Alert>
			</Snackbar>
			<Snackbar
				open={errorThumbsSnackBarOpen}
				onClose={onHandleCloseSnackBar}
				onExited={onHandleExitedSnackBar}
				TransitionComponent={SlideTransition}
				autoHideDuration={1500}
			>
				<Alert severity={'error'}>
					{getAlterMessageByResponseBody(errorMessage)}
				</Alert>
			</Snackbar>
			<Backdrop className={classes.backdrop} open={backdropOpen}>
				<CircularProgress color={'inherit'} />
			</Backdrop>
		</>
	);
}

export default memo(BoardDetail);
