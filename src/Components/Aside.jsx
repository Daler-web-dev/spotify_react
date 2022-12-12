import React from "react";
import { GoPlus } from 'react-icons/go';
import { HiHeart } from 'react-icons/hi';
import { Link } from "react-router-dom";

const Aside = () => {

	const arrforraw = [
		{
			img: "/icons/Home.svg",
			text: "Home"
		},
		{
			img: "/icons/Search.svg",
			text: "Search"
		},
		{
			img: "/icons/Library.svg",
			text: "Library"
		}
	]


    return ( 
        <aside>
            <div className="topbox">
                <nav>
                <Link to="/">
                    <div className="row">
                        <img src="/icons/home.svg" alt="" />
                        <span>Home</span>
                    </div>
                </Link>
                <div className="row">
                    <img src="/icons/search.svg" alt="" />
                    <span>Search</span>
                </div>
                <div className="row">
                    <img src="/icons/library.svg" alt="" />
                    <span>Library</span>
                </div>
                </nav>
                <div className="asideFuncs">
                    <div className="createPlaylist">
                        <div>
                            <GoPlus size={20}/>
                        </div>
                        <p>Create Playlist</p>
                    </div>
                    <div className="likedSongs">
                        <div>
                            <HiHeart size={20}/>
                        </div>
                        <p>Liked Songs</p>
                    </div>
                </div>
            </div>
            <div className="links">
                <a href="#">Chill Mix</a>
                <a href="#">Insta Hits</a>
                <a href="#">Your Top Songs 2021</a>
                <a href="#">Mellow Songs</a>
                <a href="#">BG Afro “Select” Vibes</a>
            </div>
        </aside>
     );
}
 
export default Aside ;