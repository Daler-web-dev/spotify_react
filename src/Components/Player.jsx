import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { TfiControlShuffle } from 'react-icons/tfi';
import { RiRepeat2Line } from 'react-icons/ri';
import { MdSkipPrevious } from 'react-icons/md';
import { MdSkipNext } from 'react-icons/md';
import { MdPauseCircle } from 'react-icons/md';
import { MdPlayCircle } from 'react-icons/md';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { TbDevices2 } from 'react-icons/tb';
import { TbVolume } from 'react-icons/tb';
import { MdOpenInFull } from 'react-icons/md';
import currentTrack from "../Contexts/currentTrack";

const Player = () => {

    const {track, changeTrack} = useContext(currentTrack)

    let [like, setLike] = useState(true)
    let [pause, setPause] = useState(track.isPlaying)
    let [image, setImage] = useState(false)

    console.log(track.isPlaying);

    useEffect(() => {
        const audio = document.querySelector('audio')
        // pause ? audio.play() : audio.pause()
        if(pause) {
            audio.play()
            changeTrack({...track, isPlaying: true})
        } else {
            audio.pause()
            changeTrack({...track, isPlaying: false})
        }

    }, [pause])


    useEffect(() => {
        setPause(track.isPlaying)
    }, [track.isPlaying])

    const handleSong = () => {
        setPause(!pause)
    }

    return ( 
        
        <div className="fixed bottom-0 left-0 md:bg-[#181818] h-32 w-full flex justify-between items-center p-5">
            <div className="left flex gap-2 items-center">
                {image ? <img src="https://i.scdn.co/image/ab67616d00001e020eb9240c0c5bbba4a0495587" className="bigImg" onClick={() => setImage(!image)}/> : <img src="https://i.scdn.co/image/ab67616d00001e020eb9240c0c5bbba4a0495587" className="w-20"  onClick={() => setImage(!image)}/>}           
                <div className="flex text-white flex-col">
                    <p>Butterfly Effect</p>
                    <p className="text-gray-400">Travis Scott</p>
                </div>
                {like ? <AiFillHeart color="#63CF6C" size={25} className="ml-6" onClick={() => setLike(!like)}/> : <AiOutlineHeart className="ml-6" color="white" size={25} onClick={() => setLike(!like)}/> }
            </div>
            <div className="mid flex flex-col items-center">
                <div className="top flex gap-2 items-center">
                    <TfiControlShuffle color="c4c4c4" size={30}/>
                    <MdSkipPrevious color="c4c4c4" size={35}/>

                    {pause ? <MdPauseCircle color="white" size={45} onClick={handleSong}/> : <MdPlayCircle color="white" size={45} onClick={handleSong}/> }
                    
                    <MdSkipNext color="c4c4c4" size={35}/>
                    <RiRepeat2Line color="c4c4c4" size={30}/>
                </div>
                <div className="bot">
                    <audio src={track?.track} controls autoPlay/>
                </div>
            </div>
            <div className="right flex gap-2 items-center">
                <HiOutlineQueueList color="white" size={20}/>
                <TbDevices2 color="white" size={20}/>
                <TbVolume color="white" size={20}/>
                <input type="range" className="input2 w-full"  style={{width: "100px"}}/>
                <MdOpenInFull color="white" size={20}/>
            </div>
        </div>

    );
}
export default Player;
 