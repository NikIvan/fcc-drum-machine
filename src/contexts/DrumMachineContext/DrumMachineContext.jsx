import React, {useState, useEffect} from 'react';
import {WELCOME_TEXT} from '../../constants';
import {getUseContext} from '../context.utils';

import {bank as drumBank} from '../../banks/drumBank';

const DrumMachineContext = React.createContext({});

function useVolumeControl(initialState) {
  const [volume, setVolume] = useState(initialState);

  function inputVolume(value) {
    if (value > 100) {
      setVolume(100);
    } else if (value < 0) {
      setVolume(0);
    } else {
      setVolume(value);
    }
  }

  return [volume, inputVolume];
}

export function DrumMachineProvider({children}) {
  const [isPowerOn, setPower] = useState(false);
  const [displayText, setDisplayText] = useState(WELCOME_TEXT);
  const [soundBank, setSoundBank] = useState(drumBank);
  const [volume, setVolume] = useVolumeControl(50);

  useEffect(() => {
    setDisplayText(`Vol: ${volume}%`);
  }, [volume, setDisplayText]);
  
  return (
    <DrumMachineContext.Provider 
      value={{
        isPowerOn,
        setPower,
        displayText,
        setDisplayText,
        soundBank,
        setSoundBank,
        volume,
        setVolume,
      }}
    >
      {children}
    </DrumMachineContext.Provider>
  );
}

export const useDrumMachineContext = getUseContext(DrumMachineContext, 'DrumMachineContext');
