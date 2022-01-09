import Link from 'next/link';

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
import copyRightSvg from '../assets/images/copyright.svg';
import discordSvg from '../assets/images/discord.svg';

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
								<Typography variant='body2' component={Link} href='/'>
									About us
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant='body2' component={Link} href='/'>
									Blog
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant='body2' component={Link} href='/'>
									Become Ambassador
								</Typography>
							</Grid>
						</Grid>
						<Grid container item md={6} xs='auto'>
							<Grid item xs={12}>
								<Typography variant='body1' fontWeight='bold' gutterBottom>
									Support
								</Typography>
								<Typography variant='body2' component={Link} href='/'>
									Contact Us
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={6} xs={12}>
						<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
							<IconButton size='large' color='tertiary'>
								<img src={discordSvg} alt='discord' />
							</IconButton>
							<IconButton size='large' color='tertiary'>
								<FacebookRoundedIcon fontSize='inherit' />
							</IconButton>
							<IconButton size='large' color='tertiary'>
								<InstagramIcon fontSize='inherit' />
							</IconButton>
							<IconButton size='large' color='tertiary'>
								<LinkedInIcon fontSize='inherit' />
							</IconButton>
							<IconButton size='large' color='tertiary'>
								<TwitterIcon fontSize='inherit' />
							</IconButton>
							<IconButton size='large' color='tertiary'>
								<YouTubeIcon fontSize='inherit' />
							</IconButton>
						</div>
						<Typography variant='body2' fontSize='15px' align='right' sx={{ marginRight: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
							<img src={copyRightSvg} style={{ width: '20px', height: '20px' }} />
							&nbsp; 2021 Kohort
						</Typography>
						<Grid container justifyContent='flex-end' alignItems='baseline' sx={{ marginTop: '0.5rem', paddingRight: '1rem' }}>
							<Typography variant='body2' fontSize='11px' component={Link} href='/privacy-policy'>
								Privacy Policy
							</Typography>
							&nbsp; | &nbsp;
							<Typography variant='body2' fontSize='11px' component={Link} href='/cookie-policy'>
								Cookie Policy
							</Typography>
							&nbsp; | &nbsp;
							<Typography variant='body2' fontSize='11px' component={Link} href='/community-guidelines'>
								Community Guidlines
							</Typography>
							&nbsp; | &nbsp;
							<Typography variant='body2' fontSize='11px' component={Link} href='/terms-and-condition'>
								Terms
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Footer;
