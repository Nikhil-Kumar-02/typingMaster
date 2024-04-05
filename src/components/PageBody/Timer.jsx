import React, { useEffect, useState } from "react"
import './Timer.css'

const Timer = ({time , setFocus , inputRef , forceUpdate , setTestOver}) => {

  const [timer , setTimer] = useState(0);

  useEffect(()=>{
    setTimer(time);
  } , [forceUpdate])

  useEffect(()=>{
    const intervalId = setInterval(() => {
      setTimer((p) => {
        if(p <= 0){
          clearInterval(intervalId);
          inputRef.current.blur();
          setFocus(false)
          setTestOver(true)
          return 0;
        }
        return p-1
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  } , [time])

  return (
    <div style={{fontSize : "1.5rem" , color : "yellow" , textAlign : "left" , width : '78%'}}>
      {timer}
    </div>
  )
};

export default Timer;
