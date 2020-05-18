import React from 'react';
import { NextPageContext } from 'next';

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

// Modules
import { fetchBoardDetail } from '../../../src/modules/boardDetail';

// Components
import BoardDetail from '../../../components/board/BoardDetail';
import Comment from '../../../components/board/Comment';

function Detail() {
	return (
		<Container>
			<Grid container>
				<Grid item xs={12} md={9}>
					<BoardDetail />
					<Comment />
				</Grid>
				<Grid item xs={12} md={3}>
					<Box border={1}>
						{'AD'}
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

Detail.getInitialProps = ({ isServer, store, query }: NextPageContext) => {
	store.dispatch(fetchBoardDetail({ id: Number(query.detail), categoryId: query.id }));

	return {
		isServer,
		store,
		query
	};
};

export default Detail;
