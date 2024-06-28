import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import aboutImg from '../assets/img/About.png';
import aboutsubHeadingImg from '../assets/img/subHeadingImg.svg';
import { Link } from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Aboutsec = () => {
    return (
        <>
            <Box className='aboutSec'>
                <Container className='cstmContainer'>
                    <Grid container spacing={2}>
                        <Grid item md={5}>
                            <Box className='aboutImgSec'>
                                <img src={aboutImg} />
                            </Box>
                        </Grid>

                        <Grid item md={7}>
                            <Box className='aboutContentSec'>
                                <Typography variant='h4' className='mb-4'>
                                    <img src={aboutsubHeadingImg} className='subheadingImg' />
                                    About Company
                                </Typography>
                                <Typography variant='body1'>Rentia is a platform that aims to make co-living accessible and convenient for everyone. The platform connects tenants with the best co-living brands in Gurugram, providing them with detailed information about different brands and their properties. This makes it easier for tenants to find a room that fits their budget and needs.</Typography>
                                <Typography variant='h2'><RocketLaunchIcon className="cstmAboutIcon"/>Mission</Typography>
                                <Typography variant='body1'>Rentia's mission is to make co-living accessible and convenient for everyone by being the go-to platform for booking, promoting top brands, and driving the growth of the co-living industry.</Typography>
                                <Typography variant='h2'><RemoveRedEyeIcon className="cstmAboutIcon" />Vision</Typography>
                                <Typography variant='body1'>Rentia Aims to Establish Itself as the Foremost Platform for Co-living Solutions in India, Offering Affordable, Top-notch Accommodation Options with Uncompromising Quality and Exemplary Customer Satisfaction.</Typography>

                                <Box className='btnBox'>
                                    <Link to='/' className='cstmBTN'>Read More</Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Aboutsec
