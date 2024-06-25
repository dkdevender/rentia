import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import aboutImg from '../assets/img/About.png';
import aboutsubHeadingImg from '../assets/img/subHeadingImg.svg';
import { Link } from 'react-router-dom';

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
                                <Typography variant='h4'>
                                    <img src={aboutsubHeadingImg} className='subheadingImg' />
                                    About Company
                                </Typography>
                                <Typography variant='h2'>List your Coworking and Coliving space on Rentia, India's #1 online platform for space discovery and bookings.</Typography>
                                <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
                                <Typography variant='body1'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>

                                <Box sx={{ display: 'flex', gap: '30px', margin: '20px 0px 30px' }}>
                                    <Box className='aboutHighlight'>
                                        <Box>
                                            <Typography variant='h2'>1000+</Typography>
                                            <Typography variant='h4'>Location</Typography>
                                        </Box>
                                    </Box>

                                    <Box className='aboutHighlight'>
                                        <Box>
                                            <Typography variant='h2'>25+</Typography>
                                            <Typography variant='h4'>Cities</Typography>
                                        </Box>
                                    </Box>
                                </Box>

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
