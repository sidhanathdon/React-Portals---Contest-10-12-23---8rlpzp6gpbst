import React ,{useState, useRef} from 'react'
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function 
const App = () => {
  const [inputValue,setInputValue]=useState('');
  const [textArea,setTextArea]=useState('');
  const handleInput=(e)=>{
    setInputValue(e.target.value);
  };
  const handleButton=()=>{
    setTextArea(inputValue)
  };
  return (
    
    <div id="main">
      <input id="input" value={inputValue} onChange={handleInput}></input><br/>
      <PortalButton buttonclick={handleButton} /><br/>
      <PortalTextArea value={textArea}/>
    </div>
  )
}


export default App;
