import React from 'react';
import Link from 'next/link';
import { Box } from '@material-ui/core';

function Template() {
	return (
		<>
			<div>{'Template'}</div>
			<Link href={'/board/[category]'} as={'/board/ib_new1'}>
				<a>
					<Box>
						{'test'}
					</Box>
				</a>
			</Link>
		</>
	);
}

export default Template;
