import './App.css';
import Footer from './components/footer';
import NavBar from './components/navBar';
import Catalog from '../pages/catalog';
function App() {

  
  return (
      <div className="App">
        <NavBar/>
        <h1>Hello from REACT</h1>
        <Catalog/>

        <Footer/>
      </div>
    
  );
}

export default App
