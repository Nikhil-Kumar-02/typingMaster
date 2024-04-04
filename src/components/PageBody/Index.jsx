import React, { useEffect, useRef, useState } from "react"
import './index.css'
import { TbMinusVertical } from "react-icons/tb";
import Timer from "./Timer";
import { MdOutlineRefresh } from "react-icons/md";
import { PiCursorClickFill } from "react-icons/pi";

const Body = ({focus , time , setFocus , setTime}) => {

  const inputRef = useRef();

  let text = "With this tool you can delete all punctuation from the given text Punctuation is a set of conventional signs for easing reading and understanding of the written text The most commonly used group of characters are a comma  semicolon  colon  period  exclamation mark  question mark  dash  and brackets There are also other typographic marks such as an ampersand  asterisk  at sign  percent  and many more The tool finds and removes all such marks However if you want to preserve any of the punctuation marks unchanged you can retain them in the text by specifying them in the option for ignored characters For example if you enter the symbol  in the option the sentence structure will remain unchanged If you input several symbols like  then the text will preserve periods commas and semicolons in their original positions Textabulous";

  const [leftText , setLeftText] = useState(text.substring(0,248))
  const [typedText , setTypedText] = useState('');
  const [forceUpdate, setForceUpdate] = useState(false);

  function resetTypedParagraph(){
    setLeftText(text.substring(0,248));
    setTypedText('');
    inputRef.current.focus()
    setForceUpdate(prev => !prev);
  }

  useEffect(()=>{
    if(!focus){
      resetTypedParagraph();
    }
  },[focus])

  const [index , setIndex] = useState(0);

  function textInputHandler(e){
    // console.log(e);
    if(leftText[0] === e.key){
      let newTypedText = typedText + leftText[0];
      setTypedText(newTypedText);

      setLeftText(p => p.substring(1))

      setIndex(p => p+1);
    }
    else if(e.key === "Backspace"){
      setIndex(p => p-1);
    }
    else{
      if(e.keyCode !== 16)
        setIndex(p => p+1);
    }
  }

  return (
    <div className="bodyWrapper">
      {
        focus ? <Timer forceUpdate={forceUpdate} time={time} setFocus={setFocus} inputRef={inputRef}></Timer> : <div className="focusMessage"><PiCursorClickFill/>Click Here To focus Again</div>
      }
      <div className={focus ? "bodyContentWrapper" : "bodyContentWrapper blurryBackground"}>
        <div onClick={
          (e) => {
            e.stopPropagation()
            setFocus(true)
            inputRef.current.focus()
          }
        }>
          <input type="text" onKeyDown={textInputHandler} ref={inputRef}></input>
          <span style={{color : "yellow", textDecoration : "underline"}}>{typedText}</span>
          <span>{leftText}</span>
        </div>
      </div>

      <div onClick={(e) => {
        e.stopPropagation()
        resetTypedParagraph()
      }}>
        <MdOutlineRefresh size={20}></MdOutlineRefresh>
      </div>
    </div>
  )
};

export default Body;
