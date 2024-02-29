import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden w-full h-screen">
       <Navbar/>
       <Home />
      <Footer />
    </div>
  );
}

export default App;
