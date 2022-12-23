import { useContext } from "react";
import { useEffect, useState } from "react";
import MyPlaylist from "../Components/children/MyPlaylist";
import PlaylistList from "../Components/Playlistlist";
import TOKEN from "../Contexts/token";
import { useHttp } from "../hook/http.hook";
import Loading from "../Components/children/Loading";
import {Helmet} from "react-helmet";

const Home = () => {
	const [plaslists, setPlayslits] = useState([]);
	const { loading, error, request } = useHttp();

	const token = useContext(TOKEN);

	useEffect(() => {
		request(
			"https://api.spotify.com/v1/me/playlists?limit=6&offset=0",
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then((res) => {
			setPlayslits(res.items);
			console.log(res.items);
		});
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
						{plaslists.map((item) => (
							<MyPlaylist key={item.id} {...item} />
						))}
					</div>
				</div>
				<PlaylistList />
			</section>
		</>
	);
};

export default Home;
