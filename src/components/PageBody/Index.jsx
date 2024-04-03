import React, { useEffect, useRef, useState } from "react"
import './index.css'
import { TbMinusVertical } from "react-icons/tb";

const Body = (props) => {

  const inputRef = useRef();

  const text = "With this tool you can delete all punctuation from the given text Punctuation is a set of conventional signs for easing reading and understanding of the written text The most commonly used group of characters are a comma  semicolon  colon  period  exclamation mark  question mark  dash  and brackets There are also other typographic marks such as an ampersand  asterisk  at sign  percent  and many more The tool finds and removes all such marks However if you want to preserve any of the punctuation marks unchanged you can retain them in the text by specifying them in the option for ignored characters For example if you enter the symbol  in the option the sentence structure will remain unchanged If you input several symbols like  then the text will preserve periods commas and semicolons in their original positions Textabulous";

  let renderedText = text.substring(0,248);

  const [index , setIndex] = useState(0);

  function textInputHandler(e){
    // console.log(e);
    if(renderedText[index] === e.key){
      console.log("char matched")
      setIndex(p => p+1);
    }
    else if(e.key === "Backspace"){
      setIndex(p => p-1);
    }
    else{
      if(e.keyCode !== 16)
        setIndex(p => p+1);
      console.log("char did not match");
    }
  }

  useEffect(()=>{
    inputRef.current.focus();
  },[inputRef.current])

  return (
    <div className="bodyWrapper">
      <div>
      {/* <TbMinusVertical color="yellow"/> */}
        <input type="text" onKeyDown={textInputHandler} ref={inputRef}></input>
        {renderedText}
      </div>
    </div>
  )
};

export default Body;
