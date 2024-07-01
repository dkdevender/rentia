import React from 'react'
import { Box, Button, Container, FormLabel, Grid, TextField, Typography } from '@mui/material'
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import listingInnerImg from '../assets/img/innerBanner.jpg';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from 'react-router-dom';



const AddListing = () => {

    return (
        <>
            <Header />

            <Box className="innerBannerSec">
                <img src={listingInnerImg} />
                <Typography variant='h2'>Add New Listing</Typography>
            </Box>

            <Container className='cstmContainer my-5'>
                <Box className="listingFormWraper_Sec">
                    <Typography variant='h2'>Basic Listing Information</Typography>

                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <Box className='cstmFormGroup'>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>Property Title</FormLabel>
                                    <OutlinedInput
                                        className="cstmInputField"
                                    />
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className='cstmFormGroup'>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>Property Type</FormLabel>
                                    <Select
                                        value=""
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        className='cstmInput'
                                    >
                                        <MenuItem value="" hidden>Type Of Spaces</MenuItem>
                                        <MenuItem value={'CoLiving'}>Coliving</MenuItem>
                                        <MenuItem value={'VirtualSpace'}>Virtual Space</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className='cstmFormGroup'>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>Area</FormLabel>
                                    <OutlinedInput
                                        className="cstmInputField"
                                    />
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className='cstmFormGroup'>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>Property Built</FormLabel>
                                    <Select
                                        value=""
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        className='cstmInput'
                                    >
                                        <MenuItem value="" hidden>Select Year</MenuItem>
                                        <MenuItem value={'2024'}>2024</MenuItem>
                                        <MenuItem value={'2023'}>2023</MenuItem>
                                        <MenuItem value={'2022'}>2022</MenuItem>
                                        <MenuItem value={'2021'}>2021</MenuItem>
                                        <MenuItem value={'2020'}>2020</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className='cstmFormGroup'>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>Floors</FormLabel>
                                    <Select
                                        value=""
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        className='cstmInput'
                                    >
                                        <MenuItem value="" hidden>Select Floors</MenuItem>
                                        <MenuItem value={'1'}>1</MenuItem>
                                        <MenuItem value={'2'}>2</MenuItem>
                                        <MenuItem value={'3'}>3</MenuItem>
                                        <MenuItem value={'4'}>4</MenuItem>
                                        <MenuItem value={'5'}>5</MenuItem>
                                        <MenuItem value={'6'}>6</MenuItem>
                                        <MenuItem value={'7'}>7</MenuItem>
                                        <MenuItem value={'8'}>8</MenuItem>
                                        <MenuItem value={'9'}>9</MenuItem>
                                        <MenuItem value={'10'}>10</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className='cstmFormGroup'>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>Property Status</FormLabel>
                                    <Select
                                        value=""
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        className='cstmInput'
                                    >
                                        <MenuItem value="" hidden>Select Property Status</MenuItem>
                                        <MenuItem value={'For Sale'}>For Sale</MenuItem>
                                        <MenuItem value={'For Rent'}>For Rent</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className='cstmFormGroup'>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>Parking</FormLabel>
                                    <Select
                                        value=""
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        className='cstmInput'
                                    >
                                        <MenuItem value="" hidden>Select</MenuItem>
                                        <MenuItem value={'Available'}>Available</MenuItem>
                                        <MenuItem value={'For Unavailable'}>Unavailable</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className='cstmFormGroup'>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>Pricing Plan Type</FormLabel>
                                    <Select
                                        value=""
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        className='cstmInput'
                                    >
                                        <MenuItem value="" hidden>Select Plan</MenuItem>
                                        <MenuItem value={'Single Sharing'}>Single Sharing</MenuItem>
                                        <MenuItem value={'Double Sharing'}>Double Sharing</MenuItem>
                                        <MenuItem value={'Triple Sharing'}>Triple Sharing</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className='cstmFormGroup'>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>Price</FormLabel>
                                    <OutlinedInput
                                        className="cstmInputField"
                                    />
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item md={12}>
                            <Box className='cstmFormGroup'>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>Description</FormLabel>
                                    <TextField
                                        className="cstmInputField"
                                        multiline
                                        rows={3}
                                        maxRows={3}
                                    />
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box className="listingFormWraper_Sec">
                    <Grid item md={12}>
                        <Box className='cstmFormGroup mt-3 mb-2'>
                            <Typography variant='h2'>Amenties</Typography>

                            <Grid container spacing={1}>
                                <Grid item md={4}>
                                    <Box className='cstmFormGroup'>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Parking" />
                                        </FormGroup>
                                    </Box>
                                </Grid>

                                <Grid item md={4}>
                                    <Box className='cstmFormGroup'>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Housekeeping" />
                                        </FormGroup>
                                    </Box>
                                </Grid>

                                <Grid item md={4}>
                                    <Box className='cstmFormGroup'>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="CCTV" />
                                        </FormGroup>
                                    </Box>
                                </Grid>

                                <Grid item md={4}>
                                    <Box className='cstmFormGroup'>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Kitchen" />
                                        </FormGroup>
                                    </Box>
                                </Grid>

                                <Grid item md={4}>
                                    <Box className='cstmFormGroup'>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="24x7 Security" />
                                        </FormGroup>
                                    </Box>
                                </Grid>

                                <Grid item md={4}>
                                    <Box className='cstmFormGroup'>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Power Backup" />
                                        </FormGroup>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>

                <Box className="listingFormWraper_Sec">
                    <Typography variant='h2'>Location</Typography>

                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <Box className='cstmFormGroup'>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>Address</FormLabel>
                                    <OutlinedInput
                                        className="cstmInputField"
                                    />
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className='cstmFormGroup'>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>City</FormLabel>
                                    <Select
                                        value=""
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        className='cstmInput'
                                    >
                                        <MenuItem value="" hidden>Select City</MenuItem>
                                        <MenuItem value={'Gurugram'}>Gurugram</MenuItem>
                                        <MenuItem value={'Noida'}>Noida</MenuItem>
                                        <MenuItem value={'Noida'}>Noida</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className='cstmFormGroup'>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>State</FormLabel>
                                    <Select
                                        value=""
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        className='cstmInput'
                                    >
                                        <MenuItem value="" hidden>Select State</MenuItem>
                                        <MenuItem value={'Lorem Ipsum'}>Lorem Ipsum</MenuItem>
                                        <MenuItem value={'Lorem Ipsum'}>Lorem Ipsum</MenuItem>
                                        <MenuItem value={'Lorem Ipsum'}>Lorem Ipsum</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className='cstmFormGroup'>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>Postal Code</FormLabel>
                                    <OutlinedInput
                                        className="cstmInputField"
                                    />
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box className="listingFormWraper_Sec">
                    <Typography variant='h2'>Property Images Upload</Typography>

                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <Box className='cstmUploadBTN'>
                                <Button className='cstmFileUploadBTN'>
                                    <CloudUploadIcon />
                                    <Typography variant='subtitle1'>Property Images Upload</Typography>
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <hr className='my-3' />
                <Box className='btnBox text-center'>
                    <Link to='/' className='cstmBTN px-5'>Save</Link>
                </Box>
            </Container>

            <Footer />
        </>
    )
}

export default AddListing