import React from "react";
import { MdArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'
import { MdArrowDropDown } from 'react-icons/md';

const Header = ({hide}) => {

    const naviagate = useNavigate()

    const goBack = () => naviagate(-1)
    const next = () => naviagate(1)
    
    
    return ( 
        <header  style={hide == false ? {width: "64%"} : {width: "82%"}}>
            <div className="btns">
                <div className="prev" onClick={goBack}><MdArrowBackIosNew size={25}/></div>
                <div className="next" onClick={next}><MdArrowBackIosNew size={25}/></div>
            </div>
            <div className="account">
                <img src="/icons/chelik.png" alt="" />
                <p>davedirect3</p>
                <MdArrowDropDown size={40}/>
            </div>
        </header>
     );
}
 
export default Header;