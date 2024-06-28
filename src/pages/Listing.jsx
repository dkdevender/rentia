import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ListingImages from '../assets/img/Listing_Img.jpg';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import listingInnerImg from '../assets/img/innerBanner.jpg';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Listing = () => {
    //Price Dropdown Function
    const [selectPrice, setSelectPrice] = React.useState('');

    const priceSelectChange = (event) => {
        setSelectPrice(event.target.value);
    };

    //Sort By Dropdown Function
    const [sortBy, setSortBy] = React.useState('');

    const selectSortBy = (event) => {
        setSortBy(event.target.value);
    };


    return (
        <>
            <Header />

            <Box className="innerBannerSec">
                <img src={listingInnerImg} />
                <Typography variant='h2'>Coliving Spaces</Typography>
            </Box>

            <Container className='cstmContainer my-5'>
                <Box className="sectionHeading">
                    <Typography variant='h2'>Coliving spaces with PG’s</Typography>
                </Box>

                <Box className="listingSec">
                    <Box className="sideFilterSec">
                        <Typography variant='h2' className='mb-2'>Filters</Typography>

                        <Grid container spacing={1}>
                            <Grid item md={12}>
                                <Box className='cstmFormGroup'>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Select
                                            value={selectPrice}
                                            onChange={priceSelectChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            className='cstmInput'
                                        >
                                            <MenuItem value="" hidden>Select Price</MenuItem>
                                            <MenuItem value={'Less than Rs 10,000'}>Less than Rs 10,000</MenuItem>
                                            <MenuItem value={'Rs 10,000 - Rs 20,000'}>Rs 10,000 - Rs 20,000</MenuItem>
                                            <MenuItem value={'Rs 20,000 - Rs 30,000'}>Rs 20,000 - Rs 30,000</MenuItem>
                                            <MenuItem value={'More than - Rs 30,000'}>More than - Rs 30,000</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>

                            <Grid item md={12}>
                                <Box className='cstmFormGroup'>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Select
                                            value={sortBy}
                                            onChange={selectSortBy}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            className='cstmInput'
                                        >
                                            <MenuItem value="">Sort By</MenuItem>
                                            <MenuItem value={'Low to High'}>Low to High</MenuItem>
                                            <MenuItem value={'High to Low'}>High to Low</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>

                        <Box className="filterTabSec mt-3">
                            <Button className='cstmTabButton'>MG Road Gurugram</Button>
                            <Button className='cstmTabButton'>Udyog Vihar</Button>
                            <Button className='cstmTabButton'>Cyber City</Button>
                            <Button className='cstmTabButton'>Golf Course Road</Button>
                        </Box>
                    </Box>

                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <Box className="listingCard">
                                <Box className="listingImg">
                                    <img src={ListingImages} className='img-fluid' />
                                </Box>

                                <Box className="ratingSec">
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                </Box>

                                <Box className="listingContent">
                                    <Typography variant='h3'>Lorem Ipsum</Typography>
                                    <Typography variant='caption'>Sector 58, Gurgaon</Typography>
                                    <Box className="priceContent">
                                        <CurrencyRupeeIcon />
                                        <Typography variant='subtitle1'>7,000</Typography>
                                        <Typography variant='subtitle1'>Month</Typography>
                                    </Box>

                                    <Box className='btnBox mt-4'>
                                        <Link to='/ListingDetail' className='cstmBTN w-100' style={{ padding: '12px' }}>Get Details</Link>
                                    </Box>
                                </Box>

                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className="listingCard">
                                <Box className="listingImg">
                                    <img src={ListingImages} className='img-fluid' />
                                </Box>

                                <Box className="ratingSec">
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                </Box>

                                <Box className="listingContent">
                                    <Typography variant='h3'>Lorem Ipsum</Typography>
                                    <Typography variant='caption'>Sector 58, Gurgaon</Typography>
                                    <Box className="priceContent">
                                        <CurrencyRupeeIcon />
                                        <Typography variant='subtitle1'>7,000</Typography>
                                        <Typography variant='subtitle1'>Month</Typography>
                                    </Box>

                                    <Box className='btnBox mt-4'>
                                        <Link to='/ListingDetail' className='cstmBTN w-100' style={{ padding: '12px' }}>Get Details</Link>
                                    </Box>
                                </Box>

                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className="listingCard">
                                <Box className="listingImg">
                                    <img src={ListingImages} className='img-fluid' />
                                </Box>

                                <Box className="ratingSec">
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                </Box>

                                <Box className="listingContent">
                                    <Typography variant='h3'>Lorem Ipsum</Typography>
                                    <Typography variant='caption'>Sector 58, Gurgaon</Typography>
                                    <Box className="priceContent">
                                        <CurrencyRupeeIcon />
                                        <Typography variant='subtitle1'>7,000</Typography>
                                        <Typography variant='subtitle1'>Month</Typography>
                                    </Box>

                                    <Box className='btnBox mt-4'>
                                        <Link to='/ListingDetail' className='cstmBTN w-100' style={{ padding: '12px' }}>Get Details</Link>
                                    </Box>
                                </Box>

                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className="listingCard">
                                <Box className="listingImg">
                                    <img src={ListingImages} className='img-fluid' />
                                </Box>

                                <Box className="ratingSec">
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                </Box>

                                <Box className="listingContent">
                                    <Typography variant='h3'>Lorem Ipsum</Typography>
                                    <Typography variant='caption'>Sector 58, Gurgaon</Typography>
                                    <Box className="priceContent">
                                        <CurrencyRupeeIcon />
                                        <Typography variant='subtitle1'>7,000</Typography>
                                        <Typography variant='subtitle1'>Month</Typography>
                                    </Box>

                                    <Box className='btnBox mt-4'>
                                        <Link to='/ListingDetail' className='cstmBTN w-100' style={{ padding: '12px' }}>Get Details</Link>
                                    </Box>
                                </Box>

                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className="listingCard">
                                <Box className="listingImg">
                                    <img src={ListingImages} className='img-fluid' />
                                </Box>

                                <Box className="ratingSec">
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                </Box>

                                <Box className="listingContent">
                                    <Typography variant='h3'>Lorem Ipsum</Typography>
                                    <Typography variant='caption'>Sector 58, Gurgaon</Typography>
                                    <Box className="priceContent">
                                        <CurrencyRupeeIcon />
                                        <Typography variant='subtitle1'>7,000</Typography>
                                        <Typography variant='subtitle1'>Month</Typography>
                                    </Box>

                                    <Box className='btnBox mt-4'>
                                        <Link to='/ListingDetail' className='cstmBTN w-100' style={{ padding: '12px' }}>Get Details</Link>
                                    </Box>
                                </Box>

                            </Box>
                        </Grid>

                        <Grid item md={4}>
                            <Box className="listingCard">
                                <Box className="listingImg">
                                    <img src={ListingImages} className='img-fluid' />
                                </Box>

                                <Box className="ratingSec">
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                    <StarIcon className='userRatingIcon' />
                                </Box>

                                <Box className="listingContent">
                                    <Typography variant='h3'>Lorem Ipsum</Typography>
                                    <Typography variant='caption'>Sector 58, Gurgaon</Typography>
                                    <Box className="priceContent">
                                        <CurrencyRupeeIcon />
                                        <Typography variant='subtitle1'>7,000</Typography>
                                        <Typography variant='subtitle1'>Month</Typography>
                                    </Box>

                                    <Box className='btnBox mt-4'>
                                        <Link to='/ListingDetail' className='cstmBTN w-100' style={{ padding: '12px' }}>Get Details</Link>
                                    </Box>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Footer />

        </>
    )
}

export default Listing;