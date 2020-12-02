import React, {useState, useContext} from 'react';

import {getTextWidth} from './utils/stringUtils';
import {drumBank} from './banks/drumBank';

import PadContainer from './components/pad-container';

import classes from './App.module.css';

const powerOnDisplayOverlayStyle = {
  backgroundColor: 'rgba(157, 188, 38, 0.6)',
  boxShadow: '0 0 6px rgba(157, 188, 38, .6)',
};

const powerOnDisplayStyle = {
  color: 'black',
};

// const font = 'normal 16px "Press Start 2P"';
const welcomeText = 'Welcome!';

// TODO: create contexts for global state to use in children components
const powerContext = React.createContext();
const displayContext = React.createContext();

// console.log(getTextWidth(welcomeText, font));

function App() {
  const [isPowerOn, setPower] = useState(false);
  const [displayText, setDisplayText] = useState(welcomeText);
  
  const onClick = (e) => {
    setPower(!isPowerOn);
  };
  
  return (
    <div className={classes.app}>
      <div id="drum-machine" className={classes.drumMachine}>
        <div className={classes.machineHead}>
          <header className={classes.machineTitle}>FCC Drum machine</header>
          <div className={classes.displayContainer}>
            <div 
              className={classes.display}
              id="display"
              style={isPowerOn ? powerOnDisplayStyle : {}}
            >
              {isPowerOn && displayText}
            </div>
            <div
              className={classes.displayOverlay}
              style={isPowerOn ? powerOnDisplayOverlayStyle : {}}
            />
          </div>
          <button onClick={onClick}>Power</button>
        </div>
        <div className={classes.controlsContainer}>
          <PadContainer
            drumBank={drumBank}
            isPowerOn={isPowerOn}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
