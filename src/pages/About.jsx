import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { Box, Container, Grid, Typography } from '@mui/material';
import aboutInnerBanner from '../assets/img/innerBanner.jpg';
import '../App.css';
import Aboutsec from '../components/Aboutsec';
import aboutsubHeadingImg from '../assets/img/subHeadingImg.svg';
import abutServiceImg from '../assets/img/spaceWork.jpg';
import Branding from '../components/Branding';

const About = () => {
    return (
        <>
            <Header />

            <Box className="innerBannerSec">
                <img src={aboutInnerBanner} />
                <Typography variant='h2'>About Us</Typography>
            </Box>

            <Box className="aboutUsPage_ContentSec">
                <Aboutsec />
            </Box>

            {/* <Box className="whatgetForm_Sec spaceSearchSec">
                <Container className='cstmContainer cstm_Zindex'>
                    <Box className='sectionHeading'>
                        <Typography variant='h2'>Space Search Made Simple</Typography>
                    </Box>

                    <Typography variant='body1'>Search . Book . Work . Live Rentia is India's fastest growing online discovery platform for searching and booking Coworking and Co-living spaces. Our spaces boast of present-day amenities and reflect Freedom, Flexibility and Fulfillment completely in sync with the modern day millennial behavior</Typography>
                    <Typography variant='body1' style={{ margin: '20px 0px 0px' }}>Rentia provides frictionless access to a network of more than 100,000 Coworking, Coliving and Private Office Spaces in over 25+ cities of India and expanding. We serve as an online discovery and booking platform leveraging easy availability and convenience anytime and anywhere. With our unmatched technology powered by T9L and expert support team, we make your space journey a smooth one, an experience to cherish</Typography>
                </Container>
            </Box>

            <Box className="rentiaNetworkSec">
                <Container className='cstmContainer'>
                    <Grid container spacing={2} className='d-flex align-items-center'>
                        <Grid item md={7}>
                            <Box className='sectionHeading leftAlignHeading'>
                                <Typography variant='h2'>The Rentia Network</Typography>
                            </Box>

                            <Typography variant='body1'>The Rentia network includes more than 100,000+ verified work and living spaces in 25+ cities across India located in top neighborhood and available on complete flexible terms. Cofynd is India’s fastest growing discovery platform to find and book your perfect Space. And we have just started !</Typography>
                        </Grid>

                        <Grid item md={5}>
                            <Box className="d-flex gap-2">
                                <Box className='networkCard'>
                                    <Typography variant='h2'>25+</Typography>
                                    <Typography variant='subtitle'>Cities</Typography>
                                </Box>

                                <Box className='networkCard'>
                                    <Typography variant='h2'>1,000+</Typography>
                                    <Typography variant='subtitle'>Locations</Typography>
                                </Box>

                                <Box className='networkCard'>
                                    <Typography variant='h2'>100,000+</Typography>
                                    <Typography variant='subtitle'>Spaces</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box className="aboutServices_Sec abServiceBGLight">
                <Container className='cstmContainer'>
                    <Grid container spacing={5} className='d-flex align-items-center'>
                        <Grid item md={4}>
                            <Box className="aboutServiceImgBox">
                                <img src={abutServiceImg} />
                            </Box>
                        </Grid>

                        <Grid item md={8}>
                            <Box className="aboutService_ContentBox">
                                <Box className='sectionHeading leftAlignHeading'>
                                    <Typography variant='h4'><img src={aboutsubHeadingImg} className='subheadingImg' />In the Beginning</Typography>
                                    <Typography variant='h2'>On-Demand Spaces To Work, Meet, And Live.</Typography>
                                </Box>

                                <Typography variant='body1'>CoFynd was born when Atul realised a paradigm shift in the way people wanted to Work & Live. Many were leaving behind the traditional mundane offices to quirky Co-Working spaces and conventional living to community based Co-Living. With a solid vision in his mind, he implemented this platform with the technology partner in the country, T9L to fulfill the dynamic user needs.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box className="aboutServices_Sec">
                <Container className='cstmContainer'>
                    <Grid container spacing={5} className='d-flex align-items-center'>
                        <Grid item md={8}>
                            <Box className="aboutService_ContentBox">
                                <Box className='sectionHeading leftAlignHeading'>
                                    <Typography variant='h4'><img src={aboutsubHeadingImg} className='subheadingImg' />Expanding our Focus</Typography>
                                    <Typography variant='h2'>Flexible Office Space, Without The Distractions Of Coworking.</Typography>
                                </Box>

                                <Typography variant='body1'>While we tap on more and more cities everyday, our constant aim remains to offer the highest quality of flexibility and privacy at each point. Our spaces speak loud of present-day amenities that are well suited for maximizing work efficiency and potential of the individuals.</Typography>
                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className="aboutServiceImgBox">
                                <img src={abutServiceImg} />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box className="aboutServices_Sec abServiceBGLight">
                <Container className='cstmContainer'>
                    <Grid container spacing={5} className='d-flex align-items-center'>
                        <Grid item md={4}>
                            <Box className="aboutServiceImgBox">
                                <img src={abutServiceImg} />
                            </Box>
                        </Grid>

                        <Grid item md={8}>
                            <Box className="aboutService_ContentBox">
                                <Box className='sectionHeading leftAlignHeading'>
                                    <Typography variant='h4'><img src={aboutsubHeadingImg} className='subheadingImg' />Today's Rentia</Typography>
                                    <Typography variant='h2'>A Global Network Of Flexible, Private Workspaces.</Typography>
                                </Box>

                                <Typography variant='body1'>CoFynd is rapidly prospering with over 100,000+ live spaces in 25+ cities of India. With this, we have also tapped into the Coliving and Private Office Spaces recently. Like this, we aim to reach out and ease every individual's professional journey in searching the best workspace for himself.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Branding /> */}

            <Footer />
        </>
    )
}

export default About