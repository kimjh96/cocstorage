import React, { useEffect, useRef } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import moment from 'moment';

// Material UI
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import MessageIcon from '@material-ui/icons/Message';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import ThumbDownSharpIcon from '@material-ui/icons/ThumbDownSharp';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Skeleton from '@material-ui/lab/Skeleton';
import Grow from '@material-ui/core/Grow';
import RootRef from '@material-ui/core/RootRef';

// Material UI Colors
import { grey } from '@material-ui/core/colors';

// CustomHooks
import useBoardDetail from '../../hooks/useBoardDetail';

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
		}
	})
);

function setContentHTML(element: HTMLElement | null, content: string | null) {
	if (element && content) {
		element.innerHTML = content;
	}
}

function BoardDetail() {
	const classes = useStyles();
	const contentRef = useRef<HTMLElement | null>(null);
	const { data, pending } = useBoardDetail();

	useEffect(() => {
		if (!pending) {
			setContentHTML(contentRef.current, data.content);
		}
	}, [pending, data.content, contentRef]);

	return (
		<>
			{pending ? (
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
			) : (
				<Grow in>
					<Box>
						<Box mt={2} pt={2} pb={1}>
							<Typography component={'h5'} variant={'h5'}>
								{data.subject}
							</Typography>
						</Box>
						<Box className={classes.writerInfoBox} display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={2} pt={1} pb={1}>
							<Box display={'flex'} alignItems={'center'}>
								<Avatar className={classes.writerAvatar}>{'K'}</Avatar>
								<Box ml={1}>{`${data.nickname} ${data.ip && `(${data.ip})`}`}</Box>
							</Box>
							<Box>{moment(data.register_date).format('YYYY. MM. DD hh:mm:ss')}</Box>
						</Box>
						<Box className={classes.otherInfoBox} display={'flex'} alignItems={'center'} pt={2} pb={2}>
							<Button startIcon={<MessageIcon />} disabled>
								{Number(data.commentCount).toLocaleString()}
							</Button>
							<Button startIcon={<VisibilityIcon />} disabled>
								{Number(data.view).toLocaleString()}
							</Button>
							<Button startIcon={<ThumbUpAltSharpIcon />} disabled>
								{Number(data.up).toLocaleString()}
							</Button>
							<Button startIcon={<ThumbDownSharpIcon />} disabled>
								{Number(data.down).toLocaleString()}
							</Button>
						</Box>
						<Box pt={2} pb={2}>
							<RootRef rootRef={contentRef}>
								<Box>
									{data.content}
								</Box>
							</RootRef>
							<Box textAlign={'center'}>
								<Box>
									<ButtonGroup className={classes.recommendButtonGroup}>
										<Button endIcon={<ThumbUpAltSharpIcon />}>
											{Number(data.up).toLocaleString()}
										</Button>
										<Button startIcon={<ThumbDownSharpIcon />}>
											{Number(data.down).toLocaleString()}
										</Button>
									</ButtonGroup>
								</Box>
							</Box>
						</Box>
					</Box>
				</Grow>
			)}
		</>
	);
}

export default BoardDetail;
