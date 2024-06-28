import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EastIcon from '@mui/icons-material/East';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <>
            <Box className='footerSec'>
                <Container className='cstmContainer'>
                    <Grid container spacing={2}>
                        <Grid item md={3}>
                            <Box className='footerCardWrapper'>
                                <Link to='/' className='footerLogo'>
                                    <img src={Logo} className='img-fluid' />
                                </Link>

                                <Typography variant='body1' style={{ paddingRight: '20px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Typography>

                                <Box className='socialnav'>
                                    <Link to='/' className='socailNavLink'>
                                        <FacebookIcon />
                                    </Link>

                                    <Link to='/' className='socailNavLink'>
                                        <InstagramIcon />
                                    </Link>

                                    <Link to='/' className='socailNavLink'>
                                        <LinkedInIcon />
                                    </Link>

                                    <Link to='/' className='socailNavLink'>
                                        <TwitterIcon />
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box className='footerCardWrapper'>
                                <Box className='sectionHeading leftAlignHeading'>
                                    <Typography variant='h2'>Quick Links</Typography>
                                </Box>

                                <Box className='footerNavbar'>
                                    <Link to='/' className='footerNavLink'>
                                        <EastIcon />
                                        Home
                                    </Link>

                                    <Link to='/' className='footerNavLink'>
                                        <EastIcon />
                                        About Us
                                    </Link>

                                    <Link to='/' className='footerNavLink'>
                                        <EastIcon />
                                        Co-Living
                                    </Link>

                                    <Link to='/' className='footerNavLink'>
                                        <EastIcon />
                                        Knowledge
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box className='footerCardWrapper'>
                                <Box className='sectionHeading leftAlignHeading'>
                                    <Typography variant='h2'>CONTACT</Typography>
                                </Box>

                                <Box className='ContactMenu'>
                                    <Box className='contactContent'>
                                        <Box className='contactIconBox'>
                                            <LocationOnIcon />
                                        </Box>
                                        <Typography variant='body1'>Q1 Block, Q 147 South city 2, sector 49, Gurugram</Typography>
                                    </Box>

                                    <Box className='contactContent'>
                                        <Box className='contactIconBox'>
                                            <EmailIcon />
                                        </Box>
                                        <Link to='/'>Info@rentia.in</Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box className='footerCardWrapper footerMapBox'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15281527.263685085!2d72.10809512517388!3d20.75721265177788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1716672702237!5m2!1sen!2sin" height="250"></iframe>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box className='bottomFooterSec'>
                <Typography variant='caption'>2024 © All rights reserved by <Link to='/'>Rentia</Link></Typography>
            </Box>
        </>
    )
}

export default Footer;
