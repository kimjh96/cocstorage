import React from 'react';
import { NextApiRequest } from 'next';

// Components
import DailyPopularPost from '../components/index/DailyPopularPost';
import NewPost from '../components/index/NewPost';

function Index() {
	return (
		<>
			<DailyPopularPost />
			<NewPost />
		</>
	);
}

Index.getInitialProps = (req: NextApiRequest) => {
	const isSSR = req ? 'SSR' : 'NoSSR';
	console.log(isSSR);

	return {
		isSSR
	};
};

export default Index;
