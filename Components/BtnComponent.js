import React from 'react';
import '../App.css';

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0) ?  
      <button onClick={props.start} className="stopwatch-btn stopwatch-btn-gre">Start</button> : ""
      }
      {(props.status === 1) ?  
      <div>
      <button onClick={props.stop} className="stopwatch-btn stopwatch-btn-red">Stop</button> 
      <button onClick={props.reset} className="stopwatch-btn stopwatch-btn-yel">Reset</button> 
      </div> : ""
      }
      {(props.status === 2) ?  
      <div>
      <button onClick={props.resume} className="stopwatch-btn stopwatch-btn-gre">Resume</button> 
      <button onClick={props.reset} className="stopwatch-btn stopwatch-btn-yel">Reset</button> 
      </div> : ""
      }
    </div>
  );
}

export default BtnComponent;
