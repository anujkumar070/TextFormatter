
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtil"/>
    <div className="container my-4">
      <TextForm heading="Enter Your Text Here"/>
      
    </div>
    </>
  );
}

export default App;
