import { useState } from 'react';
import './App.css';
import CafeDeAlturaAPI from './Components/CafeDeAlturaAPI';
// import TimerFour from './Components/TimerFour';
// import TimerThree from './Components/TimerThree';
// import Counter from './Components/Counter';
// import Timer from './Components/Timer';
// import TimerTwo from './Components/TimerTwo';

function App() {

  // const [show, setShow] = useState(true)

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Timer/> */}
      {/* <TimerTwo /> */}
      {/* {showThree && <TimerThree />} */}
{/* {show && <TimerFour/>} */}
      {/* <button onClick={() => setShow(!show)}>Show timer</button> */}
      <CafeDeAlturaAPI/>
    </div>
  );
}

export default App;
