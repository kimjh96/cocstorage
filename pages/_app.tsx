import React from 'react';
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

// Components
import Layout from '../src/components/common/Layout';

function App({ Component, pageProps, store }: AppProps | any) {
	return (
		<Provider store={store}>
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
