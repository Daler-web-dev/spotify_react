import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import Playslist from '../Pages/Playslist';
import Settings from '../Pages/Settings';

const AllRouts = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Home/>} />
                <Route path="/playlist" element={<Playslist/>} />
                <Route path='/settings' element={<Settings/>}/>
            </Route>
        </Routes>
    );
};


export default AllRouts;