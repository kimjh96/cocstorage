import React from 'react';
import {
	createStyles, fade, makeStyles, Theme, useTheme
} from '@material-ui/core/styles';
import { NextPageContext } from 'next';
import Head from 'next/head';

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

// Modules
import { fetchBoards } from '../../../src/modules/board';

// Components
import BackgroundSearch from '../../../components/board/BackgroundSearch';
import BoardList from '../../../components/board/BoardList';
import GoogleAD from '../../../components/common/GoogleAD';

// Snippets
import { getCategoryNameByCategoryId } from '../../../src/snippet/board';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			backgroundColor: 'white'
		},
		box: {
			margin: theme.spacing(1, 0, 0, 1),
			border: `1px solid ${theme.palette.grey.A100}`
		}
	})
);

function Board({ query }: NextPageContext) {
	const classes = useStyles();

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
				<meta property={'og:image'} content={''} />
				<meta property={'og:url'} content={`https://www.cocstorage.com/board/${query.id}`} />
				<meta property={'og:site_name'} content={`${getCategoryNameByCategoryId(query.id)} : 개념글 저장소`} />
				<meta property={'og:locale'} content={'ko_KR'} />
				<meta property={'twitter:title'} content={`${getCategoryNameByCategoryId(query.id)} : 개념글 저장소`} />
				<meta property={'twitter:description'} content={`${getCategoryNameByCategoryId(query.id)} 인기 게시글들을 한 눈에 확인해보세요!`} />
				<meta property={'twitter:image'} content={''} />
				<meta property={'twitter:url'} content={`https://www.cocstorage.com/board/${query.id}`} />
				<meta property={'twitter:card'} content={'summary'} />
				<meta name={'theme-color'} content={'#2F436E'} />
				<meta name={'apple-mobile-web-app-title'} content={`${getCategoryNameByCategoryId(query.id)} : 개념글 저장소`} />
				<title>{`${getCategoryNameByCategoryId(query.id)} : 개념글 저장소`}</title>
				<link rel={'shortcut icon'} href={''} />
				<link rel={'apple-touch-icon'} href={''} />
				<link rel={'canonical'} href={''} />
				<link rel={'manifest'} href={''} />
			</Head>
			<BackgroundSearch />
			<Container className={classes.root}>
				<Grid container>
					<Grid item xs={12} md={9}>
						<BoardList />
					</Grid>
					<Grid item xs={12} md={3}>
						<Box className={classes.box}>
							<GoogleAD />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

Board.getInitialProps = ({ store, query }: NextPageContext) => {
	store.dispatch(fetchBoards({ categoryId: query.id, page: 1 }));

	return {
		query
	};
};

export default Board;
