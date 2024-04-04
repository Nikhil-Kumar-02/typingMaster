import './App.css';
import Header from './components/PageHeader/Index'
import Navbar from './components/PageNavbar/Index'
import Body from './components/PageBody/Index'
import Footer from './components/PageFooter/Index'
import { useState } from 'react';

function App() {
  const [focus , setFocus] = useState(false);
  const [time , setTime] = useState(15);
  return (
    <div className="App" onClick={()=>setFocus(false)}>

      <Header></Header>
      <Navbar time={time} setTime={setTime}></Navbar>

      <div onClick={(e)=>{
        e.stopPropagation()
        setFocus(true)
      }}>
        <Body focus={focus} time={time} setFocus={setFocus} setTime={setTime}></Body>
      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
