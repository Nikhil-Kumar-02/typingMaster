import React from "react"
import './index.css'

const TestResultDashBoard = ({typingStats , time}) => {
  console.log(typingStats.wordsTyped-typingStats.incorrectWords);
  return (
    <div className="dashBoardWrapper">
      <div>
        <h2>WPM</h2>
        <h1>{parseInt((typingStats.wordsTyped-typingStats.incorrectWords)/time)*60/5}</h1>
        <h2>acc</h2>
        <h1>{parseInt((typingStats.wordsTyped-typingStats.incorrectWords)*100/typingStats.wordsTyped)}%</h1>
      </div>
      <div>
        graph
      </div>
    </div>
  )
};
export default TestResultDashBoard;
