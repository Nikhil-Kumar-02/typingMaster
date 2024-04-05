import './App.css';
import Header from './components/PageHeader/Index'
import Navbar from './components/PageNavbar/Index'
import Body from './components/PageBody/Index'
import Footer from './components/PageFooter/Index'
import TestResultDashBoard from './components/TestResult/Index'
import { useState } from 'react';

function App() {
  const [time , setTime] = useState(15);
  const [focus , setFocus] = useState(false);
  const [testOver , setTestOver] = useState(false);
  const [typingStats , setTypingStats] = useState({wordsTyped : 0 , incorrectWords : 0});

  return (
    <div className="App" onClick={()=>
      setFocus(false)
    }>

      <Header></Header>
      
      {
        testOver ? <TestResultDashBoard typingStats={typingStats} time={time}></TestResultDashBoard> : 
        <>
          <Navbar time={time} setTime={setTime}></Navbar>

          <div>
            <Body setTypingStats={setTypingStats} setTestOver={setTestOver} focus={focus} time={time} setFocus={setFocus}></Body>
          </div>
        </>
      }
      
      <Footer></Footer>
    </div>
  );
}

export default App;
