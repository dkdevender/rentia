import React from 'react'
import { Box, Typography } from '@mui/material'
import { Container } from '@mui/material';

import Grid from '@mui/material/Grid';
import co_work from '../assets/img/co_work.png';
import Coliving from '../assets/img/co_living.jpg';
import list_property from '../assets/img/list_property.jpg';
import virtualOffice from '../assets/img/virtual_office.png';
import entireSolution from '../assets/img/entire_solution.jpg';
import officeSpace from '../assets/img/office_space.png';

import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <>
            <Container className='cstmContainer'>
                <Box className='servicesSec'>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Box className="servicesCard_Wrapper">
                                <img src={co_work} className='img-fluid' />

                                <Box className='serviceContentWrapper'>
                                    <Typography variant='h2'>Coliving Spaces</Typography>
                                    <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                    <Link to='/' className='viewAllLink'>View All</Link>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box className="servicesCard_Wrapper">
                                <img src={Coliving} className='img-fluid' />

                                <Box className='serviceContentWrapper'>
                                    <Typography variant='h2'>Coliving Spaces</Typography>
                                    <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                    <Link to='/' className='viewAllLink'>View All</Link>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box className="servicesCard_Wrapper">
                                <img src={list_property} className='img-fluid' />

                                <Box className='serviceContentWrapper'>
                                    <Typography variant='h2'>List Property</Typography>
                                    <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                    <Link to='/' className='viewAllLink'>View All</Link>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box className="servicesCard_Wrapper">
                                <img src={virtualOffice} className='img-fluid' />

                                <Box className='serviceContentWrapper'>
                                    <Typography variant='h2'>Virtual Offices</Typography>
                                    <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                    <Link to='/' className='viewAllLink'>View All</Link>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box className="servicesCard_Wrapper">
                                <img src={entireSolution} className='img-fluid' />

                                <Box className='serviceContentWrapper'>
                                    <Typography variant='h2'>Enterprise Solutions</Typography>
                                    <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                    <Link to='/' className='viewAllLink'>View All</Link>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={6}>
                            <Box className="servicesCard_Wrapper">
                                <img src={officeSpace} className='img-fluid' />

                                <Box className='serviceContentWrapper'>
                                    <Typography variant='h2'>Office Spaces</Typography>
                                    <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                    <Link to='/' className='viewAllLink'>View All</Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Service
