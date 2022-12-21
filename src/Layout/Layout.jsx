import React, { useEffect, useState } from 'react';
import {Link, Outlet }from 'react-router-dom'
import {HiHome, HiSearch} from 'react-icons/hi'
import {BiLibrary} from 'react-icons/bi'
import {GoDiffAdded} from 'react-icons/go'
import {FiHeart} from 'react-icons/fi'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import Player from '../Components/Player';
import Login from '../Components/Login';
import TOKEN from '../Contexts/token';

const Layout = () => {

    const [token, setToken] = useState()

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token");

        if (!token && hash) {
            token = hash
                .substring(1)
                .split("&")
                .find((elem) => elem.startsWith("access_token"))
                .split("=")[1];
        
                window.location.href = "";
                window.localStorage.setItem("token", token);
        }

        setToken(token)

    }, []);

    if(!token) {
        return (
            <Login/>
        )
    }

    return (
        <>
            <div className="h-[510px] w-full absolute z-[-1] left-0 top-0 bg-gradient-to-b from-[#3333A3] to-[#121212]"></div>
            <header className='pl-[22%] flex justify-between p-4'  >
                <div className="flex gap-4">
                    <button className='bg-black rounded-full p-1' ><IoIosArrowBack color='white' size="30" /></button>
                    <button className='bg-black rounded-full p-1' ><IoIosArrowForward color='white' size="30" /></button>
                </div>
                <div></div>
            </header>
            <main className='w-full' >
                <aside className='w-[20%] bg-black py-[70px] px-[30px] h-[100%] fixed top-0'>
                    <nav className='flex flex-col' >
                        <Link to="/" ><button className='navBtn' ><HiHome size={32} />Home</button></Link>
                        <Link to="" ><button className='navBtn' ><HiSearch size={32} />Search</button></Link>
                        <Link to="" ><button className='navBtn' ><BiLibrary size={32} />Your Library</button></Link>
                        <div className='h-[20px]' ></div>
                        <Link to="" ><button className='navBtn' ><GoDiffAdded size={32} />Create Playlist</button></Link>
                        <Link to="/playlist" ><button className='navBtn' ><FiHeart size={32} />Liked Songs</button></Link>
                        <hr style={{ opacity: .5, marginTop: "20px" }} />
                    </nav>
                </aside>
                <section className='pl-[22%]' >
                    <TOKEN.Provider value={token} >
                        <Outlet />
                    </TOKEN.Provider>
                </section>
            </main>
            <Player/>
        </>
    );
};


export default Layout;