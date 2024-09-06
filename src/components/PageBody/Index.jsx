import React, { useEffect, useRef, useState } from "react"
import './index.css'
import { TbMinusVertical } from "react-icons/tb";
import Timer from "./Timer";
import { MdOutlineRefresh } from "react-icons/md";
import { PiCursorClickFill } from "react-icons/pi";

const Body = ({focus , time , setFocus , setTestOver , setTypingStats , setCharSpeed}) => {

  const inputRef = useRef();
  const documentRef = useRef();

  let text = "With this tool you can delete all punctuation from the given text Punctuation is a set of conventional signs for easing reading and understanding of the written text The most commonly used group of characters are a comma  semicolon  colon  period  exclamation mark  question mark  dash  and brackets There are also other typographic marks such as an ampersand  asterisk  at sign  percent  and many more The tool finds and removes all such marks However if you want to preserve any of the punctuation marks unchanged you can retain them in the text by specifying them in the option for ignored characters For example if you enter the symbol  in the option the sentence structure will remain unchanged If you input several symbols like  then the text will preserve periods commas and semicolons in their original positions Textabulous";

  const [leftText , setLeftText] = useState(text.substring(0,248))
  const [typedText , setTypedText] = useState('');
  const [forceUpdate, setForceUpdate] = useState(false);

  function resetTypedParagraph(){
    setLeftText(text.substring(0,248));
    setTypedText('');
    documentRef.current.innerHTML = '';
    inputRef.current.focus();
    setForceUpdate(prev => !prev);
  }

  useEffect(()=>{
    if(!focus){
      resetTypedParagraph();
    }
    else{
      //this will only be executed when we foucs on the paragraph
      setCharSpeed([{start : Date.now() , end : Date.now()}]);
    }
  },[focus])


  function attachHTMLtag(letter , className){
    const element = document.createElement('span');
    element.className = className;
    element.innerText = letter;
    documentRef.current.appendChild(element);
  }

  function trackTypeSpeed(){
    let charIndex = typedText.length;
    setCharSpeed((prev) => {
      let charSpeedCpy = [...prev];
      charSpeedCpy[charIndex].end = Date.now();
      if(charIndex+1 === charSpeedCpy.length){
        charSpeedCpy.push({start : Date.now() , end : Date.now()});
      }
      return charSpeedCpy;
    })
  }
  
  function textInputHandler(e){
    // console.log(e);
    if(!focus)
      return;

    if(leftText[0] === e.key){
      setTypingStats((p) => {
        return {...p , wordsTyped : p.wordsTyped+1}
      })

      trackTypeSpeed();
      
      let newTypedText = typedText + leftText[0];
      setTypedText(newTypedText);
      attachHTMLtag(leftText[0] , 'correct');
      setLeftText(p => p.substring(1))
    }
    else if(e.key === "Backspace"){
      if(typedText.length-1 >= 0){
        let lastCharacterIndex = typedText.length-1;
        let lastCharacter = typedText[lastCharacterIndex];

        const newTypedText = typedText.substring(0,lastCharacterIndex);
        setTypedText(newTypedText);

        const newLeftText = lastCharacter + leftText;
        setLeftText(newLeftText);

        const lastChild = documentRef.current.lastChild;
        if (lastChild) {
          documentRef.current.removeChild(lastChild);
        } 
      }
    }
    else{
      if(e.keyCode !== 16&&e.keyCode !== 17&&e.keyCode !== 18&&e.keyCode !== 19&&e.keyCode !== 20){
        //when you entered a wrong character

        trackTypeSpeed();
        
        let newTypedText = typedText + leftText[0];
        setTypedText(newTypedText);
        attachHTMLtag(leftText[0] , 'incorrect');
        setLeftText(p => p.substring(1));
        setTypingStats((p) => {
          return {wordsTyped : p.wordsTyped+1, incorrectWords : p.incorrectWords+1}
        })
      }
    }
  }

  return (
    <div className="bodyWrapper">
      {
        focus ? <Timer setTestOver={setTestOver} forceUpdate={forceUpdate} time={time} setFocus={setFocus} inputRef={inputRef}></Timer> : <div className="focusMessage"><PiCursorClickFill/>Click Here To focus Again</div>
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
          <span ref={documentRef}></span>
          <span className="cursorContainer"><span className="currentCursor">|</span>{leftText}</span>
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
