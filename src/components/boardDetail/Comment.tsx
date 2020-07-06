import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import moment from 'moment';

// Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Grow from '@material-ui/core/Grow';

// Material UI Icons
import AddCommentIcon from '@material-ui/icons/AddComment';
import PersonIcon from '@material-ui/icons/Person';

// Svgs
import NoCommentSvg from '../../../styles/svgs/no_comment.svg';

// Modules
import { BoardDetailComment } from '../../modules/boardDetail';

// Custom Hooks
import useBoardDetailComment from '../../hooks/useBoardDetailComment';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			backgroundColor: 'white'
		},
		commentOrderList: {
			display: 'flex',
			paddingTop: theme.spacing(2),
			paddingBottom: theme.spacing(2),
			borderBottom: `1px solid ${theme.palette.grey['50']}`,
			[theme.breakpoints.down('md')]: {
				paddingLeft: theme.spacing(2),
				paddingRight: theme.spacing(2)
			}
		},
		commentOrderListItem: {
			width: 'auto',
			padding: 0,
			cursor: 'pointer',
			color: theme.palette.grey.A200,
			transition: 'color .5s',
			'&::after': {
				content: '""',
				display: 'block',
				marginLeft: theme.spacing(1),
				width: 3,
				height: 3,
				border: `1px solid ${theme.palette.grey.A200}`,
				borderRadius: '50%',
				backgroundColor: theme.palette.grey.A200
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
				color: theme.palette.primary.main
			},
			'& p': {
				fontFamily: 'NanumSquareRoundEB'
			}
		},
		commentListMoreButton: {
			padding: theme.spacing(2),
			borderRadius: 'inherit',
			color: theme.palette.grey.A200,
			[theme.breakpoints.down('md')]: {
				borderBottom: `1px solid ${theme.palette.grey['50']}`
			}
		},
		commentListItem: {
			display: 'block',
			padding: 0
		},
		commentListBox: {
			padding: theme.spacing(2, 0),
			wordBreak: 'break-all',
			wordWrap: 'break-word',
			overflow: 'hidden',
			[theme.breakpoints.down('md')]: {
				borderBottom: `1px solid ${theme.palette.grey['50']}`
			}
		},
		commentListItemWriterBox: {
			display: 'flex',
			alignItems: 'center',
			color: theme.palette.grey.A200,
			'& > div::after': {
				content: '""',
				display: 'inline-block',
				margin: theme.spacing(1),
				width: 3,
				height: 3,
				border: `1px solid ${theme.palette.grey.A200}`,
				borderRadius: '50%',
				backgroundColor: theme.palette.grey.A200,
				verticalAlign: 'middle'
			},
			'& > div:last-child::after': {
				display: 'none'
			},
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(0, 2)
			}
		},
		commentListItemWriterAvatar: {
			width: theme.spacing(4),
			height: theme.spacing(4),
			[theme.breakpoints.down('md')]: {
				fontSize: 14
			}
		},
		commentListItemWriterNickname: {
			marginLeft: theme.spacing(1),
			fontSize: 16,
			fontWeight: 700,
			color: theme.palette.grey.A700
		},
		commentListItemContent: {
			paddingTop: theme.spacing(1),
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(1, 2, 0, 2)
			}
		},
		commentListItemDate: {
			color: theme.palette.grey.A200,
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(1, 2, 0, 2)
			}
		},
		commentListItemDateSkeleton: {
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(0, 2, 0, 2)
			}
		},
		replyBox: {
			padding: theme.spacing(2),
			backgroundColor: '#fafafa',
			[theme.breakpoints.down('md')]: {
				borderBottom: `1px solid ${theme.palette.grey['50']}`
			}
		},
		replyBoxItemWriterBox: {
			display: 'flex',
			alignItems: 'center',
			color: theme.palette.grey.A200,
			'&::before': {
				content: '""',
				display: 'inline-block',
				width: 20,
				height: 20,
				marginBottom: 15,
				borderLeft: `2px solid ${theme.palette.grey.A100}`,
				borderBottom: `2px solid ${theme.palette.grey.A100}`
			},
			'& > div::after': {
				content: '""',
				display: 'inline-block',
				margin: theme.spacing(1),
				width: 3,
				height: 3,
				border: `1px solid ${theme.palette.grey.A100}`,
				borderRadius: '50%',
				backgroundColor: theme.palette.grey.A100,
				verticalAlign: 'middle'
			},
			'& > div:last-child::after': {
				display: 'none'
			}
		},
		replyBoxItemWriterAvatar: {
			width: theme.spacing(4),
			height: theme.spacing(4),
			[theme.breakpoints.down('md')]: {
				fontSize: 14
			}
		},
		replyBoxItemWriterNickname: {
			marginLeft: theme.spacing(1),
			fontSize: 16,
			fontWeight: 700,
			color: theme.palette.grey.A700
		},
		replyBoxItemContent: {
			padding: theme.spacing(1, 0, 0, 3),
			wordBreak: 'break-all',
			wordWrap: 'break-word',
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(1, 0, 0, 3)
			}
		},
		replyBoxItemWriterDate: {
			color: theme.palette.grey.A200,
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(1, 0, 0, 3)
			}
		},
		replyBoxItemWriterDateSkeleton: {
			color: theme.palette.grey.A200,
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(0, 0, 0, 3)
			}
		},
		emptyCommentBox: {
			padding: theme.spacing(5),
			textAlign: 'center',
			'& img': {
				maxWidth: 50
			},
			[theme.breakpoints.down('md')]: {
				borderBottom: `1px solid ${theme.palette.grey['50']}`
			}
		}
	})
);

function Comment() {
	const classes = useStyles();
	const {
		data, pending, count, row, onHandleCommentRow
	} = useBoardDetailComment();

	return (
		<Box className={classes.root}>
			<List className={classes.commentOrderList} disablePadding>
				<ListItem className={classes.commentOrderListItem} selected>
					<Box>
						<Typography variant={'body1'}>{'최신순'}</Typography>
					</Box>
				</ListItem>
			</List>
			<List disablePadding>
				<ListItem className={classes.commentListItem}>
					{pending && (
						<Grow in>
							<Box>
								<Box className={classes.commentListBox}>
									<Box className={classes.commentListItemWriterBox}>
										<Box display={'flex'} alignItems={'center'}>
											<Skeleton variant={'circle'} animation={'wave'} width={35} height={35} />
											<Box className={classes.commentListItemWriterNickname} component={'span'}>
												<Skeleton animation={'wave'} width={35} />
											</Box>
											<Box component={'span'} ml={1}>
												<Skeleton animation={'wave'} width={35} />
											</Box>
										</Box>
										<Hidden mdDown>
											<Box>
												<Skeleton animation={'wave'} width={100} />
											</Box>
										</Hidden>
									</Box>
									<Box className={classes.commentListItemContent}>
										<Skeleton animation={'wave'} />
										<Skeleton animation={'wave'} />
										<Skeleton animation={'wave'} />
									</Box>
									<Hidden lgUp>
										<Box className={classes.commentListItemDateSkeleton}>
											<Skeleton animation={'wave'} width={100} />
										</Box>
									</Hidden>
								</Box>
								<Box className={classes.replyBox}>
									<Box className={classes.replyBoxItemWriterBox}>
										<Box display={'flex'} alignItems={'center'}>
											<Skeleton variant={'circle'} animation={'wave'} width={35} height={35} />
											<Box className={classes.replyBoxItemWriterNickname} component={'span'}>
												<Skeleton animation={'wave'} width={35} />
											</Box>
											<Box component={'span'} ml={1}>
												<Skeleton animation={'wave'} width={35} />
											</Box>
										</Box>
										<Hidden mdDown>
											<Box>
												<Skeleton animation={'wave'} width={100} />
											</Box>
										</Hidden>
									</Box>
									<Box pt={1} pl={3}>
										<Skeleton animation={'wave'} />
										<Skeleton animation={'wave'} />
										<Skeleton animation={'wave'} />
									</Box>
									<Hidden lgUp>
										<Box className={classes.replyBoxItemWriterDateSkeleton}>
											<Skeleton animation={'wave'} width={100} />
										</Box>
									</Hidden>
								</Box>
								<Box className={classes.commentListBox}>
									<Box className={classes.commentListItemWriterBox}>
										<Box display={'flex'} alignItems={'center'}>
											<Skeleton variant={'circle'} animation={'wave'} width={35} height={35} />
											<Box className={classes.commentListItemWriterNickname} component={'span'}>
												<Skeleton animation={'wave'} width={35} />
											</Box>
											<Box component={'span'} ml={1}>
												<Skeleton animation={'wave'} width={35} />
											</Box>
										</Box>
										<Hidden mdDown>
											<Box>
												<Skeleton animation={'wave'} width={100} />
											</Box>
										</Hidden>
									</Box>
									<Box className={classes.commentListItemContent}>
										<Skeleton animation={'wave'} />
										<Skeleton animation={'wave'} />
										<Skeleton animation={'wave'} />
									</Box>
									<Hidden lgUp>
										<Box className={classes.commentListItemDateSkeleton}>
											<Skeleton animation={'wave'} width={100} />
										</Box>
									</Hidden>
								</Box>
								<Box className={classes.commentListBox}>
									<Box className={classes.commentListItemWriterBox}>
										<Box display={'flex'} alignItems={'center'}>
											<Skeleton variant={'circle'} animation={'wave'} width={35} height={35} />
											<Box className={classes.commentListItemWriterNickname} component={'span'}>
												<Skeleton animation={'wave'} width={35} />
											</Box>
											<Box component={'span'} ml={1}>
												<Skeleton animation={'wave'} width={35} />
											</Box>
										</Box>
										<Hidden mdDown>
											<Box>
												<Skeleton animation={'wave'} width={100} />
											</Box>
										</Hidden>
									</Box>
									<Box className={classes.commentListItemContent}>
										<Skeleton animation={'wave'} />
										<Skeleton animation={'wave'} />
										<Skeleton animation={'wave'} />
									</Box>
									<Hidden lgUp>
										<Box className={classes.commentListItemDateSkeleton}>
											<Skeleton animation={'wave'} width={100} />
										</Box>
									</Hidden>
								</Box>
								<Box className={classes.replyBox}>
									<Box className={classes.replyBoxItemWriterBox}>
										<Box display={'flex'} alignItems={'center'}>
											<Skeleton variant={'circle'} animation={'wave'} width={35} height={35} />
											<Box className={classes.replyBoxItemWriterNickname} component={'span'}>
												<Skeleton animation={'wave'} width={35} />
											</Box>
											<Box component={'span'} ml={1}>
												<Skeleton animation={'wave'} width={35} />
											</Box>
										</Box>
										<Hidden mdDown>
											<Box>
												<Skeleton animation={'wave'} width={100} />
											</Box>
										</Hidden>
									</Box>
									<Box pt={1} pl={3}>
										<Skeleton animation={'wave'} />
										<Skeleton animation={'wave'} />
										<Skeleton animation={'wave'} />
									</Box>
									<Hidden lgUp>
										<Box className={classes.replyBoxItemWriterDateSkeleton}>
											<Skeleton animation={'wave'} width={100} />
										</Box>
									</Hidden>
								</Box>
								<Box className={classes.replyBox}>
									<Box className={classes.replyBoxItemWriterBox}>
										<Box display={'flex'} alignItems={'center'}>
											<Skeleton variant={'circle'} animation={'wave'} width={35} height={35} />
											<Box className={classes.replyBoxItemWriterNickname} component={'span'}>
												<Skeleton animation={'wave'} width={35} />
											</Box>
											<Box component={'span'} ml={1}>
												<Skeleton animation={'wave'} width={35} />
											</Box>
										</Box>
										<Hidden mdDown>
											<Box>
												<Skeleton animation={'wave'} width={100} />
											</Box>
										</Hidden>
									</Box>
									<Box pt={1} pl={3}>
										<Skeleton animation={'wave'} />
										<Skeleton animation={'wave'} />
										<Skeleton animation={'wave'} />
									</Box>
									<Hidden lgUp>
										<Box className={classes.replyBoxItemWriterDateSkeleton}>
											<Skeleton animation={'wave'} width={100} />
										</Box>
									</Hidden>
								</Box>
								<Box className={classes.commentListBox}>
									<Box className={classes.commentListItemWriterBox}>
										<Box display={'flex'} alignItems={'center'}>
											<Skeleton variant={'circle'} animation={'wave'} width={35} height={35} />
											<Box className={classes.commentListItemWriterNickname} component={'span'}>
												<Skeleton animation={'wave'} width={35} />
											</Box>
											<Box component={'span'} ml={1}>
												<Skeleton animation={'wave'} width={35} />
											</Box>
										</Box>
										<Hidden mdDown>
											<Box>
												<Skeleton animation={'wave'} width={100} />
											</Box>
										</Hidden>
									</Box>
									<Box className={classes.commentListItemContent}>
										<Skeleton animation={'wave'} />
										<Skeleton animation={'wave'} />
										<Skeleton animation={'wave'} />
									</Box>
									<Hidden lgUp>
										<Box className={classes.commentListItemDateSkeleton}>
											<Skeleton animation={'wave'} width={100} />
										</Box>
									</Hidden>
								</Box>
							</Box>
						</Grow>
					)}
					{!pending
						&& data.map((item: BoardDetailComment) => (
							<Grow key={`board-comment-${item.id}`} in>
								<Box>
									<Box className={classes.commentListBox}>
										<Box className={classes.commentListItemWriterBox} display={'flex'} alignItems={'center'}>
											<Box display={'flex'} alignItems={'center'}>
												<Avatar className={classes.commentListItemWriterAvatar}>
													<PersonIcon />
												</Avatar>
												<Box className={classes.commentListItemWriterNickname} component={'span'}>
													{item.nickname}
												</Box>
												<Box component={'span'} ml={0.5}>
													{`${item.ip && `(${item.ip})`}`}
												</Box>
											</Box>
											<Hidden mdDown>
												<Box>{moment(item.register_date).format('YYYY. MM. DD HH:mm:ss')}</Box>
											</Hidden>
										</Box>
										<Box className={classes.commentListItemContent}>{item.content}</Box>
										<Hidden lgUp>
											<Box className={classes.commentListItemDate}>
												{moment(item.register_date).format('YYYY. MM. DD HH:mm:ss')}
											</Box>
										</Hidden>
									</Box>
									{item.commentReplyList.map((child) => (
										<Box key={`board-comment-reply-${child.id}`} className={classes.replyBox}>
											<Box className={classes.replyBoxItemWriterBox} display={'flex'} alignItems={'center'}>
												<Box display={'flex'} alignItems={'center'}>
													<Avatar className={classes.replyBoxItemWriterAvatar}>
														<PersonIcon />
													</Avatar>
													<Box className={classes.replyBoxItemWriterNickname} component={'span'}>
														{child.nickname}
													</Box>
													<Box component={'span'} ml={0.5}>
														{`${child.ip && `(${item.ip})`}`}
													</Box>
												</Box>
												<Hidden mdDown>
													<Box>{moment(child.register_date).format('YYYY. MM. DD HH:mm:ss')}</Box>
												</Hidden>
											</Box>
											<Box className={classes.replyBoxItemContent}>{child.content}</Box>
											<Hidden lgUp>
												<Box className={classes.replyBoxItemWriterDate}>
													{moment(child.register_date).format('YYYY. MM. DD HH:mm:ss')}
												</Box>
											</Hidden>
										</Box>
									))}
								</Box>
							</Grow>
						))}
					{!pending && data.length === 0 && (
						<Grow in>
							<Box className={classes.emptyCommentBox}>
								<Box>
									<img src={NoCommentSvg} alt={'NoCommentSvg'} />
								</Box>
								<Box>{'댓글이 존재하지 않습니다!'}</Box>
							</Box>
						</Grow>
					)}
				</ListItem>
			</List>
			{!pending && count > row && (
				<Button
					className={classes.commentListMoreButton}
					fullWidth
					endIcon={<AddCommentIcon />}
					onClick={onHandleCommentRow}
				>
					{'더 보기'}
				</Button>
			)}
		</Box>
	);
}

export default Comment;
