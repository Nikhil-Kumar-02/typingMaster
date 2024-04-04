import './App.css';
import Header from './components/PageHeader/Index'
import Navbar from './components/PageNavbar/Index'
import Body from './components/PageBody/Index'
import Footer from './components/PageFooter/Index'
import { useState } from 'react';

function App() {
  const [focus , setFocus] = useState(true);
  return (
    <div className="App" onClick={()=>setFocus(false)}>

      <Header></Header>
      <Navbar></Navbar>

      <div onClick={(e)=>{
        e.stopPropagation()
        setFocus(true)
      }}>
        <Body focus={focus}></Body>
      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
