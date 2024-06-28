import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography } from '@mui/material'

import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

// import 'swiper/css';
// import 'swiper/css/pagination';
import { Pagination } from '../../node_modules/swiper/modules';
import ListingImages from '../assets/img/Listing_Img.jpg';


const ListingCarousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
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
                                <Link to='/ListingDetail' className='cstmBTN w-100' style={{ padding: '12px' }}>View Details</Link>
                            </Box>
                        </Box>

                    </Box>
                </SwiperSlide>

                <SwiperSlide>
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
                                <Link to='/ListingDetail' className='cstmBTN w-100' style={{ padding: '12px' }}>View Details</Link>
                            </Box>
                        </Box>

                    </Box>
                </SwiperSlide>

                <SwiperSlide>
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
                                <Link to='/ListingDetail' className='cstmBTN w-100' style={{ padding: '12px' }}>View Details</Link>
                            </Box>
                        </Box>

                    </Box>
                </SwiperSlide>

                <SwiperSlide>
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
                                <Link to='/ListingDetail' className='cstmBTN w-100' style={{ padding: '12px' }}>View Details</Link>
                            </Box>
                        </Box>

                    </Box>
                </SwiperSlide>

                <SwiperSlide>
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
                                <Link to='/ListingDetail' className='cstmBTN w-100' style={{ padding: '12px' }}>View Details</Link>
                            </Box>
                        </Box>

                    </Box>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default ListingCarousel