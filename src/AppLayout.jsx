import React, { useEffect } from 'react';

import PadContainer from './components/pad-container';

import classes from './AppLayout.module.css';
import { useDrumMachineContext } from './contexts/DrumMachineContext';
import { WELCOME_TEXT } from './constants';

const powerOnDisplayOverlayStyle = {
  backgroundColor: 'rgba(157, 188, 38, 0.6)',
  boxShadow: '0 0 6px rgba(157, 188, 38, .6)',
};

const powerOnDisplayStyle = {
  color: 'black',
};

function AppLayout() {
  const {
    isPowerOn, 
    setPower, 
    displayText, 
    setDisplayText, 
    soundBank,
  } = useDrumMachineContext();
  
  
  useEffect(() => {
    if (!isPowerOn) {
      setDisplayText(WELCOME_TEXT);
    }

    if (isPowerOn) {
      setDisplayText(soundBank.name);
    }
  }, [isPowerOn, soundBank, setDisplayText]);

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
          <PadContainer />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
