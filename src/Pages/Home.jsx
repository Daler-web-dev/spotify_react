import MyPlaylist from '../Components/children/MyPlaylist';
import PlaylistList from '../Components/Playlistlist';


const HomePage = () => {
    return (
        <section className="">
            <div className="mt-[30px]">
                <h1 className="max-sm:text-2xl font-bold text-[39px] text-white mb-[30px]">Good afternoon</h1>
                <div className="2xl:grid-cols-3 max-sm:grid-cols-1 grid grid-cols-2 gap-4 ">
                    <MyPlaylist />
                    <MyPlaylist />
                    <MyPlaylist />
                    <MyPlaylist />
                    <MyPlaylist />
                    <MyPlaylist />
                </div>
            </div>
            <PlaylistList />
        </section>
    );
}

export default HomePage;