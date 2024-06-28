import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import contactformImg from '../assets/img/contact_form.jpg';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Link } from 'react-router-dom';

const Contactform = () => {
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
            <Box className='contactFormSec'>
                <Grid container spacing={0}>
                    <Grid item md={7}>
                        <Box className='contactImgBox'>
                            <img src={contactformImg} />
                        </Box>
                    </Grid>
                    <Grid item md={5}>
                        <Box className='formBox height100'>
                            <Typography variant='h2'>Let us find your perfect Property</Typography>
                            <Typography variant='body1'>Connect to a Rentia Space Expert now</Typography>

                            <Grid container spacing={2}>
                                <Grid item md={6}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <OutlinedInput
                                                className="cstmInputField"
                                                placeholder='First Name'
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={6}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <OutlinedInput
                                                className="cstmInputField"
                                                placeholder='Last Name'
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={6}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <OutlinedInput
                                                className="cstmInputField"
                                                placeholder='Email'
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={6}>
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
            </Box>
        </>
    )
}

export default Contactform
