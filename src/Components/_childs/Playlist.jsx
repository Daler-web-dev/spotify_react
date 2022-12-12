import React from "react";

const Playlist = ({data}) => {
    return ( 

        <div className="box">
            <img src={`${data.images[1]?.url}`} alt="" />
            <div className="text">
                <p className="title">{data.name}</p>
                <span className="dsc">{`Created by ${data.owner.display_name}`}</span>
            </div>
        </div>
     );
}
 
export default Playlist;