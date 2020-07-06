import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Head from 'next/head';

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			background: 'linear-gradient(to right, #E0C3FC, #8EC5FC)',
			[theme.breakpoints.down('md')]: {
				height: 'auto'
			}
		},
		container: {
			display: 'flex',
			height: '100%',
			flexDirection: 'column',
			justifyContent: 'flex-end'
		},
		contentContainer: {
			padding: theme.spacing(1, 0),
			backgroundColor: 'white'
		},
		typography: {
			color: 'white',
			textAlign: 'center',
			fontWeight: 700,
			[theme.breakpoints.down('md')]: {
				fontSize: 22
			}
		},
		icon: {
			verticalAlign: 'middle'
		},
		gridItem: {
			padding: theme.spacing(3, 0)
		},
		gridBox: {
			display: 'flex',
			justifyContent: 'flex-end'
		},
		box: {
			fontWeight: 700,
			color: 'black'
		}
	})
);

function Policy() {
	const classes = useStyles();

	return (
		<>
			<Head>
				<meta charSet={'utf-8'} />
				<meta httpEquiv={'content-language'} content={'ko'} />
				<meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
				<meta name={'author'} content={'개념글 저장소'} />
				<meta name={'title'} content={'공지사항 : 개념글 저장소'} />
				<meta name={'description'} content={'개념글 저장소 공지사항입니다.'} />
				<meta property={'og:title'} content={'공지사항 : 개념글 저장소'} />
				<meta property={'og:description'} content={'개념글 저장소 공지사항입니다.'} />
				<meta property={'og:type'} content={'website'} />
				<meta property={'og:image'} content={'/logo_prev.png'} />
				<meta property={'og:url'} content={'https://www.cocstorage.com/notice'} />
				<meta property={'og:site_name'} content={'개념글 저장소'} />
				<meta property={'og:locale'} content={'ko_KR'} />
				<meta property={'twitter:title'} content={'공지사항 : 개념글 저장소'} />
				<meta property={'twitter:description'} content={'개념글 저장소 공지사항입니다.'} />
				<meta property={'twitter:image'} content={'/logo_prev.png'} />
				<meta property={'twitter:url'} content={'https://wwww.cocstorage.com/notice'} />
				<meta property={'twitter:card'} content={'summary'} />
				<meta name={'theme-color'} content={'#2F436E'} />
				<meta name={'apple-mobile-web-app-title'} content={'공지사항 : 개념글 저장소'} />
				<title>{'공지사항 : 개념글 저장소'}</title>
				<link rel={'shortcut icon'} href={'/favicon.ico'} />
				<link rel={'apple-touch-icon'} href={'/logo_prev.png'} />
				<link rel={'canonical'} href={'https://www.cocstorage.com/policy'} />
				<link rel={'manifest'} href={'/manifest.json'} />
			</Head>
			<Box className={classes.root}>
				<Container className={classes.container}>
					<Grid container justify={'space-between'}>
						<Grid className={classes.gridItem} item xs>
							<Typography className={classes.typography} variant={'h5'} component={'h5'}>
								<Box component={'span'} ml={1}>
									{'공지사항'}
								</Box>
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Container className={classes.contentContainer}>
				<List>
					<ListItem>
						{'안녕하세요.'}
						<br />
						{'개념글 저장소의 관리자입니다.'}
					</ListItem>
					<ListItem>
						{
							'개념글 저장소는 2019년 9월부터 다수의 사이트에서 많은 사람이 웃고 즐길 수 있는 게시글들이 이유를 불문하고 삭제되는 상황을 캐치하여 "삭제되기 아쉬운, 모두가 즐길 수 있는 유머 게시글 보존" 을 취지로 운영하고 있습니다'
						}
					</ListItem>
					<ListItem>
						{
							'따라서, 개인정보 침해, 명예훼손, 모욕 등 개념글 저장소의 운영 취지와 맞지 않으며 누군가에게 피해를 줄 수 있는 게시글들은 수시로 모니터링하여 삭제하고 있으나, 관리/운영을 혼자 도맡다보니 누락되는 상황이 생길 수 있습니다.'
						}
					</ListItem>
					<ListItem>{'이러한 경우 아래의 이메일로 문의주시면 신속하게 처리해드리겠습니다.'}</ListItem>
					<ListItem>
						<Box className={classes.box}>{'cocstoragehelps@gmail.com'}</Box>
					</ListItem>
					<ListItem>
						{
							'더불어 개념글 저장소의 개선점에 대해 의견을 주신다면 이또한 귀 기울여 듣고 적극적으로 반영토록 하겠습니다.'
						}
					</ListItem>
					<ListItem>{'항상 개념글 저장소를 이용해주시는 모든 이용자분들께 진심으로 감사드립니다!'}</ListItem>
				</List>
			</Container>
		</>
	);
}

export default Policy;
