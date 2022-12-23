import { createContext } from "react";

console.log(JSON.parse(localStorage.getItem('lastTrack')), 'context');

const currentTrack = createContext(JSON.parse(localStorage.getItem('lastTrack')) || {
    isPlaying: false,
    track: ""
})

export default currentTrack