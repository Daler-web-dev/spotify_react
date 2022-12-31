import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgContext from "../../Contexts/backgroundContext";

function getAverageRGB(imgEl) {
	imgEl.crossOrigin = "";

	var blockSize = 5, // only visit every 5 pixels
		defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
		canvas = document.createElement("canvas"),
		context = canvas.getContext && canvas.getContext("2d"),
		data,
		width,
		height,
		i = -4,
		length,
		rgb = { r: 0, g: 0, b: 0 },
		count = 0;

	if (!context) {
		return defaultRGB;
	}

	height = canvas.height =
		imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
	width = canvas.width =
		imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

	context.drawImage(imgEl, 0, 0);

	try {
		data = context.getImageData(0, 0, width, height);
	} catch (e) {
		/* security error, img on diff domain */ alert("x");
		return defaultRGB;
	}

	length = data.data.length;

	while ((i += blockSize * 4) < length) {
		++count;
		rgb.r += data.data[i];
		rgb.g += data.data[i + 1];
		rgb.b += data.data[i + 2];
	}

	// ~~ used to floor values
	rgb.r = ~~(rgb.r / count);
	rgb.g = ~~(rgb.g / count);
	rgb.b = ~~(rgb.b / count);

	console.log(rgb);

	return rgb;
}

const MyPlaylist = ({ id, images, name, tracks }) => {
	const imgEl = useRef(null);
	const navigate = useNavigate("/playlist/name");

	const {setContextBg} = useContext(bgContext);

	const showPlaylist = () => {
		navigate("/playlist?id=" + name, { state: tracks.href });
	};


	return (
		// <Link to={"/playlist?id=" + id} state={} >
		<div
			onClick={showPlaylist}
			onMouseEnter={() => setContextBg(getAverageRGB(imgEl.current))}
			className="flex rounded-md max-sm:rounded-sm overflow-hidden bg-[#ffffff20] w-full cursor-pointer"
		>
			<img
				src={images[0]?.url}
				// src={play}
				ref={imgEl}
				className="w-[82px] max-sm:w-[50px] shadow-[0_20px_20px_black]"
				alt=""
			/>
			<div className="px-[21px] py-{28px} flex items-center justify-center ">
				<p className="font-bold text-xl max-sm:text-sm text-white truncate capitalize">
					{name}
				</p>
			</div>
		</div>
		// </Link>
	);
};

export default MyPlaylist;
