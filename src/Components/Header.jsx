import { BsClockHistory } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SlBell } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const Header = () => {
	const navigate = useNavigate();

	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const localStorageClear = () => {
		localStorage.clear()
		window.location = window.location.href
	}

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

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

				<Box sx={{ flexGrow: 0 }}>
					<Tooltip title="Open settings" sx={{ background: '#555555' }} >
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: '45px', display: 'flex', flexDirection: 'column', }}
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						<MenuItem onClick={handleCloseUserMenu}>
							<Typography textAlign="center">Profile</Typography>
						</MenuItem>
						<MenuItem onClick={handleCloseUserMenu}>
							<Typography textAlign="center">Account</Typography>
						</MenuItem>
						<MenuItem onClick={handleCloseUserMenu}>
							<Typography textAlign="center">Dashboard</Typography>
						</MenuItem>
						<MenuItem onClick={handleCloseUserMenu}>
							<Typography onClick={localStorageClear} textAlign="center">log off</Typography>
						</MenuItem>
					</Menu>
				</Box>

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