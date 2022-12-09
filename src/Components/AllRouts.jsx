import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home';

const AllRouts = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} >
                <Route index element={<Home/>} />
            </Route>
        </Routes>
    );
};


export default AllRouts;