import React from 'react';
import {Link, Outlet, useLocation }from 'react-router-dom'
import {HiHome, HiSearch} from 'react-icons/hi'
import {BiLibrary} from 'react-icons/bi'
import {GoDiffAdded} from 'react-icons/go'
import {FiHeart, FiSearch} from 'react-icons/fi'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'


const Layout = () => {
    
    const location = useLocation()


    return (
        <>
            <header className='w-[50%] pl-[22%] fixed top-0 flex justify-between p-4 z-10'  >
                <div className="flex gap-4 w-[100%]">
                    <button className='bg-black rounded-full p-1' ><IoIosArrowBack color='white' size="30" /></button>    
                    <button className='bg-black rounded-full p-1' ><IoIosArrowForward color='white' size="30" /></button> 
                    <div className={location.pathname === "/search" ? "search" : "hidden"}>
                        <FiSearch size="30px"/>
                        <input type="text" className='w-full h-[80%] outline-none p-[5px] text-xl' placeholder='Что хочешь послушать?'/>
                    </div>   
                </div>    
                <div></div>
            </header>            
            <main className='w-full' >
                <aside className='w-[20%] bg-black py-[70px] px-[30px] h-[100%] fixed top-0'>
                    <nav className='flex flex-col' >
                        <Link to="/" ><button className='navBtn' ><HiHome size={32}/>Home</button></Link> 
                        <Link to="search" ><button className='navBtn' ><HiSearch size={32}/>Search</button></Link> 
                        <Link to="" ><button className='navBtn' ><BiLibrary size={32}/>Your Library</button></Link> 
                        <div className='h-[20px]' ></div>
                        <Link to="" ><button className='navBtn' ><GoDiffAdded  size={32}/>Create Playlist</button></Link>
                        <Link to="/playlist" ><button className='navBtn' ><FiHeart size={32}/>Liked Songs</button></Link>
                        <hr style={{opacity: .5, marginTop: "20px" }} />
                
                    </nav>
                </aside>
                <section className='pl-[20%]' >
                    <Outlet/>
                </section>
            </main>
            <footer className='fixed bottom-0 h-[100px] w-full bg-[#181818]' >

            </footer>
        </>
    );
};


export default Layout;