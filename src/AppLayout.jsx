import React, { useEffect } from 'react';
import classnames from 'classnames';

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
    volume,
    setVolume,
  } = useDrumMachineContext();
  
  
  useEffect(() => {
    if (!isPowerOn) {
      setDisplayText(WELCOME_TEXT);
    }

    if (isPowerOn) {
      setDisplayText(soundBank.name);
    }
  }, [isPowerOn, soundBank, setDisplayText]);

  const onPowerClick = (e) => {
    setPower(!isPowerOn);
  };

  const onVolumeUpClick = (e) => {
    if (!isPowerOn) {
      return;
    }

    setVolume(volume + 5);
  }

  const onVolumeDownClick = (e) => {
    if (!isPowerOn) {
      return;
    }

    setVolume(volume - 5);
  }

  return (
    <div className={classes.app}>
      <div id="drum-machine" className={classes.drumMachine}>
        <div className={classes.machineHead}>
          <header className={classes.machineTitle}>FCC Drum machine</header>
          <div className={classes.controlsLine}>
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
            <button
              className={classnames(classes.powerButton, {[classes.powerButtonOn]: isPowerOn})}
              onClick={onPowerClick}
            ><i className="fas fa-power-off" /></button>
          </div>
        </div>
        <div className={classes.controlsContainer}>
          <PadContainer />
          <div className={classes.volumeContainer}>
            <button
              className={classnames(classes.controlBtn, {
                [classes.controlBtnPowerOn]: isPowerOn,
              })}
              onClick={onVolumeUpClick}
            ><i className="fas fa-volume-up" /></button>
            <button
              className={classnames(classes.controlBtn, {
                [classes.controlBtnPowerOn]: isPowerOn,
              })}
              onClick={onVolumeDownClick}
            ><i className="fas fa-volume-down" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
