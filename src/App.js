
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtil"/>
    <div className="container my-4">
     { /*<TextForm heading="Enter Your Text Here"/> */}
     <About/>
      
    </div>
    </>
  );
}

export default App;
