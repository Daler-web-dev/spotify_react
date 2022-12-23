import { createContext } from "react";

const spotify = createContext({
    client_id: "6a42aacaee9c4cc0ae30355af62c5593",
    REDIRECT_URI: "http://localhost:3000",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token",
    token: ""
})


export default spotify