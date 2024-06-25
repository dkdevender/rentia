// import React, { useState } from 'react';
import React from 'react';
import Header from '../shared/Header';
import Homebanner from '../components/Homebanner';
import Service from '../components/Service';
import Aboutsec from '../components/Aboutsec';
import Coworking from '../components/Coworking';
import Colivings from '../components/Colivings';
import Contactfrom from '../components/Contactform';
import Getfromus from '../components/Getfromus';
import Branding from '../components/Branding';
import Footer from '../shared/Footer';
import '../App.css';
import '../assets/css/responsive.css';

// function getUser() {
//     let user = localStorage.getItem('user');
//     if (user) {
//         // user = JSON.parse(user);
//     } else {
//         user = null;
//     }
//     return user;
// }

const Home = () => {
    // const [user, setUser] = useState(getUser());

    // const logoutHandle = () => {
    //     localStorage.removeItem('user');
    //     setUser(null);
    // }

    return (
        <>
            {/* {user ? (
                <></>
            ) : (
                <>
                    <Box className='btnBox mt-4'>
                        <Button type='submit' className='cstmBTN w-100' style={{ padding: '13px' }} onClick={logoutHandle}>Logout</Button>
                    </Box>
                    <Header />
                    <Homebanner />
                    <Service />
                    <Aboutsec />
                    <Colivings />
                    <Contactfrom />
                    <Coworking />
                    <Getfromus />
                    <Branding />
                    <Footer />
                </>
            )} */}

            <Header />
            <Homebanner />
            <Service />
            <Aboutsec />
            <Colivings />
            <Contactfrom />
            <Coworking />
            <Getfromus />
            <Branding />
            <Footer />
        </>
    )
}

export default Home;