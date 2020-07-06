import React, { useEffect, memo } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

// Material UI
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() =>
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
	html: string;
};

function GoogleAdSense({ html }: GoogleAdSenseProps) {
	const classes = useStyles();

	useEffect(() => {
		if (html) {
			((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
		}
	}, [html]);

	return <Box className={classes.root} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default memo(GoogleAdSense);
