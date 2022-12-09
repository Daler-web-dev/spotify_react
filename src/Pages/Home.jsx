import React, { useEffect, useState } from 'react';
import Login from '../Components/Login';

const Home = () => {
    const [token, setToken] = useState()

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

    }, []);
    
    if(!token) {
        return (
            <Login/>
        )
    }

    return (
        <div>
            Home page
        </div>
    );
};


export default Home;