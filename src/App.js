import './App.css';
import Header from './components/PageHeader/Index'
import Navbar from './components/PageNavbar/Index'
import Body from './components/PageBody/Index'
import Footer from './components/PageFooter/Index'
import TestResultDashBoard from './components/TestResult/Index'
import { useState } from 'react';

function App() {
  const [time , setTime] = useState(1);
  const [focus , setFocus] = useState(false);
  const [testOver , setTestOver] = useState(false);

  return (
    <div className="App" onClick={()=>
      setFocus(false)
    }>

      <Header></Header>
      
      {
        testOver ? <TestResultDashBoard></TestResultDashBoard> : 
        <>
          <Navbar time={time} setTime={setTime}></Navbar>

          <div>
            <Body setTestOver={setTestOver} focus={focus} time={time} setFocus={setFocus}></Body>
          </div>
        </>
      }
      
      <Footer></Footer>
    </div>
  );
}

export default App;
