import React, {useState} from 'react';
import { WELCOME_TEXT } from '../../constants';
import {getUseContext} from '../context.utils';

import {bank as drumBank} from '../../banks/drumBank';

const DrumMachineContext = React.createContext({});

export function DrumMachineProvider({children}) {
  const [isPowerOn, setPower] = useState(false);
  const [displayText, setDisplayText] = useState(WELCOME_TEXT);
  const [soundBank, setSoundBank] = useState(drumBank);
  
  return (
    <DrumMachineContext.Provider 
      value={{
        isPowerOn,
        setPower,
        displayText,
        setDisplayText,
        soundBank,
        setSoundBank,
      }}
    >
      {children}
    </DrumMachineContext.Provider>
  );
}

export const useDrumMachineContext = getUseContext(DrumMachineContext, 'DrumMachineContext');
