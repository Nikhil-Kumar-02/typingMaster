import React from "react"
import './index.css'

const TestResultDashBoard = ({typingStats , time , charSpeed}) => {
  console.log(typingStats.wordsTyped-typingStats.incorrectWords);
  const w = 60/charSpeed.length;

  return (
    <div className="dashBoardWrapper">
      <div>
        <h2>WPM</h2>
        {/* <h1>{parseInt((typingStats.wordsTyped-typingStats.incorrectWords)/time)*60/5}</h1> */}
        <h1>{parseInt(((typingStats.wordsTyped-typingStats.incorrectWords)*60)/(5*time))}</h1>
        <h2>acc</h2>
        <h1>
        {
          typingStats.wordsTyped === 0 ? 0 : (
            parseInt((typingStats.wordsTyped-typingStats.incorrectWords)*100/typingStats.wordsTyped)
          )
        }
        %</h1>
      </div>

      <div>
        <p>100</p>
        <p>90</p>
        <p>80</p>
        <p>70</p>
        <p>60</p>
        <p>50</p>
        <p>40</p>
        <p>30</p>
        <p>20</p>
        <p>10</p>
        <p>0</p>
      </div>
      
      <div>
      {
        charSpeed.map((speed) => (
          <div
            style={{
              height:
                speed.end - speed.start === 0
                  ? "1px"
                  : `${60 / (((speed.end - speed.start) / 1000) * 5)}px`,
              width: `${w}rem`,
            }}
          ></div>
        ))
      }
      </div>
    </div>
  )
};
export default TestResultDashBoard;
