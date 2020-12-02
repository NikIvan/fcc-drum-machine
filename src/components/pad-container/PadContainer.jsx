import Pad from '../pad';

import classes from './PadContainer.module.css';

/**
 * 
 * TODO: Align pads 3x3 
 */
function PadContainer(props) {
  const {drumBank, isPowerOn} = props;
  
  return (
    <div>
      <div className={classes.padLine}>
        <Pad
          id='Q'
          keyCode={81}
          data={drumBank[0]}
          isPowerOn={isPowerOn}
        />
        <Pad
          id='W'
          keyCode={87}
          data={drumBank[1]}
          isPowerOn={isPowerOn}
        />
        <Pad
          id='E'
          keyCode={69}
          data={drumBank[2]}
          isPowerOn={isPowerOn}
        />
      </div>
      <div className={classes.padLine}>
        <Pad
          id='A'
          keyCode={65}
          data={drumBank[3]}
          isPowerOn={isPowerOn}
        />
        <Pad
          id='S'
          keyCode={83}
          data={drumBank[4]}
          isPowerOn={isPowerOn}
        />
        <Pad
          id='D'
          keyCode={68}
          data={drumBank[5]}
          isPowerOn={isPowerOn}
        />
      </div>
      <div className={classes.padLine}>
        <Pad
          id='Z'
          keyCode={90}
          data={drumBank[6]}
          isPowerOn={isPowerOn}
        />
        <Pad
          id='X'
          keyCode={88}
          data={drumBank[7]}
          isPowerOn={isPowerOn}
        />
        <Pad
          id='C'
          keyCode={67}
          data={drumBank[8]}
          isPowerOn={isPowerOn}
        />
      </div>
    </div>
  );
}

export default PadContainer;
