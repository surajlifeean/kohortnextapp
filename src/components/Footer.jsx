import Link from 'next/link';
import Image from 'next/image';

import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import Container from './Container';

// import icons
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import copyRightSvg from 'assets/images/copyright.svg';
import discordSvg from 'assets/images/discord.svg';

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.background.gery,
		paddingTop: '1.5rem ',
		paddingBottom: '1.5rem',
	},
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<div className={classes.footer}>
			<Container style={{ paddingTop: 0, paddingBottom: 0 }}>
				<Grid container spacing={2}>
					<Grid container item md={6} xs={12} spacing={2}>
						<Grid container item md={6} xs='auto'>
							<Grid item xs={12}>
								<Typography variant='body1' fontWeight='bold'>
									Company
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Link href='/' passHref>
									<Typography variant='body2'>About us</Typography>
								</Link>
							</Grid>
							<Grid item xs={12}>
								<Link href='/' passHref>
									<Typography variant='body2'>Blog</Typography>
								</Link>
							</Grid>
							<Grid item xs={12}>
								<Link href='/' passHref>
									<Typography variant='body2'>Become Ambassador</Typography>
								</Link>
							</Grid>
						</Grid>
						<Grid container item md={6} xs='auto'>
							<Grid item xs={12}>
								<Typography variant='body1' fontWeight='bold' gutterBottom>
									Support
								</Typography>
								<Typography variant='body2' component='a' href='mailto:business.lead@kohort.in'>
									Contact Us
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={6} xs={12}>
						<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
							<IconButton size='large' color='tertiary' component='a' href='https://medium.com/@Kohort' target='_blank'>
								<Image src={discordSvg} width={discordSvg.width} height={discordSvg.height} alt='discord' />
							</IconButton>
							<IconButton size='large' color='tertiary' component='a' href='https://www.facebook.com/kohortofficial' target='_blank'>
								<FacebookRoundedIcon fontSize='inherit' />
							</IconButton>
							<IconButton size='large' color='tertiary' component='a' href='https://www.instagram.com/kohort_official/' target='_blank'>
								<InstagramIcon fontSize='inherit' />
							</IconButton>
							<IconButton size='large' color='tertiary' component='a' href='https://www.linkedin.com/company/kohortofficial' target='_blank'>
								<LinkedInIcon fontSize='inherit' />
							</IconButton>
							<IconButton size='large' color='tertiary' component='a' href='https://twitter.com/kohort_official' target='_blank'>
								<TwitterIcon fontSize='inherit' />
							</IconButton>
							<IconButton size='large' color='tertiary' component='a' href='https://www.youtube.com/c/PavanSriram' target='_blank'>
								<YouTubeIcon fontSize='inherit' />
							</IconButton>
						</div>
						<Typography variant='body2' fontSize='15px' align='right' sx={{ marginRight: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
							<Image src={copyRightSvg} alt='C' style={{ width: '20px', height: '20px' }} />
							&nbsp; 2021 Kohort
						</Typography>
						<Grid container justifyContent='flex-end' alignItems='baseline' sx={{ marginTop: '0.5rem', paddingRight: '1rem' }}>
							<Link href='/privacy-policy' passHref>
								<Typography variant='body2' fontSize='11px'>
									Privacy Policy
								</Typography>
							</Link>
							&nbsp; | &nbsp;
							<Link href='/cookie-policy' passHref>
								<Typography variant='body2' fontSize='11px'>
									Cookie Policy
								</Typography>
							</Link>
							&nbsp; | &nbsp;
							<Link href='/community-guidelines' passHref>
								<Typography variant='body2' fontSize='11px'>
									Community Guidlines
								</Typography>
							</Link>
							&nbsp; | &nbsp;
							<Link href='/terms-and-condition' passHref>
								<Typography variant='body2' fontSize='11px'>
									Terms
								</Typography>
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Footer;
