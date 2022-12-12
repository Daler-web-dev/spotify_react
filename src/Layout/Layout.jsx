import React from 'react';
import {Outlet }from 'react-router-dom'
import Aside from '../Components/Aside';
import FriendList from '../Components/FriendList';
import Header from '../Components/Header';

const Layout = () => {
    return (
        <>
            <Header>header</Header>            
            <main>
                <Aside/>
                <FriendList/>
                <Outlet/>
            </main>
        </>
    );
};


export default Layout;