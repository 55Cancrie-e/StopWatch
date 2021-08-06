import React, { useState } from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';
import './App.css';

function App() {
  let [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0});
  let [interv, setInterv] = useState();
  let [status, setStatus] = useState(0);


  let start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  let run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH})
  }

  let stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  let reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0})
  }
  let resume = () => start();

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time}/>
          <BtnComponent status = {status} resume={resume} stop={stop} reset={reset} start={start}/>
        </div>
      </div>
    </div>
  );
}

export default App;
