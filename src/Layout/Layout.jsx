import React from 'react';
import {Outlet }from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header className="header" >header</header>            
            <main>
                <aside>menu</aside>
                <Outlet/>
            </main>
            <footer>footer</footer>
        </>
    );
};


export default Layout;