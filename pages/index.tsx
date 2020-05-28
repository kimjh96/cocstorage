import React from 'react';
import { NextPageContext } from 'next';

// Modules
import { fetchMainContents } from '../src/modules/home';

// Components
import DailyPopularPost from '../components/index/DailyPopularBoard';
import NewPost from '../components/index/NewBoard';

function Index() {
	return (
		<>
			<DailyPopularPost />
			<NewPost />
		</>
	);
}

Index.getInitialProps = ({ store }: NextPageContext) => {
	store.dispatch(fetchMainContents());

	return {
		store
	};
};

export default Index;
