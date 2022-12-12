import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MainPLaylist = (item) => {

    const navigate = useNavigate()
	const data = item.data;
	const image = data.images[1]?.url


	const goToPlaylist = () => {
		navigate('/playlist', {state: data.href})
		console.log(navigate);
	}

    return ( 
            <div className="plalist" onClick={goToPlaylist}>
                <img src={`${image}`} alt="" />
                <p>{data.name}</p>
            </div>
        
     );
}
 
export default MainPLaylist;