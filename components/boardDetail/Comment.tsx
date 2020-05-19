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
import Grow from '@material-ui/core/Grow';

// Material UI Colors
import { grey } from '@material-ui/core/colors';

// Material UI Icons
import AddCommentIcon from '@material-ui/icons/AddComment';

// Modules
import { BoardDetailComment } from '../../src/modules/boardDetail';

// Custom Hooks
import useBoardDetailComment from '../../hooks/useBoardDetailComment';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
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

function Comment() {
	const classes = useStyles();
	const {
		data,
		pending,
		count,
		row,
		onHandleCommentRow
	} = useBoardDetailComment();

	return (
		<>
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
					{pending ? (
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
							</Box>
						</Grow>
					) : (
						data.map((item: BoardDetailComment) => (
							<Grow in>
								<Box>
									<Box pt={2} pb={2}>
										<Box className={classes.commentListItemWriterBox} display={'flex'} alignItems={'center'} pb={1}>
											<Box display={'flex'} alignItems={'center'}>
												<Avatar className={classes.commentListItemWriterAvatar}>{'K'}</Avatar>
												<Box className={classes.commentListItemWriterNickname} component={'span'} ml={1}>
													{item.nickname}
												</Box>
												<Box component={'span'} ml={0.5}>
													{`${item.ip && `(${item.ip})`}`}
												</Box>
											</Box>
											<Box>
												{moment(item.register_date).format('YYYY. MM. DD hh:mm:ss')}
											</Box>
										</Box>
										<Box pt={1}>
											{item.content}
										</Box>
									</Box>
									{item.commentReplyList.map((child) => (
										<Box className={classes.replyBox} p={2}>
											<Box className={classes.replyBoxItemWriterBox} display={'flex'} alignItems={'center'} pb={1}>
												<Box display={'flex'} alignItems={'center'}>
													<Avatar className={classes.replyBoxItemWriterAvatar}>{'K'}</Avatar>
													<Box className={classes.replyBoxItemWriterNickname} component={'span'} ml={1}>
														{child.nickname}
													</Box>
													<Box component={'span'} ml={0.5}>
														{`${child.ip && `(${item.ip})`}`}
													</Box>
												</Box>
												<Box>
													{moment(child.register_date).format('YYYY. MM. DD hh:mm:ss')}
												</Box>
											</Box>
											<Box pt={1} pl={3}>
												{child.content}
											</Box>
										</Box>
									))}
								</Box>
							</Grow>
						))
					)}
				</ListItem>
			</List>
			{(!pending && (count > row)) && (
				<Button
					className={classes.commentListMoreButton}
					fullWidth
					endIcon={<AddCommentIcon />}
					onClick={onHandleCommentRow}
				>
					{'더 보기'}
				</Button>
			)}
		</>
	);
}

export default Comment;
