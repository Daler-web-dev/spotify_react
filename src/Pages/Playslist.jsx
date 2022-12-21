import { useContext, useEffect } from "react";
import PlaylistOverview from "../Components/PlaylistOverview";
import SongsList from "../Components/SongsList";
import TOKEN from "../Contexts/token";
import { useHttp } from "../hook/http.hook";

const LikedSongs = () => {
    const {error, loading, request} = useHttp()

    const token = useContext(TOKEN)
    
    useEffect(() => {
        request("https://api.spotify.com/v1/tracks?market=uz&ids=4CeBKWWLXMrQMFsP0Q0K3V%2C5m5rShfBQk4UpG7vpsEKzf", "GET", null, {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        })
        .then(res => console.log(res))

    }, []);

    if(loading) {
        return <span>loading...</span>
    }
    if(error) {
        return <span>ERROR</span>
    }

    return (
        <div>
            <PlaylistOverview />
            <SongsList />
        </div>
    );
}

export default LikedSongs;  