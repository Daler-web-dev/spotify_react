import { useContext, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import currentTrack from "../../Contexts/currentTrack";
import songImg from "../../resources/songImg.jpg";

const Song = ({ item }) => {
	const { track, changeTrack } = useContext(currentTrack);

	const clickSong = () => {
		localStorage.setItem("lastTrack", JSON.stringify(item));
		let data = {
			isPlaying: true,
			track: item,
		};

		changeTrack(data);
	};

	return (
		<tr
			onClick={clickSong}
			className="max-sm:gap-3 flex gap-5 text-white font-bold items-center"
		>
			<td className="flex-0 max-sm:hiiden">1</td>
			<td className="flex-0">
				<img
					className="max-sm:text-[14px] max-sm:w-11 max-sm:h-11 w-[52px] h-[52px]"
					src={item?.album?.images[0]?.url}
					alt=""
				/>
			</td>
			<td className="flex-auto flex flex-col">
				<span className="max-sm:text-[14px] truncate">{item.name}</span>
				<span className="text-[#B3B3B3] text-[14px] max-sm:text-[12px] truncate">
					{item.artists[0].name}
				</span>
			</td>
			<td className="flex-auto max-sm:hidden">{item.artists[0].name}</td>
			<td className="flex-auto"></td>
			<td className="flex-0">
				<AiOutlineHeart size="22px" />
			</td>
			<td className="flex-0 max-sm:hidden">2 : 12</td>
			<td className="max-[350px]:hidden flex-0 text-lg font-bold hidden max-sm:block rotate-90">
				. . .
			</td>
		</tr>
	);
};

export default Song;
