import React, { useEffect, useState } from "react"
import './Timer.css'

const Timer = ({time}) => {
    const [timer , setTimer] = useState(time);
    useEffect(()=>{
        const intervalId = setInterval(() => {
            setTimer((p) => {
                if(p <= 0){
                    clearInterval(intervalId);
                    return 0;
                }
                return p-1
            });
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    } , [])
  return (
    <div style={{fontSize : "1.5rem" , color : "yellow" , textAlign : "left" , marginLeft : "8rem"}}>
      {timer}
    </div>
  )
};

export default Timer;
