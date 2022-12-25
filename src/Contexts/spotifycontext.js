import { createContext } from "react";

const spotify = createContext({
    client_id: "45891db33d6d48f18319373c8fa19f53",
    REDIRECT_URI: "http://localhost:3000",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token",
    token: ""
})

// https://weprospoty.netlify.app/
// f2e286ece2574ad6b334b55d03764483


export default spotify