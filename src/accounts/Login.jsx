import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import loginImg from '../assets/img/co_work.png'
import Logo from '../assets/img/Logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/Slice/UserLoginSlice';



const Login = () => {
    //Login State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { loading, error } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    // const navigate = useNavigate();

    //Login Handle Function
    const handleLogin = (e) => {
        e.preventDefault();

        let userCredential = {
            email, password
        }

        dispatch(loginUser(userCredential)).then((result) => {
            if (result.payload) {
                setEmail('');
                setPassword('');
                // navigate('/')
            }
        })
    }

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
                    <Box className="loginFormBox">
                        <Typography variant='h2'>Sign into your account</Typography>

                        <Form onSubmit={handleLogin}>
                            <Box className='cstmFormGroup mb-3'>
                                <FormControl sx={{ width: '100%' }}>
                                    <label className='mb-1'>Email Id</label>
                                    <OutlinedInput
                                        className="cstmInputField px-2"
                                        placeholder='Enter Email Id'
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <EmailIcon style={{ color: '#060a30' }} />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>

                            <Box className='cstmFormGroup'>
                                <FormControl sx={{ width: '100%' }}>
                                    <label className='mb-1'>Password</label>
                                    <OutlinedInput
                                        className="cstmInputField px-2"
                                        placeholder='Enter Password'
                                        type='password'
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <HttpsIcon style={{ color: '#060a30' }} />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>

                            <Box className='btnBox mt-4'>
                                <Button type='submit' className='cstmBTN w-100' style={{ padding: '13px' }}>
                                    {loading ? 'Loading...' : 'Sign In'}
                                </Button>
                            </Box>
                            {error && (
                                <div className='alert alert-danger mt-3' role='alert'>{error}</div>
                            )}
                        </Form>

                        <Box className="d-flex justify-content-center mt-2">
                            <Typography variant='caption' style={{ fontSize: '15px' }}>Don't have an account <Link to="/Registration">Sign Up</Link></Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Login