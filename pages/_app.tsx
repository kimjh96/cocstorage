import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

// Global SCSS
import '../styles/index.scss';
import 'swiper/swiper.scss';
import '../styles/common/swiper.scss';

// Global Font
import 'typeface-roboto';

import Layout from '../components/common/Layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>{'Development'}</title>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}
