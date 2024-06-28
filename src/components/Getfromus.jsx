import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import rentiaProp from '../assets/img/rentia_prop.png';
import aboutsubHeadingImg from '../assets/img/subHeadingImg.svg';
import GroupIcon from '@mui/icons-material/Group';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PaymentIcon from '@mui/icons-material/Payment';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const Getfromus = () => {
    return (
        <>
            <Box className='whatgetForm_Sec'>
                <Container className='cstmContainer zindex'>
                    <Box className='sectionHeading'>
                        <Typography variant='h4'>
                            <img src={aboutsubHeadingImg} className='subheadingImg' />
                            What You
                        </Typography>
                        <Typography variant='h2'>Get From Us</Typography>
                    </Box>

                    <Grid container spacing={4}>
                        <Grid item md={5}>
                            <Box className='getFormImgBox'>
                                <img src={rentiaProp} />
                            </Box>
                        </Grid>

                        <Grid item md={7}>
                            <Box className='getFormContentSec'>
                                <Box className='getFormContentBox'>
                                    <Box className='getformIconBox'>
                                        <GroupIcon className='cstmIcon' />
                                    </Box>

                                    <Box>
                                        <Typography variant='h2'>Exclusive pricing for Rentia members</Typography>
                                        <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                    </Box>
                                </Box>

                                <Box className='getFormContentBox'>
                                    <Box className='getformIconBox'>
                                        <ApartmentIcon className='cstmIcon' />
                                    </Box>

                                    <Box>
                                        <Typography variant='h2'>Verified Spaces and Trusted Partners</Typography>
                                        <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                    </Box>
                                </Box>

                                <Box className='getFormContentBox'>
                                    <Box className='getformIconBox'>
                                        <PaymentIcon className='cstmIcon' />
                                    </Box>

                                    <Box>
                                        <Typography variant='h2'>no booking service fee with no brokerage fees in (what you get from us).</Typography>
                                        <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                    </Box>
                                </Box>

                                <Box className='getFormContentBox'>
                                    <Box className='getformIconBox'>
                                        <TravelExploreIcon className='cstmIcon' />
                                    </Box>

                                    <Box>
                                        <Typography variant='h2'>100% offline and online support</Typography>
                                        <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                    </Box>
                                </Box>

                                <Box className='getFormContentBox'>
                                    <Box className='getformIconBox'>
                                        <LocalOfferIcon className='cstmIcon' />
                                    </Box>

                                    <Box>
                                        <Typography variant='h2'>Exclusive Brand Coupon Codes</Typography>
                                        <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Getfromus
