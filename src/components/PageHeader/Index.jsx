import React from "react"
import './index.css'
import logo from '../../images/logo.jpeg'
import { FaRegKeyboard } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Header = (props) => {
  return (
    <div className="HeaderContainer">
      <img src={logo} height={40}></img>
      <h2>Funky Type</h2>
      <FaRegKeyboard></FaRegKeyboard>
      <FaCrown></FaCrown>
      <IoMdSettings></IoMdSettings>
    </div>
  )
};

export default Header;
