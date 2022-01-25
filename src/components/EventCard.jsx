import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		border: (prop) => `2px solid ${theme.palette[prop.varient].main}`,
		height: '100%',
		background: 'white',
		display: 'flex',
		flexDirection: 'column',
		'& .footer': {
			color: (prop) => theme.palette[prop.varient].dark,
		},
		'& .card-header': {
			background: (prop) => theme.palette[prop.varient].main,
			color: (prop) => (theme.palette[prop.varient].cardText ? theme.palette[prop.varient].cardText : theme.palette[prop.varient].contrastText),
		},
		'& .card-body': {
			color: '#333333',
		},
	},
}));
const useHeaderStyles = makeStyles(() => ({
	header: {
		display: 'flex',
		padding: '11px',
		'& >div': {
			display: 'flex',
			alignItems: 'center',
			paddingLeft: '0.5rem',
		},
		'& *': {
			fontWeight: 'bold !important',
			fontFamily: '"Gosha Sans" !important',
		},
	},
}));
const useFooterStyles = makeStyles(() => ({
	footer: {
		marginTop: 'auto',
		padding: '13px 14px 16px 14px',
		display: 'flex',
		justifyContent: 'space-between',
		'& *': {
			textDecoration: 'underline',
			fontWeight: 'bold',
			fontFamily: 'Gosha Sans !important',
			fontSize: '16px',
			lineHeight: '124%',
		},
	},
}));

const CardHeader = ({ children, className = '', ...props }) => {
	const classes = useHeaderStyles();

	return (
		<div className={[classes.header, className, 'card-header'].join(' ')} {...props}>
			{children}
		</div>
	);
};
const CardBody = ({ children, ...props }) => {
	return (
		<div style={{ padding: '9px 14px', background: 'inherit' }} {...props} className='card-body'>
			{children}
		</div>
	);
};

const CardFooter = ({ children, ...props }) => {
	const classes = useFooterStyles();

	return (
		<div className={[classes.footer, 'footer'].join(' ')} {...props}>
			{children}
		</div>
	);
};

const EventCard = ({ varient, children }) => {
	const classes = useStyles({ varient });

	return <div className={classes['root']}>{children}</div>;
};

EventCard.CardHeader = CardHeader;
EventCard.CardBody = CardBody;
EventCard.CardFooter = CardFooter;

export default EventCard;
