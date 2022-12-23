import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PlaylistOverview from "../Components/PlaylistOverview";
import SongsList from "../Components/SongsList";
import TOKEN from "../Contexts/token";
import { useHttp } from "../hook/http.hook";
import { Audio } from 'react-loader-spinner'
import Loading from "../Components/children/Loading";
import {Helmet} from "react-helmet";



const LikedSongs = () => {
    const [tracks, setTracks] = useState([]);
    const {error, loading, request} = useHttp()
    const token = useContext(TOKEN)
    const {state} = useLocation()
    
    useEffect(() => {
        request(state, "GET", null, {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        })
        .then(res => setTracks(res.items))

    }, []);

    if(loading) {
        return <Loading/>
    }
    if(error) {
        return <span>ERROR</span>
    }

    return (
        <div>
            <Helmet>
                <title>Spotify - Playlist</title>
            </Helmet>
            <PlaylistOverview />
            <SongsList tracks={tracks} />
        </div>
    );
}

export default LikedSongs;  