import './App.css';
import Header from './components/PageHeader/Index';
import Navbar from './components/PageNavbar/Index';
import Body from './components/PageBody/Index';
import Footer from './components/PageFooter/Index';
import TestResultDashBoard from './components/TestResult/Index';
import { useState, useEffect } from 'react';
import { FaLock } from "react-icons/fa";

function App() {
  const [time, setTime] = useState(15);
  const [focus, setFocus] = useState(false);
  const [testOver, setTestOver] = useState(false);
  const [typingStats, setTypingStats] = useState({ wordsTyped: 0, incorrectWords: 0 });
  const [charSpeed, setCharSpeed] = useState([]);
  const [capsLockOn, setCapsLockOn] = useState(false); 

  useEffect(() => {

    const handleKeyPress = (event) => {
      if (event.getModifierState('CapsLock')) {
        setCapsLockOn(true);
      } else {
        setCapsLockOn(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  
  return (
    <div className="App" onClick={() => setFocus(false)}>
      {/* Conditionally render the Caps Lock warning box */}
      {capsLockOn && (
        <div className='capsLockBox'>
          <FaLock></FaLock> Caps Lock
        </div>
      )}

      <Header setTestOver={setTestOver}></Header>

      {testOver ? (
        <TestResultDashBoard charSpeed={charSpeed} typingStats={typingStats} time={time}></TestResultDashBoard>
      ) : (
        <>
          <Navbar time={time} setTime={setTime}></Navbar>

          <div>
            <Body setCharSpeed={setCharSpeed} setTypingStats={setTypingStats} setTestOver={setTestOver} focus={focus} time={time} setFocus={setFocus}></Body>
          </div>
        </>
      )}

      <Footer></Footer>
    </div>
  );
}

export default App;
