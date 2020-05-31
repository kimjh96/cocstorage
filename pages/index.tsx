import React from 'react';
import { NextPageContext } from 'next';

// Modules
import { fetchMainContents } from '../src/modules/home';

// Components
import DailyPopularBoard from '../components/index/DailyPopularBoard';
import NewBoard from '../components/index/NewBoard';

function Index() {
	return (
		<>
			<DailyPopularBoard />
			<NewBoard />
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
