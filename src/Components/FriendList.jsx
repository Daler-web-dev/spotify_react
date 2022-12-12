import React from "react";


const FriendList = ({sethide, hide}) => {
    return ( 
        <div className="leftAside" style={hide ? {right: "-18%"} : {right: "0%"}}>
            <div className="head">
                <p>Friend Activity</p>
                <div className="icons">
                    <img src="/icons/cross.svg" alt="" onClick={() => sethide(!hide)} />
                </div>
            </div>
            <p className="leftdsc1">Let friends and followers on Spotify see what you’re listening to.</p>

            <img src="/icons/friend.png" alt="" />

            <p className="leftdsc2">Go to Settings / Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
            <button className="stngs">SETTINGS</button>
        </div>
     );
}
 
export default FriendList;