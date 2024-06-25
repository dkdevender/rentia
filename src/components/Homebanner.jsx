import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import HomeBanner from '../assets/img/Home_Banner3.png';
import Carousel from "react-bootstrap/Carousel";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Gurugram from '../assets/img/location_img1.jpg';

const Homebanner = () => {
    //Carousel Dropdown Menu
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
            <Box className="homeBannerSec">
                <Box className="carouselFilterSec">
                    <Box className="homeFilterSec">
                        <Typography variant='h4'>Choose from</Typography>
                        <Typography variant='h2'>100,000+ spaces to Work & Live</Typography>

                        <Box className='cstmFormGroup'>
                            <FormControl sx={{ width: '100%' }}>
                                <Select
                                    value={lookingfor}
                                    onChange={lookingSelectChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className='cstmInput'
                                >
                                    <MenuItem value="" hidden>Looking For</MenuItem>
                                    <MenuItem value={'CoLiving'}>Co-Living</MenuItem>
                                    <MenuItem value={'CoWorking'}>Co-Working</MenuItem>
                                </Select>
                            </FormControl>

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

                        <Box className='locationMenu_Wrapper'>
                            <Button className='locationMenuBTN'>
                                <Box className='locCat_imgBox'>
                                    <img src={Gurugram} style={{ height: '60px' }} />
                                </Box>
                                <Typography variant='subtitle1'>Gurugram</Typography>
                            </Button>

                            <Button className='locationMenuBTN'>
                                <Box className='locCat_imgBox'>
                                    <img src={Gurugram} style={{ height: '60px' }} />
                                </Box>
                                <Typography variant='subtitle1'>Bangalore</Typography>
                            </Button>

                            <Button className='locationMenuBTN'>
                                <Box className='locCat_imgBox'>
                                    <img src={Gurugram} style={{ height: '60px' }} />
                                </Box>
                                <Typography variant='subtitle1'>Mumbai</Typography>
                            </Button>

                            <Button className='locationMenuBTN'>
                                <Box className='locCat_imgBox'>
                                    <img src={Gurugram} style={{ height: '60px' }} />
                                </Box>
                                <Typography variant='subtitle1'>Hyderabad</Typography>
                            </Button>

                            <Button className='locationMenuBTN'>
                                <Box className='locCat_imgBox'>
                                    <img src={Gurugram} style={{ height: '60px' }} />
                                </Box>
                                <Typography variant='subtitle1'>Pune</Typography>
                            </Button>

                            <Button className='locationMenuBTN'>
                                <Box className='locCat_imgBox'>
                                    <img src={Gurugram} style={{ height: '60px' }} />
                                </Box>
                                <Typography variant='subtitle1'>Delhi</Typography>
                            </Button>

                            <Button className='locationMenuBTN'>
                                <Box className='locCat_imgBox'>
                                    <img src={Gurugram} style={{ height: '60px' }} />
                                </Box>
                                <Typography variant='subtitle1'>Noida</Typography>
                            </Button>

                            <Button className='locationMenuBTN'>
                                <Box className='locCat_imgBox'>
                                    <img src={Gurugram} style={{ height: '60px' }} />
                                </Box>
                                <Typography variant='subtitle1'>Ahemdabad</Typography>
                            </Button>

                            <Button className='locationMenuBTN'>
                                <Box className='locCat_imgBox'>
                                    <img src={Gurugram} style={{ height: '60px' }} />
                                </Box>
                                <Typography variant='subtitle1'>Indore</Typography>
                            </Button>

                            <Button className='locationMenuBTN'>
                                <Box className='locCat_imgBox'>
                                    <img src={Gurugram} style={{ height: '60px' }} />
                                </Box>
                                <Typography variant='subtitle1'>Chennai</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box className="carouselSec">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                src={HomeBanner}
                                alt="First slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                src={HomeBanner}
                                alt="First slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                src={HomeBanner}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Box>
            </Box>
        </>
    )
}

export default Homebanner
