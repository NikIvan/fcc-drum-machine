import Pad from '../pad';

import classes from './PadContainer.module.css';

/**
 * 
 * TODO: Align pads 3x3 
 */
function PadContainer() {
  return (
    <div className={classes.padsContainer}>
      <div className={classes.padLine}>
        <Pad
          id='Q'
          keyCode={81}
          index={0}
        />
        <Pad
          id='W'
          keyCode={87}
          index={1}
        />
        <Pad
          id='E'
          keyCode={69}
          index={2}
        />
      </div>
      <div className={classes.padLine}>
        <Pad
          id='A'
          keyCode={65}
          index={3}
        />
        <Pad
          id='S'
          keyCode={83}
          index={4}
        />
        <Pad
          id='D'
          keyCode={68}
          index={5}
        />
      </div>
      <div className={classes.padLine}>
        <Pad
          id='Z'
          keyCode={90}
          index={6}
        />
        <Pad
          id='X'
          keyCode={88}
          index={7}
        />
        <Pad
          id='C'
          keyCode={67}
          index={8}
        />
      </div>
    </div>
  );
}

export default PadContainer;
