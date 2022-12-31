import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Player from "../Components/Player";
import Login from "../Components/Login";
import TOKEN from "../Contexts/token";
import currentTrack from "../Contexts/currentTrack";
import Aside from "../Components/Aside";
import Header from "../Components/Header";
import { useHttp } from "../hook/http.hook";
import bgContext from "../Contexts/backgroundContext";

const Layout = () => {
	const [token, setToken] = useState();
	const [track, setTrack] = useState({
		isPLaying: false,
		track: "",
	});
	const [user, setUser] = useState(null)
	const [bgColor, setBgColor] = useState('')

	const {request} = useHttp()

	const changeTrack = (data) => {
		setTrack(data);
	};

	const setContextBg = (data) => {
		setBgColor(data)
	}

	useEffect(() => {
		const hash = window.location.hash;
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

		setToken(token);

		request('https://api.spotify.com/v1/me', "GET", null,
		{
			Authorization: `Bearer ${token}`,
		}).then(res => setUser(res))
	}, []);
	
	if (!token) {
		return <Login />;
	}

	let rgb = `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`

	return (
		<>
		<bgContext.Provider value={{bgColor, setContextBg}} >
			<currentTrack.Provider value={{ track, changeTrack }}>
				<div className='h-[510px] w-full absolute z-[-1] left-0 top-0 bg-gradient-to-b from-[#37373720] to-[#121212]'
					style={{background: `linear-gradient(${rgb}, #121212)`}}
				></div>
				<div className="flex-1 h-fit px-6 max-sm:px-3">
					<Header user={user} />
					<Aside />
					<main className='pb-40 md:pl-[18%] pl-[0%] ' >
						<TOKEN.Provider value={token}>
							    <Outlet />
						</TOKEN.Provider>
					</main>
					<Player />
				</div>
			</currentTrack.Provider>
		</bgContext.Provider>
		</>
	);
};

export default Layout;