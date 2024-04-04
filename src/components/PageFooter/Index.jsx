import React from "react"
import './index.css'
import { MdContactPhone } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";

const Footer = (props) => {
  return (
    <div className="footerWrapper">
      <div><MdContactPhone></MdContactPhone>contact</div>
      <div><MdOutlineSupportAgent></MdOutlineSupportAgent>support</div>
      <div><FaGithub></FaGithub>github</div>
      <div><BsDiscord></BsDiscord>discord</div>
      <div><FaTwitter></FaTwitter>twitter</div>
      <div><FaFileContract></FaFileContract>terms</div>
      <div><MdSecurity></MdSecurity>security</div>
      <div><IoLockClosed></IoLockClosed>privacy</div>
    </div>
  )
};

export default Footer;
