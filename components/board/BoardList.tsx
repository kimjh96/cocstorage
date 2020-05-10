import React, { memo } from 'react';
import Link from 'next/link';
import {
	createStyles, fade, makeStyles, Theme
} from '@material-ui/core/styles';

// Material UI
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grow from '@material-ui/core/Grow';
import Pagination from '@material-ui/lab/Pagination';

// Material UI Colors
import { grey } from '@material-ui/core/colors';

// Material UI Labs
import Skeleton from '@material-ui/lab/Skeleton';

// Material UI Icons
import ImageIcon from '@material-ui/icons/Image';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			display: 'flex',
			height: '100%',
			flexDirection: 'column',
			justifyContent: 'flex-end'
		},
		icon: {
			verticalAlign: 'middle'
		},
		pagination: {
			padding: theme.spacing(2),
			'& > ul': {
				justifyContent: 'center'
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
		}
	})
);

function BoardList() {
	const classes = useStyles();

	return (
		<Container>
			<Grow in>
				<Grid container>
					<Grid item xs={12} md={9}>
						<Grid container alignItems={'center'}>
							<Grid item xs={12} md={7}>
								<Box display={'flex'} alignItems={'center'} p={1} pl={0}>
									<Box flexGrow={1}>
										<Skeleton animation={'wave'} />
									</Box>
									<Box minWidth={20} ml={1}>
										<Skeleton animation={'wave'} />
									</Box>
									<Box minWidth={20} ml={1}>
										<Skeleton animation={'wave'} />
									</Box>
								</Box>
							</Grid>
							<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
								<Box display={'flex'} p={1} pl={0} pr={0}>
									<Box flexGrow={1}>
										<Skeleton animation={'wave'} />
									</Box>
									<Box flexGrow={1} ml={1}>
										<Skeleton animation={'wave'} />
									</Box>
									<Box flexGrow={1} ml={1}>
										<Skeleton animation={'wave'} />
									</Box>
									<Box flexGrow={1} ml={1}>
										<Skeleton animation={'wave'} />
									</Box>
								</Box>
							</Grid>
						</Grid>
						<Grid container alignItems={'center'}>
							<Grid className={classes.gridItemBoardInfo} item xs={12} md={7}>
								<Link href={'/board/[id]/[post]'} as={'/board/daily_popular/2'}>
									<a>
										<Box display={'flex'} alignItems={'center'} p={1.5} pl={0}>
											<Typography noWrap variant={'subtitle2'}>
												{'안녕하세요. 게시글 작성 테스트입니다.'}
											</Typography>
											<Typography variant={'subtitle2'}>
												<Box pl={1}><ImageIcon className={classes.icon} fontSize={'small'} color={'primary'} /></Box>
											</Typography>
											<Typography variant={'subtitle2'}>
												<Box className={classes.commentCountBox}>{'[12]'}</Box>
											</Typography>
										</Box>
									</a>
								</Link>
							</Grid>
							<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
								<Box display={'flex'} p={1.5} pl={0} pr={0}>
									<Box minWidth={80}>
										<Typography noWrap variant={'subtitle2'}>
											{'닉네임sadsdsdaasd'}
										</Typography>
									</Box>
									<Box minWidth={100}>
										{'2020.05.12'}
									</Box>
									<Box minWidth={80}>
										<ThumbUpAltIcon className={classes.icon} fontSize={'small'} /> {'1,000'}
									</Box>
									<Box minWidth={80}>
										<VisibilityIcon className={classes.icon} fontSize={'small'} /> {'1,000'}
									</Box>
								</Box>
							</Grid>
						</Grid>
						<Grid container alignItems={'center'}>
							<Grid className={classes.gridItemBoardInfo} item xs={12} md={7}>
								<Link href={'/board/[id]/[view]'} as={'/board/ib_new1/1'}>
									<a>
										<Box display={'flex'} alignItems={'center'} p={1.5} pl={0}>
											<Typography noWrap variant={'subtitle2'}>
												{'안녕하세요. 게시글 작성 테스트입니다.'}
											</Typography>
											<Typography variant={'subtitle2'}>
												<Box pl={1}><ImageIcon className={classes.icon} fontSize={'small'} color={'primary'} /></Box>
											</Typography>
											<Typography variant={'subtitle2'}>
												<Box className={classes.commentCountBox}>{'[12]'}</Box>
											</Typography>
										</Box>
									</a>
								</Link>
							</Grid>
							<Grid className={classes.gridItemWriterInfo} item xs={12} md={5}>
								<Box display={'flex'} p={1.5} pl={0} pr={0}>
									<Box minWidth={80}>
										<Typography noWrap variant={'subtitle2'}>
											{'닉네임sadsdsdaasd'}
										</Typography>
									</Box>
									<Box minWidth={100}>
										{'2020.05.12'}
									</Box>
									<Box minWidth={80}>
										<ThumbUpAltIcon className={classes.icon} fontSize={'small'} /> {'1,000'}
									</Box>
									<Box minWidth={80}>
										<VisibilityIcon className={classes.icon} fontSize={'small'} /> {'1,000'}
									</Box>
								</Box>
							</Grid>
						</Grid>
						<Pagination className={classes.pagination} count={5} color={'primary'} shape={'rounded'} />
					</Grid>
					<Grid item xs={12} md={3}>
						<Box border={1}>
							{'AD'}
						</Box>
					</Grid>
				</Grid>
			</Grow>
		</Container>
	);
}

export default memo(BoardList);
