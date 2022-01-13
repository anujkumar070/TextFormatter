import React,{useState} from 'react'
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {

  const [mode,setMode] = useState('light');
  const toggle = () =>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      
      console.log('toggle called mode is set to dark');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      
      console.log('toggle called mode is set to light');
    }
    console.log('heloo');
  }
    return (
    <>
    <Navbar title="TextUtil" mode={mode} toggleMode={toggle}/>
    <div className="container my-4">
     <TextForm heading="Enter Your Text Here"  mode={mode} toggleMode={toggle}/> 
     {/*<About/>*/}
      
    </div>
    </>
  );
}

export default App;
