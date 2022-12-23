import { createContext } from "react";

const currentTrack = createContext({
    isPlaying: false,
    track: ""
})

export default currentTrack