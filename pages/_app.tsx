import React from 'react';
import Head from 'next/head';
import { AppContext, AppProps } from 'next/app';

// Redux
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Redux-Saga
import withReduxSaga from 'next-redux-saga';
import createSagaMiddleware from 'redux-saga';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

// RootReducer
import rootReducer from '../src/modules';

// RootSaga
import rootSaga from '../src/sagas';

// Global SCSS
import '../styles/index.scss';
import 'swiper/swiper.scss';
import '../styles/common/swiper.scss';

// Common Components
import Layout from '../components/common/Layout';

function App({ Component, pageProps, store }: AppProps | any) {
	return (
		<Provider store={store}>
			<Head>
				<meta charSet={'utf-8'} />
				<meta httpEquiv={'content-language'} content={'ko'} />
				<meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
				<meta name={'author'} content={'개념글 저장소'} />
				<meta name={'title'} content={'개념글 저장소'} />
				<meta name={'description'} content={'인기와 유머를 겸비한 게시글들을 한 눈에 확인해보세요!'} />
				<meta property={'og:title'} content={'개념글 저장소'} />
				<meta property={'og:description'} content={'인기와 유머를 겸비한 게시글들을 한 눈에 확인해보세요!'} />
				<meta property={'og:type'} content={'website'} />
				<meta property={'og:image'} content={''} />
				<meta property={'og:url'} content={'https://www.cocstorage.com'} />
				<meta property={'og:site_name'} content={'개념글 저장소'} />
				<meta property={'og:locale'} content={'ko_KR'} />
				<meta property={'twitter:title'} content={'개념글 저장소'} />
				<meta property={'twitter:description'} content={'인기와 유머를 겸비한 게시글들을 한 눈에 확인해보세요!'} />
				<meta property={'twitter:image'} content={''} />
				<meta property={'twitter:url'} content={'https://wwww.cocstorage.com'} />
				<meta property={'twitter:card'} content={'summary'} />
				<meta name={'theme-color'} content={'#2F436E'} />
				<meta name={'apple-mobile-web-app-title'} content={'개념글 저장소'} />
				<title>{'개념글 저장소'}</title>
				<link rel={'shortcut icon'} href={''} />
				<link rel={'apple-touch-icon'} href={''} />
				<link rel={'canonical'} href={''} />
				<link rel={'manifest'} href={''} />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</Provider>
	);
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
	const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

	return {
		pageProps
	};
};

const configureStore = (preloadedState: any) => {
	const sagaMiddleware = createSagaMiddleware();

	const enhancer = composeWithDevTools(
		applyMiddleware(sagaMiddleware)
	);
	const store = createStore(rootReducer, preloadedState, enhancer);
	(store as any).sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};

export default withRedux(configureStore)(withReduxSaga(App));
