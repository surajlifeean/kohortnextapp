import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

// mui
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

// assets
import svg1 from 'assets/images/hero.svg';
import illustration3 from 'assets/images/illustration-3.svg';
import illustration4 from 'assets/images/illustration-4.svg';
import arrowRight from 'assets/images/arrow-right.svg';
import arrowLeft from 'assets/images/arrow-left.svg';

// custom components
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';

// import data list  test only
import { expertList, storyList } from 'utils/helper/dataProvider';

// styles
import useHomePageStyle from 'styles/homePageStyle';

const Homepage = () => {
	const classes = useHomePageStyle();

	return (
		<>
		<Head>
			<title>Homepage</title>
		</Head>
			<Header />
			<section style={{ position: 'relative', minHeight: '34rem' }}>
				<Container style={{ position: 'relative' }}>
					<Grid container>
						<Grid item xl={6} lg={7} md={8} sm={11} xs={12} sx={{ paddingTop: '2rem' }} zIndex={10}>
							<Typography className={classes.heroTitle} variant='h3' component='div' color='primary' fontWeight='bold' gutterBottom>
								Start your journey
							</Typography>
							<Typography variant='h6' color='#151B24' component='div'>
								Become part of global community for upskilling and knowledge sharing
							</Typography>
						</Grid>
					</Grid>
					<div className={classes.heroImgSection}>
						<Image loading='lazy' width={400} height={500} src={svg1} alt='hero-bg' />
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
									We know it can be hard to find the best university or college, but we&apos;re here to help you!
								</Typography>
								{/* <Button variant='contained' color='darkLight' size='small' component={Link} to='/services/higher-education' sx={{ marginTop: 'auto', padding: '7px 10px' }} fullWidth>
									<Typography variant='subtitle1' component='div' fontFamily='Gosha Sans'>
										Explore Topics
									</Typography>
								</Button> */}
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
								{/* <Button variant='contained' color='darkLight' size='small' component={Link} to='/services/career' sx={{ marginTop: 'auto', padding: '7px 10px' }} fullWidth>
									<Typography variant='subtitle1' component='div' fontFamily='Gosha Sans'>
										Explore Topics
									</Typography>
								</Button> */}
							</div>
						</Grid>
						<Grid item md={4} xs={12}>
							<div className={classes.box}>
								<Typography variant='h6' fontFamily='Gosha Sans' fontWeight='bold' color='#333333' component='div' marginBottom='26px'>
									Language
								</Typography>
								<Typography variant='subtitle1' component='div' color='#333333' fontSize='18px' marginBottom='26px'>
									Learn the language of your choice and you&apos;ll unlock a world of opportunities.
								</Typography>
								{/* <Button variant='contained' color='darkLight' size='small' component={Link} to='/services/language' sx={{ marginTop: 'auto', padding: '7px 10px' }} fullWidth>
									<Typography variant='subtitle1' component='div' fontFamily='Gosha Sans'>
										Explore Topics
									</Typography>
								</Button> */}
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
								<Image loading='lazy' width={163} height={101} src='/image/ciie.png' alt='CIIE' />
							</Grid>
							<Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Image loading='lazy' width={251} height={90} src='/image/QEKhnvkY.png' alt='NSRCET' />
							</Grid>
							<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
								<Image loading='lazy' width={267} height={91} src='/image/nasscom.png' alt='NASSCOM' />
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
						<Typography variant='h4' color='#151B24' component='div' gutterBottom>
							Learn by the World&apos;s best
						</Typography>
						<Typography variant='h6' color='#222222' component='div' sx={{ fontSize: '22px' }}>
							Discover new skills, knowledge, opportunities and make your dream come true
						</Typography>
					</Grid>
					<Grid container item md={3} sm={12} style={{ paddingTop: '25px' }} justifyContent='flex-end'>
						<div>
							<IconButton aria-label='pre' size='small' disabled>
								<Image loading='lazy' src={arrowLeft} width={arrowLeft.width} height={arrowLeft.height} alt='pre' />
							</IconButton>
						</div>
						<div>
							<IconButton aria-label='next' size='small' disabled>
								<Image loading='lazy' width={arrowRight.width} height={arrowRight.height} src={arrowRight} alt='next' />
							</IconButton>
						</div>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					{expertList &&
						expertList.map((e) => (
							<Grid item md={3} sm={6} xs={12} key={e.id}>
								<Card sx={{ height: '100%' }}>
									<CardMedia component='img' loading='lazy' height='380' image={e.image} alt='green iguana' />
									<CardContent className={classes.cardContent}>
										<Typography variant='body2' component='div' color='white' style={{ display: 'inline-flex' }}>
											{e.title}
											<div style={{ transform: 'translate(4px, 0)' }}>
												<Image loading='lazy' height={20} width={20} src={e.flag} alt='flag' />
											</div>
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
								<Button
									variant='contained'
									color='darkLight'
									size='large'
									sx={{ marginTop: '2rem' }}
									component='a'
									href='https://www.youtube.com/c/PavanSriram'
									target='_blank'
									fullWidth
								>
									<Typography variant='h6' component='div' fontWeight='bold'>
										Get Started
									</Typography>
								</Button>
							</Grid>
						</Grid>
						<Grid item md={5}>
							<Image loading='lazy' width={illustration3.width} height={illustration3.height} src={illustration3} alt='illustration3' />
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
						<Grid container item md={4} sm={12} style={{ paddingTop: '25px' }} justifyContent='flex-end'>
							<div>
								<IconButton aria-label='pre' size='small' disabled>
									<Image loading='lazy' width={arrowLeft.width} height={arrowLeft.height} src={arrowLeft} alt='pre' />
								</IconButton>
							</div>
							<div>
								<IconButton aria-label='next' size='small' disabled>
									<Image loading='lazy' width={arrowRight.width} height={arrowRight.height} src={arrowRight} alt='next' />
								</IconButton>
							</div>
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
							<Image loading='lazy' width={illustration4.width} height={illustration4.height} src={illustration4} alt='illustration4' />
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
										Meet new people, learn something you didn&apos;t know before. This is your one-stop shop for global connections! at zero cost.
									</Typography>
								</Grid>
							</Grid>
							<Grid item lg={6} md={6} sm={6} xs={10} className={classes.mb2}>
								<Button variant='contained' color='darkLight' size='large' component='a' href='https://biw67j0f3gs.typeform.com/to/fkZofwRc' fullWidth>
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
