import Link from 'next/link';

import { useState, memo } from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import Container from './Container';

import kohortlogo from '../assets/images/kohortlogo.svg';

// make styles
const useStyles = makeStyles((theme) => ({
	appbar: {
		backgroundColor: 'white !important',
		color: 'black !important',
		boxShadow: 'none !important',
	},
	toolbar: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		padding: '0 0.75rem !important',
		boxSizing: 'border-box',
		[theme.breakpoints.down('md')]: {
			padding: '0 0.75rem !important',
		},
	},
	listItem: {
		padding: '1rem',
	},
	menuIcon: {
		marginRight: '1rem !important',
		display: 'none !important',
		[theme.breakpoints.down('md')]: {
			display: 'inline-flex !important',
		},
	},
	menuList: {
		display: 'flex !important',
		[theme.breakpoints.down('md')]: {
			display: 'none !important',
			'&.show': {
				top: '100%',
				width: '100%',
				position: 'absolute',
				background: theme.palette.background.paper,
				boxShadow: theme.shadows[1],
				display: 'flex !important',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 1000,
			},
			'& p': {
				width: '100%',
				textAlign: 'center',
			},
		},
	},
}));

const Header = () => {
	// styles classes
	const classes = useStyles();
	// app bar open or not in obile mode
	const [open, setopen] = useState(false);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' className={classes.appbar}>
				<Container className={classes.toolbar}>
					<Toolbar style={{ padding: 0 }}>
						<IconButton size='large' edge='start' color='inherit' aria-label='menu' className={classes.menuIcon} onClick={() => setopen((pre) => !pre)}>
							<MenuRoundedIcon />
						</IconButton>
						<div style={{ flexGrow: 1 }}>
							<Link href='/'>
								<img src={kohortlogo} alt='logo' />
							</Link>
						</div>
						<div className={[classes.menuList, open ? 'show' : ''].join(' ')}>
							<Typography variant='body2' className={classes.listItem}>
								<Link href='/'>About us</Link>
							</Typography>
							<Typography variant='body2' className={classes.listItem}>
								<Link href='/'>Blog</Link>
							</Typography>
							<Typography variant='body2' className={classes.listItem}>
								<Link href='/'>Services</Link>
							</Typography>
						</div>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default memo(Header);
