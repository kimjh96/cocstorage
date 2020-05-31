import React, { useEffect, useRef, memo } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// Material UI
import Box from '@material-ui/core/Box';
import RootRef from '@material-ui/core/RootRef';

// Svgs
import AdWords from '../../styles/svgs/adwords.svg';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			textAlign: 'center',
			'& img': {
				maxWidth: 30
			}
		}
	})
);

type GoogleAdSenseProps = {
	html?: string;
}

function setAdHTML(element: HTMLElement | null, content: string | null) {
	if (element && content) {
		element.innerHTML = content;
	}
}

function GoogleAdSense({ html }: GoogleAdSenseProps) {
	const classes = useStyles();
	const adRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (html) {
			setAdHTML(adRef.current, html);
			((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
		}
	}, [adRef, html]);

	return (
		<RootRef rootRef={adRef}>
			<Box className={classes.root}>
				<img src={AdWords} alt={'Advertisement'} />
			</Box>
		</RootRef>
	);
}

export default memo(GoogleAdSense);
