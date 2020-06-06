import React from 'react';
import Document, {
	Html, Head, Main, NextScript, DocumentContext
} from 'next/document';

// Material UI
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../src/theme';

export default class CustomDocument extends Document {
	render() {
		return (
			<Html lang={'ko'}>
				<Head>
					<meta name={'viewport'} content={'minimum-scale=1, initial-scale=1, width=device-width'} />
					<meta name={'theme-color'} content={theme.palette.primary.main} />
				</Head>
				<body style={{ backgroundColor: theme.palette.background.default }}>
					<script async src={'https://www.googletagmanager.com/gtag/js?id=UA-147959622-1'} />
					<script
						dangerouslySetInnerHTML={{
							__html: 'window.dataLayer = window.dataLayer || [];'
								+ 'function gtag(){dataLayer.push(arguments);}'
								+ 'gtag(\'js\', new Date());'
								+ 'gtag(\'config\', \'UA-147959622-1\');'
						}}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

CustomDocument.getInitialProps = async (ctx: DocumentContext) => {
	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
	};
};
