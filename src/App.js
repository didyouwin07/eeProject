import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [isSafe, setIsSafe] = useState(false)
  const [warningText, setWarningText] = useState('SAFE')

  useEffect(()=>{
    if(!isSafe){
      setWarningText('Fault')
    }
  },[isSafe])

  return (
  
      <div className='mainContainer' style={isSafe?{background: 'pink'}:{background: 'red'}}>
        <div className='heading'>Detection of faults in Power Systems</div>
        <div className={'warningWrapper'}>
          {<div className={isSafe ? '': 'blink'}> {warningText} </div>}
        </div>
      </div>
      
    
  );
}

export default App;
