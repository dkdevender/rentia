import React from 'react'
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import loginImg from '../assets/img/co_work.png'
import Logo from '../assets/img/Logo.jpg';
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../store/Slice/authSlice';
import { Button } from "react-bootstrap";

const Register = () => {
    // const [userName, setUserName] = useState = ("");
    // const [name, setName] = useState = ("");
    // const [email, setEmail] = useState = ("");
    // const [mobileNo, setMobileNo] = useState = ("");
    // const [gender, setGender] = useState = ("");
    // const [password, setPassword] = useState = ("");
    // const [state, setState] = useState = ("");
    // const [city, setCity] = useState = ("");
    // const [pin, setPin] = useState = ("");
    // const [country, setCountry] = useState = ("");

    //Use Dispatch
    const dispatch = useDispatch();
    // const registerHandle = () => {
    //     // console.table(userName, name, email, mobileNo, gender, password, state, city, pin, country)
    //     // dispatch(signUpUser({ userName, name, email, mobileNo, gender, password, state, city, pin, country }))
    // }


    //Gender Dropdown Menu
    const [genderdropdown, setGenderdropdown] = React.useState('');

    const genderSelectChange = (event) => {
        setGenderdropdown(event.target.value);
    };

    return (
        <>
            <Box className="loginSec">
                <Box className="loginImgSec">
                    <img src={loginImg} />
                    <Link to="/" className='sitelogo'>
                        <img src={Logo} className='img-fluid' />
                    </Link>

                    <Box className="loginContentBox">
                        <Typography variant='h2'>Welcome To Rentia</Typography>
                        <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                    </Box>
                </Box>

                <Box className="loginFormSec">
                    <Box className="loginFormBox py-4">
                        <Typography variant='h2'>Sign Up</Typography>

                        <Box className="gridSec">
                            <Grid container spacing={2}>
                                <Grid item md={6}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <label className='mb-1'>User Name</label>
                                            <OutlinedInput
                                                className="cstmInputField ps-2"
                                                placeholder='Enter Email Id'
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={6}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <label className='mb-1'>Name</label>
                                            <OutlinedInput
                                                className="cstmInputField ps-2"
                                                placeholder='Enter Name'
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={6}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <label className='mb-1'>Email</label>
                                            <OutlinedInput
                                                className="cstmInputField ps-2"
                                                placeholder='Enter Email'
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={6}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <label className='mb-1'>Mobile No.</label>
                                            <OutlinedInput
                                                className="cstmInputField ps-2"
                                                placeholder='Enter Mobile No'
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={6}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <label className='mb-1'>Gender</label>
                                            <Select
                                                value={genderdropdown}
                                                onChange={genderSelectChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='cstmInput'
                                            >
                                                <MenuItem value="" hidden>Select Gender</MenuItem>
                                                <MenuItem value={'gender'}>Male</MenuItem>
                                                <MenuItem value={'gender'}>Female</MenuItem>
                                                <MenuItem value={'gender'}>Other</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={6}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <label className='mb-1'>Password</label>
                                            <OutlinedInput
                                                className="cstmInputField ps-2"
                                                placeholder='Enter Password'
                                                type='password'
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={6}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <label className='mb-1'>State</label>
                                            <OutlinedInput
                                                className="cstmInputField ps-2"
                                                placeholder='Enter State'
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={6}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <label className='mb-1'>City</label>
                                            <OutlinedInput
                                                className="cstmInputField ps-2"
                                                placeholder='Enter City'
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={6}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <label className='mb-1'>Pin</label>
                                            <OutlinedInput
                                                className="cstmInputField ps-2"
                                                placeholder='Enter Pin Code'
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item md={6}>
                                    <Box className='cstmFormGroup'>
                                        <FormControl sx={{ width: '100%' }}>
                                            <label className='mb-1'>Country</label>
                                            <OutlinedInput
                                                className="cstmInputField ps-2"
                                                placeholder='Enter Country'
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box className='btnBox mt-4'>
                            {/* <Button onClick={registerHandle} className='cstmBTN w-100' style={{ padding: '13px' }}>Sign Up</Button> */}
                            <Button onClick={(e) => dispatch(signUpUser())} className='cstmBTN w-100' style={{ padding: '13px' }}>Sign Up</Button>
                        </Box>

                        <Box className="d-flex justify-content-center mt-2">
                            <Typography variant='caption' style={{ fontSize: '15px' }}>Already have an account <Link to="/">Sign In</Link></Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Register