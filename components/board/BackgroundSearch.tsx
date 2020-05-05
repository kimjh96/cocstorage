import React, { useState, memo } from 'react';
import {
	createStyles, fade, makeStyles, Theme
} from '@material-ui/core/styles';

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CastIcon from '@material-ui/icons/Cast';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

// Material UI Colors
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			background: 'linear-gradient(to right, #E0C3FC, #8EC5FC)'
		},
		container: {
			display: 'flex',
			height: '100%',
			flexDirection: 'column',
			justifyContent: 'flex-end'
		},
		typography: {
			display: 'flex',
			alignItems: 'center',
			color: 'white',
			fontWeight: 700
		},
		icon: {
			verticalAlign: 'middle'
		},
		gridItem: {
			padding: theme.spacing(3, 0)
		},
		gridBox: {
			display: 'flex',
			justifyContent: 'flex-end'
		},
		search: {
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			'&:hover': {
				backgroundColor: fade(theme.palette.common.white, 0.25)
			},
			marginLeft: theme.spacing(1),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: 'auto'
			},
			color: 'white'
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: '100%',
			position: 'absolute',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: 'white'
		},
		searchButton: {
			backgroundColor: 'rgba(255, 255, 255, 0.15)',
			color: 'white'
		},
		inputRoot: {
			color: 'inherit'
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch'
				}
			}
		},
		dialogContainer: {
			display: 'flex',
			minWidth: 120
		},
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120
		}
	})
);

function BackgroundSearch() {
	const classes = useStyles();
	const [dialogState, setDialogState] = useState<boolean>(false);

	const handleDialog = () => {
		setDialogState(!dialogState);
	};

	return (
		<>
			<Box className={classes.root} height={200}>
				<Container className={classes.container}>
					<Grid container justify={'space-between'}>
						<Grid className={classes.gridItem} item xs={6}>
							<Typography className={classes.typography} variant={'h5'} component={'h5'}>
								<CastIcon fontSize={'large'} />
								<Box component={'span'} ml={1}>{'인터넷방송'}</Box>
							</Typography>
						</Grid>
						<Grid className={classes.gridItem} item xs={6}>
							<Box className={classes.gridBox}>
								<Box>
									<Button className={classes.searchButton} color={'inherit'} onClick={handleDialog}>{'전체'}</Button>
								</Box>
								<Box className={classes.search}>
									<Box className={classes.searchIcon}>
										<SearchIcon />
									</Box>
									<InputBase
										placeholder={'검색'}
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput
										}}
										inputProps={{ 'aria-label': 'search' }}
									/>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
				<Dialog disableBackdropClick disableEscapeKeyDown open={dialogState} onClose={handleDialog}>
					<DialogTitle>{'검색 조건'}</DialogTitle>
					<DialogContent>
						<form className={classes.dialogContainer}>
							<FormControl className={classes.formControl}>
								<Select
									labelId={'demo-dialog-select-label'}
									id={'demo-dialog-select'}
									value={10}
									onChange={() => console.log('Change')}
									input={<Input />}
								>
									<MenuItem value={10}>{'전체'}</MenuItem>
									<MenuItem value={25}>{'제목'}</MenuItem>
									<MenuItem value={35}>{'닉네임'}</MenuItem>
									<MenuItem value={45}>{'내용'}</MenuItem>
								</Select>
							</FormControl>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleDialog} color={'primary'}>
							{'취소'}
						</Button>
						<Button onClick={handleDialog} color={'primary'}>
							{'확인'}
						</Button>
					</DialogActions>
				</Dialog>
			</Box>
		</>
	);
}

export default memo(BackgroundSearch);
