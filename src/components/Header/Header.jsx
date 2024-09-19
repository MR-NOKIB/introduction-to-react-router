/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">contact</Link>
        </div>
    );
};

export default Header;