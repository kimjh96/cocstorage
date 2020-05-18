import React, { useEffect } from 'react';
import { NextPageContext } from 'next';

// Modules
import { fetchBoards } from '../../../src/modules/board';

// Components
import BackgroundSearch from '../../../components/board/BackgroundSearch';
import BoardList from '../../../components/board/BoardList';

function Board({ isServer, store, query }: NextPageContext) {
	// useEffect(() => {
	// 	if (!isServer) {
	// 		store.dispatch(fetchBoards({ categoryId: query.id, page: 1 }));
	// 	}
	// }, [isServer, store, query]);

	return (
		<>
			<BackgroundSearch />
			<BoardList />
		</>
	);
}

Board.getInitialProps = ({ isServer, store, query }: NextPageContext) => {
	store.dispatch(fetchBoards({ categoryId: query.id, page: 1 }));

	return {
		isServer,
		store,
		query
	};
};

export default Board;
