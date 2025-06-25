import './App.css';
import Footer from './components/footer';
import NavBar from './components/navBar';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {

  
  return (
      <div className="App">
        <NavBar/>
        <Catalog/>
        <Footer/>
      </div>
    
  );
}

export default App
