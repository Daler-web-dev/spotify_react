import { useContext } from "react";
import { useEffect, useState } from "react";
import MyPlaylist from "../Components/children/MyPlaylist";
import PlaylistList from "../Components/Playlistlist";
import TOKEN from "../Contexts/token";
import { useHttp } from "../hook/http.hook";
import Loading from "../Components/children/Loading";
import {Helmet} from "react-helmet-async";

const Home = () => {
	const [plaslists, setPlayslits] = useState([]);
	const [myPlaslists, setMyPlayslits] = useState([]);
	const [errorMsg, setErrorMsg] = useState('');
	
	const { loading, error, request } = useHttp();

	const token = useContext(TOKEN);

	let date = new Date()
	let month = date.getMonth() + 1
	let timestamp = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + date.getHours() + ":" + date.getMinutes() + " UTC"
	
	
	function dateIsValid(date) {
		return !Number.isNaN(new Date(date).getTime());
	}
	timestamp = dateIsValid(timestamp) ? new Date(timestamp).toISOString() : setErrorMsg('Not a valid date. Please try again')
	
	useEffect(() => {
		request(
			"https://api.spotify.com/v1/me/playlists?limit=50&offset=0",
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then((res) => {
			setMyPlayslits(res.items);
		});
		request(`https://api.spotify.com/v1/browse/featured-playlists?country=UZ&locale=uz&timestamp=${timestamp}&limit=10&offset=5`, 
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then(res => {
			setPlayslits(res?.playlists?.items)
		})

	}, []);

	if (loading) {
		return <Loading />;
	}
	if (error) {
		return <span>error</span>;
	}

	return (
		<>
            <Helmet>
                <title>Spotify - Home</title>
            </Helmet>
			<section className="">
				<div className="mt-[30px]">
					<h1 className="max-sm:text-2xl font-bold text-[39px] text-white mb-[30px]">
						Good afternoon
					</h1>
					<div className="2xl:grid-cols-3 max-sm:grid-cols-1 grid grid-cols-2 gap-4 ">
						{
							errorMsg.length > 0 ? <span className="text-[red] text-[24px]" >{errorMsg}</span> : myPlaslists.map((item) => (
								<MyPlaylist key={item.id} {...item} />
							))
						}
					</div>
				</div>
				<PlaylistList errorMsg={errorMsg} plaslists={plaslists} />
			</section>
		</>
	);
};

export default Home;
