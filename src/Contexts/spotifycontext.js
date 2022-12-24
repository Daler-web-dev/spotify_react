import { createContext } from "react";

const spotify = createContext({
    client_id: "f2e286ece2574ad6b334b55d03764483",
    REDIRECT_URI: "https://63a5c97198831415ce0aeda9--tiny-praline-96ec74.netlify.app/",
    AUTH_ENDPOINT: "https://weprospoty.netlify.app/",
    RESPONSE_TYPE: "token",
    token: ""
})


export default spotify