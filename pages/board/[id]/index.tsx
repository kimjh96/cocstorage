import React, { useState, useMemo, useEffect } from 'react';
import {
	createStyles,
	makeStyles,
	Theme,
	useTheme
} from '@material-ui/core/styles';
import { NextPageContext } from 'next';
import Head from 'next/head';

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fade from '@material-ui/core/Fade';

// Modules
import { fetchBoards, handleBoardsSearchState } from '../../../src/modules/board';

// Components
import BackgroundSearch from '../../../src/components/board/BackgroundSearch';
import BoardList from '../../../src/components/board/BoardList';
import GoogleAdSense from '../../../src/components/common/GoogleAdSense';

// Custom Hooks
import useBoard from '../../../src/hooks/useBoard';

// Snippets
import { getCategoryNameByCategoryId } from '../../../src/snippet/board';

// Svgs
import AdWords from '../../../styles/svgs/adwords.svg';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			backgroundColor: 'white'
		},
		box: {
			margin: theme.spacing(1, 0, 1, 1)
		},
		adPendingBox: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: 600,
			margin: theme.spacing(1, 0, 0, 1),
			border: `1px solid ${theme.palette.grey['50']}`,
			'& > img': {
				maxWidth: 50
			}
		}
	})
);

function Board({ query }: NextPageContext) {
	const classes = useStyles();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const { pending } = useBoard();

	return (
		<>
			<Head>
				<meta charSet={'utf-8'} />
				<meta httpEquiv={'content-language'} content={'ko'} />
				<meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
				<meta name={'author'} content={'개념글 저장소'} />
				<meta name={'title'} content={`${getCategoryNameByCategoryId(query.id)} : 개념글 저장소`} />
				<meta name={'description'} content={`${getCategoryNameByCategoryId(query.id)} 인기 게시글들을 한 눈에 확인해보세요!`} />
				<meta property={'og:title'} content={`${getCategoryNameByCategoryId(query.id)} : 개념글 저장소`} />
				<meta property={'og:description'} content={`${getCategoryNameByCategoryId(query.id)} 인기 게시글들을 한 눈에 확인해보세요!`} />
				<meta property={'og:type'} content={'website'} />
				<meta property={'og:image'} content={'/logo.png'} />
				<meta property={'og:url'} content={`https://www.cocstorage.com/board/${query.id}`} />
				<meta property={'og:site_name'} content={`${getCategoryNameByCategoryId(query.id)} : 개념글 저장소`} />
				<meta property={'og:locale'} content={'ko_KR'} />
				<meta property={'twitter:title'} content={`${getCategoryNameByCategoryId(query.id)} : 개념글 저장소`} />
				<meta property={'twitter:description'} content={`${getCategoryNameByCategoryId(query.id)} 인기 게시글들을 한 눈에 확인해보세요!`} />
				<meta property={'twitter:image'} content={'https://www.cocstorage.com/logo.png'} />
				<meta property={'twitter:url'} content={`https://www.cocstorage.com/board/${query.id}`} />
				<meta property={'twitter:card'} content={'summary'} />
				<meta name={'apple-mobile-web-app-title'} content={`${getCategoryNameByCategoryId(query.id)} : 개념글 저장소`} />
				<title>{`${getCategoryNameByCategoryId(query.id)} : 개념글 저장소`}</title>
				<link rel={'canonical'} href={`https://www.cocstorage.com/board/${query.id}`} />
				<link rel={'shortcut icon'} href={'/favicon.ico'} />
				<link rel={'apple-touch-icon'} href={'/logo_prev.png'} />
				<link rel={'manifest'} href={'/manifest.json'} />
				<script async src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'} />
			</Head>
			<BackgroundSearch />
			<Container className={classes.root} disableGutters={isMobile} maxWidth={isMobile ? 'md' : 'lg'}>
				<Grid container>
					<Grid item xs={12} lg={9}>
						<BoardList />
					</Grid>
					<Grid item xs={12} lg={3}>
						<Hidden mdDown>
							<Box className={classes.box}>
								{!pending && (
									<Fade in>
										<GoogleAdSense
											html={'<ins class="adsbygoogle"'
											+ 'style="display:block"'
											+ 'data-ad-client="ca-pub-5809905264951057"'
											+ 'data-ad-slot="3880285784"'
											+ 'data-ad-format="auto"'
											+ 'data-full-width-responsive="true">'
											+ '</ins>'}
										/>
									</Fade>
								)}
								{pending && (
									<Fade in>
										<Box className={classes.adPendingBox}>
											<img src={AdWords} alt={'Advertisement Pending Img'} />
										</Box>
									</Fade>
								)}
							</Box>
						</Hidden>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

Board.getInitialProps = async ({ store, query }: NextPageContext) => {
	let { board: { searchState } } = store.getState();
	let page = 1;

	if (typeof window !== 'undefined') {
		page = Number(window.localStorage.getItem('coc-page') || 1);

		const searchStateHistory = window.localStorage.getItem('coc-searchState');
		if (searchStateHistory) {
			searchState = JSON.parse(searchStateHistory);
			store.dispatch(handleBoardsSearchState(searchState));
		}
	}

	store.dispatch(fetchBoards({
		categoryId: query.id,
		searchState,
		page
	}));

	return {
		query
	};
};

export default Board;
