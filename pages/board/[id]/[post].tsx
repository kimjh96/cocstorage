import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grow from '@material-ui/core/Grow';

// Material UI Colors
import { grey } from '@material-ui/core/colors';

// Material UI Labs
import Skeleton from '@material-ui/lab/Skeleton';

// Material UI Icons
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import ThumbDownSharpIcon from '@material-ui/icons/ThumbDownSharp';
import AddCommentIcon from '@material-ui/icons/AddComment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MessageIcon from '@material-ui/icons/Message';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		writerInfoBox: {
			color: grey.A200
		},
		writerAvatar: {
			[theme.breakpoints.down('md')]: {
				width: theme.spacing(4),
				height: theme.spacing(4)
			}
		},
		otherInfoBox: {
			border: '1px solid',
			borderColor: grey.A100,
			borderLeft: 'none',
			borderRight: 'none'
		},
		recommendButtonGroup: {
			'& > button': {
				padding: theme.spacing(2),
				borderRadius: '0',
				borderColor: grey.A100,
				color: grey.A200
			}
		},
		commentOrderList: {
			display: 'flex',
			paddingTop: theme.spacing(2),
			paddingBottom: theme.spacing(2),
			borderBottom: `1px solid ${grey.A100}`
		},
		commentOrderListItem: {
			width: 'auto',
			padding: 0,
			cursor: 'pointer',
			color: grey.A200,
			transition: 'color .5s',
			'&::after': {
				content: '""',
				display: 'block',
				marginLeft: theme.spacing(1),
				width: 3,
				height: 3,
				border: `1px solid ${grey.A200}`,
				borderRadius: '50%',
				backgroundColor: grey.A200
			},
			'&:last-child::after': {
				display: 'none'
			},
			'&:hover': {
				backgroundColor: 'white !important',
				color: theme.palette.primary.main
			},
			'&.Mui-selected': {
				backgroundColor: 'white',
				color: theme.palette.primary.main,
				fontWeight: 700
			}
		},
		commentListMoreButton: {
			padding: theme.spacing(2),
			borderRadius: 'inherit',
			color: grey.A200
		},
		commentListItem: {
			display: 'block',
			padding: 0,
			borderBottom: `1px solid ${grey.A100}`
		},
		commentListItemWriterBox: {
			color: grey.A200,
			'& > div::after': {
				content: '""',
				display: 'inline-block',
				margin: theme.spacing(1),
				width: 3,
				height: 3,
				border: `1px solid ${grey.A200}`,
				borderRadius: '50%',
				backgroundColor: grey.A200,
				verticalAlign: 'middle'
			},
			'& > div:last-child::after': {
				display: 'none'
			}
		},
		commentListItemWriterNickname: {
			fontSize: 16,
			fontWeight: 700,
			color: grey.A700
		},
		commentListItemWriterAvatar: {
			width: theme.spacing(4),
			height: theme.spacing(4),
			[theme.breakpoints.down('md')]: {
				width: theme.spacing(3),
				height: theme.spacing(3),
				fontSize: 14
			}
		},
		replyBox: {
			borderTop: `1px solid ${grey.A100}`,
			backgroundColor: grey['50']
		},
		replyBoxItemWriterBox: {
			color: grey.A200,
			'&::before': {
				content: '""',
				display: 'inline-block',
				width: 20,
				height: 20,
				marginBottom: 15,
				borderLeft: `2px solid ${grey.A200}`,
				borderBottom: `2px solid ${grey.A200}`
			},
			'& > div::after': {
				content: '""',
				display: 'inline-block',
				margin: theme.spacing(1),
				width: 3,
				height: 3,
				border: `1px solid ${grey.A200}`,
				borderRadius: '50%',
				backgroundColor: grey.A200,
				verticalAlign: 'middle'
			},
			'& > div:last-child::after': {
				display: 'none'
			}
		},
		replyBoxItemWriterNickname: {
			fontSize: 16,
			fontWeight: 700,
			color: grey.A700
		},
		replyBoxItemWriterAvatar: {
			width: theme.spacing(4),
			height: theme.spacing(4),
			[theme.breakpoints.down('md')]: {
				width: theme.spacing(3),
				height: theme.spacing(3),
				fontSize: 14
			}
		}
	})
);

function BoardView() {
	const classes = useStyles();

	return (
		<Container>
			<Grid container>
				<Grid item xs={12} md={9}>
					<Grow in>
						<Box>
							<Box mt={2} pt={2} pb={1}>
								<Typography component={'h5'} variant={'h5'}>
									{'안녕하세요 제목 테스트입니다.'}
								</Typography>
							</Box>
							<Box className={classes.writerInfoBox} display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={2} pt={1} pb={1}>
								<Box display={'flex'} alignItems={'center'}>
									<Avatar className={classes.writerAvatar}>{'K'}</Avatar>
									<Box ml={1}>{'KimJongHyeok'}</Box>
								</Box>
								<Box>{'2020. 12. 25 07:12'}</Box>
							</Box>
							<Box className={classes.otherInfoBox} display={'flex'} alignItems={'center'} pt={2} pb={2}>
								<Button startIcon={<MessageIcon />} disabled>
									{'2,500'}
								</Button>
								<Button startIcon={<VisibilityIcon />} disabled>
									{'3,000'}
								</Button>
								<Button startIcon={<ThumbUpAltSharpIcon />} disabled>
									{'1,000'}
								</Button>
								<Button startIcon={<ThumbDownSharpIcon />} disabled>
									{'2,000'}
								</Button>
							</Box>
							<Box pt={2} pb={2}>
								{'Content'}
								<Box textAlign={'center'}>
									<Box>
										<ButtonGroup className={classes.recommendButtonGroup}>
											<Button endIcon={<ThumbUpAltSharpIcon />}>
												{'1,000'}
											</Button>
											<Button startIcon={<ThumbDownSharpIcon />}>
												{'2,000'}
											</Button>
										</ButtonGroup>
									</Box>
								</Box>
							</Box>
						</Box>
					</Grow>
					<Grow in>
						<Box>
							<Box mt={2} pt={2} pb={1}>
								<Typography component={'h5'} variant={'h5'}>
									<Skeleton animation={'wave'} />
								</Typography>
							</Box>
							<Box className={classes.writerInfoBox} display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={2} pt={1} pb={1}>
								<Box display={'flex'} alignItems={'center'}>
									<Box><Skeleton variant={'circle'} animation={'wave'} width={35} height={35} /></Box>
									<Box ml={1}><Skeleton animation={'wave'} width={50} /></Box>
								</Box>
								<Box><Skeleton animation={'wave'} width={100} /></Box>
							</Box>
							<Box className={classes.otherInfoBox} display={'flex'} alignItems={'center'} pt={2} pb={2}>
								<Box><Skeleton variant={'circle'} animation={'wave'} width={20} height={20} /></Box>
								<Box ml={1} mr={1}><Skeleton animation={'wave'} width={35} /></Box>
								<Box><Skeleton variant={'circle'} animation={'wave'} width={20} height={20} /></Box>
								<Box ml={1} mr={1}><Skeleton animation={'wave'} width={35} /></Box>
								<Box><Skeleton variant={'circle'} animation={'wave'} width={20} height={20} /></Box>
								<Box ml={1} mr={1}><Skeleton animation={'wave'} width={35} /></Box>
								<Box><Skeleton variant={'circle'} animation={'wave'} width={20} height={20} /></Box>
								<Box ml={1}><Skeleton animation={'wave'} width={35} /></Box>
							</Box>
							<Box pt={2} pb={2}>
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
					<List className={classes.commentOrderList} disablePadding>
						<ListItem className={classes.commentOrderListItem} selected>
							<Box>
								<Typography variant={'body1'}>
									{'최신순'}
								</Typography>
							</Box>
						</ListItem>
						<ListItem className={classes.commentOrderListItem}>
							<Box pl={1}>
								<Typography variant={'body1'}>
									{'인기순'}
								</Typography>
							</Box>
						</ListItem>
					</List>
					<List disablePadding>
						<ListItem className={classes.commentListItem}>
							<Grow in>
								<Box>
									<Box pt={2} pb={2}>
										<Box className={classes.commentListItemWriterBox} display={'flex'} alignItems={'center'} pb={1}>
											<Box display={'flex'} alignItems={'center'}>
												<Skeleton variant={'circle'} animation={'wave'} width={35} height={35} />
												<Box className={classes.commentListItemWriterNickname} component={'span'} ml={1}>
													<Skeleton animation={'wave'} width={35} />
												</Box>
												<Box component={'span'} ml={1}>
													<Skeleton animation={'wave'} width={35} />
												</Box>
											</Box>
											<Box>
												<Skeleton animation={'wave'} width={100} />
											</Box>
										</Box>
										<Box pt={1}>
											<Skeleton animation={'wave'} />
											<Skeleton animation={'wave'} />
											<Skeleton animation={'wave'} />
										</Box>
									</Box>
									<Box pt={2} pb={2}>
										<Box className={classes.commentListItemWriterBox} display={'flex'} alignItems={'center'} pb={1}>
											<Box display={'flex'} alignItems={'center'}>
												<Avatar className={classes.commentListItemWriterAvatar}>{'K'}</Avatar>
												<Box className={classes.commentListItemWriterNickname} component={'span'} ml={1}>
													{'닉네임'}
												</Box>
												<Box component={'span'}>
													{'(110.8)'}
												</Box>
											</Box>
											<Box>
												{'2020. 05. 12 12:00'}
											</Box>
										</Box>
										<Box pt={1}>
											{'안녕하세요.'}<br />
											{'댓글 작성 테스트입니다.'}<br />
											{'하하'}
										</Box>
									</Box>
									<Box className={classes.replyBox} p={2}>
										<Box className={classes.replyBoxItemWriterBox} display={'flex'} alignItems={'center'} pb={1}>
											<Box display={'flex'} alignItems={'center'}>
												<Skeleton variant={'circle'} animation={'wave'} width={35} height={35} />
												<Box className={classes.replyBoxItemWriterNickname} component={'span'} ml={1}>
													<Skeleton animation={'wave'} width={35} />
												</Box>
												<Box component={'span'} ml={1}>
													<Skeleton animation={'wave'} width={35} />
												</Box>
											</Box>
											<Box>
												<Skeleton animation={'wave'} width={100} />
											</Box>
										</Box>
										<Box pt={1} pl={3}>
											<Skeleton animation={'wave'} />
											<Skeleton animation={'wave'} />
											<Skeleton animation={'wave'} />
										</Box>
									</Box>
									<Box className={classes.replyBox} p={2}>
										<Box className={classes.replyBoxItemWriterBox} display={'flex'} alignItems={'center'} pb={1}>
											<Box display={'flex'} alignItems={'center'}>
												<Avatar className={classes.replyBoxItemWriterAvatar}>{'K'}</Avatar>
												<Box className={classes.replyBoxItemWriterNickname} component={'span'} ml={1}>
													{'리플이요'}
												</Box>
												<Box component={'span'}>
													{'(110.8)'}
												</Box>
											</Box>
											<Box>
												{'2020. 05. 12 12:00'}
											</Box>
										</Box>
										<Box pt={1} pl={3}>
											{'안녕하세요.'}<br />
											{'댓글 작성 테스트입니다.'}<br />
											{'하하'}
										</Box>
									</Box>
								</Box>
							</Grow>
						</ListItem>
					</List>
					<Box>
						<Button
							className={classes.commentListMoreButton}
							fullWidth
							endIcon={<AddCommentIcon />}
						>
							{'더 보기'}
						</Button>
					</Box>
				</Grid>
				<Grid item xs={12} md={3}>
					<Box border={1}>
						{'AD'}
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

export default BoardView;
