import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import imgListingDetail from "../assets/img/co_work.png";
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import listingDetailInnerImg from '../assets/img/innerBanner.jpg';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// import contactformImg from '../assets/img/contact_form.jpg';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Link } from 'react-router-dom';

const ListingDetail = () => {
    //Contact Dropdown Menu
    const [lookingfor, setLookingfor] = React.useState('');

    const lookingSelectChange = (event) => {
        setLookingfor(event.target.value);
    };

    const [selectcity, setSelectcity] = React.useState('');

    const selectCityChange = (event) => {
        setSelectcity(event.target.value);
    };

    return (
        <>
            <Header />

            <Box className="innerBannerSec">
                <img src={listingDetailInnerImg} />
                <Typography variant='h2'>Listing Details</Typography>
            </Box>

            <Container className='cstmContainer my-5'>
                <Box className="listingDetailContent_Box">
                    <Box>
                        <Typography variant='h2'>Lorem Ipsum</Typography>
                        <Typography variant='caption'>Sector 58, Gurgaon</Typography>
                    </Box>

                    <Box className="priceContent">
                        <CurrencyRupeeIcon />
                        <Typography variant='subtitle1'>7,000</Typography>
                        <Typography variant='title'>Month</Typography>
                    </Box>
                </Box>

                <Box className="gridSec">
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Box className="listingDetail_ImgBox heigh300">
                                <img src={imgListingDetail} className='img-fluid' />
                            </Box>
                        </Grid>

                        <Grid item md={6}>
                            <Grid container spacing={2}>
                                <Grid item md={6}>
                                    <Grid container spacing={2}>
                                        <Grid item md={12}>
                                            <Box className="listingDetail_ImgBox">
                                                <img src={imgListingDetail} className='img-fluid' />
                                            </Box>
                                        </Grid>

                                        <Grid item md={12}>
                                            <Box className="listingDetail_ImgBox">
                                                <img src={imgListingDetail} className='img-fluid' />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item md={6}>
                                    <Grid container spacing={2}>
                                        <Grid item md={12}>
                                            <Box className="listingDetail_ImgBox">
                                                <img src={imgListingDetail} className='img-fluid' />
                                            </Box>
                                        </Grid>

                                        <Grid item md={12}>
                                            <Box className="listingDetail_ImgBox">
                                                <img src={imgListingDetail} className='img-fluid' />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <Grid container spacing={2} className='mt-3'>
                    <Grid item md={8}>
                        <Box className="propertDescription">
                            <Box className="sectionHeading leftAlignHeading">
                                <Typography variant='h2'>About this property</Typography>
                            </Box>

                            <Typography variant='body1' className='aboutdescriptonPara'>Rentia is a vibrant coworking fully furnished office space on rent situated in Sector 58, Golf Course Extension Road, Gurgaon also offering dedicated desks, private cabins, conference rooms, collaborative zones, high-speed Wi-Fi, ergonomic furniture, and more. Locationed in Magnum Tower 2, Gurgaon, Haryana it is  Just 10 minutes from Sec 55-56 Metro Station on Golf Course Road. Complimentary Tea and coffee - Office boy service for guests - Electricity - AC - Maintenanc...</Typography>

                            <Button className='showMoreBTN'>Show More <KeyboardArrowDownIcon /></Button>
                        </Box>

                        <hr className='my-3' />

                        <Box className="propertDetail">
                            <Box className="sectionHeading leftAlignHeading">
                                <Typography variant='h2'>Property Details</Typography>
                            </Box>

                            <Grid container spacing={2}>
                                <Grid item md={4}>
                                    <Box className="propertDetailListBox">
                                        <Typography variant='caption'>Property ID:</Typography>
                                        <Typography variant='caption'>R12345</Typography>
                                    </Box>

                                    <Box className="propertDetailListBox">
                                        <Typography variant='caption'>Area:</Typography>
                                        <Typography variant='caption'>1560 Sq Ft</Typography>
                                    </Box>

                                    <Box className="propertDetailListBox">
                                        <Typography variant='caption'>Year Built:</Typography>
                                        <Typography variant='caption'>2024</Typography>
                                    </Box>
                                </Grid>

                                <Grid item md={4}>
                                    <Box className="propertDetailListBox">
                                        <Typography variant='caption'>Floor:</Typography>
                                        <Typography variant='caption'>8</Typography>
                                    </Box>

                                    <Box className="propertDetailListBox">
                                        <Typography variant='caption'>Parking:</Typography>
                                        <Typography variant='caption'>Available</Typography>
                                    </Box>

                                    <Box className="propertDetailListBox">
                                        <Typography variant='caption'>Property Type:</Typography>
                                        <Typography variant='caption'>Co-Workking</Typography>
                                    </Box>
                                </Grid>

                                <Grid item md={4}>
                                    <Box className="propertDetailListBox">
                                        <Typography variant='caption'>Property Status:</Typography>
                                        <Typography variant='caption'>For Rent</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box className="timingSlotBox my-3">
                            <Typography variant='h3'>Mon - Fri : 09:00 AM to 08:00 PM</Typography>
                            <Typography variant='h3'>Sat : 09:00 AM to 08:00 PM</Typography>
                            <Typography variant='h3'>Sun : Closed</Typography>
                        </Box>
                    </Grid>

                    <Grid item md={4}>
                        <Box className='formBox'>
                            <Typography variant='h2'>Let us find your perfect Property</Typography>
                            <Typography variant='body1'>Connect to a Rentia Space Expert now</Typography>

                            <Grid container spacing={2}>
                                <Grid item md={12}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <OutlinedInput
                                                className="cstmInputField"
                                                placeholder='Name'
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={12}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <OutlinedInput
                                                className="cstmInputField"
                                                placeholder='Email'
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={12}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <OutlinedInput
                                                className="cstmInputField"
                                                placeholder='Phone'
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={6}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Select
                                                value={lookingfor}
                                                onChange={lookingSelectChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='cstmInput'
                                            >
                                                <MenuItem value="" hidden>Type Of Spaces</MenuItem>
                                                <MenuItem value={'CoWorking'}>Coworking</MenuItem>
                                                <MenuItem value={'CoLiving'}>Coliving</MenuItem>
                                                <MenuItem value={'OfficeSpace'}>Office Space</MenuItem>
                                                <MenuItem value={'VirtualSpace'}>Virtual Space</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={6}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Select
                                                value={selectcity}
                                                onChange={selectCityChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='cstmInput'
                                            >
                                                <MenuItem value="" hidden>Select City</MenuItem>
                                                <MenuItem value={'Gurugram'}>Gurugram</MenuItem>
                                                <MenuItem value={'Bangalore'}>Bangalore</MenuItem>
                                                <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
                                                <MenuItem value={'Pune'}>Pune</MenuItem>
                                                <MenuItem value={'Hyderabad'}>Hyderabad</MenuItem>
                                                <MenuItem value={'Delhi'}>Delhi</MenuItem>
                                                <MenuItem value={'Noida'}>Noida</MenuItem>
                                                <MenuItem value={'Ahemdabad'}>Ahemdabad</MenuItem>
                                                <MenuItem value={'Indore'}>Indore</MenuItem>
                                                <MenuItem value={'Chenai'}>Chenai</MenuItem>
                                                <MenuItem value={'Jaipur'}>Jaipur</MenuItem>
                                                <MenuItem value={'Kochi'}>Kochi</MenuItem>
                                                <MenuItem value={'Chandigarh'}>Chandigarh</MenuItem>
                                                <MenuItem value={'Lucknow'}>Lucknow</MenuItem>
                                                <MenuItem value={'Kolkata'}>Kolkata</MenuItem>
                                                <MenuItem value={'Coimbatore'}>Coimbatore</MenuItem>
                                                <MenuItem value={'Goa'}>Goa</MenuItem>
                                                <MenuItem value={'Bhubaneswar'}>Bhubaneswar</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Box className='btnBox mt' style={{ width: '70%' }}>
                                <Link to='/' className='cstmBTN' style={{ display: 'flex', marginTop: '30px' }}>Submit</Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </>
    )
}

export default ListingDetail