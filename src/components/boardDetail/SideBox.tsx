import React, { memo } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// Material UI
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

// Material UI Icons
import EmailIcon from '@material-ui/icons/Email';
import LinkIcon from '@material-ui/icons/Link';

// Components
import GoogleAdSense from '../common/GoogleAdSense';

// Custom Hooks
import useBoardDetail from '../../hooks/useBoardDetail';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		box: {
			margin: theme.spacing(1, 0, 0, 1),
			border: `1px solid ${theme.palette.grey['50']}`,
			backgroundColor: 'white',
			[theme.breakpoints.down('md')]: {
				margin: 0
			}
		},
		adBox: {
			margin: theme.spacing(1, 0, 1, 1),
			[theme.breakpoints.down('md')]: {
				margin: 0
			}
		},
		link: {
			display: 'flex',
			alignItems: 'center',
			width: '100%'
		}
	})
);

function getOriginalUrlByOriginCategoryId(dataNo: number | null, originalCategoryId: string) {
	return `https://gall.dcinside.com/board/view/?id=${originalCategoryId}&no=${dataNo}&exception_mode=recommend&page=1`;
}

function SideBox() {
	const classes = useStyles();
	const {
		board: { data }
	} = useBoardDetail();

	return (
		<Box position={'relative'}>
			<Box width={'100%'} maxWidth={308} position={'fixed'}>
				<Box className={classes.box}>
					<List>
						{data.original_category_id && (
							<ListItem button>
								<Link
									href={getOriginalUrlByOriginCategoryId(data.data_no, data.original_category_id)}
									target={'_blank'}
									className={classes.link}
									underline={'none'}
									color={'inherit'}
								>
									<ListItemAvatar>
										<Avatar color={'primary'}>
											<LinkIcon />
										</Avatar>
									</ListItemAvatar>
									<ListItemText primary={'원본 바로가기'} secondary={'본 게시글은 출처가 있습니다.'} />
								</Link>
							</ListItem>
						)}
						<ListItem>
							<ListItemAvatar>
								<Avatar color={'primary'}>
									<EmailIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary={'문의'} secondary={'cocstoragehelps@gmail.com'} />
						</ListItem>
					</List>
				</Box>
				<Box className={classes.adBox}>
					<GoogleAdSense
						html={
							'<ins class="adsbygoogle"'
							+ 'style="display:block"'
							+ 'data-ad-client="ca-pub-5809905264951057"'
							+ 'data-ad-slot="7258431621"'
							+ 'data-ad-format="auto"'
							+ 'data-full-width-responsive="true"></ins>'
						}
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default memo(SideBox);
