/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <h2>Helloooo from root/home</h2>
            <Header></Header>
            {
                navigation.state === 'loading' ? 'Loading...' :  <Outlet></Outlet>
            }
           
            <Footer></Footer>
        </div>
    );
};

export default Home;