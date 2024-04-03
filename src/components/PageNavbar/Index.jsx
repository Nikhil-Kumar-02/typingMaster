import React, { useState } from "react"
import './index.css'
import { PiHashStraightBold } from "react-icons/pi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { TbLetterA } from "react-icons/tb";
import { FaQuoteLeft } from "react-icons/fa6";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { TbMinusVertical } from "react-icons/tb";

const Navbar = (props) => {
  function invokeRefrence(e){
    console.log(e.target);
    e.target.className = "active";
  }

  const [time , setTime] = useState(15);

  return (
    <div className="navbarContainer">
      <div>
          <div onClick={invokeRefrence}>@ punctuation</div>
          <div onClick={invokeRefrence}><PiHashStraightBold /> numbers</div>
          <div onClick={invokeRefrence}><MdOutlineAccessTimeFilled/> time</div>
          <div onClick={invokeRefrence}><TbMinusVertical color="grey"></TbMinusVertical></div>
          <div onClick={invokeRefrence}><TbLetterA/> words</div>
          <div onClick={invokeRefrence}><FaQuoteLeft/>quote</div>
          <div onClick={invokeRefrence}><HiMiniWrenchScrewdriver/>custom</div>
          <div onClick={invokeRefrence}><TbMinusVertical color="grey"></TbMinusVertical></div>
          <div onClick={() => setTime(15)} className={time===15 ? "active" : ""}>15</div>
          <div onClick={() => setTime(30)} className={time===30 ? "active" : ""}>30</div>
          <div onClick={() => setTime(45)} className={time===45 ? "active" : ""}>45</div>
          <div onClick={() => setTime(60)} className={time===60 ? "active" : ""}>60</div>
      </div>
    </div>
  )
};

export default Navbar;
