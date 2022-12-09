import React, { useContext } from 'react';
import spotify from '../Contexts/spotifycontext';


const Login = () => {
    const {client_id,REDIRECT_URI,AUTH_ENDPOINT,RESPONSE_TYPE} = useContext(spotify)

    return (
        <div>
            <a href={`${AUTH_ENDPOINT}?client_id=${client_id}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                <button>Log in</button>
            </a>
        </div>
    );
};


export default Login;