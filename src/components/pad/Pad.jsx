import classnames from 'classnames';
import {useEffect, useState, useRef} from 'react';
import { useDrumMachineContext } from '../../contexts/DrumMachineContext';

import './Pad.css';

function playSound(audio) {
  audio.currentTime = 0;
  audio.play();
}

/**
 * TODO: Get isPowerOn from context
 * TODO: Send active pad name to display
 */
function Pad(props) {
  const {isPowerOn, setDisplayText, soundBank} = useDrumMachineContext();
  const { id, keyCode, index} = props;
  const { src, name } = soundBank.data[index];

  const padRef = useRef();
  const audioRef = useRef();

  const [isPadPressed, setIsPadPressed] = useState(false);
  const [padClassName, setPadClassName] = useState('drumPad');

  useEffect(() => {
    const pad = padRef.current;
    const audio = audioRef.current;
    let isKeyPressed = false;

    setIsPadPressed(false);

    function onPadDown(e) {
      setIsPadPressed(true);

      if (!isPowerOn) {
        return;
      }

      setDisplayText(name);
      playSound(audio);
    }

    function onPadUp(e) {
      setIsPadPressed(false);
      
      if (!isPowerOn) { 
        return;
      }
    }

    function onKeyDown(e) {
      if (e.keyCode !== keyCode || isKeyPressed) {
        return;
      }

      isKeyPressed = true;
      onPadDown(e);
    }

    function onKeyUp(e) {
      if (e.keyCode !== keyCode) {
        return;
      }
      
      isKeyPressed = false;
      onPadUp(e);
    }

    pad.addEventListener('mousedown', onPadDown);
    pad.addEventListener('mouseup', onPadUp);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    
    return () => {
      pad.removeEventListener('mousedown', onPadDown);
      pad.removeEventListener('mouseup', onPadUp);
      document.removeEventListener('keydown', onKeyDown);
      document.addEventListener('keyup', onKeyUp);
    }
  }, [id, isPowerOn, keyCode, setIsPadPressed, setDisplayText, name]);

  useEffect(() => {
    setPadClassName(classnames('drum-pad', {
      'drum-pad-powerOn': isPowerOn,
      'drum-pad-active': isPadPressed,
      'drum-pad-powerOn-active': isPadPressed && isPowerOn,
    }));
  }, [isPowerOn, isPadPressed, setPadClassName]);

  return (
    <div 
      id={`${id}-pad`} 
      className={padClassName}
      ref={padRef}
    >
      <audio 
        id={id} 
        className="clip" 
        src={src}
        ref={audioRef}
      />
      {id}
    </div>
  );
}

export default Pad;
