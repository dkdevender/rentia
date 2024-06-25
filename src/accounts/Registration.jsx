import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import loginImg from '../assets/img/co_work.png'
import Logo from '../assets/img/Logo.jpg';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button, Form } from "react-bootstrap";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const Registration = () => {
    const [userName, setUserName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pin, setPin] = useState('');
    const [country, setCountry] = useState('');


    //Sign Up User Handle Function
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("https://666c6f3249dbc5d7145e027a.mockapi.io/register", {
            "userName": userName,
            "name": name,
            "email": email,
            "mobileNo": mobileNo,
            "gender": gender,
            "password": password,
            "state": setState,
            "city": city,
            "pin": pin,
            "country": country
        })
        console.log(response.data, "response.data")
        // navigate('/read', { replace: true });
    }

    // Gender Dropdown Handle Change Function
    const genderHandleChange = (event) => {
        setGender(event.target.value);
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

                        <Form onSubmit={handleSubmit}>
                            <Box className="gridSec">
                                <Grid container spacing={2}>
                                    <Grid item md={6}>
                                        <Box className='cstmFormGroup'>
                                            <FormControl sx={{ width: '100%' }}>
                                                <label className='mb-1'>User Name</label>
                                                <OutlinedInput
                                                    className="cstmInputField ps-2"
                                                    placeholder='Enter Email Id'
                                                    onChange={(e) => { setUserName(e.target.value) }}
                                                    value={userName}
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
                                                    onChange={(e) => { setName(e.target.value) }}
                                                    value={name}
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
                                                    onChange={(e) => { setEmail(e.target.value) }}
                                                    value={email}
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
                                                    onChange={(e) => { setMobileNo(e.target.value) }}
                                                    value={mobileNo}
                                                />
                                            </FormControl>
                                        </Box>
                                    </Grid>

                                    <Grid item md={6}>
                                        <Box className='cstmFormGroup'>
                                            <FormControl sx={{ width: '100%' }}>
                                                <label className='mb-1'>Gender</label>
                                                <Select
                                                    onChange={genderHandleChange}
                                                    displayEmpty
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                    className='cstmInput'
                                                >
                                                    <MenuItem hidden>Select Gender</MenuItem>
                                                    <MenuItem value="Male">Male</MenuItem>
                                                    <MenuItem value="Female">Female</MenuItem>
                                                    <MenuItem value="Other">Other</MenuItem>
                                                </Select>
                                                {/* 
                                                <OutlinedInput
                                                    className="cstmInputField ps-2"
                                                    placeholder='Enter Gender'
                                                    onChange={(e) => { setGender(e.target.value) }}
                                                    value={gender}
                                                /> */}
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
                                                    onChange={(e) => { setPassword(e.target.value) }}
                                                    value={password}
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
                                                    onChange={(e) => { setState(e.target.value) }}
                                                    value={state}
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
                                                    onChange={(e) => { setCity(e.target.value) }}
                                                    value={city}
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
                                                    onChange={(e) => { setPin(e.target.value) }}
                                                    value={pin}
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
                                                    onChange={(e) => { setCountry(e.target.value) }}
                                                    value={country}
                                                />
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box className='btnBox mt-4'>
                                <Button type='submit' className='cstmBTN w-100' style={{ padding: '13px' }}>Sign Up</Button>
                                {/* <Button onClick={(e) => dispatch(signUpUser())} className='cstmBTN w-100' style={{ padding: '13px' }}>Sign Up</Button> */}
                            </Box>
                        </Form>

                        <Box className="d-flex justify-content-center mt-2">
                            <Typography variant='caption' style={{ fontSize: '15px' }}>Already have an account <Link to="/Login">Sign In</Link></Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Registration