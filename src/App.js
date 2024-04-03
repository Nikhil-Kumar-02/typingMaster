import './App.css';
import Header from './components/PageHeader/Index'
import Navbar from './components/PageNavbar/Index'
import Body from './components/PageBody/Index'
import Footer from './components/PageFooter/Index'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
