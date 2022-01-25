// mui
import { makeStyles } from '@mui/styles';

const homePageStyles = makeStyles((theme) => ({
	heroTitle: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '48px !important',
		},
	},
	heroImgSection: {
		position: 'absolute',
		top: '2rem',
		right: '0',
		[theme.breakpoints.down('md')]: {
			display: 'flex',
			position: 'relative',
			justifyContent: 'center',
			right: 'initial',
			top: 'initial',
		},
	},
	bgBlue: {
		backgroundColor: theme.palette.background.blue,
	},
	bgBlueLight: {
		backgroundColor: '#EEF7FF',
	},
	bgDarkLight: {
		background: '#333333',
	},
	bgPinkLight: {
		background: '#FFF0FF',
	},
	bgDark: {
		backgroundColor: theme.palette.dark.main,
	},
	bgGreenLight: {
		backgroundColor: theme.palette.background.greenLight,
	},
	mb2: {
		marginBottom: '2rem !important',
	},
	mb1: {
		marginBottom: '1.5rem',
	},
	mdseparator: {
		[theme.breakpoints.up('md')]: {
			borderLeftWidth: '1px',
			borderLeftColor: '#333333',
			borderLeftStyle: 'solid',
		},
	},

	cardContent: {
		background: theme.palette.background.dark,
		padding: '9px 11px 10px !important',
		height: '100%',
	},

	box: {
		width: '100%',
		height: '100%',
		background: 'white',
		padding: '20px 53px',
		display: 'flex',
		flexDirection: 'column',
	},

	storyCard: {
		boxShadow: 'none !important',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		'& >div': {
			display: 'flex',
			flexDirection: 'column',
			flex: 1,
		},
		[theme.breakpoints.up('md')]: {
			'& >div >div:nth-child(2)': {
				minHeight: '90px',
			},
			maxWidth: '165px !important',
		},
	},
	storyCardImg: {
		[theme.breakpoints.up('md')]: {
			width: '165px !important',
			height: '235px !important',
		},
		[theme.breakpoints.down('md')]: {
			width: '170px !important',
			height: '240px !important',
		},
	},

	linkContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		transition: 'transform 250ms',
		'&:hover': {
			transform: 'translateX(10px)',
		},
		'& span': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: '4px',
		},
	},
	goshaFont: {
		'& *': {
			fontFamily: '"Gosha Sans" !important',
		},
	},
	mdp: {
		[theme.breakpoints.down('md')]: {
			paddingTop: '40px !important',
		},
	},
}));

export default homePageStyles;
