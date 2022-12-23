import { BsClockHistory } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { SlBell } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";

// import ava from "../resources/ava.svg";

const Header = () => {
	const navigate = useNavigate();

	return (
		<header className="max-lg:py-4 max-sm::py-3 text-white py-5 flex items-center justify-between md:pl-[18%] pl-[0%]">
			<div className="flex items-center">
				<button
					onClick={() => navigate(-1)}
					className="max-sm:hidden p-[4px] bg-[#00000090] rounded-full mr-5"
				>
					<IoIosArrowBack size="32" />
				</button>
				<button
					onClick={() => navigate(1)}
					className="max-sm:hidden p-[4px] bg-[#00000090] rounded-full"
				>
					<IoIosArrowForward size="32" />
				</button>
				<p className="max-sm:block hidden text-2xl font-semibold">
					hello world
				</p>
			</div>
			<div className="max-sm:flex max-sm:gap-2 max-sm: w-fit">
				<div className="max-sm:hidden max-w-[190px] flex items-center bg-[#00000080] rounded-3xl p-1 cursor-pointer">
					<img src={"ava"} alt="ava" />
					<span className="mx-3 font-semibold">davedirect</span>
					<MdArrowDropDown size="30px" />
				</div>
				<Link>
					<button className="hidden max-sm:block">
						<SlBell size="25px" color="#ffffff" />
					</button>
				</Link>
				<Link>
					<button className="hidden max-sm:block">
						<BsClockHistory size="25px" color="#ffffff" />
					</button>
				</Link>
				<Link>
					<button className="hidden max-sm:block">
						<FiSettings size="25px" color="#ffffff" />
					</button>
				</Link>
			</div>
		</header>
	);
};

export default Header;
