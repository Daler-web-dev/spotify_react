import React, { useEffect, useState } from 'react';
import Login from '../Components/Login';
import { Link } from "react-router-dom";
import MainPLaylist from "../Components/_childs/MainPLaylist";
import Aside from "../Components/Aside";
import FriendList from "../Components/FriendList";
import Header from "../Components/Header";
import Playlist from '../Components/_childs/Playlist';

const Home = () => {
    const [data, setData] = useState([]);
    const [token, setToken] = useState()
    const [hide , sethide] = useState(false)
    const [less, setless] = useState(false)
    const [less2, setless2] = useState(false)

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

        if(token) {
			fetch('https://api.spotify.com/v1/me/playlists?limit=20&offset=0', {
				headers: {
					Authorization: `Bearer ${token}`,
				}
			})
			.then(res => res.json())
			.then(data => setData(data?.items))
		}

    }, []);
    
    if(!token) {
        return (
            <Login/>
        )
    }

    return (
        <>
        <main style={hide == false ? {width: "64%"} : {width: "82%"}}>
            <h1>Good evening</h1>
            <div className="formainpalylists">
                {data.map((item, index) => <Link to="/playlist"><MainPLaylist data={item} key={index}/></Link>)}
            </div>

            <div className="playtitle">
                <h1>Your top mixes</h1>
                {less === false ? <p onClick={() => setless(!less)}>SEE ALL</p> : <p onClick={() => setless(!less)}>SEE LESS</p>}
            </div>

            <div className="forplaylists">
                {less === false ? data.slice(0,4).map((item, index) => <Playlist data={item} key={index}/>) :  data.map((item, index) => <Playlist data={item} key={index}/>)}
            
            </div>
            <div className="playtitle">
                <h1>Recently played</h1>
                {less2 === false ? <p onClick={() => setless2(!less2)}>SEE ALL</p> : <p onClick={() => setless2(!less2)}>SEE LESS</p>}
            </div>
            <div className="recently">
                {less2 === false ? data.slice(0,4).map((item, index) => <Playlist data={item} key={index}/>) :  data.map((item, index) => <Playlist data={item} key={index}/>)}
            </div>

        </main>
        </>
    );
};


export default Home;