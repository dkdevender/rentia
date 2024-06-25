import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import aboutsubHeadingImg from '../assets/img/subHeadingImg.svg';
import Coliving from '../assets/img/co_living.jpg';

const Coworking = () => {
    return (
        <>
            <Box className='topSpaces_Sec'>
                <Container className='cstmContainer'>
                    <Box className='sectionHeading'>
                        <Typography variant='h4'>
                            <img src={aboutsubHeadingImg} className='subheadingImg' />
                            Top
                        </Typography>
                        <Typography variant='h2'>Coworking in India</Typography>
                    </Box>

                    <Grid container spacing={2}>
                        <Grid item md={3}>
                            <Box className='propertyCardWrapper'>
                                <Box className='propertyImgBox'>
                                    <img src={Coliving} />
                                </Box>

                                <Box className='propertyContentBox'>
                                    <Typography variant='h2'>Gurugram</Typography>
                                    <Typography variant='subtitle1'>Millennium City</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box className='propertyCardWrapper'>
                                <Box className='propertyImgBox'>
                                    <img src={Coliving} />
                                </Box>

                                <Box className='propertyContentBox'>
                                    <Typography variant='h2'>Bangalore</Typography>
                                    <Typography variant='subtitle1'>India's Silicon Valley</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box className='propertyCardWrapper'>
                                <Box className='propertyImgBox'>
                                    <img src={Coliving} />
                                </Box>

                                <Box className='propertyContentBox'>
                                    <Typography variant='h2'>Mumbai</Typography>
                                    <Typography variant='subtitle1'>A City of Dreams</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box className='propertyCardWrapper'>
                                <Box className='propertyImgBox'>
                                    <img src={Coliving} />
                                </Box>

                                <Box className='propertyContentBox'>
                                    <Typography variant='h2'>Hyderabad</Typography>
                                    <Typography variant='subtitle1'>A City of Nawabs</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box className='propertyCardWrapper'>
                                <Box className='propertyImgBox'>
                                    <img src={Coliving} />
                                </Box>

                                <Box className='propertyContentBox'>
                                    <Typography variant='h2'>Pune</Typography>
                                    <Typography variant='subtitle1'>Queen of the Deccan</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box className='propertyCardWrapper'>
                                <Box className='propertyImgBox'>
                                    <img src={Coliving} />
                                </Box>

                                <Box className='propertyContentBox'>
                                    <Typography variant='h2'>Delhi</Typography>
                                    <Typography variant='subtitle1'>The Nation Capital</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box className='propertyCardWrapper'>
                                <Box className='propertyImgBox'>
                                    <img src={Coliving} />
                                </Box>

                                <Box className='propertyContentBox'>
                                    <Typography variant='h2'>Noida</Typography>
                                    <Typography variant='subtitle1'>The Hitech City</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box className='propertyCardWrapper'>
                                <Box className='propertyImgBox'>
                                    <img src={Coliving} />
                                </Box>

                                <Box className='propertyContentBox'>
                                    <Typography variant='h2'>Ahemdabad</Typography>
                                    <Typography variant='subtitle1'>The Hitech City</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Coworking
