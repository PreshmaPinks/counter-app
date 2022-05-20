import { useState } from 'react';
import './App.css';

function App() {
  const [displayVal, setDisplayVal]=useState(0);
  return (
    <div className="App">
    <div className="counter-container">
      <h5>Counter App</h5>
      <div className='display'>{displayVal}</div>
      <div>
        <button onClick={()=>{setDisplayVal(displayVal+1)}}>+</button>
        <button disabled={displayVal===0} onClick={()=>{setDisplayVal(displayVal-1)}}>-</button>
        <button disabled={displayVal===0} onClick={()=>{setDisplayVal(0)}}>Reset</button>
      </div>
    </div>
    </div>
  );  
}

export default App;
