import React from 'react';
import { NextPageContext } from 'next';
import Head from 'next/head';

// Modules
import { fetchBoards } from '../../../src/modules/board';

// Components
import BackgroundSearch from '../../../components/board/BackgroundSearch';
import BoardList from '../../../components/board/BoardList';
import { getCategoryNameByCategoryId } from '../../../src/snippet/board';

function Board({ query }: NextPageContext) {

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
			<BoardList />
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
