import { createContext } from "react";

const spotify = createContext({
    client_id: "ae9cdac89b9c4b3a83a1095bab1c28bb",
    REDIRECT_URI: "http://localhost:3000",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token",
    token: ""
})


export default spotify