import React from 'react';
import { useSelector } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { NextPageContext } from 'next';
import Head from 'next/head';

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

// Modules
import { fetchBoardDetail } from '../../../src/modules/boardDetail';

// Components
import BoardDetail from '../../../components/boardDetail/BoardDetail';
import Comment from '../../../components/boardDetail/Comment';
import { RootState } from '../../../src/modules';

// Snippets
import { getCategoryNameByCategoryId } from '../../../src/snippet/board';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			[theme.breakpoints.down('md')]: {
				padding: 0
			}
		},
		adBox: {
			border: '1px solid',
			margin: theme.spacing(1, 0, 0, 1),
			[theme.breakpoints.down('md')]: {
				margin: 0
			}
		}
	})
);

function getMetaTagTitle(data: any, id: any) {
	return data ? `${data.subject} : ${getCategoryNameByCategoryId(id)} 저장소` : `${getCategoryNameByCategoryId(id)} 저장소`;
}

function Detail({ query }: NextPageContext) {
	const classes = useStyles();
	const { board: { data } } = useSelector((state: RootState) => state.boardDetail);

	return (
		<>
			<Head>
				<meta charSet={'utf-8'} />
				<meta httpEquiv={'content-language'} content={'ko'} />
				<meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
				<meta name={'author'} content={`${data.nickname}`} />
				<meta name={'title'} content={getMetaTagTitle(data, query.id)} />
				<meta name={'description'} content={`${data.description}`} />
				<meta property={'og:title'} content={getMetaTagTitle(data, query.id)} />
				<meta property={'og:description'} content={`${data.description}`} />
				<meta property={'og:type'} content={'website'} />
				<meta property={'og:image'} content={(data && data.image) ? data.image : ''} />
				<meta property={'og:url'} content={`https://www.cocstorage.com/board/${query.id}/${query.detail}`} />
				<meta property={'og:site_name'} content={getMetaTagTitle(data, query.id)} />
				<meta property={'og:locale'} content={'ko_KR'} />
				<meta property={'twitter:title'} content={getMetaTagTitle(data, query.id)} />
				<meta property={'twitter:description'} content={`${data.description}`} />
				<meta property={'twitter:image'} content={(data && data.image) ? data.image : ''} />
				<meta property={'twitter:url'} content={`https://www.cocstorage.com/board/${query.id}/${query.detail}`} />
				<meta property={'twitter:card'} content={'summary'} />
				<meta name={'theme-color'} content={'#2F436E'} />
				<meta name={'apple-mobile-web-app-title'} content={getMetaTagTitle(data, query.id)} />
				<title>{getMetaTagTitle(data, query.id)}</title>
				<link rel={'shortcut icon'} href={''} />
				<link rel={'apple-touch-icon'} href={''} />
				<link rel={'canonical'} href={''} />
				<link rel={'manifest'} href={''} />
			</Head>
			<Container className={classes.root}>
				<Grid container>
					<Grid item xs={12} md={9}>
						<BoardDetail />
						<Comment />
					</Grid>
					<Grid item xs={12} md={3}>
						<Box position={'relative'}>
							<Box width={'100%'} maxWidth={308} position={'fixed'}>
								<Box className={classes.adBox}>
									{'AD'}
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

Detail.getInitialProps = ({ store, query }: NextPageContext) => {
	const payload = {
		id: Number(query.detail),
		categoryId: query.id
	};

	store.dispatch(fetchBoardDetail(payload));

	return {
		query
	};
};

export default Detail;
