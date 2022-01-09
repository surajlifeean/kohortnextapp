import Image from 'next/image';
import Link from 'next/link';

import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

// import assets
import Svg1 from '../assets/images/hero.svg';
import illustration3 from '/assets/images/illustration-3.svg';
import illustration4 from '../assets/images/illustration-4.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

// import data list  test only
import { expertList, storyList } from '../components/fakeDataProvider';

const useStyles = makeStyles((theme) => ({
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
		padding: '8px 11px 10px !important',
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
		'& >div >div:last-child': {
			flex: 1,
			display: 'flex',
			alignItems: 'end',
		},
		[theme.breakpoints.up('md')]: {
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

const Homepage = () => {
	const classes = useStyles();
	console.log(classes);

	return (
		<>
			<Header />
			<section style={{ position: 'relative', minHeight: '34rem' }}>
				<Container style={{ position: 'relative' }}>
					<Grid container>
						<Grid item xl={6} lg={7} md={8} sm={11} xs={12} sx={{ paddingTop: '2rem' }} zIndex={10}>
							<Typography className={classes.heroTitle} variant='h3' component='div' color='primary' fontWeight='bold' gutterBottom>
								Start your journey
							</Typography>
							<Typography variant='h6' component='div'>
								Become part of global community for upskilling and knowledge sharing
							</Typography>
						</Grid>
					</Grid>
					<div className={classes.heroImgSection}>
						<img src={Svg1} alt='hero-bg' style={{ maxWidth: '100%' }} />
					</div>
				</Container>
			</section>
			<section className={classes.bgDarkLight}>
				<Container>
					<Typography variant='h4' component='div' color='white' className={classes.mb2} gutterBottom>
						How we at Kohort can help you achieve
					</Typography>
					<Grid container spacing={2}>
						<Grid item md={4} xs={12}>
							<div className={classes.box}>
								<Typography variant='h6' fontFamily='Gosha Sans' fontWeight='bold' color='#333333' component='div' marginBottom='26px'>
									Higher Education
								</Typography>
								<Typography variant='subtitle1' component='div' color='#333333' fontSize='18px' marginBottom='26px'>
									We know it can be hard to find the best university or college, but we are here to help you!
								</Typography>
								<Button variant='contained' color='darkLight' size='small' component='a' href='/services/higher-education' sx={{ marginTop: 'auto', padding: '7px 10px' }} fullWidth>
									<Typography variant='subtitle1' component='div' fontFamily='Gosha Sans'>
										Explore Topics
									</Typography>
								</Button>
							</div>
						</Grid>
						<Grid item md={4} xs={12}>
							<div className={classes.box}>
								<Typography variant='h6' fontFamily='Gosha Sans' fontWeight='bold' color='#333333' component='div' marginBottom='26px'>
									Career
								</Typography>
								<Typography variant='subtitle1' component='div' color='#333333' fontSize='18px' marginBottom='26px'>
									Discover what to do next with a career and be guided through transitions.
								</Typography>
								<Button variant='contained' color='darkLight' size='small' sx={{ marginTop: 'auto', padding: '7px 10px' }} fullWidth>
									<Link href='/services/career'>
										<Typography variant='subtitle1' component='div' fontFamily='Gosha Sans'>
											Explore Topics
										</Typography>
									</Link>
								</Button>
							</div>
						</Grid>
						<Grid item md={4} xs={12}>
							<div className={classes.box}>
								<Typography variant='h6' fontFamily='Gosha Sans' fontWeight='bold' color='#333333' component='div' marginBottom='26px'>
									Language
								</Typography>
								<Typography variant='subtitle1' component='div' color='#333333' fontSize='18px' marginBottom='26px'>
									Learn the language of your choice and you will unlock a world of opportunities.
								</Typography>
								<Button variant='contained' color='darkLight' size='small' sx={{ marginTop: 'auto', padding: '7px 10px' }} fullWidth>
									<Link href='/services/language'>
										<Typography variant='subtitle1' component='div' fontFamily='Gosha Sans'>
											Explore Topics
										</Typography>
									</Link>
								</Button>
							</div>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={classes.bgBlueLight}>
				<Container>
					<Grid container spacing={4}>
						<Grid container item md={6} xs={12}>
							<Grid item xs={12}>
								<Typography variant='h4' fontSize='36px' color='#333333' textAlign='center' marginBottom='35px'>
									Our Supporters
								</Typography>
							</Grid>
							<Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
								<img src='/image/ciie.png' style={{ maxWidth: '100%' }} alt='CIIE' />
							</Grid>
							<Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<img src='/image/QEKhnvkY.png' style={{ maxWidth: '100%' }} alt='NSRCET' />
							</Grid>
							<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
								<img src='/image/nasscom.png' style={{ maxWidth: '100%' }} alt='NASSCOM' />
							</Grid>
						</Grid>
						<Grid item md={6} xs={12} className={classes.mdseparator}>
							<Typography variant='h4' component='div' fontSize='36px' color='#333333' gutterBottom>
								Subscribe to our newsletter
							</Typography>
							<Grid container>
								<Grid item md={9} xs={12} sx={{ marginBottom: '1rem' }}>
									<Typography variant='subtitle1' component='div' color='#333333' fontSize='20px' gutterBottom>
										Get updates on FREE live events, experts talks, give aways and much more.
									</Typography>
								</Grid>
								<Grid item md={5} xs={10}>
									<Button
										variant='contained'
										color='darkLight'
										size='small'
										component='a'
										href='https://biw67j0f3gs.typeform.com/to/fkZofwRc'
										sx={{ padding: '14px 10px' }}
										fullWidth
									>
										<Typography variant='subtitle1' component='div' fontSize='20px'>
											Subscribe
										</Typography>
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</section>
			<Container>
				<Grid container spacing={2} style={{ marginBottom: '1.5rem' }}>
					<Grid item md={9} sm={12}>
						<Typography variant='h4' component='div' gutterBottom>
							Learn by the World’s best
						</Typography>
						<Typography variant='h6' component='div' sx={{ fontSize: '22px' }}>
							Discover new skills, knowledge, opportunities and make your dream come true
						</Typography>
					</Grid>
					<Grid container item md={3} sm={12} style={{ paddingTop: '25px' }} justifyContent='flex-end'>
						<div>
							<IconButton aria-label='pre' size='small' sx={{ transform: 'rotate(-90deg)', color: 'black' }}>
								<ArrowCircleUpRoundedIcon />
							</IconButton>
						</div>
						<div>
							<IconButton aria-label='next' size='small' sx={{ transform: 'rotate(90deg)', color: 'black' }}>
								<ArrowCircleUpRoundedIcon />
							</IconButton>
						</div>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					{expertList &&
						expertList.map((e) => (
							<Grid item md={3} sm={6} xs={12} key={e.id}>
								<Card sx={{ height: '100%' }}>
									<CardMedia component='img' height='380' image={e.image} alt='green iguana' />
									<CardContent className={classes.cardContent}>
										<Typography variant='body2' component='div' color='white' gutterBottom>
											{e.title}
											<img src={e.flag} style={{ transform: 'translate(4px, 6px)' }} alt='flag' />
										</Typography>
										<Typography variant='subtitle2' color='white'>
											{e.subtitle}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
				</Grid>
			</Container>
			<section className={classes.bgPinkLight}>
				<Container>
					<Grid container spacing={1}>
						<Grid item md={7}>
							<Grid item md={12} className={classes.mb2}>
								<Typography variant='h4' component='div' color='#333333' gutterBottom>
									Connect with like-minded people!
								</Typography>
								<Typography variant='h6' component='div' color='#333333' sx={{ width: '85%' }}>
									Join our meetup to make friends, expand your network, find support and explore your interests!
								</Typography>
							</Grid>
							<Grid item md={4} sm={5} xs={10}>
								<Button variant='contained' color='darkLight' size='large' sx={{ marginTop: '2rem' }} fullWidth>
									<Typography variant='h6' component='div' fontWeight='bold'>
										Get Started
									</Typography>
								</Button>
							</Grid>
						</Grid>
						<Grid item md={5}>
							<img src={illustration3} alt='illustration3' style={{ maxWidth: '100%' }} />
						</Grid>
					</Grid>
				</Container>
			</section>
			<section>
				<Container>
					<Grid container spacing={2} style={{ marginBottom: '1.5rem' }}>
						<Grid item md={8}>
							<Typography variant='h4' component='div' color='text.tertiary'>
								Get inspired to make an impact.
							</Typography>
							<Typography variant='h6' component='div' color='text.dark' gutterBottom>
								See stories from the Kohort community!
							</Typography>
						</Grid>
						<Grid item md={4} sm={12} style={{ paddingTop: '25px' }}>
							<Link href=''>
								<Typography variant='h6' align='right' component='div' fontWeight='bold' fontFamily='Gosha Sans' className={classes.linkContainer}>
									Explore more stories
									<span>
										<ArrowForwardIcon />
									</span>
								</Typography>
							</Link>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						{storyList &&
							storyList.map((e) => (
								<Grid item lg={2} md={2} sm={6} xs={12} key={e.id}>
									<Card className={classes.storyCard}>
										<CardMedia component='img' className={classes.storyCardImg} image={e.image} alt='green iguana' />
										<CardContent sx={{ paddingLeft: 0, paddingRight: 0 }}>
											<Typography variant='h6' component='div' color='text.primary' fontFamily='Gosha Sans' fontWeight='bold'>
												{e.title}
											</Typography>
											<Typography variant='caption' color='text.dark' gutterBottom component='div'>
												{e.subtitle1}
											</Typography>
											<Typography variant='subtitle2' component='div' color='text.secondary'>
												{e.subtitle2}
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							))}
					</Grid>
				</Container>
			</section>
			<section className={classes.bgGreenLight}>
				<Container>
					<Grid container spacing={4}>
						<Grid item md={5}>
							<Image src='/images/illustration-4.svg' width='100%' height='100%' alt='illustration4' style={{ maxWidth: '100%' }} />
						</Grid>
						<Grid item md={7}>
							<Grid container item md={12} className={classes.mb2}>
								<Grid item md={12} xs={12}>
									<Typography variant='h4' component='div' color='text.darkLight' className={classes.mb2} gutterBottom>
										Join the Community
									</Typography>
								</Grid>
								<Grid item lg={9} md={12} sm={10} xs={12}>
									<Typography variant='h6' component='div' color='text.darkLight' lineHeight='120%' sx={{ marginBottom: '24px' }}>
										Meet new people, learn something you did not know before. This is your one-stop shop for global connections! at zero cost.
									</Typography>
								</Grid>
							</Grid>
							<Grid item lg={6} md={6} sm={6} xs={10} className={classes.mb2}>
								<Button variant='contained' color='darkLight' size='large' fullWidth>
									<Typography variant='h6' component='div' fontWeight='bold'>
										Join us on Discord
									</Typography>
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</section>
			<Footer />
		</>
	);
};

export default Homepage;
