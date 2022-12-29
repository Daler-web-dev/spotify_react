import PlaylistCard from "../Components/children/PlaylistCard";

const PlaylistList = ({plaslists, errorMsg}) => {
	return (
		<div className="mt-[50px] w-full">
			<div className="flex items-center justify-between">
				<h2 className="max-sm:text-[22px] text-white text-2xl font-bold">
					Your top mixes
				</h2>
				<a
					href="@"
					className="max-sm:text-[14px] text-[#ADADAD] text-base font-bold uppercase"
				>
					See all
				</a>
			</div>
			<div className="max-2xl:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[400px]:grid-cols-1 w-full max-w-[1400px] mt-5 grid grid-cols-5 gap-6">
				{
					errorMsg.length > 0 ? <span className="error-text" >{errorMsg}</span> :
					plaslists.map(item => <PlaylistCard key={item.id} {...item} />)
				}
			</div>
		</div>
	);
};

export default PlaylistList;
