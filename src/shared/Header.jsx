import React from 'react'
import Logo from '../assets/img/Logo.jpg';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Header = () => {
    // const [navlinkactive, setNavlinkactive] = useState('');

    return (
        <>
            <Box className="topHeaderSec">
                <Container className='cstmContainer'>
                    <Box className="topHeaderSec d-flex justify-content-between p-0">
                        <Link to='/'>
                            <EmailIcon className='Icon' />
                            info@rentia.in
                        </Link>

                        <Box className="header_BtnLink">
                            <Link to='/Login' className='cstmBTN'>Login</Link>
                            <Typography variant='caption' style={{ margin: '0px 5px' }}>/</Typography>
                            <Link to='/Registration' className='cstmBTN'>Register</Link>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Box className='headerSec'>
                <Container className='cstmContainer'>
                    <Box className='cstmNavbarSec'>
                        <Link to='/' className='logoLink'>
                            <img src={Logo} className='img-fluid' />
                        </Link>

                        <Box className="rightPanelHeader">
                            <Box className='navbarMenu'>
                                <Link to='/' className='nav-item nav-link'>Home</Link>
                                <Link to='/About' className='nav-item nav-link'>About Us</Link>
                                <Link to='/Listing' className='nav-item nav-link'>Coliving</Link>
                                {/* <Link to='/Listing' className='nav-item nav-link'>Coworking</Link>
                                <Link to='/' className='nav-item nav-link'>Virtual Office</Link> */}
                                <Link to='/' className='nav-item nav-link'>Knowledge</Link>
                            </Box>

                            <Box className='btnBox'>
                                <Link to='/' className='cstmBTN'>List Property</Link>
                                <Link to='/' className='cstmBTN'><CallIcon className='Icon' />Request Call</Link>
                            </Box>
                        </Box>

                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Header
