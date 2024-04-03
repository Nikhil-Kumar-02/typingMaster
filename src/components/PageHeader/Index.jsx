import React from "react"
import './index.css'
import logo from '../../images/logo.jpeg'
import { FaRegKeyboard } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoInformationOutline } from "react-icons/io5";

const Header = (props) => {
  return (
    <div className="HeaderContainer">
      <img src={logo} height={40}></img>
      <h2>FunkyType</h2>
      <FaRegKeyboard></FaRegKeyboard>
      <FaCrown></FaCrown>
      <IoInformationOutline></IoInformationOutline>
      <IoMdSettings></IoMdSettings>
    </div>
  )
};

export default Header;
