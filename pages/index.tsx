import React, { useEffect } from 'react';
import { NextPageContext } from 'next';

// Actions
import { fetchMainContents } from '../src/modules/home';

// Components
import DailyPopularPost from '../components/index/DailyPopularPost';
import NewPost from '../components/index/NewPost';

function Index({ isServer, store }: NextPageContext) {
	useEffect(() => {
		console.log(isServer);
		if (!isServer) {
			store.dispatch(fetchMainContents());
		}
	}, [isServer, store]);

	return (
		<>
			<DailyPopularPost />
			<NewPost />
		</>
	);
}

Index.getInitialProps = ({ isServer, store }: NextPageContext) => {
	if (isServer) {
		store.dispatch(fetchMainContents());
	}

	return {
		isServer,
		store
	};
};

export default Index;
