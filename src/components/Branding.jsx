import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Box, Typography } from '@mui/material';
import aboutsubHeadingImg from '../assets/img/subHeadingImg.svg';
import brandingLogo from '../assets/img/branding_logo.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Scrollbar, Autoplay } from 'swiper/modules';

const Branding = () => {
    return (
        <>
            <Box className='brandingSec'>
                <Container className='cstmContainer'>
                    <Box className='sectionHeading'>
                        <Typography variant='h4'>
                            <img src={aboutsubHeadingImg} className='subheadingImg' />
                            Rentia
                        </Typography>
                        <Typography variant='h2'>Branding</Typography>
                    </Box>

                    <Swiper
                        modules={[Scrollbar, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={7}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}

                    >
                        <SwiperSlide>
                            <Box className='brandingLogoImgBox'>
                                <img src={brandingLogo} />
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box className='brandingLogoImgBox'>
                                <img src={brandingLogo} />
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box className='brandingLogoImgBox'>
                                <img src={brandingLogo} />
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box className='brandingLogoImgBox'>
                                <img src={brandingLogo} />
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box className='brandingLogoImgBox'>
                                <img src={brandingLogo} />
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box className='brandingLogoImgBox'>
                                <img src={brandingLogo} />
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box className='brandingLogoImgBox'>
                                <img src={brandingLogo} />
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box className='brandingLogoImgBox'>
                                <img src={brandingLogo} />
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box className='brandingLogoImgBox'>
                                <img src={brandingLogo} />
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </Box>

        </>
    )
}

export default Branding;
