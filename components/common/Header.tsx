import React, { useState, useCallback, memo } from 'react';
import { useRouter } from 'next/router';

// Material UI
import {
	makeStyles, createStyles, Theme
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Logo Image
import Logo from '../../public/logo.png';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		headerPaper: {
			borderLeft: 'none',
			borderRight: 'none'
		},
		logoBox: {
			padding: theme.spacing(3, 0)
		},
		logo: {
			verticalAlign: 'middle'
		},
		tabsIndicator: {
			height: 5
		},
		tab: {
			minWidth: 72
		},
		indicator: {
			'& .MuiTabs-indicator': {
				height: 5
			}
		}
	})
);

function Header() {
	const classes = useStyles();
	const router = useRouter();
	const [activatedTab, setActivatedTab] = useState<string>(window.location.pathname);

	const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
		const isIndexRoute: boolean = newValue === '/' && true;

		if (isIndexRoute) {
			router.push({
				pathname: '/'
			}).then(() => setActivatedTab(newValue));
		} else {
			const id = newValue.split('/')[2];

			router.push({
				pathname: '/board/[id]',
				query: {
					id
				}
			}, newValue).then(() => setActivatedTab(newValue));
		}
	};

	return (
		<>
			<Container>
				<Box className={classes.logoBox}>
					<img className={classes.logo} src={Logo} alt={'Logo'} />
				</Box>
			</Container>
			<Box>
				<Paper className={classes.headerPaper} variant={'outlined'} square>
					<Container>
						<Tabs
							indicatorColor={'primary'}
							textColor={'primary'}
							value={activatedTab}
							onChange={handleTabChange}
							className={classes.indicator}
						>
							<Tab label={'홈'} value={'/'} />
							<Tab label={'일간 개념글'} value={'/board/daily_popular'} />
							<Tab label={'인터넷방송'} value={'/board/ib_new1'} />
							<Tab label={'스트리머'} value={'/board/stream'} />
							<Tab label={'해외축구'} value={'/board/football_new6'} />
							<Tab label={'이슈'} value={'/board/issuezoom'} />
							<Tab label={'수능'} value={'/board/exam_new'} />
							<Tab label={'헬스'} value={'/board/extra'} />
							<Tab label={'국내야구'} value={'/board/baseball_new8'} />
						</Tabs>
					</Container>
				</Paper>
			</Box>
		</>
	);
}

export default memo(Header);
