import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	wrapper: {
		padding: '5rem  0.75rem',
		maxWidth: '1230px',
		marginLeft: 'auto',
		marginRight: 'auto',
		boxSizing: 'boreder-box',
		[theme.breakpoints.between(1200, 1355)]: {
			maxWidth: '1140px',
		},
		[theme.breakpoints.between(992, 1199)]: {
			maxWidth: '960px',
		},
		[theme.breakpoints.between(901, 991)]: {
			maxWidth: '870px',
		},
		[theme.breakpoints.between(768, 900)]: {
			maxWidth: '720px',
		},
		[theme.breakpoints.between(576, 767)]: {
			maxWidth: '540px',
		},
		[theme.breakpoints.down('lg')]: {
			paddingTop: '4rem',
			paddingBottom: '4rem',
		},
		[theme.breakpoints.down('md')]: {
			paddingTop: '3.5rem',
			paddingBottom: '3.5rem',
		},
		[theme.breakpoints.down('sm')]: {
			paddingTop: '3rem',
			paddingBottom: '3rem',
		},
	},
}));

const Container = ({ children, className = '', ...props }) => {
	const classes = useStyles();

	return (
		<div className={[classes.wrapper, className].join(' ')} {...props}>
			{children}
		</div>
	);
};

export default Container;
